// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("google-gax").protobufMinimal);

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots._enfonica_numbering_protos || ($protobuf.roots._enfonica_numbering_protos = {});
    
    $root.enfonica = (function() {
    
        /**
         * Namespace enfonica.
         * @exports enfonica
         * @namespace
         */
        var enfonica = {};
    
        enfonica.numbering = (function() {
    
            /**
             * Namespace numbering.
             * @memberof enfonica
             * @namespace
             */
            var numbering = {};
    
            numbering.v1beta1 = (function() {
    
                /**
                 * Namespace v1beta1.
                 * @memberof enfonica.numbering
                 * @namespace
                 */
                var v1beta1 = {};
    
                v1beta1.PhoneNumberInstances = (function() {
    
                    /**
                     * Constructs a new PhoneNumberInstances service.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a PhoneNumberInstances
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function PhoneNumberInstances(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
    
                    (PhoneNumberInstances.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PhoneNumberInstances;
    
                    /**
                     * Creates new PhoneNumberInstances service using the specified rpc implementation.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {PhoneNumberInstances} RPC service. Useful where requests and/or responses are streamed.
                     */
                    PhoneNumberInstances.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#createPhoneNumberInstance}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef CreatePhoneNumberInstanceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} [response] PhoneNumberInstance
                     */
    
                    /**
                     * Calls CreatePhoneNumberInstance.
                     * @function createPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest} request CreatePhoneNumberInstanceRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.CreatePhoneNumberInstanceCallback} callback Node-style callback called with the error, if any, and PhoneNumberInstance
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.createPhoneNumberInstance = function createPhoneNumberInstance(request, callback) {
                        return this.rpcCall(createPhoneNumberInstance, $root.enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest, $root.enfonica.numbering.v1beta1.PhoneNumberInstance, request, callback);
                    }, "name", { value: "CreatePhoneNumberInstance" });
    
                    /**
                     * Calls CreatePhoneNumberInstance.
                     * @function createPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest} request CreatePhoneNumberInstanceRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumberInstance>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#getPhoneNumberInstance}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef GetPhoneNumberInstanceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} [response] PhoneNumberInstance
                     */
    
                    /**
                     * Calls GetPhoneNumberInstance.
                     * @function getPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest} request GetPhoneNumberInstanceRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.GetPhoneNumberInstanceCallback} callback Node-style callback called with the error, if any, and PhoneNumberInstance
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.getPhoneNumberInstance = function getPhoneNumberInstance(request, callback) {
                        return this.rpcCall(getPhoneNumberInstance, $root.enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest, $root.enfonica.numbering.v1beta1.PhoneNumberInstance, request, callback);
                    }, "name", { value: "GetPhoneNumberInstance" });
    
                    /**
                     * Calls GetPhoneNumberInstance.
                     * @function getPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest} request GetPhoneNumberInstanceRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumberInstance>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#listPhoneNumberInstances}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef ListPhoneNumberInstancesCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} [response] ListPhoneNumberInstancesResponse
                     */
    
                    /**
                     * Calls ListPhoneNumberInstances.
                     * @function listPhoneNumberInstances
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest} request ListPhoneNumberInstancesRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.ListPhoneNumberInstancesCallback} callback Node-style callback called with the error, if any, and ListPhoneNumberInstancesResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.listPhoneNumberInstances = function listPhoneNumberInstances(request, callback) {
                        return this.rpcCall(listPhoneNumberInstances, $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest, $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse, request, callback);
                    }, "name", { value: "ListPhoneNumberInstances" });
    
                    /**
                     * Calls ListPhoneNumberInstances.
                     * @function listPhoneNumberInstances
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest} request ListPhoneNumberInstancesRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#updatePhoneNumberInstance}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef UpdatePhoneNumberInstanceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} [response] PhoneNumberInstance
                     */
    
                    /**
                     * Calls UpdatePhoneNumberInstance.
                     * @function updatePhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest} request UpdatePhoneNumberInstanceRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.UpdatePhoneNumberInstanceCallback} callback Node-style callback called with the error, if any, and PhoneNumberInstance
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.updatePhoneNumberInstance = function updatePhoneNumberInstance(request, callback) {
                        return this.rpcCall(updatePhoneNumberInstance, $root.enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest, $root.enfonica.numbering.v1beta1.PhoneNumberInstance, request, callback);
                    }, "name", { value: "UpdatePhoneNumberInstance" });
    
                    /**
                     * Calls UpdatePhoneNumberInstance.
                     * @function updatePhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest} request UpdatePhoneNumberInstanceRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumberInstance>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#deletePhoneNumberInstance}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef DeletePhoneNumberInstanceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} [response] PhoneNumberInstance
                     */
    
                    /**
                     * Calls DeletePhoneNumberInstance.
                     * @function deletePhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest} request DeletePhoneNumberInstanceRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.DeletePhoneNumberInstanceCallback} callback Node-style callback called with the error, if any, and PhoneNumberInstance
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.deletePhoneNumberInstance = function deletePhoneNumberInstance(request, callback) {
                        return this.rpcCall(deletePhoneNumberInstance, $root.enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest, $root.enfonica.numbering.v1beta1.PhoneNumberInstance, request, callback);
                    }, "name", { value: "DeletePhoneNumberInstance" });
    
                    /**
                     * Calls DeletePhoneNumberInstance.
                     * @function deletePhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest} request DeletePhoneNumberInstanceRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumberInstance>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumberInstances#getProvisionedPhoneNumberInstance}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @typedef GetProvisionedPhoneNumberInstanceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} [response] PhoneNumberInstance
                     */
    
                    /**
                     * Calls GetProvisionedPhoneNumberInstance.
                     * @function getProvisionedPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest} request GetProvisionedPhoneNumberInstanceRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstances.GetProvisionedPhoneNumberInstanceCallback} callback Node-style callback called with the error, if any, and PhoneNumberInstance
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumberInstances.prototype.getProvisionedPhoneNumberInstance = function getProvisionedPhoneNumberInstance(request, callback) {
                        return this.rpcCall(getProvisionedPhoneNumberInstance, $root.enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest, $root.enfonica.numbering.v1beta1.PhoneNumberInstance, request, callback);
                    }, "name", { value: "GetProvisionedPhoneNumberInstance" });
    
                    /**
                     * Calls GetProvisionedPhoneNumberInstance.
                     * @function getProvisionedPhoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstances
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest} request GetProvisionedPhoneNumberInstanceRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumberInstance>} Promise
                     * @variation 2
                     */
    
                    return PhoneNumberInstances;
                })();
    
                v1beta1.PhoneNumberInstance = (function() {
    
                    /**
                     * Properties of a PhoneNumberInstance.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IPhoneNumberInstance
                     * @property {string|null} [name] PhoneNumberInstance name
                     * @property {enfonica.numbering.v1beta1.IPhoneNumber|null} [phoneNumber] PhoneNumberInstance phoneNumber
                     * @property {string|null} [displayName] PhoneNumberInstance displayName
                     * @property {Object.<string,string>|null} [labels] PhoneNumberInstance labels
                     * @property {Array.<string>|null} [incomingMessageHandlerUris] PhoneNumberInstance incomingMessageHandlerUris
                     * @property {Array.<string>|null} [incomingCallHandlerUris] PhoneNumberInstance incomingCallHandlerUris
                     * @property {google.protobuf.ITimestamp|null} [createTime] PhoneNumberInstance createTime
                     * @property {google.protobuf.ITimestamp|null} [deleteTime] PhoneNumberInstance deleteTime
                     * @property {enfonica.numbering.v1beta1.PhoneNumberInstance.LifecycleState|null} [lifecycleState] PhoneNumberInstance lifecycleState
                     */
    
                    /**
                     * Constructs a new PhoneNumberInstance.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a PhoneNumberInstance.
                     * @implements IPhoneNumberInstance
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IPhoneNumberInstance=} [properties] Properties to set
                     */
                    function PhoneNumberInstance(properties) {
                        this.labels = {};
                        this.incomingMessageHandlerUris = [];
                        this.incomingCallHandlerUris = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PhoneNumberInstance name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.name = "";
    
                    /**
                     * PhoneNumberInstance phoneNumber.
                     * @member {enfonica.numbering.v1beta1.IPhoneNumber|null|undefined} phoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.phoneNumber = null;
    
                    /**
                     * PhoneNumberInstance displayName.
                     * @member {string} displayName
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.displayName = "";
    
                    /**
                     * PhoneNumberInstance labels.
                     * @member {Object.<string,string>} labels
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.labels = $util.emptyObject;
    
                    /**
                     * PhoneNumberInstance incomingMessageHandlerUris.
                     * @member {Array.<string>} incomingMessageHandlerUris
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.incomingMessageHandlerUris = $util.emptyArray;
    
                    /**
                     * PhoneNumberInstance incomingCallHandlerUris.
                     * @member {Array.<string>} incomingCallHandlerUris
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.incomingCallHandlerUris = $util.emptyArray;
    
                    /**
                     * PhoneNumberInstance createTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} createTime
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.createTime = null;
    
                    /**
                     * PhoneNumberInstance deleteTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} deleteTime
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.deleteTime = null;
    
                    /**
                     * PhoneNumberInstance lifecycleState.
                     * @member {enfonica.numbering.v1beta1.PhoneNumberInstance.LifecycleState} lifecycleState
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     */
                    PhoneNumberInstance.prototype.lifecycleState = 0;
    
                    /**
                     * Creates a new PhoneNumberInstance instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumberInstance=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.PhoneNumberInstance} PhoneNumberInstance instance
                     */
                    PhoneNumberInstance.create = function create(properties) {
                        return new PhoneNumberInstance(properties);
                    };
    
                    /**
                     * Encodes the specified PhoneNumberInstance message. Does not implicitly {@link enfonica.numbering.v1beta1.PhoneNumberInstance.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumberInstance} message PhoneNumberInstance message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PhoneNumberInstance.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                            $root.enfonica.numbering.v1beta1.PhoneNumber.encode(message.phoneNumber, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
                        if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                            for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
                        if (message.incomingMessageHandlerUris != null && message.incomingMessageHandlerUris.length)
                            for (var i = 0; i < message.incomingMessageHandlerUris.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.incomingMessageHandlerUris[i]);
                        if (message.incomingCallHandlerUris != null && message.incomingCallHandlerUris.length)
                            for (var i = 0; i < message.incomingCallHandlerUris.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.incomingCallHandlerUris[i]);
                        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                            $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.deleteTime != null && Object.hasOwnProperty.call(message, "deleteTime"))
                            $root.google.protobuf.Timestamp.encode(message.deleteTime, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.lifecycleState != null && Object.hasOwnProperty.call(message, "lifecycleState"))
                            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.lifecycleState);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PhoneNumberInstance message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.PhoneNumberInstance.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumberInstance} message PhoneNumberInstance message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PhoneNumberInstance.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PhoneNumberInstance message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.PhoneNumberInstance} PhoneNumberInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PhoneNumberInstance.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.PhoneNumberInstance(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.displayName = reader.string();
                                break;
                            case 4:
                                if (message.labels === $util.emptyObject)
                                    message.labels = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.labels[key] = value;
                                break;
                            case 5:
                                if (!(message.incomingMessageHandlerUris && message.incomingMessageHandlerUris.length))
                                    message.incomingMessageHandlerUris = [];
                                message.incomingMessageHandlerUris.push(reader.string());
                                break;
                            case 6:
                                if (!(message.incomingCallHandlerUris && message.incomingCallHandlerUris.length))
                                    message.incomingCallHandlerUris = [];
                                message.incomingCallHandlerUris.push(reader.string());
                                break;
                            case 10:
                                message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.deleteTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 12:
                                message.lifecycleState = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a PhoneNumberInstance message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.PhoneNumberInstance} PhoneNumberInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PhoneNumberInstance.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PhoneNumberInstance message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PhoneNumberInstance.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                            var error = $root.enfonica.numbering.v1beta1.PhoneNumber.verify(message.phoneNumber);
                            if (error)
                                return "phoneNumber." + error;
                        }
                        if (message.displayName != null && message.hasOwnProperty("displayName"))
                            if (!$util.isString(message.displayName))
                                return "displayName: string expected";
                        if (message.labels != null && message.hasOwnProperty("labels")) {
                            if (!$util.isObject(message.labels))
                                return "labels: object expected";
                            var key = Object.keys(message.labels);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.labels[key[i]]))
                                    return "labels: string{k:string} expected";
                        }
                        if (message.incomingMessageHandlerUris != null && message.hasOwnProperty("incomingMessageHandlerUris")) {
                            if (!Array.isArray(message.incomingMessageHandlerUris))
                                return "incomingMessageHandlerUris: array expected";
                            for (var i = 0; i < message.incomingMessageHandlerUris.length; ++i)
                                if (!$util.isString(message.incomingMessageHandlerUris[i]))
                                    return "incomingMessageHandlerUris: string[] expected";
                        }
                        if (message.incomingCallHandlerUris != null && message.hasOwnProperty("incomingCallHandlerUris")) {
                            if (!Array.isArray(message.incomingCallHandlerUris))
                                return "incomingCallHandlerUris: array expected";
                            for (var i = 0; i < message.incomingCallHandlerUris.length; ++i)
                                if (!$util.isString(message.incomingCallHandlerUris[i]))
                                    return "incomingCallHandlerUris: string[] expected";
                        }
                        if (message.createTime != null && message.hasOwnProperty("createTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                            if (error)
                                return "createTime." + error;
                        }
                        if (message.deleteTime != null && message.hasOwnProperty("deleteTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.deleteTime);
                            if (error)
                                return "deleteTime." + error;
                        }
                        if (message.lifecycleState != null && message.hasOwnProperty("lifecycleState"))
                            switch (message.lifecycleState) {
                            default:
                                return "lifecycleState: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a PhoneNumberInstance message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.PhoneNumberInstance} PhoneNumberInstance
                     */
                    PhoneNumberInstance.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.PhoneNumberInstance)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.PhoneNumberInstance();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.phoneNumber != null) {
                            if (typeof object.phoneNumber !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.phoneNumber: object expected");
                            message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.fromObject(object.phoneNumber);
                        }
                        if (object.displayName != null)
                            message.displayName = String(object.displayName);
                        if (object.labels) {
                            if (typeof object.labels !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.labels: object expected");
                            message.labels = {};
                            for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                                message.labels[keys[i]] = String(object.labels[keys[i]]);
                        }
                        if (object.incomingMessageHandlerUris) {
                            if (!Array.isArray(object.incomingMessageHandlerUris))
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.incomingMessageHandlerUris: array expected");
                            message.incomingMessageHandlerUris = [];
                            for (var i = 0; i < object.incomingMessageHandlerUris.length; ++i)
                                message.incomingMessageHandlerUris[i] = String(object.incomingMessageHandlerUris[i]);
                        }
                        if (object.incomingCallHandlerUris) {
                            if (!Array.isArray(object.incomingCallHandlerUris))
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.incomingCallHandlerUris: array expected");
                            message.incomingCallHandlerUris = [];
                            for (var i = 0; i < object.incomingCallHandlerUris.length; ++i)
                                message.incomingCallHandlerUris[i] = String(object.incomingCallHandlerUris[i]);
                        }
                        if (object.createTime != null) {
                            if (typeof object.createTime !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.createTime: object expected");
                            message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                        }
                        if (object.deleteTime != null) {
                            if (typeof object.deleteTime !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumberInstance.deleteTime: object expected");
                            message.deleteTime = $root.google.protobuf.Timestamp.fromObject(object.deleteTime);
                        }
                        switch (object.lifecycleState) {
                        case "LIFECYCLE_STATE_UNKNOWN":
                        case 0:
                            message.lifecycleState = 0;
                            break;
                        case "ACTIVE":
                        case 1:
                            message.lifecycleState = 1;
                            break;
                        case "DELETED":
                        case 2:
                            message.lifecycleState = 2;
                            break;
                        case "SUSPENDED":
                        case 3:
                            message.lifecycleState = 3;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PhoneNumberInstance message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @static
                     * @param {enfonica.numbering.v1beta1.PhoneNumberInstance} message PhoneNumberInstance
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PhoneNumberInstance.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.incomingMessageHandlerUris = [];
                            object.incomingCallHandlerUris = [];
                        }
                        if (options.objects || options.defaults)
                            object.labels = {};
                        if (options.defaults) {
                            object.name = "";
                            object.phoneNumber = null;
                            object.displayName = "";
                            object.createTime = null;
                            object.deleteTime = null;
                            object.lifecycleState = options.enums === String ? "LIFECYCLE_STATE_UNKNOWN" : 0;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            object.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.toObject(message.phoneNumber, options);
                        if (message.displayName != null && message.hasOwnProperty("displayName"))
                            object.displayName = message.displayName;
                        var keys2;
                        if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                            object.labels = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.labels[keys2[j]] = message.labels[keys2[j]];
                        }
                        if (message.incomingMessageHandlerUris && message.incomingMessageHandlerUris.length) {
                            object.incomingMessageHandlerUris = [];
                            for (var j = 0; j < message.incomingMessageHandlerUris.length; ++j)
                                object.incomingMessageHandlerUris[j] = message.incomingMessageHandlerUris[j];
                        }
                        if (message.incomingCallHandlerUris && message.incomingCallHandlerUris.length) {
                            object.incomingCallHandlerUris = [];
                            for (var j = 0; j < message.incomingCallHandlerUris.length; ++j)
                                object.incomingCallHandlerUris[j] = message.incomingCallHandlerUris[j];
                        }
                        if (message.createTime != null && message.hasOwnProperty("createTime"))
                            object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                        if (message.deleteTime != null && message.hasOwnProperty("deleteTime"))
                            object.deleteTime = $root.google.protobuf.Timestamp.toObject(message.deleteTime, options);
                        if (message.lifecycleState != null && message.hasOwnProperty("lifecycleState"))
                            object.lifecycleState = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumberInstance.LifecycleState[message.lifecycleState] : message.lifecycleState;
                        return object;
                    };
    
                    /**
                     * Converts this PhoneNumberInstance to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.PhoneNumberInstance
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PhoneNumberInstance.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * LifecycleState enum.
                     * @name enfonica.numbering.v1beta1.PhoneNumberInstance.LifecycleState
                     * @enum {number}
                     * @property {number} LIFECYCLE_STATE_UNKNOWN=0 LIFECYCLE_STATE_UNKNOWN value
                     * @property {number} ACTIVE=1 ACTIVE value
                     * @property {number} DELETED=2 DELETED value
                     * @property {number} SUSPENDED=3 SUSPENDED value
                     */
                    PhoneNumberInstance.LifecycleState = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "LIFECYCLE_STATE_UNKNOWN"] = 0;
                        values[valuesById[1] = "ACTIVE"] = 1;
                        values[valuesById[2] = "DELETED"] = 2;
                        values[valuesById[3] = "SUSPENDED"] = 3;
                        return values;
                    })();
    
                    return PhoneNumberInstance;
                })();
    
                v1beta1.CreatePhoneNumberInstanceRequest = (function() {
    
                    /**
                     * Properties of a CreatePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface ICreatePhoneNumberInstanceRequest
                     * @property {string|null} [parent] CreatePhoneNumberInstanceRequest parent
                     * @property {enfonica.numbering.v1beta1.IPhoneNumberInstance|null} [phoneNumberInstance] CreatePhoneNumberInstanceRequest phoneNumberInstance
                     */
    
                    /**
                     * Constructs a new CreatePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a CreatePhoneNumberInstanceRequest.
                     * @implements ICreatePhoneNumberInstanceRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest=} [properties] Properties to set
                     */
                    function CreatePhoneNumberInstanceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CreatePhoneNumberInstanceRequest parent.
                     * @member {string} parent
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @instance
                     */
                    CreatePhoneNumberInstanceRequest.prototype.parent = "";
    
                    /**
                     * CreatePhoneNumberInstanceRequest phoneNumberInstance.
                     * @member {enfonica.numbering.v1beta1.IPhoneNumberInstance|null|undefined} phoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @instance
                     */
                    CreatePhoneNumberInstanceRequest.prototype.phoneNumberInstance = null;
    
                    /**
                     * Creates a new CreatePhoneNumberInstanceRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest} CreatePhoneNumberInstanceRequest instance
                     */
                    CreatePhoneNumberInstanceRequest.create = function create(properties) {
                        return new CreatePhoneNumberInstanceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified CreatePhoneNumberInstanceRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest} message CreatePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePhoneNumberInstanceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                        if (message.phoneNumberInstance != null && Object.hasOwnProperty.call(message, "phoneNumberInstance"))
                            $root.enfonica.numbering.v1beta1.PhoneNumberInstance.encode(message.phoneNumberInstance, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CreatePhoneNumberInstanceRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberInstanceRequest} message CreatePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePhoneNumberInstanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CreatePhoneNumberInstanceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest} CreatePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePhoneNumberInstanceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.parent = reader.string();
                                break;
                            case 2:
                                message.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CreatePhoneNumberInstanceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest} CreatePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePhoneNumberInstanceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CreatePhoneNumberInstanceRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreatePhoneNumberInstanceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            if (!$util.isString(message.parent))
                                return "parent: string expected";
                        if (message.phoneNumberInstance != null && message.hasOwnProperty("phoneNumberInstance")) {
                            var error = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.verify(message.phoneNumberInstance);
                            if (error)
                                return "phoneNumberInstance." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a CreatePhoneNumberInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest} CreatePhoneNumberInstanceRequest
                     */
                    CreatePhoneNumberInstanceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest();
                        if (object.parent != null)
                            message.parent = String(object.parent);
                        if (object.phoneNumberInstance != null) {
                            if (typeof object.phoneNumberInstance !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest.phoneNumberInstance: object expected");
                            message.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.fromObject(object.phoneNumberInstance);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CreatePhoneNumberInstanceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest} message CreatePhoneNumberInstanceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreatePhoneNumberInstanceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.parent = "";
                            object.phoneNumberInstance = null;
                        }
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            object.parent = message.parent;
                        if (message.phoneNumberInstance != null && message.hasOwnProperty("phoneNumberInstance"))
                            object.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.toObject(message.phoneNumberInstance, options);
                        return object;
                    };
    
                    /**
                     * Converts this CreatePhoneNumberInstanceRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberInstanceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreatePhoneNumberInstanceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CreatePhoneNumberInstanceRequest;
                })();
    
                v1beta1.GetPhoneNumberInstanceRequest = (function() {
    
                    /**
                     * Properties of a GetPhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IGetPhoneNumberInstanceRequest
                     * @property {string|null} [name] GetPhoneNumberInstanceRequest name
                     */
    
                    /**
                     * Constructs a new GetPhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a GetPhoneNumberInstanceRequest.
                     * @implements IGetPhoneNumberInstanceRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest=} [properties] Properties to set
                     */
                    function GetPhoneNumberInstanceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GetPhoneNumberInstanceRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @instance
                     */
                    GetPhoneNumberInstanceRequest.prototype.name = "";
    
                    /**
                     * Creates a new GetPhoneNumberInstanceRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest} GetPhoneNumberInstanceRequest instance
                     */
                    GetPhoneNumberInstanceRequest.create = function create(properties) {
                        return new GetPhoneNumberInstanceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified GetPhoneNumberInstanceRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest} message GetPhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPhoneNumberInstanceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GetPhoneNumberInstanceRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberInstanceRequest} message GetPhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPhoneNumberInstanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GetPhoneNumberInstanceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest} GetPhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPhoneNumberInstanceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GetPhoneNumberInstanceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest} GetPhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPhoneNumberInstanceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GetPhoneNumberInstanceRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPhoneNumberInstanceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a GetPhoneNumberInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest} GetPhoneNumberInstanceRequest
                     */
                    GetPhoneNumberInstanceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GetPhoneNumberInstanceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest} message GetPhoneNumberInstanceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPhoneNumberInstanceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };
    
                    /**
                     * Converts this GetPhoneNumberInstanceRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberInstanceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPhoneNumberInstanceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GetPhoneNumberInstanceRequest;
                })();
    
                v1beta1.ListPhoneNumberInstancesRequest = (function() {
    
                    /**
                     * Properties of a ListPhoneNumberInstancesRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IListPhoneNumberInstancesRequest
                     * @property {string|null} [parent] ListPhoneNumberInstancesRequest parent
                     * @property {number|null} [pageSize] ListPhoneNumberInstancesRequest pageSize
                     * @property {string|null} [pageToken] ListPhoneNumberInstancesRequest pageToken
                     * @property {string|null} [prefix] ListPhoneNumberInstancesRequest prefix
                     * @property {boolean|null} [includeDeleted] ListPhoneNumberInstancesRequest includeDeleted
                     */
    
                    /**
                     * Constructs a new ListPhoneNumberInstancesRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a ListPhoneNumberInstancesRequest.
                     * @implements IListPhoneNumberInstancesRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest=} [properties] Properties to set
                     */
                    function ListPhoneNumberInstancesRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ListPhoneNumberInstancesRequest parent.
                     * @member {string} parent
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     */
                    ListPhoneNumberInstancesRequest.prototype.parent = "";
    
                    /**
                     * ListPhoneNumberInstancesRequest pageSize.
                     * @member {number} pageSize
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     */
                    ListPhoneNumberInstancesRequest.prototype.pageSize = 0;
    
                    /**
                     * ListPhoneNumberInstancesRequest pageToken.
                     * @member {string} pageToken
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     */
                    ListPhoneNumberInstancesRequest.prototype.pageToken = "";
    
                    /**
                     * ListPhoneNumberInstancesRequest prefix.
                     * @member {string} prefix
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     */
                    ListPhoneNumberInstancesRequest.prototype.prefix = "";
    
                    /**
                     * ListPhoneNumberInstancesRequest includeDeleted.
                     * @member {boolean} includeDeleted
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     */
                    ListPhoneNumberInstancesRequest.prototype.includeDeleted = false;
    
                    /**
                     * Creates a new ListPhoneNumberInstancesRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest} ListPhoneNumberInstancesRequest instance
                     */
                    ListPhoneNumberInstancesRequest.create = function create(properties) {
                        return new ListPhoneNumberInstancesRequest(properties);
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumberInstancesRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest} message ListPhoneNumberInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumberInstancesRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                        if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                        if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                        if (message.prefix != null && Object.hasOwnProperty.call(message, "prefix"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.prefix);
                        if (message.includeDeleted != null && Object.hasOwnProperty.call(message, "includeDeleted"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includeDeleted);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumberInstancesRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesRequest} message ListPhoneNumberInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumberInstancesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ListPhoneNumberInstancesRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest} ListPhoneNumberInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumberInstancesRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.parent = reader.string();
                                break;
                            case 2:
                                message.pageSize = reader.int32();
                                break;
                            case 3:
                                message.pageToken = reader.string();
                                break;
                            case 4:
                                message.prefix = reader.string();
                                break;
                            case 5:
                                message.includeDeleted = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ListPhoneNumberInstancesRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest} ListPhoneNumberInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumberInstancesRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ListPhoneNumberInstancesRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListPhoneNumberInstancesRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            if (!$util.isString(message.parent))
                                return "parent: string expected";
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            if (!$util.isInteger(message.pageSize))
                                return "pageSize: integer expected";
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            if (!$util.isString(message.pageToken))
                                return "pageToken: string expected";
                        if (message.prefix != null && message.hasOwnProperty("prefix"))
                            if (!$util.isString(message.prefix))
                                return "prefix: string expected";
                        if (message.includeDeleted != null && message.hasOwnProperty("includeDeleted"))
                            if (typeof message.includeDeleted !== "boolean")
                                return "includeDeleted: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a ListPhoneNumberInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest} ListPhoneNumberInstancesRequest
                     */
                    ListPhoneNumberInstancesRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest();
                        if (object.parent != null)
                            message.parent = String(object.parent);
                        if (object.pageSize != null)
                            message.pageSize = object.pageSize | 0;
                        if (object.pageToken != null)
                            message.pageToken = String(object.pageToken);
                        if (object.prefix != null)
                            message.prefix = String(object.prefix);
                        if (object.includeDeleted != null)
                            message.includeDeleted = Boolean(object.includeDeleted);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ListPhoneNumberInstancesRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest} message ListPhoneNumberInstancesRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListPhoneNumberInstancesRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.parent = "";
                            object.pageSize = 0;
                            object.pageToken = "";
                            object.prefix = "";
                            object.includeDeleted = false;
                        }
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            object.parent = message.parent;
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            object.pageSize = message.pageSize;
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            object.pageToken = message.pageToken;
                        if (message.prefix != null && message.hasOwnProperty("prefix"))
                            object.prefix = message.prefix;
                        if (message.includeDeleted != null && message.hasOwnProperty("includeDeleted"))
                            object.includeDeleted = message.includeDeleted;
                        return object;
                    };
    
                    /**
                     * Converts this ListPhoneNumberInstancesRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListPhoneNumberInstancesRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ListPhoneNumberInstancesRequest;
                })();
    
                v1beta1.ListPhoneNumberInstancesResponse = (function() {
    
                    /**
                     * Properties of a ListPhoneNumberInstancesResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IListPhoneNumberInstancesResponse
                     * @property {Array.<enfonica.numbering.v1beta1.IPhoneNumberInstance>|null} [phoneNumberInstances] ListPhoneNumberInstancesResponse phoneNumberInstances
                     * @property {string|null} [nextPageToken] ListPhoneNumberInstancesResponse nextPageToken
                     */
    
                    /**
                     * Constructs a new ListPhoneNumberInstancesResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a ListPhoneNumberInstancesResponse.
                     * @implements IListPhoneNumberInstancesResponse
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesResponse=} [properties] Properties to set
                     */
                    function ListPhoneNumberInstancesResponse(properties) {
                        this.phoneNumberInstances = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ListPhoneNumberInstancesResponse phoneNumberInstances.
                     * @member {Array.<enfonica.numbering.v1beta1.IPhoneNumberInstance>} phoneNumberInstances
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @instance
                     */
                    ListPhoneNumberInstancesResponse.prototype.phoneNumberInstances = $util.emptyArray;
    
                    /**
                     * ListPhoneNumberInstancesResponse nextPageToken.
                     * @member {string} nextPageToken
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @instance
                     */
                    ListPhoneNumberInstancesResponse.prototype.nextPageToken = "";
    
                    /**
                     * Creates a new ListPhoneNumberInstancesResponse instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesResponse=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} ListPhoneNumberInstancesResponse instance
                     */
                    ListPhoneNumberInstancesResponse.create = function create(properties) {
                        return new ListPhoneNumberInstancesResponse(properties);
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumberInstancesResponse message. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesResponse} message ListPhoneNumberInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumberInstancesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phoneNumberInstances != null && message.phoneNumberInstances.length)
                            for (var i = 0; i < message.phoneNumberInstances.length; ++i)
                                $root.enfonica.numbering.v1beta1.PhoneNumberInstance.encode(message.phoneNumberInstances[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumberInstancesResponse message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumberInstancesResponse} message ListPhoneNumberInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumberInstancesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ListPhoneNumberInstancesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} ListPhoneNumberInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumberInstancesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.phoneNumberInstances && message.phoneNumberInstances.length))
                                    message.phoneNumberInstances = [];
                                message.phoneNumberInstances.push($root.enfonica.numbering.v1beta1.PhoneNumberInstance.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.nextPageToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ListPhoneNumberInstancesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} ListPhoneNumberInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumberInstancesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ListPhoneNumberInstancesResponse message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListPhoneNumberInstancesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phoneNumberInstances != null && message.hasOwnProperty("phoneNumberInstances")) {
                            if (!Array.isArray(message.phoneNumberInstances))
                                return "phoneNumberInstances: array expected";
                            for (var i = 0; i < message.phoneNumberInstances.length; ++i) {
                                var error = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.verify(message.phoneNumberInstances[i]);
                                if (error)
                                    return "phoneNumberInstances." + error;
                            }
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            if (!$util.isString(message.nextPageToken))
                                return "nextPageToken: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ListPhoneNumberInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} ListPhoneNumberInstancesResponse
                     */
                    ListPhoneNumberInstancesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse();
                        if (object.phoneNumberInstances) {
                            if (!Array.isArray(object.phoneNumberInstances))
                                throw TypeError(".enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse.phoneNumberInstances: array expected");
                            message.phoneNumberInstances = [];
                            for (var i = 0; i < object.phoneNumberInstances.length; ++i) {
                                if (typeof object.phoneNumberInstances[i] !== "object")
                                    throw TypeError(".enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse.phoneNumberInstances: object expected");
                                message.phoneNumberInstances[i] = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.fromObject(object.phoneNumberInstances[i]);
                            }
                        }
                        if (object.nextPageToken != null)
                            message.nextPageToken = String(object.nextPageToken);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ListPhoneNumberInstancesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse} message ListPhoneNumberInstancesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListPhoneNumberInstancesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.phoneNumberInstances = [];
                        if (options.defaults)
                            object.nextPageToken = "";
                        if (message.phoneNumberInstances && message.phoneNumberInstances.length) {
                            object.phoneNumberInstances = [];
                            for (var j = 0; j < message.phoneNumberInstances.length; ++j)
                                object.phoneNumberInstances[j] = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.toObject(message.phoneNumberInstances[j], options);
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            object.nextPageToken = message.nextPageToken;
                        return object;
                    };
    
                    /**
                     * Converts this ListPhoneNumberInstancesResponse to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumberInstancesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListPhoneNumberInstancesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ListPhoneNumberInstancesResponse;
                })();
    
                v1beta1.UpdatePhoneNumberInstanceRequest = (function() {
    
                    /**
                     * Properties of an UpdatePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IUpdatePhoneNumberInstanceRequest
                     * @property {string|null} [name] UpdatePhoneNumberInstanceRequest name
                     * @property {enfonica.numbering.v1beta1.IPhoneNumberInstance|null} [phoneNumberInstance] UpdatePhoneNumberInstanceRequest phoneNumberInstance
                     * @property {google.protobuf.IFieldMask|null} [updateMask] UpdatePhoneNumberInstanceRequest updateMask
                     */
    
                    /**
                     * Constructs a new UpdatePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents an UpdatePhoneNumberInstanceRequest.
                     * @implements IUpdatePhoneNumberInstanceRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest=} [properties] Properties to set
                     */
                    function UpdatePhoneNumberInstanceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UpdatePhoneNumberInstanceRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @instance
                     */
                    UpdatePhoneNumberInstanceRequest.prototype.name = "";
    
                    /**
                     * UpdatePhoneNumberInstanceRequest phoneNumberInstance.
                     * @member {enfonica.numbering.v1beta1.IPhoneNumberInstance|null|undefined} phoneNumberInstance
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @instance
                     */
                    UpdatePhoneNumberInstanceRequest.prototype.phoneNumberInstance = null;
    
                    /**
                     * UpdatePhoneNumberInstanceRequest updateMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @instance
                     */
                    UpdatePhoneNumberInstanceRequest.prototype.updateMask = null;
    
                    /**
                     * Creates a new UpdatePhoneNumberInstanceRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest} UpdatePhoneNumberInstanceRequest instance
                     */
                    UpdatePhoneNumberInstanceRequest.create = function create(properties) {
                        return new UpdatePhoneNumberInstanceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified UpdatePhoneNumberInstanceRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest} message UpdatePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePhoneNumberInstanceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.phoneNumberInstance != null && Object.hasOwnProperty.call(message, "phoneNumberInstance"))
                            $root.enfonica.numbering.v1beta1.PhoneNumberInstance.encode(message.phoneNumberInstance, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                            $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UpdatePhoneNumberInstanceRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberInstanceRequest} message UpdatePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePhoneNumberInstanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UpdatePhoneNumberInstanceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest} UpdatePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePhoneNumberInstanceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an UpdatePhoneNumberInstanceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest} UpdatePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePhoneNumberInstanceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UpdatePhoneNumberInstanceRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdatePhoneNumberInstanceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.phoneNumberInstance != null && message.hasOwnProperty("phoneNumberInstance")) {
                            var error = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.verify(message.phoneNumberInstance);
                            if (error)
                                return "phoneNumberInstance." + error;
                        }
                        if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                            var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                            if (error)
                                return "updateMask." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an UpdatePhoneNumberInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest} UpdatePhoneNumberInstanceRequest
                     */
                    UpdatePhoneNumberInstanceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.phoneNumberInstance != null) {
                            if (typeof object.phoneNumberInstance !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest.phoneNumberInstance: object expected");
                            message.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.fromObject(object.phoneNumberInstance);
                        }
                        if (object.updateMask != null) {
                            if (typeof object.updateMask !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest.updateMask: object expected");
                            message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an UpdatePhoneNumberInstanceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest} message UpdatePhoneNumberInstanceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdatePhoneNumberInstanceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.phoneNumberInstance = null;
                            object.updateMask = null;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.phoneNumberInstance != null && message.hasOwnProperty("phoneNumberInstance"))
                            object.phoneNumberInstance = $root.enfonica.numbering.v1beta1.PhoneNumberInstance.toObject(message.phoneNumberInstance, options);
                        if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                            object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                        return object;
                    };
    
                    /**
                     * Converts this UpdatePhoneNumberInstanceRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberInstanceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdatePhoneNumberInstanceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UpdatePhoneNumberInstanceRequest;
                })();
    
                v1beta1.DeletePhoneNumberInstanceRequest = (function() {
    
                    /**
                     * Properties of a DeletePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IDeletePhoneNumberInstanceRequest
                     * @property {string|null} [name] DeletePhoneNumberInstanceRequest name
                     */
    
                    /**
                     * Constructs a new DeletePhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a DeletePhoneNumberInstanceRequest.
                     * @implements IDeletePhoneNumberInstanceRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest=} [properties] Properties to set
                     */
                    function DeletePhoneNumberInstanceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeletePhoneNumberInstanceRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @instance
                     */
                    DeletePhoneNumberInstanceRequest.prototype.name = "";
    
                    /**
                     * Creates a new DeletePhoneNumberInstanceRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest} DeletePhoneNumberInstanceRequest instance
                     */
                    DeletePhoneNumberInstanceRequest.create = function create(properties) {
                        return new DeletePhoneNumberInstanceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified DeletePhoneNumberInstanceRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest} message DeletePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePhoneNumberInstanceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeletePhoneNumberInstanceRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberInstanceRequest} message DeletePhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePhoneNumberInstanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeletePhoneNumberInstanceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest} DeletePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePhoneNumberInstanceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DeletePhoneNumberInstanceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest} DeletePhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePhoneNumberInstanceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeletePhoneNumberInstanceRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeletePhoneNumberInstanceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeletePhoneNumberInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest} DeletePhoneNumberInstanceRequest
                     */
                    DeletePhoneNumberInstanceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeletePhoneNumberInstanceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest} message DeletePhoneNumberInstanceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeletePhoneNumberInstanceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };
    
                    /**
                     * Converts this DeletePhoneNumberInstanceRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberInstanceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeletePhoneNumberInstanceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DeletePhoneNumberInstanceRequest;
                })();
    
                v1beta1.GetProvisionedPhoneNumberInstanceRequest = (function() {
    
                    /**
                     * Properties of a GetProvisionedPhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IGetProvisionedPhoneNumberInstanceRequest
                     * @property {string|null} [parent] GetProvisionedPhoneNumberInstanceRequest parent
                     * @property {string|null} [phoneNumber] GetProvisionedPhoneNumberInstanceRequest phoneNumber
                     */
    
                    /**
                     * Constructs a new GetProvisionedPhoneNumberInstanceRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a GetProvisionedPhoneNumberInstanceRequest.
                     * @implements IGetProvisionedPhoneNumberInstanceRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest=} [properties] Properties to set
                     */
                    function GetProvisionedPhoneNumberInstanceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GetProvisionedPhoneNumberInstanceRequest parent.
                     * @member {string} parent
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @instance
                     */
                    GetProvisionedPhoneNumberInstanceRequest.prototype.parent = "";
    
                    /**
                     * GetProvisionedPhoneNumberInstanceRequest phoneNumber.
                     * @member {string} phoneNumber
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @instance
                     */
                    GetProvisionedPhoneNumberInstanceRequest.prototype.phoneNumber = "";
    
                    /**
                     * Creates a new GetProvisionedPhoneNumberInstanceRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest} GetProvisionedPhoneNumberInstanceRequest instance
                     */
                    GetProvisionedPhoneNumberInstanceRequest.create = function create(properties) {
                        return new GetProvisionedPhoneNumberInstanceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified GetProvisionedPhoneNumberInstanceRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest} message GetProvisionedPhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetProvisionedPhoneNumberInstanceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GetProvisionedPhoneNumberInstanceRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetProvisionedPhoneNumberInstanceRequest} message GetProvisionedPhoneNumberInstanceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetProvisionedPhoneNumberInstanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GetProvisionedPhoneNumberInstanceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest} GetProvisionedPhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetProvisionedPhoneNumberInstanceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.parent = reader.string();
                                break;
                            case 2:
                                message.phoneNumber = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GetProvisionedPhoneNumberInstanceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest} GetProvisionedPhoneNumberInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetProvisionedPhoneNumberInstanceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GetProvisionedPhoneNumberInstanceRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetProvisionedPhoneNumberInstanceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            if (!$util.isString(message.parent))
                                return "parent: string expected";
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            if (!$util.isString(message.phoneNumber))
                                return "phoneNumber: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a GetProvisionedPhoneNumberInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest} GetProvisionedPhoneNumberInstanceRequest
                     */
                    GetProvisionedPhoneNumberInstanceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest();
                        if (object.parent != null)
                            message.parent = String(object.parent);
                        if (object.phoneNumber != null)
                            message.phoneNumber = String(object.phoneNumber);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GetProvisionedPhoneNumberInstanceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest} message GetProvisionedPhoneNumberInstanceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetProvisionedPhoneNumberInstanceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.parent = "";
                            object.phoneNumber = "";
                        }
                        if (message.parent != null && message.hasOwnProperty("parent"))
                            object.parent = message.parent;
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            object.phoneNumber = message.phoneNumber;
                        return object;
                    };
    
                    /**
                     * Converts this GetProvisionedPhoneNumberInstanceRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.GetProvisionedPhoneNumberInstanceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetProvisionedPhoneNumberInstanceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GetProvisionedPhoneNumberInstanceRequest;
                })();
    
                v1beta1.PhoneNumbers = (function() {
    
                    /**
                     * Constructs a new PhoneNumbers service.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a PhoneNumbers
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function PhoneNumbers(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
    
                    (PhoneNumbers.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PhoneNumbers;
    
                    /**
                     * Creates new PhoneNumbers service using the specified rpc implementation.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {PhoneNumbers} RPC service. Useful where requests and/or responses are streamed.
                     */
                    PhoneNumbers.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#createPhoneNumber}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef CreatePhoneNumberCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumber} [response] PhoneNumber
                     */
    
                    /**
                     * Calls CreatePhoneNumber.
                     * @function createPhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest} request CreatePhoneNumberRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.CreatePhoneNumberCallback} callback Node-style callback called with the error, if any, and PhoneNumber
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.createPhoneNumber = function createPhoneNumber(request, callback) {
                        return this.rpcCall(createPhoneNumber, $root.enfonica.numbering.v1beta1.CreatePhoneNumberRequest, $root.enfonica.numbering.v1beta1.PhoneNumber, request, callback);
                    }, "name", { value: "CreatePhoneNumber" });
    
                    /**
                     * Calls CreatePhoneNumber.
                     * @function createPhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest} request CreatePhoneNumberRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumber>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#getPhoneNumber}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef GetPhoneNumberCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumber} [response] PhoneNumber
                     */
    
                    /**
                     * Calls GetPhoneNumber.
                     * @function getPhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest} request GetPhoneNumberRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.GetPhoneNumberCallback} callback Node-style callback called with the error, if any, and PhoneNumber
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.getPhoneNumber = function getPhoneNumber(request, callback) {
                        return this.rpcCall(getPhoneNumber, $root.enfonica.numbering.v1beta1.GetPhoneNumberRequest, $root.enfonica.numbering.v1beta1.PhoneNumber, request, callback);
                    }, "name", { value: "GetPhoneNumber" });
    
                    /**
                     * Calls GetPhoneNumber.
                     * @function getPhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest} request GetPhoneNumberRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumber>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#listPhoneNumbers}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef ListPhoneNumbersCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} [response] ListPhoneNumbersResponse
                     */
    
                    /**
                     * Calls ListPhoneNumbers.
                     * @function listPhoneNumbers
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest} request ListPhoneNumbersRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.ListPhoneNumbersCallback} callback Node-style callback called with the error, if any, and ListPhoneNumbersResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.listPhoneNumbers = function listPhoneNumbers(request, callback) {
                        return this.rpcCall(listPhoneNumbers, $root.enfonica.numbering.v1beta1.ListPhoneNumbersRequest, $root.enfonica.numbering.v1beta1.ListPhoneNumbersResponse, request, callback);
                    }, "name", { value: "ListPhoneNumbers" });
    
                    /**
                     * Calls ListPhoneNumbers.
                     * @function listPhoneNumbers
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest} request ListPhoneNumbersRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.ListPhoneNumbersResponse>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#updatePhoneNumber}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef UpdatePhoneNumberCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumber} [response] PhoneNumber
                     */
    
                    /**
                     * Calls UpdatePhoneNumber.
                     * @function updatePhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest} request UpdatePhoneNumberRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.UpdatePhoneNumberCallback} callback Node-style callback called with the error, if any, and PhoneNumber
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.updatePhoneNumber = function updatePhoneNumber(request, callback) {
                        return this.rpcCall(updatePhoneNumber, $root.enfonica.numbering.v1beta1.UpdatePhoneNumberRequest, $root.enfonica.numbering.v1beta1.PhoneNumber, request, callback);
                    }, "name", { value: "UpdatePhoneNumber" });
    
                    /**
                     * Calls UpdatePhoneNumber.
                     * @function updatePhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest} request UpdatePhoneNumberRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumber>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#deletePhoneNumber}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef DeletePhoneNumberCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.PhoneNumber} [response] PhoneNumber
                     */
    
                    /**
                     * Calls DeletePhoneNumber.
                     * @function deletePhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest} request DeletePhoneNumberRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.DeletePhoneNumberCallback} callback Node-style callback called with the error, if any, and PhoneNumber
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.deletePhoneNumber = function deletePhoneNumber(request, callback) {
                        return this.rpcCall(deletePhoneNumber, $root.enfonica.numbering.v1beta1.DeletePhoneNumberRequest, $root.enfonica.numbering.v1beta1.PhoneNumber, request, callback);
                    }, "name", { value: "DeletePhoneNumber" });
    
                    /**
                     * Calls DeletePhoneNumber.
                     * @function deletePhoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest} request DeletePhoneNumberRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.PhoneNumber>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link enfonica.numbering.v1beta1.PhoneNumbers#searchPhoneNumbers}.
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @typedef SearchPhoneNumbersCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} [response] SearchPhoneNumbersResponse
                     */
    
                    /**
                     * Calls SearchPhoneNumbers.
                     * @function searchPhoneNumbers
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest} request SearchPhoneNumbersRequest message or plain object
                     * @param {enfonica.numbering.v1beta1.PhoneNumbers.SearchPhoneNumbersCallback} callback Node-style callback called with the error, if any, and SearchPhoneNumbersResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(PhoneNumbers.prototype.searchPhoneNumbers = function searchPhoneNumbers(request, callback) {
                        return this.rpcCall(searchPhoneNumbers, $root.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest, $root.enfonica.numbering.v1beta1.SearchPhoneNumbersResponse, request, callback);
                    }, "name", { value: "SearchPhoneNumbers" });
    
                    /**
                     * Calls SearchPhoneNumbers.
                     * @function searchPhoneNumbers
                     * @memberof enfonica.numbering.v1beta1.PhoneNumbers
                     * @instance
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest} request SearchPhoneNumbersRequest message or plain object
                     * @returns {Promise<enfonica.numbering.v1beta1.SearchPhoneNumbersResponse>} Promise
                     * @variation 2
                     */
    
                    return PhoneNumbers;
                })();
    
                v1beta1.PhoneNumber = (function() {
    
                    /**
                     * Properties of a PhoneNumber.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IPhoneNumber
                     * @property {string|null} [name] PhoneNumber name
                     * @property {string|null} [phoneNumber] PhoneNumber phoneNumber
                     * @property {Array.<enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability>|null} [capabilities] PhoneNumber capabilities
                     * @property {string|null} [sku] PhoneNumber sku
                     * @property {string|null} [carrier] PhoneNumber carrier
                     * @property {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType|null} [numberType] PhoneNumber numberType
                     * @property {string|null} [countryCode] PhoneNumber countryCode
                     * @property {google.protobuf.ITimestamp|null} [createTime] PhoneNumber createTime
                     * @property {google.protobuf.ITimestamp|null} [deleteTime] PhoneNumber deleteTime
                     * @property {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberState|null} [state] PhoneNumber state
                     * @property {string|null} [localAccessArea] PhoneNumber localAccessArea
                     */
    
                    /**
                     * Constructs a new PhoneNumber.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a PhoneNumber.
                     * @implements IPhoneNumber
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IPhoneNumber=} [properties] Properties to set
                     */
                    function PhoneNumber(properties) {
                        this.capabilities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PhoneNumber name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.name = "";
    
                    /**
                     * PhoneNumber phoneNumber.
                     * @member {string} phoneNumber
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.phoneNumber = "";
    
                    /**
                     * PhoneNumber capabilities.
                     * @member {Array.<enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability>} capabilities
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.capabilities = $util.emptyArray;
    
                    /**
                     * PhoneNumber sku.
                     * @member {string} sku
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.sku = "";
    
                    /**
                     * PhoneNumber carrier.
                     * @member {string} carrier
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.carrier = "";
    
                    /**
                     * PhoneNumber numberType.
                     * @member {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType} numberType
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.numberType = 0;
    
                    /**
                     * PhoneNumber countryCode.
                     * @member {string} countryCode
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.countryCode = "";
    
                    /**
                     * PhoneNumber createTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} createTime
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.createTime = null;
    
                    /**
                     * PhoneNumber deleteTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} deleteTime
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.deleteTime = null;
    
                    /**
                     * PhoneNumber state.
                     * @member {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberState} state
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.state = 0;
    
                    /**
                     * PhoneNumber localAccessArea.
                     * @member {string} localAccessArea
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     */
                    PhoneNumber.prototype.localAccessArea = "";
    
                    /**
                     * Creates a new PhoneNumber instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumber=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.PhoneNumber} PhoneNumber instance
                     */
                    PhoneNumber.create = function create(properties) {
                        return new PhoneNumber(properties);
                    };
    
                    /**
                     * Encodes the specified PhoneNumber message. Does not implicitly {@link enfonica.numbering.v1beta1.PhoneNumber.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumber} message PhoneNumber message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PhoneNumber.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneNumber);
                        if (message.capabilities != null && message.capabilities.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.capabilities.length; ++i)
                                writer.int32(message.capabilities[i]);
                            writer.ldelim();
                        }
                        if (message.sku != null && Object.hasOwnProperty.call(message, "sku"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.sku);
                        if (message.carrier != null && Object.hasOwnProperty.call(message, "carrier"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.carrier);
                        if (message.numberType != null && Object.hasOwnProperty.call(message, "numberType"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.numberType);
                        if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.countryCode);
                        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                            $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.deleteTime != null && Object.hasOwnProperty.call(message, "deleteTime"))
                            $root.google.protobuf.Timestamp.encode(message.deleteTime, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.state);
                        if (message.localAccessArea != null && Object.hasOwnProperty.call(message, "localAccessArea"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.localAccessArea);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.PhoneNumber.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {enfonica.numbering.v1beta1.IPhoneNumber} message PhoneNumber message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PhoneNumber.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PhoneNumber message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.PhoneNumber} PhoneNumber
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PhoneNumber.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.PhoneNumber();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.phoneNumber = reader.string();
                                break;
                            case 3:
                                if (!(message.capabilities && message.capabilities.length))
                                    message.capabilities = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.capabilities.push(reader.int32());
                                } else
                                    message.capabilities.push(reader.int32());
                                break;
                            case 4:
                                message.sku = reader.string();
                                break;
                            case 5:
                                message.carrier = reader.string();
                                break;
                            case 10:
                                message.numberType = reader.int32();
                                break;
                            case 11:
                                message.countryCode = reader.string();
                                break;
                            case 12:
                                message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 13:
                                message.deleteTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.state = reader.int32();
                                break;
                            case 15:
                                message.localAccessArea = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.PhoneNumber} PhoneNumber
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PhoneNumber.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PhoneNumber message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PhoneNumber.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            if (!$util.isString(message.phoneNumber))
                                return "phoneNumber: string expected";
                        if (message.capabilities != null && message.hasOwnProperty("capabilities")) {
                            if (!Array.isArray(message.capabilities))
                                return "capabilities: array expected";
                            for (var i = 0; i < message.capabilities.length; ++i)
                                switch (message.capabilities[i]) {
                                default:
                                    return "capabilities: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                                case 4:
                                    break;
                                }
                        }
                        if (message.sku != null && message.hasOwnProperty("sku"))
                            if (!$util.isString(message.sku))
                                return "sku: string expected";
                        if (message.carrier != null && message.hasOwnProperty("carrier"))
                            if (!$util.isString(message.carrier))
                                return "carrier: string expected";
                        if (message.numberType != null && message.hasOwnProperty("numberType"))
                            switch (message.numberType) {
                            default:
                                return "numberType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                            if (!$util.isString(message.countryCode))
                                return "countryCode: string expected";
                        if (message.createTime != null && message.hasOwnProperty("createTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                            if (error)
                                return "createTime." + error;
                        }
                        if (message.deleteTime != null && message.hasOwnProperty("deleteTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.deleteTime);
                            if (error)
                                return "deleteTime." + error;
                        }
                        if (message.state != null && message.hasOwnProperty("state"))
                            switch (message.state) {
                            default:
                                return "state: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.localAccessArea != null && message.hasOwnProperty("localAccessArea"))
                            if (!$util.isString(message.localAccessArea))
                                return "localAccessArea: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.PhoneNumber} PhoneNumber
                     */
                    PhoneNumber.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.PhoneNumber)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.PhoneNumber();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.phoneNumber != null)
                            message.phoneNumber = String(object.phoneNumber);
                        if (object.capabilities) {
                            if (!Array.isArray(object.capabilities))
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumber.capabilities: array expected");
                            message.capabilities = [];
                            for (var i = 0; i < object.capabilities.length; ++i)
                                switch (object.capabilities[i]) {
                                default:
                                case "PHONE_NUMBER_CAPABILITY_UNSPECIFIED":
                                case 0:
                                    message.capabilities[i] = 0;
                                    break;
                                case "SMS":
                                case 1:
                                    message.capabilities[i] = 1;
                                    break;
                                case "MMS":
                                case 2:
                                    message.capabilities[i] = 2;
                                    break;
                                case "VOICE":
                                case 4:
                                    message.capabilities[i] = 4;
                                    break;
                                }
                        }
                        if (object.sku != null)
                            message.sku = String(object.sku);
                        if (object.carrier != null)
                            message.carrier = String(object.carrier);
                        switch (object.numberType) {
                        case "PHONE_NUMBER_TYPE_UNSPECIFIED":
                        case 0:
                            message.numberType = 0;
                            break;
                        case "LOCAL":
                        case 1:
                            message.numberType = 1;
                            break;
                        case "NATIONAL":
                        case 2:
                            message.numberType = 2;
                            break;
                        case "MOBILE":
                        case 3:
                            message.numberType = 3;
                            break;
                        case "TOLL_FREE":
                        case 4:
                            message.numberType = 4;
                            break;
                        case "SHARED_RATE":
                        case 5:
                            message.numberType = 5;
                            break;
                        }
                        if (object.countryCode != null)
                            message.countryCode = String(object.countryCode);
                        if (object.createTime != null) {
                            if (typeof object.createTime !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumber.createTime: object expected");
                            message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                        }
                        if (object.deleteTime != null) {
                            if (typeof object.deleteTime !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.PhoneNumber.deleteTime: object expected");
                            message.deleteTime = $root.google.protobuf.Timestamp.fromObject(object.deleteTime);
                        }
                        switch (object.state) {
                        case "PHONE_NUMBER_STATE_UNSPECIFIED":
                        case 0:
                            message.state = 0;
                            break;
                        case "AVAILABLE":
                        case 1:
                            message.state = 1;
                            break;
                        case "IN_USE":
                        case 2:
                            message.state = 2;
                            break;
                        case "QUARANTINED":
                        case 3:
                            message.state = 3;
                            break;
                        case "DELETED":
                        case 4:
                            message.state = 4;
                            break;
                        }
                        if (object.localAccessArea != null)
                            message.localAccessArea = String(object.localAccessArea);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @static
                     * @param {enfonica.numbering.v1beta1.PhoneNumber} message PhoneNumber
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PhoneNumber.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.capabilities = [];
                        if (options.defaults) {
                            object.name = "";
                            object.phoneNumber = "";
                            object.sku = "";
                            object.carrier = "";
                            object.numberType = options.enums === String ? "PHONE_NUMBER_TYPE_UNSPECIFIED" : 0;
                            object.countryCode = "";
                            object.createTime = null;
                            object.deleteTime = null;
                            object.state = options.enums === String ? "PHONE_NUMBER_STATE_UNSPECIFIED" : 0;
                            object.localAccessArea = "";
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            object.phoneNumber = message.phoneNumber;
                        if (message.capabilities && message.capabilities.length) {
                            object.capabilities = [];
                            for (var j = 0; j < message.capabilities.length; ++j)
                                object.capabilities[j] = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability[message.capabilities[j]] : message.capabilities[j];
                        }
                        if (message.sku != null && message.hasOwnProperty("sku"))
                            object.sku = message.sku;
                        if (message.carrier != null && message.hasOwnProperty("carrier"))
                            object.carrier = message.carrier;
                        if (message.numberType != null && message.hasOwnProperty("numberType"))
                            object.numberType = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType[message.numberType] : message.numberType;
                        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                            object.countryCode = message.countryCode;
                        if (message.createTime != null && message.hasOwnProperty("createTime"))
                            object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                        if (message.deleteTime != null && message.hasOwnProperty("deleteTime"))
                            object.deleteTime = $root.google.protobuf.Timestamp.toObject(message.deleteTime, options);
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberState[message.state] : message.state;
                        if (message.localAccessArea != null && message.hasOwnProperty("localAccessArea"))
                            object.localAccessArea = message.localAccessArea;
                        return object;
                    };
    
                    /**
                     * Converts this PhoneNumber to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.PhoneNumber
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PhoneNumber.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * PhoneNumberState enum.
                     * @name enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberState
                     * @enum {number}
                     * @property {number} PHONE_NUMBER_STATE_UNSPECIFIED=0 PHONE_NUMBER_STATE_UNSPECIFIED value
                     * @property {number} AVAILABLE=1 AVAILABLE value
                     * @property {number} IN_USE=2 IN_USE value
                     * @property {number} QUARANTINED=3 QUARANTINED value
                     * @property {number} DELETED=4 DELETED value
                     */
                    PhoneNumber.PhoneNumberState = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "PHONE_NUMBER_STATE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "AVAILABLE"] = 1;
                        values[valuesById[2] = "IN_USE"] = 2;
                        values[valuesById[3] = "QUARANTINED"] = 3;
                        values[valuesById[4] = "DELETED"] = 4;
                        return values;
                    })();
    
                    /**
                     * PhoneNumberCapability enum.
                     * @name enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability
                     * @enum {number}
                     * @property {number} PHONE_NUMBER_CAPABILITY_UNSPECIFIED=0 PHONE_NUMBER_CAPABILITY_UNSPECIFIED value
                     * @property {number} SMS=1 SMS value
                     * @property {number} MMS=2 MMS value
                     * @property {number} VOICE=4 VOICE value
                     */
                    PhoneNumber.PhoneNumberCapability = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "PHONE_NUMBER_CAPABILITY_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "SMS"] = 1;
                        values[valuesById[2] = "MMS"] = 2;
                        values[valuesById[4] = "VOICE"] = 4;
                        return values;
                    })();
    
                    /**
                     * PhoneNumberType enum.
                     * @name enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType
                     * @enum {number}
                     * @property {number} PHONE_NUMBER_TYPE_UNSPECIFIED=0 PHONE_NUMBER_TYPE_UNSPECIFIED value
                     * @property {number} LOCAL=1 LOCAL value
                     * @property {number} NATIONAL=2 NATIONAL value
                     * @property {number} MOBILE=3 MOBILE value
                     * @property {number} TOLL_FREE=4 TOLL_FREE value
                     * @property {number} SHARED_RATE=5 SHARED_RATE value
                     */
                    PhoneNumber.PhoneNumberType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "PHONE_NUMBER_TYPE_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "LOCAL"] = 1;
                        values[valuesById[2] = "NATIONAL"] = 2;
                        values[valuesById[3] = "MOBILE"] = 3;
                        values[valuesById[4] = "TOLL_FREE"] = 4;
                        values[valuesById[5] = "SHARED_RATE"] = 5;
                        return values;
                    })();
    
                    return PhoneNumber;
                })();
    
                v1beta1.CreatePhoneNumberRequest = (function() {
    
                    /**
                     * Properties of a CreatePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface ICreatePhoneNumberRequest
                     * @property {enfonica.numbering.v1beta1.IPhoneNumber|null} [phoneNumber] CreatePhoneNumberRequest phoneNumber
                     */
    
                    /**
                     * Constructs a new CreatePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a CreatePhoneNumberRequest.
                     * @implements ICreatePhoneNumberRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest=} [properties] Properties to set
                     */
                    function CreatePhoneNumberRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CreatePhoneNumberRequest phoneNumber.
                     * @member {enfonica.numbering.v1beta1.IPhoneNumber|null|undefined} phoneNumber
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @instance
                     */
                    CreatePhoneNumberRequest.prototype.phoneNumber = null;
    
                    /**
                     * Creates a new CreatePhoneNumberRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberRequest} CreatePhoneNumberRequest instance
                     */
                    CreatePhoneNumberRequest.create = function create(properties) {
                        return new CreatePhoneNumberRequest(properties);
                    };
    
                    /**
                     * Encodes the specified CreatePhoneNumberRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.CreatePhoneNumberRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest} message CreatePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePhoneNumberRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                            $root.enfonica.numbering.v1beta1.PhoneNumber.encode(message.phoneNumber, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CreatePhoneNumberRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.CreatePhoneNumberRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ICreatePhoneNumberRequest} message CreatePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePhoneNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CreatePhoneNumberRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberRequest} CreatePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePhoneNumberRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.CreatePhoneNumberRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CreatePhoneNumberRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberRequest} CreatePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePhoneNumberRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CreatePhoneNumberRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreatePhoneNumberRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                            var error = $root.enfonica.numbering.v1beta1.PhoneNumber.verify(message.phoneNumber);
                            if (error)
                                return "phoneNumber." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a CreatePhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.CreatePhoneNumberRequest} CreatePhoneNumberRequest
                     */
                    CreatePhoneNumberRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.CreatePhoneNumberRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.CreatePhoneNumberRequest();
                        if (object.phoneNumber != null) {
                            if (typeof object.phoneNumber !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.CreatePhoneNumberRequest.phoneNumber: object expected");
                            message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.fromObject(object.phoneNumber);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CreatePhoneNumberRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.CreatePhoneNumberRequest} message CreatePhoneNumberRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreatePhoneNumberRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.phoneNumber = null;
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            object.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.toObject(message.phoneNumber, options);
                        return object;
                    };
    
                    /**
                     * Converts this CreatePhoneNumberRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.CreatePhoneNumberRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreatePhoneNumberRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CreatePhoneNumberRequest;
                })();
    
                v1beta1.GetPhoneNumberRequest = (function() {
    
                    /**
                     * Properties of a GetPhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IGetPhoneNumberRequest
                     * @property {string|null} [name] GetPhoneNumberRequest name
                     */
    
                    /**
                     * Constructs a new GetPhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a GetPhoneNumberRequest.
                     * @implements IGetPhoneNumberRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest=} [properties] Properties to set
                     */
                    function GetPhoneNumberRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GetPhoneNumberRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @instance
                     */
                    GetPhoneNumberRequest.prototype.name = "";
    
                    /**
                     * Creates a new GetPhoneNumberRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberRequest} GetPhoneNumberRequest instance
                     */
                    GetPhoneNumberRequest.create = function create(properties) {
                        return new GetPhoneNumberRequest(properties);
                    };
    
                    /**
                     * Encodes the specified GetPhoneNumberRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.GetPhoneNumberRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest} message GetPhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPhoneNumberRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GetPhoneNumberRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.GetPhoneNumberRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IGetPhoneNumberRequest} message GetPhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPhoneNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GetPhoneNumberRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberRequest} GetPhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPhoneNumberRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.GetPhoneNumberRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GetPhoneNumberRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberRequest} GetPhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPhoneNumberRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GetPhoneNumberRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPhoneNumberRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a GetPhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.GetPhoneNumberRequest} GetPhoneNumberRequest
                     */
                    GetPhoneNumberRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.GetPhoneNumberRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.GetPhoneNumberRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GetPhoneNumberRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.GetPhoneNumberRequest} message GetPhoneNumberRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPhoneNumberRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };
    
                    /**
                     * Converts this GetPhoneNumberRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.GetPhoneNumberRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPhoneNumberRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GetPhoneNumberRequest;
                })();
    
                v1beta1.ListPhoneNumbersRequest = (function() {
    
                    /**
                     * Properties of a ListPhoneNumbersRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IListPhoneNumbersRequest
                     * @property {number|null} [pageSize] ListPhoneNumbersRequest pageSize
                     * @property {string|null} [pageToken] ListPhoneNumbersRequest pageToken
                     */
    
                    /**
                     * Constructs a new ListPhoneNumbersRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a ListPhoneNumbersRequest.
                     * @implements IListPhoneNumbersRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest=} [properties] Properties to set
                     */
                    function ListPhoneNumbersRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ListPhoneNumbersRequest pageSize.
                     * @member {number} pageSize
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @instance
                     */
                    ListPhoneNumbersRequest.prototype.pageSize = 0;
    
                    /**
                     * ListPhoneNumbersRequest pageToken.
                     * @member {string} pageToken
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @instance
                     */
                    ListPhoneNumbersRequest.prototype.pageToken = "";
    
                    /**
                     * Creates a new ListPhoneNumbersRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersRequest} ListPhoneNumbersRequest instance
                     */
                    ListPhoneNumbersRequest.create = function create(properties) {
                        return new ListPhoneNumbersRequest(properties);
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumbersRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumbersRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest} message ListPhoneNumbersRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumbersRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageSize);
                        if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pageToken);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumbersRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumbersRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersRequest} message ListPhoneNumbersRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumbersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ListPhoneNumbersRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersRequest} ListPhoneNumbersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumbersRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.ListPhoneNumbersRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.pageSize = reader.int32();
                                break;
                            case 2:
                                message.pageToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ListPhoneNumbersRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersRequest} ListPhoneNumbersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumbersRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ListPhoneNumbersRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListPhoneNumbersRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            if (!$util.isInteger(message.pageSize))
                                return "pageSize: integer expected";
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            if (!$util.isString(message.pageToken))
                                return "pageToken: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ListPhoneNumbersRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersRequest} ListPhoneNumbersRequest
                     */
                    ListPhoneNumbersRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.ListPhoneNumbersRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.ListPhoneNumbersRequest();
                        if (object.pageSize != null)
                            message.pageSize = object.pageSize | 0;
                        if (object.pageToken != null)
                            message.pageToken = String(object.pageToken);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ListPhoneNumbersRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumbersRequest} message ListPhoneNumbersRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListPhoneNumbersRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.pageSize = 0;
                            object.pageToken = "";
                        }
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            object.pageSize = message.pageSize;
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            object.pageToken = message.pageToken;
                        return object;
                    };
    
                    /**
                     * Converts this ListPhoneNumbersRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListPhoneNumbersRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ListPhoneNumbersRequest;
                })();
    
                v1beta1.ListPhoneNumbersResponse = (function() {
    
                    /**
                     * Properties of a ListPhoneNumbersResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IListPhoneNumbersResponse
                     * @property {Array.<enfonica.numbering.v1beta1.IPhoneNumber>|null} [phoneNumbers] ListPhoneNumbersResponse phoneNumbers
                     * @property {string|null} [nextPageToken] ListPhoneNumbersResponse nextPageToken
                     */
    
                    /**
                     * Constructs a new ListPhoneNumbersResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a ListPhoneNumbersResponse.
                     * @implements IListPhoneNumbersResponse
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersResponse=} [properties] Properties to set
                     */
                    function ListPhoneNumbersResponse(properties) {
                        this.phoneNumbers = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ListPhoneNumbersResponse phoneNumbers.
                     * @member {Array.<enfonica.numbering.v1beta1.IPhoneNumber>} phoneNumbers
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @instance
                     */
                    ListPhoneNumbersResponse.prototype.phoneNumbers = $util.emptyArray;
    
                    /**
                     * ListPhoneNumbersResponse nextPageToken.
                     * @member {string} nextPageToken
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @instance
                     */
                    ListPhoneNumbersResponse.prototype.nextPageToken = "";
    
                    /**
                     * Creates a new ListPhoneNumbersResponse instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersResponse=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} ListPhoneNumbersResponse instance
                     */
                    ListPhoneNumbersResponse.create = function create(properties) {
                        return new ListPhoneNumbersResponse(properties);
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumbersResponse message. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumbersResponse.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersResponse} message ListPhoneNumbersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumbersResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phoneNumbers != null && message.phoneNumbers.length)
                            for (var i = 0; i < message.phoneNumbers.length; ++i)
                                $root.enfonica.numbering.v1beta1.PhoneNumber.encode(message.phoneNumbers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ListPhoneNumbersResponse message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.ListPhoneNumbersResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.IListPhoneNumbersResponse} message ListPhoneNumbersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListPhoneNumbersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ListPhoneNumbersResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} ListPhoneNumbersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumbersResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.ListPhoneNumbersResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.phoneNumbers && message.phoneNumbers.length))
                                    message.phoneNumbers = [];
                                message.phoneNumbers.push($root.enfonica.numbering.v1beta1.PhoneNumber.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.nextPageToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ListPhoneNumbersResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} ListPhoneNumbersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListPhoneNumbersResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ListPhoneNumbersResponse message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListPhoneNumbersResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phoneNumbers != null && message.hasOwnProperty("phoneNumbers")) {
                            if (!Array.isArray(message.phoneNumbers))
                                return "phoneNumbers: array expected";
                            for (var i = 0; i < message.phoneNumbers.length; ++i) {
                                var error = $root.enfonica.numbering.v1beta1.PhoneNumber.verify(message.phoneNumbers[i]);
                                if (error)
                                    return "phoneNumbers." + error;
                            }
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            if (!$util.isString(message.nextPageToken))
                                return "nextPageToken: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ListPhoneNumbersResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} ListPhoneNumbersResponse
                     */
                    ListPhoneNumbersResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.ListPhoneNumbersResponse)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.ListPhoneNumbersResponse();
                        if (object.phoneNumbers) {
                            if (!Array.isArray(object.phoneNumbers))
                                throw TypeError(".enfonica.numbering.v1beta1.ListPhoneNumbersResponse.phoneNumbers: array expected");
                            message.phoneNumbers = [];
                            for (var i = 0; i < object.phoneNumbers.length; ++i) {
                                if (typeof object.phoneNumbers[i] !== "object")
                                    throw TypeError(".enfonica.numbering.v1beta1.ListPhoneNumbersResponse.phoneNumbers: object expected");
                                message.phoneNumbers[i] = $root.enfonica.numbering.v1beta1.PhoneNumber.fromObject(object.phoneNumbers[i]);
                            }
                        }
                        if (object.nextPageToken != null)
                            message.nextPageToken = String(object.nextPageToken);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ListPhoneNumbersResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.ListPhoneNumbersResponse} message ListPhoneNumbersResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListPhoneNumbersResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.phoneNumbers = [];
                        if (options.defaults)
                            object.nextPageToken = "";
                        if (message.phoneNumbers && message.phoneNumbers.length) {
                            object.phoneNumbers = [];
                            for (var j = 0; j < message.phoneNumbers.length; ++j)
                                object.phoneNumbers[j] = $root.enfonica.numbering.v1beta1.PhoneNumber.toObject(message.phoneNumbers[j], options);
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            object.nextPageToken = message.nextPageToken;
                        return object;
                    };
    
                    /**
                     * Converts this ListPhoneNumbersResponse to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.ListPhoneNumbersResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListPhoneNumbersResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ListPhoneNumbersResponse;
                })();
    
                v1beta1.UpdatePhoneNumberRequest = (function() {
    
                    /**
                     * Properties of an UpdatePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IUpdatePhoneNumberRequest
                     * @property {string|null} [name] UpdatePhoneNumberRequest name
                     * @property {enfonica.numbering.v1beta1.IPhoneNumber|null} [phoneNumber] UpdatePhoneNumberRequest phoneNumber
                     * @property {google.protobuf.IFieldMask|null} [updateMask] UpdatePhoneNumberRequest updateMask
                     */
    
                    /**
                     * Constructs a new UpdatePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents an UpdatePhoneNumberRequest.
                     * @implements IUpdatePhoneNumberRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest=} [properties] Properties to set
                     */
                    function UpdatePhoneNumberRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UpdatePhoneNumberRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @instance
                     */
                    UpdatePhoneNumberRequest.prototype.name = "";
    
                    /**
                     * UpdatePhoneNumberRequest phoneNumber.
                     * @member {enfonica.numbering.v1beta1.IPhoneNumber|null|undefined} phoneNumber
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @instance
                     */
                    UpdatePhoneNumberRequest.prototype.phoneNumber = null;
    
                    /**
                     * UpdatePhoneNumberRequest updateMask.
                     * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @instance
                     */
                    UpdatePhoneNumberRequest.prototype.updateMask = null;
    
                    /**
                     * Creates a new UpdatePhoneNumberRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberRequest} UpdatePhoneNumberRequest instance
                     */
                    UpdatePhoneNumberRequest.create = function create(properties) {
                        return new UpdatePhoneNumberRequest(properties);
                    };
    
                    /**
                     * Encodes the specified UpdatePhoneNumberRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.UpdatePhoneNumberRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest} message UpdatePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePhoneNumberRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                            $root.enfonica.numbering.v1beta1.PhoneNumber.encode(message.phoneNumber, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                            $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UpdatePhoneNumberRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.UpdatePhoneNumberRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IUpdatePhoneNumberRequest} message UpdatePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePhoneNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UpdatePhoneNumberRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberRequest} UpdatePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePhoneNumberRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.UpdatePhoneNumberRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            case 2:
                                message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an UpdatePhoneNumberRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberRequest} UpdatePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePhoneNumberRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UpdatePhoneNumberRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdatePhoneNumberRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                            var error = $root.enfonica.numbering.v1beta1.PhoneNumber.verify(message.phoneNumber);
                            if (error)
                                return "phoneNumber." + error;
                        }
                        if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                            var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                            if (error)
                                return "updateMask." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an UpdatePhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.UpdatePhoneNumberRequest} UpdatePhoneNumberRequest
                     */
                    UpdatePhoneNumberRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.UpdatePhoneNumberRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.UpdatePhoneNumberRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.phoneNumber != null) {
                            if (typeof object.phoneNumber !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.UpdatePhoneNumberRequest.phoneNumber: object expected");
                            message.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.fromObject(object.phoneNumber);
                        }
                        if (object.updateMask != null) {
                            if (typeof object.updateMask !== "object")
                                throw TypeError(".enfonica.numbering.v1beta1.UpdatePhoneNumberRequest.updateMask: object expected");
                            message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an UpdatePhoneNumberRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.UpdatePhoneNumberRequest} message UpdatePhoneNumberRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdatePhoneNumberRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.phoneNumber = null;
                            object.updateMask = null;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                            object.phoneNumber = $root.enfonica.numbering.v1beta1.PhoneNumber.toObject(message.phoneNumber, options);
                        if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                            object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                        return object;
                    };
    
                    /**
                     * Converts this UpdatePhoneNumberRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.UpdatePhoneNumberRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdatePhoneNumberRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UpdatePhoneNumberRequest;
                })();
    
                v1beta1.DeletePhoneNumberRequest = (function() {
    
                    /**
                     * Properties of a DeletePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface IDeletePhoneNumberRequest
                     * @property {string|null} [name] DeletePhoneNumberRequest name
                     */
    
                    /**
                     * Constructs a new DeletePhoneNumberRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a DeletePhoneNumberRequest.
                     * @implements IDeletePhoneNumberRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest=} [properties] Properties to set
                     */
                    function DeletePhoneNumberRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeletePhoneNumberRequest name.
                     * @member {string} name
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @instance
                     */
                    DeletePhoneNumberRequest.prototype.name = "";
    
                    /**
                     * Creates a new DeletePhoneNumberRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberRequest} DeletePhoneNumberRequest instance
                     */
                    DeletePhoneNumberRequest.create = function create(properties) {
                        return new DeletePhoneNumberRequest(properties);
                    };
    
                    /**
                     * Encodes the specified DeletePhoneNumberRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.DeletePhoneNumberRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest} message DeletePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePhoneNumberRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeletePhoneNumberRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.DeletePhoneNumberRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.IDeletePhoneNumberRequest} message DeletePhoneNumberRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePhoneNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeletePhoneNumberRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberRequest} DeletePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePhoneNumberRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.DeletePhoneNumberRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DeletePhoneNumberRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberRequest} DeletePhoneNumberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePhoneNumberRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeletePhoneNumberRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeletePhoneNumberRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeletePhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.DeletePhoneNumberRequest} DeletePhoneNumberRequest
                     */
                    DeletePhoneNumberRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.DeletePhoneNumberRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.DeletePhoneNumberRequest();
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeletePhoneNumberRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.DeletePhoneNumberRequest} message DeletePhoneNumberRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeletePhoneNumberRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.name = "";
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };
    
                    /**
                     * Converts this DeletePhoneNumberRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.DeletePhoneNumberRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeletePhoneNumberRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DeletePhoneNumberRequest;
                })();
    
                v1beta1.SearchPhoneNumbersRequest = (function() {
    
                    /**
                     * Properties of a SearchPhoneNumbersRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface ISearchPhoneNumbersRequest
                     * @property {number|null} [pageSize] SearchPhoneNumbersRequest pageSize
                     * @property {string|null} [pageToken] SearchPhoneNumbersRequest pageToken
                     * @property {Array.<enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability>|null} [capabilities] SearchPhoneNumbersRequest capabilities
                     * @property {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType|null} [numberType] SearchPhoneNumbersRequest numberType
                     * @property {string|null} [countryCode] SearchPhoneNumbersRequest countryCode
                     * @property {string|null} [prefix] SearchPhoneNumbersRequest prefix
                     */
    
                    /**
                     * Constructs a new SearchPhoneNumbersRequest.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a SearchPhoneNumbersRequest.
                     * @implements ISearchPhoneNumbersRequest
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest=} [properties] Properties to set
                     */
                    function SearchPhoneNumbersRequest(properties) {
                        this.capabilities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SearchPhoneNumbersRequest pageSize.
                     * @member {number} pageSize
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.pageSize = 0;
    
                    /**
                     * SearchPhoneNumbersRequest pageToken.
                     * @member {string} pageToken
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.pageToken = "";
    
                    /**
                     * SearchPhoneNumbersRequest capabilities.
                     * @member {Array.<enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability>} capabilities
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.capabilities = $util.emptyArray;
    
                    /**
                     * SearchPhoneNumbersRequest numberType.
                     * @member {enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType} numberType
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.numberType = 0;
    
                    /**
                     * SearchPhoneNumbersRequest countryCode.
                     * @member {string} countryCode
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.countryCode = "";
    
                    /**
                     * SearchPhoneNumbersRequest prefix.
                     * @member {string} prefix
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     */
                    SearchPhoneNumbersRequest.prototype.prefix = "";
    
                    /**
                     * Creates a new SearchPhoneNumbersRequest instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersRequest} SearchPhoneNumbersRequest instance
                     */
                    SearchPhoneNumbersRequest.create = function create(properties) {
                        return new SearchPhoneNumbersRequest(properties);
                    };
    
                    /**
                     * Encodes the specified SearchPhoneNumbersRequest message. Does not implicitly {@link enfonica.numbering.v1beta1.SearchPhoneNumbersRequest.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest} message SearchPhoneNumbersRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SearchPhoneNumbersRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageSize);
                        if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pageToken);
                        if (message.capabilities != null && message.capabilities.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.capabilities.length; ++i)
                                writer.int32(message.capabilities[i]);
                            writer.ldelim();
                        }
                        if (message.numberType != null && Object.hasOwnProperty.call(message, "numberType"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.numberType);
                        if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.countryCode);
                        if (message.prefix != null && Object.hasOwnProperty.call(message, "prefix"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.prefix);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SearchPhoneNumbersRequest message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.SearchPhoneNumbersRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersRequest} message SearchPhoneNumbersRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SearchPhoneNumbersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SearchPhoneNumbersRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersRequest} SearchPhoneNumbersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SearchPhoneNumbersRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.pageSize = reader.int32();
                                break;
                            case 2:
                                message.pageToken = reader.string();
                                break;
                            case 3:
                                if (!(message.capabilities && message.capabilities.length))
                                    message.capabilities = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.capabilities.push(reader.int32());
                                } else
                                    message.capabilities.push(reader.int32());
                                break;
                            case 4:
                                message.numberType = reader.int32();
                                break;
                            case 5:
                                message.countryCode = reader.string();
                                break;
                            case 6:
                                message.prefix = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SearchPhoneNumbersRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersRequest} SearchPhoneNumbersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SearchPhoneNumbersRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SearchPhoneNumbersRequest message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SearchPhoneNumbersRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            if (!$util.isInteger(message.pageSize))
                                return "pageSize: integer expected";
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            if (!$util.isString(message.pageToken))
                                return "pageToken: string expected";
                        if (message.capabilities != null && message.hasOwnProperty("capabilities")) {
                            if (!Array.isArray(message.capabilities))
                                return "capabilities: array expected";
                            for (var i = 0; i < message.capabilities.length; ++i)
                                switch (message.capabilities[i]) {
                                default:
                                    return "capabilities: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                                case 4:
                                    break;
                                }
                        }
                        if (message.numberType != null && message.hasOwnProperty("numberType"))
                            switch (message.numberType) {
                            default:
                                return "numberType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                            if (!$util.isString(message.countryCode))
                                return "countryCode: string expected";
                        if (message.prefix != null && message.hasOwnProperty("prefix"))
                            if (!$util.isString(message.prefix))
                                return "prefix: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a SearchPhoneNumbersRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersRequest} SearchPhoneNumbersRequest
                     */
                    SearchPhoneNumbersRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.SearchPhoneNumbersRequest();
                        if (object.pageSize != null)
                            message.pageSize = object.pageSize | 0;
                        if (object.pageToken != null)
                            message.pageToken = String(object.pageToken);
                        if (object.capabilities) {
                            if (!Array.isArray(object.capabilities))
                                throw TypeError(".enfonica.numbering.v1beta1.SearchPhoneNumbersRequest.capabilities: array expected");
                            message.capabilities = [];
                            for (var i = 0; i < object.capabilities.length; ++i)
                                switch (object.capabilities[i]) {
                                default:
                                case "PHONE_NUMBER_CAPABILITY_UNSPECIFIED":
                                case 0:
                                    message.capabilities[i] = 0;
                                    break;
                                case "SMS":
                                case 1:
                                    message.capabilities[i] = 1;
                                    break;
                                case "MMS":
                                case 2:
                                    message.capabilities[i] = 2;
                                    break;
                                case "VOICE":
                                case 4:
                                    message.capabilities[i] = 4;
                                    break;
                                }
                        }
                        switch (object.numberType) {
                        case "PHONE_NUMBER_TYPE_UNSPECIFIED":
                        case 0:
                            message.numberType = 0;
                            break;
                        case "LOCAL":
                        case 1:
                            message.numberType = 1;
                            break;
                        case "NATIONAL":
                        case 2:
                            message.numberType = 2;
                            break;
                        case "MOBILE":
                        case 3:
                            message.numberType = 3;
                            break;
                        case "TOLL_FREE":
                        case 4:
                            message.numberType = 4;
                            break;
                        case "SHARED_RATE":
                        case 5:
                            message.numberType = 5;
                            break;
                        }
                        if (object.countryCode != null)
                            message.countryCode = String(object.countryCode);
                        if (object.prefix != null)
                            message.prefix = String(object.prefix);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SearchPhoneNumbersRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @static
                     * @param {enfonica.numbering.v1beta1.SearchPhoneNumbersRequest} message SearchPhoneNumbersRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SearchPhoneNumbersRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.capabilities = [];
                        if (options.defaults) {
                            object.pageSize = 0;
                            object.pageToken = "";
                            object.numberType = options.enums === String ? "PHONE_NUMBER_TYPE_UNSPECIFIED" : 0;
                            object.countryCode = "";
                            object.prefix = "";
                        }
                        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                            object.pageSize = message.pageSize;
                        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                            object.pageToken = message.pageToken;
                        if (message.capabilities && message.capabilities.length) {
                            object.capabilities = [];
                            for (var j = 0; j < message.capabilities.length; ++j)
                                object.capabilities[j] = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberCapability[message.capabilities[j]] : message.capabilities[j];
                        }
                        if (message.numberType != null && message.hasOwnProperty("numberType"))
                            object.numberType = options.enums === String ? $root.enfonica.numbering.v1beta1.PhoneNumber.PhoneNumberType[message.numberType] : message.numberType;
                        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                            object.countryCode = message.countryCode;
                        if (message.prefix != null && message.hasOwnProperty("prefix"))
                            object.prefix = message.prefix;
                        return object;
                    };
    
                    /**
                     * Converts this SearchPhoneNumbersRequest to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SearchPhoneNumbersRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SearchPhoneNumbersRequest;
                })();
    
                v1beta1.SearchPhoneNumbersResponse = (function() {
    
                    /**
                     * Properties of a SearchPhoneNumbersResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @interface ISearchPhoneNumbersResponse
                     * @property {Array.<enfonica.numbering.v1beta1.IPhoneNumber>|null} [phoneNumbers] SearchPhoneNumbersResponse phoneNumbers
                     * @property {string|null} [nextPageToken] SearchPhoneNumbersResponse nextPageToken
                     */
    
                    /**
                     * Constructs a new SearchPhoneNumbersResponse.
                     * @memberof enfonica.numbering.v1beta1
                     * @classdesc Represents a SearchPhoneNumbersResponse.
                     * @implements ISearchPhoneNumbersResponse
                     * @constructor
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse=} [properties] Properties to set
                     */
                    function SearchPhoneNumbersResponse(properties) {
                        this.phoneNumbers = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SearchPhoneNumbersResponse phoneNumbers.
                     * @member {Array.<enfonica.numbering.v1beta1.IPhoneNumber>} phoneNumbers
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @instance
                     */
                    SearchPhoneNumbersResponse.prototype.phoneNumbers = $util.emptyArray;
    
                    /**
                     * SearchPhoneNumbersResponse nextPageToken.
                     * @member {string} nextPageToken
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @instance
                     */
                    SearchPhoneNumbersResponse.prototype.nextPageToken = "";
    
                    /**
                     * Creates a new SearchPhoneNumbersResponse instance using the specified properties.
                     * @function create
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse=} [properties] Properties to set
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} SearchPhoneNumbersResponse instance
                     */
                    SearchPhoneNumbersResponse.create = function create(properties) {
                        return new SearchPhoneNumbersResponse(properties);
                    };
    
                    /**
                     * Encodes the specified SearchPhoneNumbersResponse message. Does not implicitly {@link enfonica.numbering.v1beta1.SearchPhoneNumbersResponse.verify|verify} messages.
                     * @function encode
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse} message SearchPhoneNumbersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SearchPhoneNumbersResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.phoneNumbers != null && message.phoneNumbers.length)
                            for (var i = 0; i < message.phoneNumbers.length; ++i)
                                $root.enfonica.numbering.v1beta1.PhoneNumber.encode(message.phoneNumbers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SearchPhoneNumbersResponse message, length delimited. Does not implicitly {@link enfonica.numbering.v1beta1.SearchPhoneNumbersResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.ISearchPhoneNumbersResponse} message SearchPhoneNumbersResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SearchPhoneNumbersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SearchPhoneNumbersResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} SearchPhoneNumbersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SearchPhoneNumbersResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.enfonica.numbering.v1beta1.SearchPhoneNumbersResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.phoneNumbers && message.phoneNumbers.length))
                                    message.phoneNumbers = [];
                                message.phoneNumbers.push($root.enfonica.numbering.v1beta1.PhoneNumber.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.nextPageToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SearchPhoneNumbersResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} SearchPhoneNumbersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SearchPhoneNumbersResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SearchPhoneNumbersResponse message.
                     * @function verify
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SearchPhoneNumbersResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.phoneNumbers != null && message.hasOwnProperty("phoneNumbers")) {
                            if (!Array.isArray(message.phoneNumbers))
                                return "phoneNumbers: array expected";
                            for (var i = 0; i < message.phoneNumbers.length; ++i) {
                                var error = $root.enfonica.numbering.v1beta1.PhoneNumber.verify(message.phoneNumbers[i]);
                                if (error)
                                    return "phoneNumbers." + error;
                            }
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            if (!$util.isString(message.nextPageToken))
                                return "nextPageToken: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a SearchPhoneNumbersResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} SearchPhoneNumbersResponse
                     */
                    SearchPhoneNumbersResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.enfonica.numbering.v1beta1.SearchPhoneNumbersResponse)
                            return object;
                        var message = new $root.enfonica.numbering.v1beta1.SearchPhoneNumbersResponse();
                        if (object.phoneNumbers) {
                            if (!Array.isArray(object.phoneNumbers))
                                throw TypeError(".enfonica.numbering.v1beta1.SearchPhoneNumbersResponse.phoneNumbers: array expected");
                            message.phoneNumbers = [];
                            for (var i = 0; i < object.phoneNumbers.length; ++i) {
                                if (typeof object.phoneNumbers[i] !== "object")
                                    throw TypeError(".enfonica.numbering.v1beta1.SearchPhoneNumbersResponse.phoneNumbers: object expected");
                                message.phoneNumbers[i] = $root.enfonica.numbering.v1beta1.PhoneNumber.fromObject(object.phoneNumbers[i]);
                            }
                        }
                        if (object.nextPageToken != null)
                            message.nextPageToken = String(object.nextPageToken);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SearchPhoneNumbersResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @static
                     * @param {enfonica.numbering.v1beta1.SearchPhoneNumbersResponse} message SearchPhoneNumbersResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SearchPhoneNumbersResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.phoneNumbers = [];
                        if (options.defaults)
                            object.nextPageToken = "";
                        if (message.phoneNumbers && message.phoneNumbers.length) {
                            object.phoneNumbers = [];
                            for (var j = 0; j < message.phoneNumbers.length; ++j)
                                object.phoneNumbers[j] = $root.enfonica.numbering.v1beta1.PhoneNumber.toObject(message.phoneNumbers[j], options);
                        }
                        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                            object.nextPageToken = message.nextPageToken;
                        return object;
                    };
    
                    /**
                     * Converts this SearchPhoneNumbersResponse to JSON.
                     * @function toJSON
                     * @memberof enfonica.numbering.v1beta1.SearchPhoneNumbersResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SearchPhoneNumbersResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SearchPhoneNumbersResponse;
                })();
    
                return v1beta1;
            })();
    
            return numbering;
        })();
    
        return enfonica;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            protobuf.FieldMask = (function() {
    
                /**
                 * Properties of a FieldMask.
                 * @memberof google.protobuf
                 * @interface IFieldMask
                 * @property {Array.<string>|null} [paths] FieldMask paths
                 */
    
                /**
                 * Constructs a new FieldMask.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldMask.
                 * @implements IFieldMask
                 * @constructor
                 * @param {google.protobuf.IFieldMask=} [properties] Properties to set
                 */
                function FieldMask(properties) {
                    this.paths = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldMask paths.
                 * @member {Array.<string>} paths
                 * @memberof google.protobuf.FieldMask
                 * @instance
                 */
                FieldMask.prototype.paths = $util.emptyArray;
    
                /**
                 * Creates a new FieldMask instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask=} [properties] Properties to set
                 * @returns {google.protobuf.FieldMask} FieldMask instance
                 */
                FieldMask.create = function create(properties) {
                    return new FieldMask(properties);
                };
    
                /**
                 * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldMask.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.paths != null && message.paths.length)
                        for (var i = 0; i < message.paths.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.paths[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldMask.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldMask message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldMask} FieldMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldMask.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldMask();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.paths && message.paths.length))
                                message.paths = [];
                            message.paths.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldMask message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldMask} FieldMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldMask.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldMask message.
                 * @function verify
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldMask.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.paths != null && message.hasOwnProperty("paths")) {
                        if (!Array.isArray(message.paths))
                            return "paths: array expected";
                        for (var i = 0; i < message.paths.length; ++i)
                            if (!$util.isString(message.paths[i]))
                                return "paths: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldMask} FieldMask
                 */
                FieldMask.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldMask)
                        return object;
                    var message = new $root.google.protobuf.FieldMask();
                    if (object.paths) {
                        if (!Array.isArray(object.paths))
                            throw TypeError(".google.protobuf.FieldMask.paths: array expected");
                        message.paths = [];
                        for (var i = 0; i < object.paths.length; ++i)
                            message.paths[i] = String(object.paths[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.FieldMask} message FieldMask
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldMask.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.paths = [];
                    if (message.paths && message.paths.length) {
                        object.paths = [];
                        for (var j = 0; j < message.paths.length; ++j)
                            object.paths[j] = message.paths[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldMask to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldMask
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldMask.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FieldMask;
            })();
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * ExtensionRange options.
                     * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.options = null;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                            $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            case 3:
                                message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.options != null && message.hasOwnProperty("options")) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                            if (error)
                                return "options." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        if (object.options != null) {
                            if (typeof object.options !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                            message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                            object.options = null;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.options != null && message.hasOwnProperty("options"))
                            object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.ExtensionRangeOptions = (function() {
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @interface IExtensionRangeOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an ExtensionRangeOptions.
                 * @implements IExtensionRangeOptions
                 * @constructor
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 */
                function ExtensionRangeOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ExtensionRangeOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new ExtensionRangeOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
                 */
                ExtensionRangeOptions.create = function create(properties) {
                    return new ExtensionRangeOptions(properties);
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ExtensionRangeOptions message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRangeOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 */
                ExtensionRangeOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                        return object;
                    var message = new $root.google.protobuf.ExtensionRangeOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRangeOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ExtensionRangeOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ExtensionRangeOptions;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 * @property {boolean|null} [proto3Optional] FieldDescriptorProto proto3Optional
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * FieldDescriptorProto proto3Optional.
                 * @member {boolean} proto3Optional
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.proto3Optional = false;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    if (message.proto3Optional != null && Object.hasOwnProperty.call(message, "proto3Optional"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3Optional);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        case 17:
                            message.proto3Optional = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        if (typeof message.proto3Optional !== "boolean")
                            return "proto3Optional: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    if (object.proto3Optional != null)
                        message.proto3Optional = Boolean(object.proto3Optional);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                        object.proto3Optional = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    if (message.proto3Optional != null && message.hasOwnProperty("proto3Optional"))
                        object.proto3Optional = message.proto3Optional;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * EnumDescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.value = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                EnumDescriptorProto.EnumReservedRange = (function() {
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @interface IEnumReservedRange
                     * @property {number|null} [start] EnumReservedRange start
                     * @property {number|null} [end] EnumReservedRange end
                     */
    
                    /**
                     * Constructs a new EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @classdesc Represents an EnumReservedRange.
                     * @implements IEnumReservedRange
                     * @constructor
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     */
                    function EnumReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EnumReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.start = 0;
    
                    /**
                     * EnumReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new EnumReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                     */
                    EnumReservedRange.create = function create(properties) {
                        return new EnumReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EnumReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnumReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     */
                    EnumReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                            return object;
                        var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this EnumReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return EnumReservedRange;
                })();
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
                 * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
                 * @property {string|null} [phpNamespace] FileOptions phpNamespace
                 * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
                 * @property {string|null} [rubyPackage] FileOptions rubyPackage
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions phpGenericServices.
                 * @member {boolean} phpGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = true;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions swiftPrefix.
                 * @member {string} swiftPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.swiftPrefix = "";
    
                /**
                 * FileOptions phpClassPrefix.
                 * @member {string} phpClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpClassPrefix = "";
    
                /**
                 * FileOptions phpNamespace.
                 * @member {string} phpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpNamespace = "";
    
                /**
                 * FileOptions phpMetadataNamespace.
                 * @member {string} phpMetadataNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpMetadataNamespace = "";
    
                /**
                 * FileOptions rubyPackage.
                 * @member {string} rubyPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.rubyPackage = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix != null && Object.hasOwnProperty.call(message, "swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.phpClassPrefix != null && Object.hasOwnProperty.call(message, "phpClassPrefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                    if (message.phpNamespace != null && Object.hasOwnProperty.call(message, "phpNamespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                    if (message.phpGenericServices != null && Object.hasOwnProperty.call(message, "phpGenericServices"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                    if (message.phpMetadataNamespace != null && Object.hasOwnProperty.call(message, "phpMetadataNamespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                    if (message.rubyPackage != null && Object.hasOwnProperty.call(message, "rubyPackage"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.int32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 42:
                            message.phpGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 39:
                            message.swiftPrefix = reader.string();
                            break;
                        case 40:
                            message.phpClassPrefix = reader.string();
                            break;
                        case 41:
                            message.phpNamespace = reader.string();
                            break;
                        case 44:
                            message.phpMetadataNamespace = reader.string();
                            break;
                        case 45:
                            message.rubyPackage = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        if (typeof message.phpGenericServices !== "boolean")
                            return "phpGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        if (!$util.isString(message.swiftPrefix))
                            return "swiftPrefix: string expected";
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        if (!$util.isString(message.phpClassPrefix))
                            return "phpClassPrefix: string expected";
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        if (!$util.isString(message.phpNamespace))
                            return "phpNamespace: string expected";
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        if (!$util.isString(message.phpMetadataNamespace))
                            return "phpMetadataNamespace: string expected";
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        if (!$util.isString(message.rubyPackage))
                            return "rubyPackage: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.phpGenericServices != null)
                        message.phpGenericServices = Boolean(object.phpGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.swiftPrefix != null)
                        message.swiftPrefix = String(object.swiftPrefix);
                    if (object.phpClassPrefix != null)
                        message.phpClassPrefix = String(object.phpClassPrefix);
                    if (object.phpNamespace != null)
                        message.phpNamespace = String(object.phpNamespace);
                    if (object.phpMetadataNamespace != null)
                        message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                    if (object.rubyPackage != null)
                        message.rubyPackage = String(object.rubyPackage);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = true;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                        object.phpClassPrefix = "";
                        object.phpNamespace = "";
                        object.phpGenericServices = false;
                        object.phpMetadataNamespace = "";
                        object.rubyPackage = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        object.swiftPrefix = message.swiftPrefix;
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        object.phpClassPrefix = message.phpClassPrefix;
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        object.phpNamespace = message.phpNamespace;
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        object.phpGenericServices = message.phpGenericServices;
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        object.phpMetadataNamespace = message.phpMetadataNamespace;
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        object.rubyPackage = message.rubyPackage;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 * @property {string|null} [".google.api.defaultHost"] ServiceOptions .google.api.defaultHost
                 * @property {string|null} [".google.api.oauthScopes"] ServiceOptions .google.api.oauthScopes
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ServiceOptions .google.api.defaultHost.
                 * @member {string} .google.api.defaultHost
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.defaultHost"] = "";
    
                /**
                 * ServiceOptions .google.api.oauthScopes.
                 * @member {string} .google.api.oauthScopes
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.oauthScopes"] = "";
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.defaultHost"] != null && Object.hasOwnProperty.call(message, ".google.api.defaultHost"))
                        writer.uint32(/* id 1049, wireType 2 =*/8394).string(message[".google.api.defaultHost"]);
                    if (message[".google.api.oauthScopes"] != null && Object.hasOwnProperty.call(message, ".google.api.oauthScopes"))
                        writer.uint32(/* id 1050, wireType 2 =*/8402).string(message[".google.api.oauthScopes"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1049:
                            message[".google.api.defaultHost"] = reader.string();
                            break;
                        case 1050:
                            message[".google.api.oauthScopes"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        if (!$util.isString(message[".google.api.defaultHost"]))
                            return ".google.api.defaultHost: string expected";
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        if (!$util.isString(message[".google.api.oauthScopes"]))
                            return ".google.api.oauthScopes: string expected";
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.defaultHost"] != null)
                        message[".google.api.defaultHost"] = String(object[".google.api.defaultHost"]);
                    if (object[".google.api.oauthScopes"] != null)
                        message[".google.api.oauthScopes"] = String(object[".google.api.oauthScopes"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".google.api.defaultHost"] = "";
                        object[".google.api.oauthScopes"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        object[".google.api.defaultHost"] = message[".google.api.defaultHost"];
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        object[".google.api.oauthScopes"] = message[".google.api.oauthScopes"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 * @property {Array.<string>|null} [".google.api.methodSignature"] MethodOptions .google.api.methodSignature
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.methodSignature"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotencyLevel.
                 * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.idempotencyLevel = 0;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * MethodOptions .google.api.methodSignature.
                 * @member {Array.<string>} .google.api.methodSignature
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.methodSignature"] = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.methodSignature"] != null && message[".google.api.methodSignature"].length)
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            writer.uint32(/* id 1051, wireType 2 =*/8410).string(message[".google.api.methodSignature"][i]);
                    if (message[".google.api.http"] != null && Object.hasOwnProperty.call(message, ".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 34:
                            message.idempotencyLevel = reader.int32();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 72295728:
                            message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                            break;
                        case 1051:
                            if (!(message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length))
                                message[".google.api.methodSignature"] = [];
                            message[".google.api.methodSignature"].push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        switch (message.idempotencyLevel) {
                        default:
                            return "idempotencyLevel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    if (message[".google.api.methodSignature"] != null && message.hasOwnProperty(".google.api.methodSignature")) {
                        if (!Array.isArray(message[".google.api.methodSignature"]))
                            return ".google.api.methodSignature: array expected";
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            if (!$util.isString(message[".google.api.methodSignature"][i]))
                                return ".google.api.methodSignature: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    switch (object.idempotencyLevel) {
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotencyLevel = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotencyLevel = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotencyLevel = 2;
                        break;
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    if (object[".google.api.methodSignature"]) {
                        if (!Array.isArray(object[".google.api.methodSignature"]))
                            throw TypeError(".google.protobuf.MethodOptions..google.api.methodSignature: array expected");
                        message[".google.api.methodSignature"] = [];
                        for (var i = 0; i < object[".google.api.methodSignature"].length; ++i)
                            message[".google.api.methodSignature"][i] = String(object[".google.api.methodSignature"][i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.methodSignature"] = [];
                    }
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length) {
                        object[".google.api.methodSignature"] = [];
                        for (var j = 0; j < message[".google.api.methodSignature"].length; ++j)
                            object[".google.api.methodSignature"][j] = message[".google.api.methodSignature"][j];
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {number}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && Object.hasOwnProperty.call(message, "fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.rules && message.rules.length))
                                message.rules = [];
                            message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.fullyDecodeReservedExpansion = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = "";
    
                /**
                 * HttpRule put.
                 * @member {string} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = "";
    
                /**
                 * HttpRule post.
                 * @member {string} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = "";
    
                /**
                 * HttpRule delete.
                 * @member {string} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = "";
    
                /**
                 * HttpRule patch.
                 * @member {string} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = "";
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && Object.hasOwnProperty.call(message, "responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.get = reader.string();
                            break;
                        case 3:
                            message.put = reader.string();
                            break;
                        case 4:
                            message.post = reader.string();
                            break;
                        case 5:
                            message["delete"] = reader.string();
                            break;
                        case 6:
                            message.patch = reader.string();
                            break;
                        case 8:
                            message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.body = reader.string();
                            break;
                        case 12:
                            message.responseBody = reader.string();
                            break;
                        case 11:
                            if (!(message.additionalBindings && message.additionalBindings.length))
                                message.additionalBindings = [];
                            message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            message.path = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CustomHttpPattern;
            })();
    
            return api;
        })();
    
        return google;
    })();

    return $root;
});
