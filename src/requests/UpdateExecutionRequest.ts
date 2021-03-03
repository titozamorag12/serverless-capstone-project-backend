/**
 * Fields in a request to update a single execution item.
 */
export interface UpdateExecutionRequest {
  name: string;
  dueDate: string;
  done: boolean;
}
