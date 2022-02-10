// Copyright 2022 Enfonica Pty Ltd
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
import * as gapicConfig from './calls_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Manages Calls.
 * @class
 * @memberof v1beta1
 */
export class CallsClient {
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
  callsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CallsClient.
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
    const staticMembers = this.constructor as typeof CallsClient;
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
    // pass `{fallback: true}` to the CallsClient constructor.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof CallsClient).scopes;
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
      aliasPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/sipDomains/{sip_domain}/aliases/{alias}'
      ),
      callPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/calls/{call}'
      ),
      recordingPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/calls/{call}/recordings/{recording}'
      ),
      sipDomainPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/sipDomains/{sip_domain}'
      ),
      sipInfoPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/calls/{call}/sipInfo'
      ),
      transcriptionPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/calls/{call}/transcriptions/{transcription}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listCalls: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'calls'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'enfonica.voice.v1beta1.Calls',
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
    if (this.callsStub) {
      return this.callsStub;
    }

    // Put together the "service stub" for
    // enfonica.voice.v1beta1.Calls.
    this.callsStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'enfonica.voice.v1beta1.Calls'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).enfonica.voice.v1beta1.Calls,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const callsStubMethods = ['createCall', 'getCall', 'listCalls'];
    for (const methodName of callsStubMethods) {
      const callPromise = this.callsStub.then(
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

    return this.callsStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'voice.api.enfonica.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'voice.api.enfonica.com';
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
    return ['https://api.enfonica.com/auth/voice'];
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
  createCall(
    request: protos.enfonica.voice.v1beta1.ICreateCallRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.ICreateCallRequest | undefined,
      {} | undefined
    ]
  >;
  createCall(
    request: protos.enfonica.voice.v1beta1.ICreateCallRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.ICreateCallRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createCall(
    request: protos.enfonica.voice.v1beta1.ICreateCallRequest,
    callback: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.ICreateCallRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a call in the state QUEUED. This will cause an outgoing call
   * to be started.
   *
   * The caller must have `voice.calls.create` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project under which to create the call in the form `projects/*`.
   * @param {enfonica.voice.v1beta1.Call} request.call
   *   The call resource to be created.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Call]{@link enfonica.voice.v1beta1.Call}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  createCall(
    request: protos.enfonica.voice.v1beta1.ICreateCallRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.enfonica.voice.v1beta1.ICall,
          protos.enfonica.voice.v1beta1.ICreateCallRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.ICreateCallRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.ICreateCallRequest | undefined,
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
    return this.innerApiCalls.createCall(request, options, callback);
  }
  getCall(
    request: protos.enfonica.voice.v1beta1.IGetCallRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.IGetCallRequest | undefined,
      {} | undefined
    ]
  >;
  getCall(
    request: protos.enfonica.voice.v1beta1.IGetCallRequest,
    options: gax.CallOptions,
    callback: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.IGetCallRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getCall(
    request: protos.enfonica.voice.v1beta1.IGetCallRequest,
    callback: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.IGetCallRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves a Call identified by the supplied resource name.
   *
   * The caller must have `voice.calls.get` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the Call to retrieve.
   *   Must be of the form `projects/* /calls/*`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Call]{@link enfonica.voice.v1beta1.Call}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  getCall(
    request: protos.enfonica.voice.v1beta1.IGetCallRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protos.enfonica.voice.v1beta1.ICall,
          protos.enfonica.voice.v1beta1.IGetCallRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.IGetCallRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall,
      protos.enfonica.voice.v1beta1.IGetCallRequest | undefined,
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
    return this.innerApiCalls.getCall(request, options, callback);
  }

  listCalls(
    request: protos.enfonica.voice.v1beta1.IListCallsRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall[],
      protos.enfonica.voice.v1beta1.IListCallsRequest | null,
      protos.enfonica.voice.v1beta1.IListCallsResponse
    ]
  >;
  listCalls(
    request: protos.enfonica.voice.v1beta1.IListCallsRequest,
    options: gax.CallOptions,
    callback: PaginationCallback<
      protos.enfonica.voice.v1beta1.IListCallsRequest,
      protos.enfonica.voice.v1beta1.IListCallsResponse | null | undefined,
      protos.enfonica.voice.v1beta1.ICall
    >
  ): void;
  listCalls(
    request: protos.enfonica.voice.v1beta1.IListCallsRequest,
    callback: PaginationCallback<
      protos.enfonica.voice.v1beta1.IListCallsRequest,
      protos.enfonica.voice.v1beta1.IListCallsResponse | null | undefined,
      protos.enfonica.voice.v1beta1.ICall
    >
  ): void;
  /**
   * Lists the Calls of the specified project.
   * List returns Calls sorted by create_time descending.
   *
   * The caller must have `voice.calls.list` permission on the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent of which to list calls.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Calls to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListCalls`
   *   that indicates where this listing should continue from.
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `state`
   *   - `direction`
   *   - `transport`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   state = COMPLETED OR state = BUSY AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Call]{@link enfonica.voice.v1beta1.Call}.
   *   The client library support auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Call]{@link enfonica.voice.v1beta1.Call} that corresponds to
   *   the one page received from the API server.
   *   If the second element is not null it contains the request object of type [ListCallsRequest]{@link enfonica.voice.v1beta1.ListCallsRequest}
   *   that can be used to obtain the next page of the results.
   *   If it is null, the next page does not exist.
   *   The third element contains the raw response received from the API server. Its type is
   *   [ListCallsResponse]{@link enfonica.voice.v1beta1.ListCallsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  listCalls(
    request: protos.enfonica.voice.v1beta1.IListCallsRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | PaginationCallback<
          protos.enfonica.voice.v1beta1.IListCallsRequest,
          protos.enfonica.voice.v1beta1.IListCallsResponse | null | undefined,
          protos.enfonica.voice.v1beta1.ICall
        >,
    callback?: PaginationCallback<
      protos.enfonica.voice.v1beta1.IListCallsRequest,
      protos.enfonica.voice.v1beta1.IListCallsResponse | null | undefined,
      protos.enfonica.voice.v1beta1.ICall
    >
  ): Promise<
    [
      protos.enfonica.voice.v1beta1.ICall[],
      protos.enfonica.voice.v1beta1.IListCallsRequest | null,
      protos.enfonica.voice.v1beta1.IListCallsResponse
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
    return this.innerApiCalls.listCalls(request, options, callback);
  }

  /**
   * Equivalent to {@link listCalls}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listCalls} continuously
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
   *   The resource name of the parent of which to list calls.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Calls to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListCalls`
   *   that indicates where this listing should continue from.
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `state`
   *   - `direction`
   *   - `transport`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   state = COMPLETED OR state = BUSY AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Call]{@link enfonica.voice.v1beta1.Call} on 'data' event.
   */
  listCallsStream(
    request?: protos.enfonica.voice.v1beta1.IListCallsRequest,
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
    return this.descriptors.page.listCalls.createStream(
      this.innerApiCalls.listCalls as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to {@link listCalls}, but returns an iterable object.
   *
   * for-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the parent of which to list calls.
   *   Must be of the form `projects/*`.
   * @param {number} request.pageSize
   *   The maximum number of Calls to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `ListCalls`
   *   that indicates where this listing should continue from.
   * @param {string} request.filter
   *   Filter string to specify which results should be returned.
   *
   *   The following fields can be filtered:
   *   - `createTime`
   *   - `to`
   *   - `from`
   *   - `state`
   *   - `direction`
   *   - `transport`
   *
   *   For example:
   *   createTime >= '2021-01-01T06:00:00.0Z' AND createTime < '2021-02-01' AND
   *   state = COMPLETED OR state = BUSY AND to = '+61*' OR from = '+61*'
   *
   *   Note that OR has higher precendence than AND.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   */
  listCallsAsync(
    request?: protos.enfonica.voice.v1beta1.IListCallsRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.enfonica.voice.v1beta1.ICall> {
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
    return this.descriptors.page.listCalls.asyncIterate(
      this.innerApiCalls['listCalls'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.enfonica.voice.v1beta1.ICall>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified alias resource name string.
   *
   * @param {string} project
   * @param {string} sip_domain
   * @param {string} alias
   * @returns {string} Resource name string.
   */
  aliasPath(project: string, sipDomain: string, alias: string) {
    return this.pathTemplates.aliasPathTemplate.render({
      project: project,
      sip_domain: sipDomain,
      alias: alias,
    });
  }

  /**
   * Parse the project from Alias resource.
   *
   * @param {string} aliasName
   *   A fully-qualified path representing Alias resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromAliasName(aliasName: string) {
    return this.pathTemplates.aliasPathTemplate.match(aliasName).project;
  }

  /**
   * Parse the sip_domain from Alias resource.
   *
   * @param {string} aliasName
   *   A fully-qualified path representing Alias resource.
   * @returns {string} A string representing the sip_domain.
   */
  matchSipDomainFromAliasName(aliasName: string) {
    return this.pathTemplates.aliasPathTemplate.match(aliasName).sip_domain;
  }

  /**
   * Parse the alias from Alias resource.
   *
   * @param {string} aliasName
   *   A fully-qualified path representing Alias resource.
   * @returns {string} A string representing the alias.
   */
  matchAliasFromAliasName(aliasName: string) {
    return this.pathTemplates.aliasPathTemplate.match(aliasName).alias;
  }

  /**
   * Return a fully-qualified call resource name string.
   *
   * @param {string} project
   * @param {string} call
   * @returns {string} Resource name string.
   */
  callPath(project: string, call: string) {
    return this.pathTemplates.callPathTemplate.render({
      project: project,
      call: call,
    });
  }

  /**
   * Parse the project from Call resource.
   *
   * @param {string} callName
   *   A fully-qualified path representing Call resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromCallName(callName: string) {
    return this.pathTemplates.callPathTemplate.match(callName).project;
  }

  /**
   * Parse the call from Call resource.
   *
   * @param {string} callName
   *   A fully-qualified path representing Call resource.
   * @returns {string} A string representing the call.
   */
  matchCallFromCallName(callName: string) {
    return this.pathTemplates.callPathTemplate.match(callName).call;
  }

  /**
   * Return a fully-qualified recording resource name string.
   *
   * @param {string} project
   * @param {string} call
   * @param {string} recording
   * @returns {string} Resource name string.
   */
  recordingPath(project: string, call: string, recording: string) {
    return this.pathTemplates.recordingPathTemplate.render({
      project: project,
      call: call,
      recording: recording,
    });
  }

  /**
   * Parse the project from Recording resource.
   *
   * @param {string} recordingName
   *   A fully-qualified path representing Recording resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromRecordingName(recordingName: string) {
    return this.pathTemplates.recordingPathTemplate.match(recordingName)
      .project;
  }

  /**
   * Parse the call from Recording resource.
   *
   * @param {string} recordingName
   *   A fully-qualified path representing Recording resource.
   * @returns {string} A string representing the call.
   */
  matchCallFromRecordingName(recordingName: string) {
    return this.pathTemplates.recordingPathTemplate.match(recordingName).call;
  }

  /**
   * Parse the recording from Recording resource.
   *
   * @param {string} recordingName
   *   A fully-qualified path representing Recording resource.
   * @returns {string} A string representing the recording.
   */
  matchRecordingFromRecordingName(recordingName: string) {
    return this.pathTemplates.recordingPathTemplate.match(recordingName)
      .recording;
  }

  /**
   * Return a fully-qualified sipDomain resource name string.
   *
   * @param {string} project
   * @param {string} sip_domain
   * @returns {string} Resource name string.
   */
  sipDomainPath(project: string, sipDomain: string) {
    return this.pathTemplates.sipDomainPathTemplate.render({
      project: project,
      sip_domain: sipDomain,
    });
  }

  /**
   * Parse the project from SipDomain resource.
   *
   * @param {string} sipDomainName
   *   A fully-qualified path representing SipDomain resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromSipDomainName(sipDomainName: string) {
    return this.pathTemplates.sipDomainPathTemplate.match(sipDomainName)
      .project;
  }

  /**
   * Parse the sip_domain from SipDomain resource.
   *
   * @param {string} sipDomainName
   *   A fully-qualified path representing SipDomain resource.
   * @returns {string} A string representing the sip_domain.
   */
  matchSipDomainFromSipDomainName(sipDomainName: string) {
    return this.pathTemplates.sipDomainPathTemplate.match(sipDomainName)
      .sip_domain;
  }

  /**
   * Return a fully-qualified sipInfo resource name string.
   *
   * @param {string} project
   * @param {string} call
   * @returns {string} Resource name string.
   */
  sipInfoPath(project: string, call: string) {
    return this.pathTemplates.sipInfoPathTemplate.render({
      project: project,
      call: call,
    });
  }

  /**
   * Parse the project from SipInfo resource.
   *
   * @param {string} sipInfoName
   *   A fully-qualified path representing SipInfo resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromSipInfoName(sipInfoName: string) {
    return this.pathTemplates.sipInfoPathTemplate.match(sipInfoName).project;
  }

  /**
   * Parse the call from SipInfo resource.
   *
   * @param {string} sipInfoName
   *   A fully-qualified path representing SipInfo resource.
   * @returns {string} A string representing the call.
   */
  matchCallFromSipInfoName(sipInfoName: string) {
    return this.pathTemplates.sipInfoPathTemplate.match(sipInfoName).call;
  }

  /**
   * Return a fully-qualified transcription resource name string.
   *
   * @param {string} project
   * @param {string} call
   * @param {string} transcription
   * @returns {string} Resource name string.
   */
  transcriptionPath(project: string, call: string, transcription: string) {
    return this.pathTemplates.transcriptionPathTemplate.render({
      project: project,
      call: call,
      transcription: transcription,
    });
  }

  /**
   * Parse the project from Transcription resource.
   *
   * @param {string} transcriptionName
   *   A fully-qualified path representing Transcription resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTranscriptionName(transcriptionName: string) {
    return this.pathTemplates.transcriptionPathTemplate.match(transcriptionName)
      .project;
  }

  /**
   * Parse the call from Transcription resource.
   *
   * @param {string} transcriptionName
   *   A fully-qualified path representing Transcription resource.
   * @returns {string} A string representing the call.
   */
  matchCallFromTranscriptionName(transcriptionName: string) {
    return this.pathTemplates.transcriptionPathTemplate.match(transcriptionName)
      .call;
  }

  /**
   * Parse the transcription from Transcription resource.
   *
   * @param {string} transcriptionName
   *   A fully-qualified path representing Transcription resource.
   * @returns {string} A string representing the transcription.
   */
  matchTranscriptionFromTranscriptionName(transcriptionName: string) {
    return this.pathTemplates.transcriptionPathTemplate.match(transcriptionName)
      .transcription;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.callsStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
