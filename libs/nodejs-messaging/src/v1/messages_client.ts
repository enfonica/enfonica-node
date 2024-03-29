// Copyright 2023 Enfonica Pty Ltd
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

import * as gax from 'google-gax';
import * as localAuth from '@enfonica/auth-library';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import * as gapicConfig from './messages_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Manages Messages.
 *  Messages can be SMS, whatsapp messages, etc.
 * @class
 * @memberof v1
 */
export class MessagesClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: any;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  messagesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of MessagesClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */

  constructor(opts?: any) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof MessagesClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.auth = new localAuth.GoogleAuth({keyFilename: opts.keyFile});

    // users can override the config from client side, like retry codes name.
    // The detailed structure of the clientConfig can be found here: https://github.com/googleapis/gax-nodejs/blob/master/src/gax.ts#L546
    // The way to override client config for Showcase API:
    //
    // const customConfig = {"interfaces": {"google.showcase.v1beta1.Echo": {"methods": {"Echo": {"retry_codes_name": "idempotent", "retry_params_name": "default"}}}}}
    // const showcaseClient = new showcaseClient({ projectId, customConfig });
    opts.clientConfig = opts.clientConfig || {};

    // If we're running in browser, it's OK to omit `fallback` since
    // google-gax has `browser` field in its `package.json`.
    // For Electron (which does not respect `browser` field),
    // pass `{fallback: true}` to the MessagesClient constructor.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof MessagesClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as any;

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      messagePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/messages/{message}'
      ),
      unsubscriberPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/unsubscribers/{unsubscriber}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listMessages: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'messages'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'enfonica.messaging.v1.Messages',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.messagesStub) {
      return this.messagesStub;
    }

    // Put together the "service stub" for
    // enfonica.messaging.v1.Messages.
    this.messagesStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'enfonica.messaging.v1.Messages'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).enfonica.messaging.v1.Messages,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const messagesStubMethods = ['createMessage', 'getMessage', 'listMessages'];
    for (const methodName of messagesStubMethods) {
      const callPromise = this.messagesStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.messagesStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'messaging.api.enfonica.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'messaging.api.enfonica.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://api.enfonica.com/auth/messaging'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  createMessage(
    request: protos.enfonica.messaging.v1.ICreateMessageRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.ICreateMessageRequest | undefined,
      {} | undefined
    ]
  >;
  createMessage(
    request: protos.enfonica.messaging.v1.ICreateMessageRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.ICreateMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createMessage(
    request: protos.enfonica.messaging.v1.ICreateMessageRequest,
    callback: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.ICreateMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a Message and queues it for sending.
   * Returns the created message.
   *
   * The caller must have `messaging.messages.create` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent project to create the message under.
   *   Must be of the form `projects/*`.
   * @param {enfonica.messaging.v1.Message} request.message
   *   The message resource to be created.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Message]{@link enfonica.messaging.v1.Message}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  createMessage(
    request: protos.enfonica.messaging.v1.ICreateMessageRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.enfonica.messaging.v1.IMessage,
          protos.enfonica.messaging.v1.ICreateMessageRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.ICreateMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.ICreateMessageRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.createMessage(request, options, callback);
  }
  getMessage(
    request: protos.enfonica.messaging.v1.IGetMessageRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.IGetMessageRequest | undefined,
      {} | undefined
    ]
  >;
  getMessage(
    request: protos.enfonica.messaging.v1.IGetMessageRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.IGetMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getMessage(
    request: protos.enfonica.messaging.v1.IGetMessageRequest,
    callback: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.IGetMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves a Message identified by the supplied resource name.
   *
   * The caller must have `messaging.messages.get` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the Message to retrieve.
   *   Must be of the form `projects/* /messages/*`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Message]{@link enfonica.messaging.v1.Message}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  getMessage(
    request: protos.enfonica.messaging.v1.IGetMessageRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.enfonica.messaging.v1.IMessage,
          protos.enfonica.messaging.v1.IGetMessageRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.IGetMessageRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage,
      protos.enfonica.messaging.v1.IGetMessageRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.getMessage(request, options, callback);
  }

  listMessages(
    request: protos.enfonica.messaging.v1.IListMessagesRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage[],
      protos.enfonica.messaging.v1.IListMessagesRequest | null,
      protos.enfonica.messaging.v1.IListMessagesResponse
    ]
  >;
  listMessages(
    request: protos.enfonica.messaging.v1.IListMessagesRequest,
    options: gax.CallOptions,
    callback: PaginationCallback<
      protos.enfonica.messaging.v1.IListMessagesRequest,
      protos.enfonica.messaging.v1.IListMessagesResponse | null | undefined,
      protos.enfonica.messaging.v1.IMessage
    >
  ): void;
  listMessages(
    request: protos.enfonica.messaging.v1.IListMessagesRequest,
    callback: PaginationCallback<
      protos.enfonica.messaging.v1.IListMessagesRequest,
      protos.enfonica.messaging.v1.IListMessagesResponse | null | undefined,
      protos.enfonica.messaging.v1.IMessage
    >
  ): void;
  /**
   * Lists the Messages of the specified project.
   * List returns Messages sorted by create_time descending.
   *
   * The caller must have `messaging.messages.list` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent of which to list messages.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Messages to return in the response.
   *   Default value is 10 and maximum value is 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListMessages`
   *   that indicates where this listing should continue from.
   * @param {google.protobuf.Timestamp} request.startTime
   *   The timestamp (inclusive) from which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `start_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {google.protobuf.Timestamp} request.endTime
   *   The timestamp (exclusive) until which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `end_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `status`
   *   - `direction`
   *   - `encoding`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   status = DELIVERED OR status = UNDELIVERED AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Message]{@link enfonica.messaging.v1.Message}.
   *   The client library support auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Message]{@link enfonica.messaging.v1.Message} that corresponds to
   *   the one page received from the API server.
   *   If the second element is not null it contains the request object of type [ListMessagesRequest]{@link enfonica.messaging.v1.ListMessagesRequest}
   *   that can be used to obtain the next page of the results.
   *   If it is null, the next page does not exist.
   *   The third element contains the raw response received from the API server. Its type is
   *   [ListMessagesResponse]{@link enfonica.messaging.v1.ListMessagesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  listMessages(
    request: protos.enfonica.messaging.v1.IListMessagesRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | PaginationCallback<
          protos.enfonica.messaging.v1.IListMessagesRequest,
          protos.enfonica.messaging.v1.IListMessagesResponse | null | undefined,
          protos.enfonica.messaging.v1.IMessage
        >,
    callback?: PaginationCallback<
      protos.enfonica.messaging.v1.IListMessagesRequest,
      protos.enfonica.messaging.v1.IListMessagesResponse | null | undefined,
      protos.enfonica.messaging.v1.IMessage
    >
  ): Promise<
    [
      protos.enfonica.messaging.v1.IMessage[],
      protos.enfonica.messaging.v1.IListMessagesRequest | null,
      protos.enfonica.messaging.v1.IListMessagesResponse
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.listMessages(request, options, callback);
  }

  /**
   * Equivalent to {@link listMessages}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listMessages} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent of which to list messages.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Messages to return in the response.
   *   Default value is 10 and maximum value is 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListMessages`
   *   that indicates where this listing should continue from.
   * @param {google.protobuf.Timestamp} request.startTime
   *   The timestamp (inclusive) from which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `start_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {google.protobuf.Timestamp} request.endTime
   *   The timestamp (exclusive) until which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `end_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `status`
   *   - `direction`
   *   - `encoding`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   status = DELIVERED OR status = UNDELIVERED AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Message]{@link enfonica.messaging.v1.Message} on 'data' event.
   */
  listMessagesStream(
    request?: protos.enfonica.messaging.v1.IListMessagesRequest,
    options?: gax.CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listMessages.createStream(
      this.innerApiCalls.listMessages as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to {@link listMessages}, but returns an iterable object.
   *
   * for-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent of which to list messages.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Messages to return in the response.
   *   Default value is 10 and maximum value is 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListMessages`
   *   that indicates where this listing should continue from.
   * @param {google.protobuf.Timestamp} request.startTime
   *   The timestamp (inclusive) from which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `start_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {google.protobuf.Timestamp} request.endTime
   *   The timestamp (exclusive) until which to retrieve messages. The
   *   create_time of the Message is used.
   *
   *   This field is deprecated. Use `filter` instead. If a value is specified for
   *   both `end_time` and `filter`, the call will fail.
   *
   *   (-- api-linter: core::0132::request-unknown-fields=disabled
   *       aip.dev/not-precedent: List has additional fields in this package. --)
   *   (-- deprecated --)
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `status`
   *   - `direction`
   *   - `encoding`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   status = DELIVERED OR status = UNDELIVERED AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   */
  listMessagesAsync(
    request?: protos.enfonica.messaging.v1.IListMessagesRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.enfonica.messaging.v1.IMessage> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listMessages.asyncIterate(
      this.innerApiCalls['listMessages'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.enfonica.messaging.v1.IMessage>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified message resource name string.
   *
   * @param {string} project
   * @param {string} message
   * @returns {string} Resource name string.
   */
  messagePath(project: string, message: string) {
    return this.pathTemplates.messagePathTemplate.render({
      project: project,
      message: message,
    });
  }

  /**
   * Parse the project from Message resource.
   *
   * @param {string} messageName
   *   A fully-qualified path representing Message resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromMessageName(messageName: string) {
    return this.pathTemplates.messagePathTemplate.match(messageName).project;
  }

  /**
   * Parse the message from Message resource.
   *
   * @param {string} messageName
   *   A fully-qualified path representing Message resource.
   * @returns {string} A string representing the message.
   */
  matchMessageFromMessageName(messageName: string) {
    return this.pathTemplates.messagePathTemplate.match(messageName).message;
  }

  /**
   * Return a fully-qualified unsubscriber resource name string.
   *
   * @param {string} project
   * @param {string} unsubscriber
   * @returns {string} Resource name string.
   */
  unsubscriberPath(project: string, unsubscriber: string) {
    return this.pathTemplates.unsubscriberPathTemplate.render({
      project: project,
      unsubscriber: unsubscriber,
    });
  }

  /**
   * Parse the project from Unsubscriber resource.
   *
   * @param {string} unsubscriberName
   *   A fully-qualified path representing Unsubscriber resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromUnsubscriberName(unsubscriberName: string) {
    return this.pathTemplates.unsubscriberPathTemplate.match(unsubscriberName)
      .project;
  }

  /**
   * Parse the unsubscriber from Unsubscriber resource.
   *
   * @param {string} unsubscriberName
   *   A fully-qualified path representing Unsubscriber resource.
   * @returns {string} A string representing the unsubscriber.
   */
  matchUnsubscriberFromUnsubscriberName(unsubscriberName: string) {
    return this.pathTemplates.unsubscriberPathTemplate.match(unsubscriberName)
      .unsubscriber;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.messagesStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
