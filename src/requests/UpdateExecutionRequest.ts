/**
 * Fields in a request to update a single execution item.
 */
export interface UpdateExecutionRequest {
  name: string;
  executionDate: string;
  done: boolean;
}
