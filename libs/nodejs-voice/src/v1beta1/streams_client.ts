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
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import * as path from 'path';

import * as protos from '../../protos/protos';
import * as gapicConfig from './streams_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A stream is a two-way audio bridge with a call. You operate a stream with the
 *  {@link enfonica.voice.v1beta1.Streams.StreamCall|StreamCall} method. You supply a
 *  unique, user-generated stream resource name, and then bridge a call to the stream
 *  using the Stream VoiceML action.
 * @class
 * @memberof v1beta1
 */
export class StreamsClient {
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
  streamsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of StreamsClient.
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
    const staticMembers = this.constructor as typeof StreamsClient;
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
    // pass `{fallback: true}` to the StreamsClient constructor.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof StreamsClient).scopes;
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
      streamPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/streams/{streams}'
      ),
      transcriptionPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/calls/{call}/transcriptions/{transcription}'
      ),
    };

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this.descriptors.stream = {
      streamCall: new this._gaxModule.StreamDescriptor(
        gax.StreamType.BIDI_STREAMING
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'enfonica.voice.v1beta1.Streams',
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
    if (this.streamsStub) {
      return this.streamsStub;
    }

    // Put together the "service stub" for
    // enfonica.voice.v1beta1.Streams.
    this.streamsStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'enfonica.voice.v1beta1.Streams'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).enfonica.voice.v1beta1.Streams,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const streamsStubMethods = ['streamCall'];
    for (const methodName of streamsStubMethods) {
      const callPromise = this.streamsStub.then(
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

      const descriptor = this.descriptors.stream[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.streamsStub;
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

  /**
   * Operates a stream which can be bridged to by a call. This allows bi-directional
   * audio to be passed. This method is only available via the gRPC API (not REST).
   * If the stream is not connected to a call within 30 seconds of establishment,
   * this method will fail.
   *
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts objects
   *   representing [StreamCallRequest]{@link enfonica.voice.v1beta1.StreamCallRequest} for write() method, and
   *   will emit objects representing [StreamCallResponse]{@link enfonica.voice.v1beta1.StreamCallResponse} on 'data' event asynchronously.
   */
  streamCall(options?: gax.CallOptions): gax.CancellableStream {
    this.initialize();
    return this.innerApiCalls.streamCall(options);
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
   * Return a fully-qualified stream resource name string.
   *
   * @param {string} project
   * @param {string} streams
   * @returns {string} Resource name string.
   */
  streamPath(project: string, streams: string) {
    return this.pathTemplates.streamPathTemplate.render({
      project: project,
      streams: streams,
    });
  }

  /**
   * Parse the project from Stream resource.
   *
   * @param {string} streamName
   *   A fully-qualified path representing Stream resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromStreamName(streamName: string) {
    return this.pathTemplates.streamPathTemplate.match(streamName).project;
  }

  /**
   * Parse the streams from Stream resource.
   *
   * @param {string} streamName
   *   A fully-qualified path representing Stream resource.
   * @returns {string} A string representing the streams.
   */
  matchStreamsFromStreamName(streamName: string) {
    return this.pathTemplates.streamPathTemplate.match(streamName).streams;
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
      return this.streamsStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
