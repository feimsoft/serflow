export interface ICreateProcessInstanceRequest {
  processKey: Long;
  bpmnProcessId: string;
  version: number;
  variables: string;
}

export interface ICreateProcessInstanceResponse {
  processKey: Long;
  bpmnProcessId: string;
  version: number;
  processInstanceKey: Long;
}

export interface IProcessMetadata {
  bpmnProcessId: string;
  version: number;
  processKey: Long;
  resourceName: string;
}

export interface IProcessRequestObject {
  name: string;
  definition: Buffer;
}

export interface IDeployProcessRequest {
  processs: IProcessRequestObject[];
}

export interface IDeployProcessResponse {
  key: Long;
  processs: IProcessMetadata[];
}

export interface IActivateJobsRequest {
  type: string;
  worker: string;
  timeout: Long;
  maxJobsToActivate: number;
  fetchVariable: string[];
  requestTimeout: Long;
}

export interface IActivatedJob {
  key: Long;
  type: string;
  processInstanceKey: Long;
  bpmnProcessId: string;
  processDefinitionVersion: number;
  processKey: Long;
  elementId: string;
  elementInstanceKey: Long;
  customHeaders: string;
  worker: string;
  retries: number;
  deadline: Long;
  variables: string;
}

export interface IActivateJobsResponse {
  jobs: IActivatedJob[];
}

export interface ICompleteJobRequest {
  jobKey: Long;
  variables: string;
}

export interface ICompleteJobResponse {}

export interface IFailJobRequest {
  jobKey: Long;
  retries: number;
  errorMessage: string;
}

export interface IFailJobResponse {}
