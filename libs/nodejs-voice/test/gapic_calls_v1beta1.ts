// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as callsModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1beta1.CallsClient', () => {
  it('has servicePath', () => {
    const servicePath = callsModule.v1beta1.CallsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = callsModule.v1beta1.CallsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = callsModule.v1beta1.CallsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new callsModule.v1beta1.CallsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new callsModule.v1beta1.CallsClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new callsModule.v1beta1.CallsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.callsStub, undefined);
    await client.initialize();
    assert(client.callsStub);
  });

  it('has close method', () => {
    const client = new callsModule.v1beta1.CallsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new callsModule.v1beta1.CallsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new callsModule.v1beta1.CallsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('createCall', () => {
    it('invokes createCall without error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.CreateCallRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.Call()
      );
      client.innerApiCalls.createCall = stubSimpleCall(expectedResponse);
      const [response] = await client.createCall(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createCall without error using callback', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.CreateCallRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.Call()
      );
      client.innerApiCalls.createCall =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createCall(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.voice.v1beta1.ICall | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createCall with error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.CreateCallRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createCall = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createCall(request), expectedError);
      assert(
        (client.innerApiCalls.createCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getCall', () => {
    it('invokes getCall without error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetCallRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.Call()
      );
      client.innerApiCalls.getCall = stubSimpleCall(expectedResponse);
      const [response] = await client.getCall(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getCall without error using callback', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetCallRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.Call()
      );
      client.innerApiCalls.getCall =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getCall(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.voice.v1beta1.ICall | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getCall with error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetCallRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getCall = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.getCall(request), expectedError);
      assert(
        (client.innerApiCalls.getCall as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listCalls', () => {
    it('invokes listCalls without error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
      ];
      client.innerApiCalls.listCalls = stubSimpleCall(expectedResponse);
      const [response] = await client.listCalls(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listCalls as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listCalls without error using callback', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
      ];
      client.innerApiCalls.listCalls =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listCalls(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.voice.v1beta1.ICall[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listCalls as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listCalls with error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listCalls = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.listCalls(request), expectedError);
      assert(
        (client.innerApiCalls.listCalls as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listCallsStream without error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
      ];
      client.descriptors.page.listCalls.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listCallsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.voice.v1beta1.Call[] = [];
        stream.on('data', (response: protos.enfonica.voice.v1beta1.Call) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listCalls.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listCalls, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listCalls.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listCallsStream with error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listCalls.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listCallsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.voice.v1beta1.Call[] = [];
        stream.on('data', (response: protos.enfonica.voice.v1beta1.Call) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listCalls.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listCalls, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listCalls.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listCalls without error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
        generateSampleMessage(new protos.enfonica.voice.v1beta1.Call()),
      ];
      client.descriptors.page.listCalls.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.enfonica.voice.v1beta1.ICall[] = [];
      const iterable = client.listCallsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listCalls.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listCalls.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listCalls with error', async () => {
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListCallsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listCalls.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listCallsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.enfonica.voice.v1beta1.ICall[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listCalls.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listCalls.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('alias', () => {
      const fakePath = '/rendered/path/alias';
      const expectedParameters = {
        project: 'projectValue',
        sip_domain: 'sipDomainValue',
        alias: 'aliasValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.aliasPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.aliasPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('aliasPath', () => {
        const result = client.aliasPath(
          'projectValue',
          'sipDomainValue',
          'aliasValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.aliasPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromAliasName', () => {
        const result = client.matchProjectFromAliasName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.aliasPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSipDomainFromAliasName', () => {
        const result = client.matchSipDomainFromAliasName(fakePath);
        assert.strictEqual(result, 'sipDomainValue');
        assert(
          (client.pathTemplates.aliasPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAliasFromAliasName', () => {
        const result = client.matchAliasFromAliasName(fakePath);
        assert.strictEqual(result, 'aliasValue');
        assert(
          (client.pathTemplates.aliasPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('call', () => {
      const fakePath = '/rendered/path/call';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.callPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.callPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('callPath', () => {
        const result = client.callPath('projectValue', 'callValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.callPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromCallName', () => {
        const result = client.matchProjectFromCallName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.callPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCallFromCallName', () => {
        const result = client.matchCallFromCallName(fakePath);
        assert.strictEqual(result, 'callValue');
        assert(
          (client.pathTemplates.callPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('recording', () => {
      const fakePath = '/rendered/path/recording';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
        recording: 'recordingValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.recordingPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.recordingPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('recordingPath', () => {
        const result = client.recordingPath(
          'projectValue',
          'callValue',
          'recordingValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.recordingPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromRecordingName', () => {
        const result = client.matchProjectFromRecordingName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.recordingPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCallFromRecordingName', () => {
        const result = client.matchCallFromRecordingName(fakePath);
        assert.strictEqual(result, 'callValue');
        assert(
          (client.pathTemplates.recordingPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRecordingFromRecordingName', () => {
        const result = client.matchRecordingFromRecordingName(fakePath);
        assert.strictEqual(result, 'recordingValue');
        assert(
          (client.pathTemplates.recordingPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('sipDomain', () => {
      const fakePath = '/rendered/path/sipDomain';
      const expectedParameters = {
        project: 'projectValue',
        sip_domain: 'sipDomainValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.sipDomainPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.sipDomainPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('sipDomainPath', () => {
        const result = client.sipDomainPath('projectValue', 'sipDomainValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.sipDomainPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromSipDomainName', () => {
        const result = client.matchProjectFromSipDomainName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.sipDomainPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSipDomainFromSipDomainName', () => {
        const result = client.matchSipDomainFromSipDomainName(fakePath);
        assert.strictEqual(result, 'sipDomainValue');
        assert(
          (client.pathTemplates.sipDomainPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('sipInfo', () => {
      const fakePath = '/rendered/path/sipInfo';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.sipInfoPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.sipInfoPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('sipInfoPath', () => {
        const result = client.sipInfoPath('projectValue', 'callValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.sipInfoPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromSipInfoName', () => {
        const result = client.matchProjectFromSipInfoName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.sipInfoPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCallFromSipInfoName', () => {
        const result = client.matchCallFromSipInfoName(fakePath);
        assert.strictEqual(result, 'callValue');
        assert(
          (client.pathTemplates.sipInfoPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('transcription', () => {
      const fakePath = '/rendered/path/transcription';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
        transcription: 'transcriptionValue',
      };
      const client = new callsModule.v1beta1.CallsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.transcriptionPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.transcriptionPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('transcriptionPath', () => {
        const result = client.transcriptionPath(
          'projectValue',
          'callValue',
          'transcriptionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.transcriptionPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTranscriptionName', () => {
        const result = client.matchProjectFromTranscriptionName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.transcriptionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCallFromTranscriptionName', () => {
        const result = client.matchCallFromTranscriptionName(fakePath);
        assert.strictEqual(result, 'callValue');
        assert(
          (client.pathTemplates.transcriptionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTranscriptionFromTranscriptionName', () => {
        const result = client.matchTranscriptionFromTranscriptionName(fakePath);
        assert.strictEqual(result, 'transcriptionValue');
        assert(
          (client.pathTemplates.transcriptionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
