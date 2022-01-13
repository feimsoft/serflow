import { IOMapping } from "./io-mapping";

export type WorkflowNodeStatus = "pending" | "active" | "failed" | "completed";

export interface WorkflowNodeInstance {
  key: number;
  id: string;
  type: string;
  status: WorkflowNodeStatus;
  ioMapping: IOMapping;
  headers: Record<string, string>;
  attributes: Record<string, string>;
}

export interface WorkflowInstance {
  workflowId: number;
  nodes: WorkflowNodeInstance[];
}
