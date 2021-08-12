// Copyright 2021 Google LLC
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
import * as transcriptionsModule from '../src';

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

describe('v1beta1.TranscriptionsClient', () => {
  it('has servicePath', () => {
    const servicePath =
      transcriptionsModule.v1beta1.TranscriptionsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      transcriptionsModule.v1beta1.TranscriptionsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = transcriptionsModule.v1beta1.TranscriptionsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.transcriptionsStub, undefined);
    await client.initialize();
    assert(client.transcriptionsStub);
  });

  it('has close method', () => {
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
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
    const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
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

  describe('getTranscription', () => {
    it('invokes getTranscription without error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetTranscriptionRequest()
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
        new protos.enfonica.voice.v1beta1.Transcription()
      );
      client.innerApiCalls.getTranscription = stubSimpleCall(expectedResponse);
      const [response] = await client.getTranscription(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getTranscription without error using callback', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetTranscriptionRequest()
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
        new protos.enfonica.voice.v1beta1.Transcription()
      );
      client.innerApiCalls.getTranscription =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getTranscription(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.voice.v1beta1.ITranscription | null
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
        (client.innerApiCalls.getTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getTranscription with error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.GetTranscriptionRequest()
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
      client.innerApiCalls.getTranscription = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getTranscription(request), expectedError);
      assert(
        (client.innerApiCalls.getTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('deleteTranscription', () => {
    it('invokes deleteTranscription without error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.DeleteTranscriptionRequest()
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
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteTranscription =
        stubSimpleCall(expectedResponse);
      const [response] = await client.deleteTranscription(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteTranscription without error using callback', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.DeleteTranscriptionRequest()
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
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteTranscription =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteTranscription(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
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
        (client.innerApiCalls.deleteTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteTranscription with error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.DeleteTranscriptionRequest()
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
      client.innerApiCalls.deleteTranscription = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteTranscription(request), expectedError);
      assert(
        (client.innerApiCalls.deleteTranscription as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listTranscriptions', () => {
    it('invokes listTranscriptions without error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
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
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
      ];
      client.innerApiCalls.listTranscriptions =
        stubSimpleCall(expectedResponse);
      const [response] = await client.listTranscriptions(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listTranscriptions as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listTranscriptions without error using callback', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
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
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
      ];
      client.innerApiCalls.listTranscriptions =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listTranscriptions(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.voice.v1beta1.ITranscription[] | null
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
        (client.innerApiCalls.listTranscriptions as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listTranscriptions with error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
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
      client.innerApiCalls.listTranscriptions = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listTranscriptions(request), expectedError);
      assert(
        (client.innerApiCalls.listTranscriptions as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listTranscriptionsStream without error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
      ];
      client.descriptors.page.listTranscriptions.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listTranscriptionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.voice.v1beta1.Transcription[] = [];
        stream.on(
          'data',
          (response: protos.enfonica.voice.v1beta1.Transcription) => {
            responses.push(response);
          }
        );
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
        (client.descriptors.page.listTranscriptions.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listTranscriptions, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listTranscriptions.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listTranscriptionsStream with error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listTranscriptions.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listTranscriptionsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.voice.v1beta1.Transcription[] = [];
        stream.on(
          'data',
          (response: protos.enfonica.voice.v1beta1.Transcription) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listTranscriptions.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listTranscriptions, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listTranscriptions.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listTranscriptions without error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
        generateSampleMessage(
          new protos.enfonica.voice.v1beta1.Transcription()
        ),
      ];
      client.descriptors.page.listTranscriptions.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.enfonica.voice.v1beta1.ITranscription[] = [];
      const iterable = client.listTranscriptionsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listTranscriptions.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listTranscriptions.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listTranscriptions with error', async () => {
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.voice.v1beta1.ListTranscriptionsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listTranscriptions.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listTranscriptionsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.enfonica.voice.v1beta1.ITranscription[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listTranscriptions.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listTranscriptions.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('call', () => {
      const fakePath = '/rendered/path/call';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
      };
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
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
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
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

    describe('transcription', () => {
      const fakePath = '/rendered/path/transcription';
      const expectedParameters = {
        project: 'projectValue',
        call: 'callValue',
        transcription: 'transcriptionValue',
      };
      const client = new transcriptionsModule.v1beta1.TranscriptionsClient({
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
