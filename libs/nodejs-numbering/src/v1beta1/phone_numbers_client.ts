// Copyright 2021 Enfonica Pty Ltd
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
import * as gapicConfig from './phone_numbers_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Manages PhoneNumbers.
 * @class
 * @memberof v1beta1
 */
export class PhoneNumbersClient {
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
  phoneNumbersStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of PhoneNumbersClient.
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
    const staticMembers = this.constructor as typeof PhoneNumbersClient;
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
    // pass `{fallback: true}` to the PhoneNumbersClient constructor.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof PhoneNumbersClient).scopes;
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
      phoneNumberPathTemplate: new this._gaxModule.PathTemplate(
        'phoneNumbers/{phone_number}'
      ),
      phoneNumberInstancePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/phoneNumberInstances/{phone_number_instance}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      searchPhoneNumbers: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'phoneNumbers'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'enfonica.numbering.v1beta1.PhoneNumbers',
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
    if (this.phoneNumbersStub) {
      return this.phoneNumbersStub;
    }

    // Put together the "service stub" for
    // enfonica.numbering.v1beta1.PhoneNumbers.
    this.phoneNumbersStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'enfonica.numbering.v1beta1.PhoneNumbers'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).enfonica.numbering.v1beta1.PhoneNumbers,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const phoneNumbersStubMethods = ['searchPhoneNumbers'];
    for (const methodName of phoneNumbersStubMethods) {
      const callPromise = this.phoneNumbersStub.then(
        stub => (...args: Array<{}>) => {
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

    return this.phoneNumbersStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'numbering.api.enfonica.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'numbering.api.enfonica.com';
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
    return ['https://api.enfonica.com/auth/numbering'];
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

  searchPhoneNumbers(
    request: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protos.enfonica.numbering.v1beta1.IPhoneNumber[],
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest | null,
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
    ]
  >;
  searchPhoneNumbers(
    request: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    options: gax.CallOptions,
    callback: PaginationCallback<
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
      | protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
      | null
      | undefined,
      protos.enfonica.numbering.v1beta1.IPhoneNumber
    >
  ): void;
  searchPhoneNumbers(
    request: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    callback: PaginationCallback<
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
      | protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
      | null
      | undefined,
      protos.enfonica.numbering.v1beta1.IPhoneNumber
    >
  ): void;
  /**
   * Searches available phone numbers with the specified filters.
   *
   * Search returns phone numbers sorted by create_time descending.
   *
   * The caller must be authenticated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.pageSize
   *   The maximum number of PhoneNumbers to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `SearchPhoneNumbers`
   *   that indicates where this listing should continue from.
   * @param {number[]} request.capabilities
   *   The capabilities that the phone number must have.
   * @param {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType} request.numberType
   *   The type of phone number.
   * @param {string} request.countryCode
   *   The alpha-2 country code that identifies the country associated with
   *   the phone number.
   *   (-- api-linter: core::0143::standardized-codes=disabled
   *       aip.dev/not-precedent: Country code is used in this beta. --)
   * @param {string} request.prefix
   *   The prefix that the number must have after the country code. If the
   *   prefix starts with '0', it will be automatically removed.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [PhoneNumber]{@link enfonica.numbering.v1beta1.PhoneNumber}.
   *   The client library support auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [PhoneNumber]{@link enfonica.numbering.v1beta1.PhoneNumber} that corresponds to
   *   the one page received from the API server.
   *   If the second element is not null it contains the request object of type [SearchPhoneNumbersRequest]{@link enfonica.numbering.v1beta1.SearchPhoneNumbersRequest}
   *   that can be used to obtain the next page of the results.
   *   If it is null, the next page does not exist.
   *   The third element contains the raw response received from the API server. Its type is
   *   [SearchPhoneNumbersResponse]{@link enfonica.numbering.v1beta1.SearchPhoneNumbersResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  searchPhoneNumbers(
    request: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | PaginationCallback<
          protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
          | protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
          | null
          | undefined,
          protos.enfonica.numbering.v1beta1.IPhoneNumber
        >,
    callback?: PaginationCallback<
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
      | protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
      | null
      | undefined,
      protos.enfonica.numbering.v1beta1.IPhoneNumber
    >
  ): Promise<
    [
      protos.enfonica.numbering.v1beta1.IPhoneNumber[],
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest | null,
      protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse
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
    this.initialize();
    return this.innerApiCalls.searchPhoneNumbers(request, options, callback);
  }

  /**
   * Equivalent to {@link searchPhoneNumbers}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchPhoneNumbers} continuously
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
   * @param {number} request.pageSize
   *   The maximum number of PhoneNumbers to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `SearchPhoneNumbers`
   *   that indicates where this listing should continue from.
   * @param {number[]} request.capabilities
   *   The capabilities that the phone number must have.
   * @param {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType} request.numberType
   *   The type of phone number.
   * @param {string} request.countryCode
   *   The alpha-2 country code that identifies the country associated with
   *   the phone number.
   *   (-- api-linter: core::0143::standardized-codes=disabled
   *       aip.dev/not-precedent: Country code is used in this beta. --)
   * @param {string} request.prefix
   *   The prefix that the number must have after the country code. If the
   *   prefix starts with '0', it will be automatically removed.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [PhoneNumber]{@link enfonica.numbering.v1beta1.PhoneNumber} on 'data' event.
   */
  searchPhoneNumbersStream(
    request?: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    options?: gax.CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchPhoneNumbers.createStream(
      this.innerApiCalls.searchPhoneNumbers as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to {@link searchPhoneNumbers}, but returns an iterable object.
   *
   * for-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.pageSize
   *   The maximum number of PhoneNumbers to return in the response.
   *   Default value of 10 and maximum value of 100.
   * @param {string} request.pageToken
   *   A pagination token returned from a previous call to `SearchPhoneNumbers`
   *   that indicates where this listing should continue from.
   * @param {number[]} request.capabilities
   *   The capabilities that the phone number must have.
   * @param {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType} request.numberType
   *   The type of phone number.
   * @param {string} request.countryCode
   *   The alpha-2 country code that identifies the country associated with
   *   the phone number.
   *   (-- api-linter: core::0143::standardized-codes=disabled
   *       aip.dev/not-precedent: Country code is used in this beta. --)
   * @param {string} request.prefix
   *   The prefix that the number must have after the country code. If the
   *   prefix starts with '0', it will be automatically removed.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   */
  searchPhoneNumbersAsync(
    request?: protos.enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.enfonica.numbering.v1beta1.IPhoneNumber> {
    request = request || {};
    options = options || {};
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.searchPhoneNumbers.asyncIterate(
      this.innerApiCalls['searchPhoneNumbers'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.enfonica.numbering.v1beta1.IPhoneNumber>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified phoneNumber resource name string.
   *
   * @param {string} phone_number
   * @returns {string} Resource name string.
   */
  phoneNumberPath(phoneNumber: string) {
    return this.pathTemplates.phoneNumberPathTemplate.render({
      phone_number: phoneNumber,
    });
  }

  /**
   * Parse the phone_number from PhoneNumber resource.
   *
   * @param {string} phoneNumberName
   *   A fully-qualified path representing PhoneNumber resource.
   * @returns {string} A string representing the phone_number.
   */
  matchPhoneNumberFromPhoneNumberName(phoneNumberName: string) {
    return this.pathTemplates.phoneNumberPathTemplate.match(phoneNumberName)
      .phone_number;
  }

  /**
   * Return a fully-qualified phoneNumberInstance resource name string.
   *
   * @param {string} project
   * @param {string} phone_number_instance
   * @returns {string} Resource name string.
   */
  phoneNumberInstancePath(project: string, phoneNumberInstance: string) {
    return this.pathTemplates.phoneNumberInstancePathTemplate.render({
      project: project,
      phone_number_instance: phoneNumberInstance,
    });
  }

  /**
   * Parse the project from PhoneNumberInstance resource.
   *
   * @param {string} phoneNumberInstanceName
   *   A fully-qualified path representing PhoneNumberInstance resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromPhoneNumberInstanceName(phoneNumberInstanceName: string) {
    return this.pathTemplates.phoneNumberInstancePathTemplate.match(
      phoneNumberInstanceName
    ).project;
  }

  /**
   * Parse the phone_number_instance from PhoneNumberInstance resource.
   *
   * @param {string} phoneNumberInstanceName
   *   A fully-qualified path representing PhoneNumberInstance resource.
   * @returns {string} A string representing the phone_number_instance.
   */
  matchPhoneNumberInstanceFromPhoneNumberInstanceName(
    phoneNumberInstanceName: string
  ) {
    return this.pathTemplates.phoneNumberInstancePathTemplate.match(
      phoneNumberInstanceName
    ).phone_number_instance;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.phoneNumbersStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
