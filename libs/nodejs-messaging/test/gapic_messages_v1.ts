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
import * as messagesModule from '../src';

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

describe('v1.MessagesClient', () => {
  it('has servicePath', () => {
    const servicePath = messagesModule.v1.MessagesClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = messagesModule.v1.MessagesClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = messagesModule.v1.MessagesClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new messagesModule.v1.MessagesClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new messagesModule.v1.MessagesClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new messagesModule.v1.MessagesClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.messagesStub, undefined);
    await client.initialize();
    assert(client.messagesStub);
  });

  it('has close method', () => {
    const client = new messagesModule.v1.MessagesClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new messagesModule.v1.MessagesClient({
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
    const client = new messagesModule.v1.MessagesClient({
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

  describe('createMessage', () => {
    it('invokes createMessage without error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.CreateMessageRequest()
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
        new protos.enfonica.messaging.v1.Message()
      );
      client.innerApiCalls.createMessage = stubSimpleCall(expectedResponse);
      const [response] = await client.createMessage(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createMessage without error using callback', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.CreateMessageRequest()
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
        new protos.enfonica.messaging.v1.Message()
      );
      client.innerApiCalls.createMessage =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createMessage(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.messaging.v1.IMessage | null
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
        (client.innerApiCalls.createMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createMessage with error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.CreateMessageRequest()
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
      client.innerApiCalls.createMessage = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createMessage(request), expectedError);
      assert(
        (client.innerApiCalls.createMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getMessage', () => {
    it('invokes getMessage without error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.GetMessageRequest()
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
        new protos.enfonica.messaging.v1.Message()
      );
      client.innerApiCalls.getMessage = stubSimpleCall(expectedResponse);
      const [response] = await client.getMessage(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getMessage without error using callback', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.GetMessageRequest()
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
        new protos.enfonica.messaging.v1.Message()
      );
      client.innerApiCalls.getMessage =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getMessage(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.messaging.v1.IMessage | null
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
        (client.innerApiCalls.getMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getMessage with error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.GetMessageRequest()
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
      client.innerApiCalls.getMessage = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getMessage(request), expectedError);
      assert(
        (client.innerApiCalls.getMessage as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listMessages', () => {
    it('invokes listMessages without error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
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
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
      ];
      client.innerApiCalls.listMessages = stubSimpleCall(expectedResponse);
      const [response] = await client.listMessages(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listMessages as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listMessages without error using callback', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
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
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
      ];
      client.innerApiCalls.listMessages =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listMessages(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.messaging.v1.IMessage[] | null
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
        (client.innerApiCalls.listMessages as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listMessages with error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
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
      client.innerApiCalls.listMessages = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listMessages(request), expectedError);
      assert(
        (client.innerApiCalls.listMessages as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listMessagesStream without error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
      ];
      client.descriptors.page.listMessages.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listMessagesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.messaging.v1.Message[] = [];
        stream.on('data', (response: protos.enfonica.messaging.v1.Message) => {
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
        (client.descriptors.page.listMessages.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listMessages, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listMessages.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listMessagesStream with error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listMessages.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listMessagesStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.messaging.v1.Message[] = [];
        stream.on('data', (response: protos.enfonica.messaging.v1.Message) => {
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
        (client.descriptors.page.listMessages.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listMessages, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listMessages.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listMessages without error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
        generateSampleMessage(new protos.enfonica.messaging.v1.Message()),
      ];
      client.descriptors.page.listMessages.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.enfonica.messaging.v1.IMessage[] = [];
      const iterable = client.listMessagesAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listMessages.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listMessages.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listMessages with error', async () => {
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.messaging.v1.ListMessagesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listMessages.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listMessagesAsync(request);
      await assert.rejects(async () => {
        const responses: protos.enfonica.messaging.v1.IMessage[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listMessages.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listMessages.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('message', () => {
      const fakePath = '/rendered/path/message';
      const expectedParameters = {
        project: 'projectValue',
        message: 'messageValue',
      };
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.messagePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.messagePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('messagePath', () => {
        const result = client.messagePath('projectValue', 'messageValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.messagePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromMessageName', () => {
        const result = client.matchProjectFromMessageName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.messagePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchMessageFromMessageName', () => {
        const result = client.matchMessageFromMessageName(fakePath);
        assert.strictEqual(result, 'messageValue');
        assert(
          (client.pathTemplates.messagePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('unsubscriber', () => {
      const fakePath = '/rendered/path/unsubscriber';
      const expectedParameters = {
        project: 'projectValue',
        unsubscriber: 'unsubscriberValue',
      };
      const client = new messagesModule.v1.MessagesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.unsubscriberPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.unsubscriberPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('unsubscriberPath', () => {
        const result = client.unsubscriberPath(
          'projectValue',
          'unsubscriberValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.unsubscriberPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromUnsubscriberName', () => {
        const result = client.matchProjectFromUnsubscriberName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.unsubscriberPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchUnsubscriberFromUnsubscriberName', () => {
        const result = client.matchUnsubscriberFromUnsubscriberName(fakePath);
        assert.strictEqual(result, 'unsubscriberValue');
        assert(
          (client.pathTemplates.unsubscriberPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
