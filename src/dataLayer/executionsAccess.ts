import * as AWS from "aws-sdk";
import * as AWSXRay from "aws-xray-sdk";

import { ExecutionItem } from "../models/ExecutionItem";
import { ExecutionUpdate } from "../models/ExecutionUpdate";

import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { createLogger } from "../utils/logger";

const XAWS = AWSXRay.captureAWS(AWS);
const logger = createLogger("executionsAccess");
const s3 = new XAWS.S3({
  signatureVersion: "v4",
});

export class ExecutionItemAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly ExecutionItemsTable = process.env.EXECUTIONS_TABLE,
    private readonly ExecutionItemsTableIndex = process.env
      .EXECUTIONS_TABLE_INDEX,
    private readonly imagesTable = process.env.IMAGES_TABLE,
    private readonly bucketName = process.env.IMAGES_S3_BUCKET,
    private readonly urlExpiration = process.env.SIGNED_URL_EXPIRATION
  ) {}

  async getAllExecutionItems(userId: string): Promise<ExecutionItem[]> {
    logger.info("Getting all ExecutionItems");

    const result = await this.docClient
      .query({
        TableName: this.ExecutionItemsTable,
        IndexName: this.ExecutionItemsTableIndex,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": userId,
        },
      })
      .promise();

    return result.Items as ExecutionItem[];
  }

  async executionExists(executionId: String) {
    const result = await this.docClient
      .get({
        TableName: this.ExecutionItemsTable,
        Key: {
          executionId: executionId,
        },
      })
      .promise();

    const exists = !!result.Item;
    logger.info("Check if execution exists", { result: exists });

    return exists;
  }

  async createImage(executionId: String, imageId: String) {
    const timestamp = new Date().toISOString();

    const newItem = {
      executionId,
      timestamp,
      imageId,
      imageUrl: `https://${this.bucketName}.s3.amazonaws.com/${imageId}`,
    };
    logger.info("Storing new item", { newItem: newItem });
    await this.docClient
      .put({
        TableName: this.imagesTable,
        Item: newItem,
      })
      .promise();

    await this.updateExecutionItemAttachment(executionId, newItem.imageUrl);

    return newItem;
  }

  getUploadUrl(imageId: String) {
    const signedUrl = s3.getSignedUrl("putObject", {
      Bucket: this.bucketName,
      Key: imageId,
      Expires: Number(this.urlExpiration),
    });

    logger.info("Getting upload (S3) URL", { signedUrl: signedUrl });

    return signedUrl;
  }

  async createExecutionItem(
    ExecutionItem: ExecutionItem
  ): Promise<ExecutionItem> {
    await this.docClient
      .put({
        TableName: this.ExecutionItemsTable,
        Item: ExecutionItem,
      })
      .promise();

    logger.info("Creating execution item", { ExecutionItem: ExecutionItem });
    return ExecutionItem;
  }

  async updateExecutionItemAttachment(
    executionId: String,
    attachmentUrl: String
  ) {
    logger.info("Update execution attachamentUrl", {
      executionId: executionId,
      attachment: attachmentUrl,
    });
    await this.docClient
      .update({
        TableName: this.ExecutionItemsTable,
        Key: {
          executionId: executionId,
        },
        UpdateExpression: "set attachmentUrl = :attachmentUrl",
        ExpressionAttributeValues: {
          ":attachmentUrl": attachmentUrl,
        },
      })
      .promise();
  }

  async updateExecutionItem(
    executionId: string,
    ExecutionUpdate: ExecutionUpdate
  ) {
    logger.info("Updating execution item: ", {
      ExecutionUpdate: ExecutionUpdate,
    });
    await this.docClient
      .update({
        TableName: this.ExecutionItemsTable,
        Key: {
          executionId: executionId,
        },
        UpdateExpression:
          "set #name = :name, done = :done, dueDate = :dueDate, userId = :userId",
        ExpressionAttributeNames: {
          "#name": "name",
        },
        ExpressionAttributeValues: {
          ":name": ExecutionUpdate.name,
          ":done": ExecutionUpdate.done,
          ":dueDate": ExecutionUpdate.dueDate,
          ":userId": ExecutionUpdate.userId,
        },
      })
      .promise();
  }

  async deleteExecutionItem(executionId: String) {
    logger.info("Deleting execution item", { executionId: executionId });
    await this.docClient
      .delete({
        TableName: this.ExecutionItemsTable,
        Key: {
          executionId: executionId,
        },
      })
      .promise();
  }
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    logger.info("Creating a local DynamoDB instance");
    return new XAWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000",
    });
  }

  return new XAWS.DynamoDB.DocumentClient();
}
