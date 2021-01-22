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
import * as phonenumbersModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
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

describe('v1beta1.PhoneNumbersClient', () => {
  it('has servicePath', () => {
    const servicePath =
      phonenumbersModule.v1beta1.PhoneNumbersClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      phonenumbersModule.v1beta1.PhoneNumbersClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = phonenumbersModule.v1beta1.PhoneNumbersClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.phoneNumbersStub, undefined);
    await client.initialize();
    assert(client.phoneNumbersStub);
  });

  it('has close method', () => {
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
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
    const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
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

  describe('searchPhoneNumbers', () => {
    it('invokes searchPhoneNumbers without error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedOptions = {};
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
      ];
      client.innerApiCalls.searchPhoneNumbers = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.searchPhoneNumbers(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.searchPhoneNumbers as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes searchPhoneNumbers without error using callback', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedOptions = {};
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
      ];
      client.innerApiCalls.searchPhoneNumbers = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.searchPhoneNumbers(
          request,
          (
            err?: Error | null,
            result?: protos.enfonica.numbering.v1beta1.IPhoneNumber[] | null
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
        (client.innerApiCalls.searchPhoneNumbers as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes searchPhoneNumbers with error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.searchPhoneNumbers = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchPhoneNumbers(request), expectedError);
      assert(
        (client.innerApiCalls.searchPhoneNumbers as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes searchPhoneNumbersStream without error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
      ];
      client.descriptors.page.searchPhoneNumbers.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.searchPhoneNumbersStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.numbering.v1beta1.PhoneNumber[] = [];
        stream.on(
          'data',
          (response: protos.enfonica.numbering.v1beta1.PhoneNumber) => {
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
        (client.descriptors.page.searchPhoneNumbers.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchPhoneNumbers, request)
      );
    });

    it('invokes searchPhoneNumbersStream with error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedError = new Error('expected');
      client.descriptors.page.searchPhoneNumbers.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.searchPhoneNumbersStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.enfonica.numbering.v1beta1.PhoneNumber[] = [];
        stream.on(
          'data',
          (response: protos.enfonica.numbering.v1beta1.PhoneNumber) => {
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
        (client.descriptors.page.searchPhoneNumbers.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.searchPhoneNumbers, request)
      );
    });

    it('uses async iteration with searchPhoneNumbers without error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedResponse = [
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
        generateSampleMessage(
          new protos.enfonica.numbering.v1beta1.PhoneNumber()
        ),
      ];
      client.descriptors.page.searchPhoneNumbers.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.enfonica.numbering.v1beta1.IPhoneNumber[] = [];
      const iterable = client.searchPhoneNumbersAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.searchPhoneNumbers
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
    });

    it('uses async iteration with searchPhoneNumbers with error', async () => {
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest()
      );
      const expectedError = new Error('expected');
      client.descriptors.page.searchPhoneNumbers.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.searchPhoneNumbersAsync(request);
      await assert.rejects(async () => {
        const responses: protos.enfonica.numbering.v1beta1.IPhoneNumber[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.searchPhoneNumbers
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
    });
  });

  describe('Path templates', () => {
    describe('phoneNumber', () => {
      const fakePath = '/rendered/path/phoneNumber';
      const expectedParameters = {
        phone_number: 'phoneNumberValue',
      };
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.phoneNumberPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.phoneNumberPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('phoneNumberPath', () => {
        const result = client.phoneNumberPath('phoneNumberValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.phoneNumberPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPhoneNumberFromPhoneNumberName', () => {
        const result = client.matchPhoneNumberFromPhoneNumberName(fakePath);
        assert.strictEqual(result, 'phoneNumberValue');
        assert(
          (client.pathTemplates.phoneNumberPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('phoneNumberInstance', () => {
      const fakePath = '/rendered/path/phoneNumberInstance';
      const expectedParameters = {
        project: 'projectValue',
        phone_number_instance: 'phoneNumberInstanceValue',
      };
      const client = new phonenumbersModule.v1beta1.PhoneNumbersClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.phoneNumberInstancePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.phoneNumberInstancePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('phoneNumberInstancePath', () => {
        const result = client.phoneNumberInstancePath(
          'projectValue',
          'phoneNumberInstanceValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.phoneNumberInstancePathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromPhoneNumberInstanceName', () => {
        const result = client.matchProjectFromPhoneNumberInstanceName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.phoneNumberInstancePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchPhoneNumberInstanceFromPhoneNumberInstanceName', () => {
        const result = client.matchPhoneNumberInstanceFromPhoneNumberInstanceName(
          fakePath
        );
        assert.strictEqual(result, 'phoneNumberInstanceValue');
        assert(
          (client.pathTemplates.phoneNumberInstancePathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
