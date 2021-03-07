/**
 * Fields in a request to create a single execution item.
 */
export interface CreateExecutionRequest {
  name: string;
  browserName: string;
  headless: boolean;
  executionDate: string;
}
