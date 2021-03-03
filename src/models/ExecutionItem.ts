export interface ExecutionItem {
  userId?: string;
  executionId: string;
  createdAt: string;
  name: string;
  dueDate: string;
  done: boolean;
  attachmentUrl?: string;
}
