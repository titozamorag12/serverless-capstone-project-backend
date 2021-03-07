export interface ExecutionItem {
  userId?: string;
  executionId: string;
  createdAt: string;
  name: string;
  browserName: string;
  headless: boolean;
  executionDate: string;
  done: boolean;
  attachmentUrl?: string;
}
