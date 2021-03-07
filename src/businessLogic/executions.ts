import * as uuid from "uuid";

import { ExecutionItem } from "../models/ExecutionItem";
import { ExecutionItemAccess } from "../dataLayer/executionsAccess";
import { CreateExecutionRequest } from "../requests/CreateExecutionRequest";
import { UpdateExecutionRequest } from "../requests/UpdateExecutionRequest";
import { parseUserId } from "../auth/utils";

const executionsAccess = new ExecutionItemAccess();

export async function getAllExecutionItems(
  jwtToken: string
): Promise<ExecutionItem[]> {
  const userId = parseUserId(jwtToken);
  return executionsAccess.getAllExecutionItems(userId);
}

export async function executionExists(executionId: String) {
  return executionsAccess.executionExists(executionId);
}

export async function createImage(executionId: String, imageId: String) {
  return executionsAccess.createImage(executionId, imageId);
}

export function getUploadUrl(executionId: String) {
  return executionsAccess.getUploadUrl(executionId);
}

export async function deleteExecutionItem(executionId: String) {
  return executionsAccess.deleteExecutionItem(executionId);
}

export async function createExecutionItem(
  CreateExecutionRequest: CreateExecutionRequest,
  jwtToken: string
): Promise<ExecutionItem> {
  const itemId = uuid.v4();
  const userId = parseUserId(jwtToken);

  return await executionsAccess.createExecutionItem({
    executionId: itemId,
    userId: userId,
    name: CreateExecutionRequest.name,
    browserName: CreateExecutionRequest.browserName,
    headless: CreateExecutionRequest.headless,
    executionDate: CreateExecutionRequest.executionDate,
    createdAt: new Date().toISOString(),
    done: false,
    attachmentUrl: "",
  });
}

export async function updateExecutionItem(
  executionId: string,
  UpdateExecutionRequest: UpdateExecutionRequest,
  jwtToken: string
) {
  const userId = parseUserId(jwtToken);

  return await executionsAccess.updateExecutionItem(executionId, {
    userId: userId,
    name: UpdateExecutionRequest.name,
    executionDate: UpdateExecutionRequest.executionDate,
    done: UpdateExecutionRequest.done,
  });
}
