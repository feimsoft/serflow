import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import * as Long from 'long';
import { AppService } from './app.service';
import {
  IActivateJobsRequest,
  IActivateJobsResponse,
  ICompleteJobRequest,
  ICompleteJobResponse,
  ICreateProcessInstanceRequest,
  ICreateProcessInstanceResponse,
  IDeployProcessRequest,
  IDeployProcessResponse,
  IFailJobRequest,
  IFailJobResponse,
} from './gateway.interfaces';

@Controller()
export class GatewayController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('Gateway', 'CreateProcessInstance')
  createProcessInstance(
    data: ICreateProcessInstanceRequest,
    metadata: Metadata,
    call: ServerUnaryCall<
      ICreateProcessInstanceRequest,
      ICreateProcessInstanceResponse
    >,
  ): ICreateProcessInstanceResponse {
    return {
      bpmnProcessId: data.bpmnProcessId,
      processInstanceKey: Long.fromNumber(121212),
      processKey: Long.fromNumber(121212),
      version: 1,
    };
  }

  @GrpcMethod('Gateway', 'DeployProcess')
  deployProcess(
    data: IDeployProcessRequest,
    metadata: Metadata,
    call: ServerUnaryCall<IDeployProcessRequest, IDeployProcessResponse>,
  ): IDeployProcessResponse {
    console.dir(data);
    return {
      key: Long.fromNumber(121212),
      processs: [
        {
          version: 1,
          processKey: Long.fromNumber(121212),
          bpmnProcessId: 'test',
          resourceName: 'test',
        },
      ],
    };
  }

  @GrpcMethod('Gateway', 'ActivateJobs')
  activateJobs(
    data: IActivateJobsRequest,
    metadata: Metadata,
    call: ServerUnaryCall<IActivateJobsRequest, IActivateJobsResponse>,
  ): IActivateJobsResponse {
    return {
      jobs:
        data.type === 'date-now'
          ? [
              {
                key: Long.fromNumber(121212),
                bpmnProcessId: 'test',
                deadline: Long.fromNumber(0),
                elementId: 'test',
                elementInstanceKey: Long.fromNumber(121212),
                processDefinitionVersion: 1,
                processInstanceKey: Long.fromNumber(121212),
                processKey: Long.fromNumber(121212),
                retries: 0,
                type: 'date-now',
                worker: data.worker,
                variables: JSON.stringify({}),
                customHeaders: JSON.stringify({}),
              },
            ]
          : [],
    };
  }

  @GrpcMethod('Gateway', 'CompleteJob')
  completeJob(
    data: ICompleteJobRequest,
    metadata: Metadata,
    call: ServerUnaryCall<ICompleteJobRequest, ICompleteJobResponse>,
  ): ICompleteJobResponse {
    return {};
  }

  @GrpcMethod('Gateway', 'FailJob')
  failJob(
    data: IFailJobRequest,
    metadata: Metadata,
    call: ServerUnaryCall<IFailJobRequest, IFailJobResponse>,
  ): IFailJobResponse {
    return {};
  }
}
