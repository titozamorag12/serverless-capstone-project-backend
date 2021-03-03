import "source-map-support/register";

import {
  executionExists,
  createImage,
  getUploadUrl,
} from "../../businessLogic/executions";

import * as uuid from "uuid";
import * as express from "express";
import * as awsServerlessExpress from "aws-serverless-express";

const app = express();

app.post("/executions/:executionId/attachment", async (_req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Rquested-With, Content-Type, Accept"
  );

  const executionId = _req.params.executionId;
  const validExecutionId = await executionExists(executionId);

  if (!validExecutionId) {
    res.json({
      body: JSON.stringify({
        error: "QA Execution does not exist",
      }),
    });
    res.status(404).send();
  }

  const imageId = uuid.v4();
  const newItem = await createImage(executionId, imageId);

  const url = getUploadUrl(imageId);

  res.json({
    newItem: newItem,
    uploadUrl: url,
  });
  res.status(201).send();
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
