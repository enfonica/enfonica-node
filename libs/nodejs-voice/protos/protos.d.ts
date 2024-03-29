// Copyright 2023 Google LLC
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

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace enfonica. */
export namespace enfonica {

    /** Namespace voice. */
    namespace voice {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Represents an Aliases */
            class Aliases extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Aliases service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Aliases service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Aliases;

                /**
                 * Calls CreateAlias.
                 * @param request CreateAliasRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Alias
                 */
                public createAlias(request: enfonica.voice.v1beta1.ICreateAliasRequest, callback: enfonica.voice.v1beta1.Aliases.CreateAliasCallback): void;

                /**
                 * Calls CreateAlias.
                 * @param request CreateAliasRequest message or plain object
                 * @returns Promise
                 */
                public createAlias(request: enfonica.voice.v1beta1.ICreateAliasRequest): Promise<enfonica.voice.v1beta1.Alias>;

                /**
                 * Calls GetAlias.
                 * @param request GetAliasRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Alias
                 */
                public getAlias(request: enfonica.voice.v1beta1.IGetAliasRequest, callback: enfonica.voice.v1beta1.Aliases.GetAliasCallback): void;

                /**
                 * Calls GetAlias.
                 * @param request GetAliasRequest message or plain object
                 * @returns Promise
                 */
                public getAlias(request: enfonica.voice.v1beta1.IGetAliasRequest): Promise<enfonica.voice.v1beta1.Alias>;

                /**
                 * Calls ListAliases.
                 * @param request ListAliasesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAliasesResponse
                 */
                public listAliases(request: enfonica.voice.v1beta1.IListAliasesRequest, callback: enfonica.voice.v1beta1.Aliases.ListAliasesCallback): void;

                /**
                 * Calls ListAliases.
                 * @param request ListAliasesRequest message or plain object
                 * @returns Promise
                 */
                public listAliases(request: enfonica.voice.v1beta1.IListAliasesRequest): Promise<enfonica.voice.v1beta1.ListAliasesResponse>;

                /**
                 * Calls UpdateAlias.
                 * @param request UpdateAliasRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Alias
                 */
                public updateAlias(request: enfonica.voice.v1beta1.IUpdateAliasRequest, callback: enfonica.voice.v1beta1.Aliases.UpdateAliasCallback): void;

                /**
                 * Calls UpdateAlias.
                 * @param request UpdateAliasRequest message or plain object
                 * @returns Promise
                 */
                public updateAlias(request: enfonica.voice.v1beta1.IUpdateAliasRequest): Promise<enfonica.voice.v1beta1.Alias>;

                /**
                 * Calls DeleteAlias.
                 * @param request DeleteAliasRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteAlias(request: enfonica.voice.v1beta1.IDeleteAliasRequest, callback: enfonica.voice.v1beta1.Aliases.DeleteAliasCallback): void;

                /**
                 * Calls DeleteAlias.
                 * @param request DeleteAliasRequest message or plain object
                 * @returns Promise
                 */
                public deleteAlias(request: enfonica.voice.v1beta1.IDeleteAliasRequest): Promise<google.protobuf.Empty>;
            }

            namespace Aliases {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Aliases|createAlias}.
                 * @param error Error, if any
                 * @param [response] Alias
                 */
                type CreateAliasCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Alias) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Aliases|getAlias}.
                 * @param error Error, if any
                 * @param [response] Alias
                 */
                type GetAliasCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Alias) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Aliases|listAliases}.
                 * @param error Error, if any
                 * @param [response] ListAliasesResponse
                 */
                type ListAliasesCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.ListAliasesResponse) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Aliases|updateAlias}.
                 * @param error Error, if any
                 * @param [response] Alias
                 */
                type UpdateAliasCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Alias) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Aliases|deleteAlias}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteAliasCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of an Alias. */
            interface IAlias {

                /** Alias name */
                name?: (string|null);

                /** Alias aliasId */
                aliasId?: (string|null);

                /** Alias displayName */
                displayName?: (string|null);

                /** Alias loadBalancerConfig */
                loadBalancerConfig?: (enfonica.voice.v1beta1.ILoadBalancerConfig|null);

                /** Alias createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an Alias. */
            class Alias implements IAlias {

                /**
                 * Constructs a new Alias.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IAlias);

                /** Alias name. */
                public name: string;

                /** Alias aliasId. */
                public aliasId: string;

                /** Alias displayName. */
                public displayName: string;

                /** Alias loadBalancerConfig. */
                public loadBalancerConfig?: (enfonica.voice.v1beta1.ILoadBalancerConfig|null);

                /** Alias createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Alias config. */
                public config?: "loadBalancerConfig";

                /**
                 * Creates a new Alias instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Alias instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IAlias): enfonica.voice.v1beta1.Alias;

                /**
                 * Encodes the specified Alias message. Does not implicitly {@link enfonica.voice.v1beta1.Alias.verify|verify} messages.
                 * @param message Alias message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IAlias, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Alias message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Alias.verify|verify} messages.
                 * @param message Alias message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IAlias, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Alias message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Alias
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Alias;

                /**
                 * Decodes an Alias message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Alias
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Alias;

                /**
                 * Verifies an Alias message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Alias message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Alias
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Alias;

                /**
                 * Creates a plain object from an Alias message. Also converts values to other types if specified.
                 * @param message Alias
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.Alias, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Alias to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoadBalancerConfig. */
            interface ILoadBalancerConfig {

                /** LoadBalancerConfig endpoints */
                endpoints?: (enfonica.voice.v1beta1.ILoadBalancerEndpoint[]|null);

                /** LoadBalancerConfig failoverCallHandlerUris */
                failoverCallHandlerUris?: (string[]|null);
            }

            /** Represents a LoadBalancerConfig. */
            class LoadBalancerConfig implements ILoadBalancerConfig {

                /**
                 * Constructs a new LoadBalancerConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ILoadBalancerConfig);

                /** LoadBalancerConfig endpoints. */
                public endpoints: enfonica.voice.v1beta1.ILoadBalancerEndpoint[];

                /** LoadBalancerConfig failoverCallHandlerUris. */
                public failoverCallHandlerUris: string[];

                /**
                 * Creates a new LoadBalancerConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoadBalancerConfig instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ILoadBalancerConfig): enfonica.voice.v1beta1.LoadBalancerConfig;

                /**
                 * Encodes the specified LoadBalancerConfig message. Does not implicitly {@link enfonica.voice.v1beta1.LoadBalancerConfig.verify|verify} messages.
                 * @param message LoadBalancerConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ILoadBalancerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoadBalancerConfig message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.LoadBalancerConfig.verify|verify} messages.
                 * @param message LoadBalancerConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ILoadBalancerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoadBalancerConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoadBalancerConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.LoadBalancerConfig;

                /**
                 * Decodes a LoadBalancerConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoadBalancerConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.LoadBalancerConfig;

                /**
                 * Verifies a LoadBalancerConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoadBalancerConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoadBalancerConfig
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.LoadBalancerConfig;

                /**
                 * Creates a plain object from a LoadBalancerConfig message. Also converts values to other types if specified.
                 * @param message LoadBalancerConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.LoadBalancerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoadBalancerConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LoadBalancerEndpoint. */
            interface ILoadBalancerEndpoint {

                /** LoadBalancerEndpoint uri */
                uri?: (string|null);

                /** LoadBalancerEndpoint priority */
                priority?: (number|null);

                /** LoadBalancerEndpoint weight */
                weight?: (number|null);

                /** LoadBalancerEndpoint enabled */
                enabled?: (boolean|null);
            }

            /** Represents a LoadBalancerEndpoint. */
            class LoadBalancerEndpoint implements ILoadBalancerEndpoint {

                /**
                 * Constructs a new LoadBalancerEndpoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ILoadBalancerEndpoint);

                /** LoadBalancerEndpoint uri. */
                public uri: string;

                /** LoadBalancerEndpoint priority. */
                public priority: number;

                /** LoadBalancerEndpoint weight. */
                public weight: number;

                /** LoadBalancerEndpoint enabled. */
                public enabled: boolean;

                /**
                 * Creates a new LoadBalancerEndpoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoadBalancerEndpoint instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ILoadBalancerEndpoint): enfonica.voice.v1beta1.LoadBalancerEndpoint;

                /**
                 * Encodes the specified LoadBalancerEndpoint message. Does not implicitly {@link enfonica.voice.v1beta1.LoadBalancerEndpoint.verify|verify} messages.
                 * @param message LoadBalancerEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ILoadBalancerEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoadBalancerEndpoint message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.LoadBalancerEndpoint.verify|verify} messages.
                 * @param message LoadBalancerEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ILoadBalancerEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoadBalancerEndpoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoadBalancerEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.LoadBalancerEndpoint;

                /**
                 * Decodes a LoadBalancerEndpoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoadBalancerEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.LoadBalancerEndpoint;

                /**
                 * Verifies a LoadBalancerEndpoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoadBalancerEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoadBalancerEndpoint
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.LoadBalancerEndpoint;

                /**
                 * Creates a plain object from a LoadBalancerEndpoint message. Also converts values to other types if specified.
                 * @param message LoadBalancerEndpoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.LoadBalancerEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoadBalancerEndpoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateAliasRequest. */
            interface ICreateAliasRequest {

                /** CreateAliasRequest parent */
                parent?: (string|null);

                /** CreateAliasRequest alias */
                alias?: (enfonica.voice.v1beta1.IAlias|null);

                /** CreateAliasRequest aliasId */
                aliasId?: (string|null);
            }

            /** Represents a CreateAliasRequest. */
            class CreateAliasRequest implements ICreateAliasRequest {

                /**
                 * Constructs a new CreateAliasRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICreateAliasRequest);

                /** CreateAliasRequest parent. */
                public parent: string;

                /** CreateAliasRequest alias. */
                public alias?: (enfonica.voice.v1beta1.IAlias|null);

                /** CreateAliasRequest aliasId. */
                public aliasId: string;

                /**
                 * Creates a new CreateAliasRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAliasRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICreateAliasRequest): enfonica.voice.v1beta1.CreateAliasRequest;

                /**
                 * Encodes the specified CreateAliasRequest message. Does not implicitly {@link enfonica.voice.v1beta1.CreateAliasRequest.verify|verify} messages.
                 * @param message CreateAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICreateAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAliasRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CreateAliasRequest.verify|verify} messages.
                 * @param message CreateAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICreateAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAliasRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CreateAliasRequest;

                /**
                 * Decodes a CreateAliasRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CreateAliasRequest;

                /**
                 * Verifies a CreateAliasRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAliasRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAliasRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CreateAliasRequest;

                /**
                 * Creates a plain object from a CreateAliasRequest message. Also converts values to other types if specified.
                 * @param message CreateAliasRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CreateAliasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAliasRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAliasRequest. */
            interface IGetAliasRequest {

                /** GetAliasRequest name */
                name?: (string|null);
            }

            /** Represents a GetAliasRequest. */
            class GetAliasRequest implements IGetAliasRequest {

                /**
                 * Constructs a new GetAliasRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetAliasRequest);

                /** GetAliasRequest name. */
                public name: string;

                /**
                 * Creates a new GetAliasRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAliasRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetAliasRequest): enfonica.voice.v1beta1.GetAliasRequest;

                /**
                 * Encodes the specified GetAliasRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetAliasRequest.verify|verify} messages.
                 * @param message GetAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAliasRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetAliasRequest.verify|verify} messages.
                 * @param message GetAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAliasRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetAliasRequest;

                /**
                 * Decodes a GetAliasRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetAliasRequest;

                /**
                 * Verifies a GetAliasRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAliasRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAliasRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetAliasRequest;

                /**
                 * Creates a plain object from a GetAliasRequest message. Also converts values to other types if specified.
                 * @param message GetAliasRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetAliasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAliasRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAliasesRequest. */
            interface IListAliasesRequest {

                /** ListAliasesRequest parent */
                parent?: (string|null);

                /** ListAliasesRequest pageSize */
                pageSize?: (number|null);

                /** ListAliasesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListAliasesRequest. */
            class ListAliasesRequest implements IListAliasesRequest {

                /**
                 * Constructs a new ListAliasesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListAliasesRequest);

                /** ListAliasesRequest parent. */
                public parent: string;

                /** ListAliasesRequest pageSize. */
                public pageSize: number;

                /** ListAliasesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListAliasesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAliasesRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListAliasesRequest): enfonica.voice.v1beta1.ListAliasesRequest;

                /**
                 * Encodes the specified ListAliasesRequest message. Does not implicitly {@link enfonica.voice.v1beta1.ListAliasesRequest.verify|verify} messages.
                 * @param message ListAliasesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListAliasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAliasesRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListAliasesRequest.verify|verify} messages.
                 * @param message ListAliasesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListAliasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAliasesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAliasesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListAliasesRequest;

                /**
                 * Decodes a ListAliasesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAliasesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListAliasesRequest;

                /**
                 * Verifies a ListAliasesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAliasesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAliasesRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListAliasesRequest;

                /**
                 * Creates a plain object from a ListAliasesRequest message. Also converts values to other types if specified.
                 * @param message ListAliasesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListAliasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAliasesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAliasesResponse. */
            interface IListAliasesResponse {

                /** ListAliasesResponse aliases */
                aliases?: (enfonica.voice.v1beta1.IAlias[]|null);

                /** ListAliasesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListAliasesResponse. */
            class ListAliasesResponse implements IListAliasesResponse {

                /**
                 * Constructs a new ListAliasesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListAliasesResponse);

                /** ListAliasesResponse aliases. */
                public aliases: enfonica.voice.v1beta1.IAlias[];

                /** ListAliasesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListAliasesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAliasesResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListAliasesResponse): enfonica.voice.v1beta1.ListAliasesResponse;

                /**
                 * Encodes the specified ListAliasesResponse message. Does not implicitly {@link enfonica.voice.v1beta1.ListAliasesResponse.verify|verify} messages.
                 * @param message ListAliasesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListAliasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAliasesResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListAliasesResponse.verify|verify} messages.
                 * @param message ListAliasesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListAliasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAliasesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAliasesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListAliasesResponse;

                /**
                 * Decodes a ListAliasesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAliasesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListAliasesResponse;

                /**
                 * Verifies a ListAliasesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAliasesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAliasesResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListAliasesResponse;

                /**
                 * Creates a plain object from a ListAliasesResponse message. Also converts values to other types if specified.
                 * @param message ListAliasesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListAliasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAliasesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateAliasRequest. */
            interface IUpdateAliasRequest {

                /** UpdateAliasRequest alias */
                alias?: (enfonica.voice.v1beta1.IAlias|null);

                /** UpdateAliasRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateAliasRequest. */
            class UpdateAliasRequest implements IUpdateAliasRequest {

                /**
                 * Constructs a new UpdateAliasRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IUpdateAliasRequest);

                /** UpdateAliasRequest alias. */
                public alias?: (enfonica.voice.v1beta1.IAlias|null);

                /** UpdateAliasRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateAliasRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAliasRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IUpdateAliasRequest): enfonica.voice.v1beta1.UpdateAliasRequest;

                /**
                 * Encodes the specified UpdateAliasRequest message. Does not implicitly {@link enfonica.voice.v1beta1.UpdateAliasRequest.verify|verify} messages.
                 * @param message UpdateAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IUpdateAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAliasRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.UpdateAliasRequest.verify|verify} messages.
                 * @param message UpdateAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IUpdateAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAliasRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.UpdateAliasRequest;

                /**
                 * Decodes an UpdateAliasRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.UpdateAliasRequest;

                /**
                 * Verifies an UpdateAliasRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAliasRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAliasRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.UpdateAliasRequest;

                /**
                 * Creates a plain object from an UpdateAliasRequest message. Also converts values to other types if specified.
                 * @param message UpdateAliasRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.UpdateAliasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAliasRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteAliasRequest. */
            interface IDeleteAliasRequest {

                /** DeleteAliasRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteAliasRequest. */
            class DeleteAliasRequest implements IDeleteAliasRequest {

                /**
                 * Constructs a new DeleteAliasRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IDeleteAliasRequest);

                /** DeleteAliasRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteAliasRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAliasRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IDeleteAliasRequest): enfonica.voice.v1beta1.DeleteAliasRequest;

                /**
                 * Encodes the specified DeleteAliasRequest message. Does not implicitly {@link enfonica.voice.v1beta1.DeleteAliasRequest.verify|verify} messages.
                 * @param message DeleteAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IDeleteAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAliasRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.DeleteAliasRequest.verify|verify} messages.
                 * @param message DeleteAliasRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IDeleteAliasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAliasRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.DeleteAliasRequest;

                /**
                 * Decodes a DeleteAliasRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAliasRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.DeleteAliasRequest;

                /**
                 * Verifies a DeleteAliasRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAliasRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAliasRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.DeleteAliasRequest;

                /**
                 * Creates a plain object from a DeleteAliasRequest message. Also converts values to other types if specified.
                 * @param message DeleteAliasRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.DeleteAliasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAliasRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CallRecordingConfig. */
            interface ICallRecordingConfig {

                /** CallRecordingConfig trigger */
                trigger?: (enfonica.voice.v1beta1.CallRecordingConfig.CallRecordingTrigger|keyof typeof enfonica.voice.v1beta1.CallRecordingConfig.CallRecordingTrigger|null);

                /** CallRecordingConfig postProcessing */
                postProcessing?: (enfonica.voice.v1beta1.PostProcessing[]|null);

                /** CallRecordingConfig recordingReadyUri */
                recordingReadyUri?: (string|null);

                /** CallRecordingConfig transcribe */
                transcribe?: (enfonica.voice.v1beta1.TranscribeOption|keyof typeof enfonica.voice.v1beta1.TranscribeOption|null);

                /** CallRecordingConfig transcriptionReadyUri */
                transcriptionReadyUri?: (string|null);
            }

            /** Represents a CallRecordingConfig. */
            class CallRecordingConfig implements ICallRecordingConfig {

                /**
                 * Constructs a new CallRecordingConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICallRecordingConfig);

                /** CallRecordingConfig trigger. */
                public trigger: (enfonica.voice.v1beta1.CallRecordingConfig.CallRecordingTrigger|keyof typeof enfonica.voice.v1beta1.CallRecordingConfig.CallRecordingTrigger);

                /** CallRecordingConfig postProcessing. */
                public postProcessing: enfonica.voice.v1beta1.PostProcessing[];

                /** CallRecordingConfig recordingReadyUri. */
                public recordingReadyUri: string;

                /** CallRecordingConfig transcribe. */
                public transcribe: (enfonica.voice.v1beta1.TranscribeOption|keyof typeof enfonica.voice.v1beta1.TranscribeOption);

                /** CallRecordingConfig transcriptionReadyUri. */
                public transcriptionReadyUri: string;

                /**
                 * Creates a new CallRecordingConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CallRecordingConfig instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICallRecordingConfig): enfonica.voice.v1beta1.CallRecordingConfig;

                /**
                 * Encodes the specified CallRecordingConfig message. Does not implicitly {@link enfonica.voice.v1beta1.CallRecordingConfig.verify|verify} messages.
                 * @param message CallRecordingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICallRecordingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CallRecordingConfig message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CallRecordingConfig.verify|verify} messages.
                 * @param message CallRecordingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICallRecordingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CallRecordingConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CallRecordingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CallRecordingConfig;

                /**
                 * Decodes a CallRecordingConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CallRecordingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CallRecordingConfig;

                /**
                 * Verifies a CallRecordingConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CallRecordingConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CallRecordingConfig
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CallRecordingConfig;

                /**
                 * Creates a plain object from a CallRecordingConfig message. Also converts values to other types if specified.
                 * @param message CallRecordingConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CallRecordingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CallRecordingConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace CallRecordingConfig {

                /** CallRecordingTrigger enum. */
                enum CallRecordingTrigger {
                    CALL_RECORDING_TRIGGER_UNSPECIFIED = 0,
                    DISABLED = 1,
                    ANSWER = 2,
                    BRIDGE = 3
                }
            }

            /** PostProcessing enum. */
            enum PostProcessing {
                POST_PROCESSING_UNSPECIFIED = 0,
                TRIM_SILENCE = 1
            }

            /** TranscribeOption enum. */
            enum TranscribeOption {
                TRANSCRIBE_OPTION_UNSPECIFIED = 0,
                DISABLED = 1,
                DEFAULT = 2
            }

            /** Properties of a CallRequest. */
            interface ICallRequest {

                /** CallRequest call */
                call?: (enfonica.voice.v1beta1.ICall|null);

                /** CallRequest parameters */
                parameters?: ({ [k: string]: string }|null);
            }

            /** Represents a CallRequest. */
            class CallRequest implements ICallRequest {

                /**
                 * Constructs a new CallRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICallRequest);

                /** CallRequest call. */
                public call?: (enfonica.voice.v1beta1.ICall|null);

                /** CallRequest parameters. */
                public parameters: { [k: string]: string };

                /**
                 * Creates a new CallRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CallRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICallRequest): enfonica.voice.v1beta1.CallRequest;

                /**
                 * Encodes the specified CallRequest message. Does not implicitly {@link enfonica.voice.v1beta1.CallRequest.verify|verify} messages.
                 * @param message CallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CallRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CallRequest.verify|verify} messages.
                 * @param message CallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CallRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CallRequest;

                /**
                 * Decodes a CallRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CallRequest;

                /**
                 * Verifies a CallRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CallRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CallRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CallRequest;

                /**
                 * Creates a plain object from a CallRequest message. Also converts values to other types if specified.
                 * @param message CallRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CallRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CallRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Calls */
            class Calls extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Calls service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Calls service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Calls;

                /**
                 * Calls CreateCall.
                 * @param request CreateCallRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Call
                 */
                public createCall(request: enfonica.voice.v1beta1.ICreateCallRequest, callback: enfonica.voice.v1beta1.Calls.CreateCallCallback): void;

                /**
                 * Calls CreateCall.
                 * @param request CreateCallRequest message or plain object
                 * @returns Promise
                 */
                public createCall(request: enfonica.voice.v1beta1.ICreateCallRequest): Promise<enfonica.voice.v1beta1.Call>;

                /**
                 * Calls GetCall.
                 * @param request GetCallRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Call
                 */
                public getCall(request: enfonica.voice.v1beta1.IGetCallRequest, callback: enfonica.voice.v1beta1.Calls.GetCallCallback): void;

                /**
                 * Calls GetCall.
                 * @param request GetCallRequest message or plain object
                 * @returns Promise
                 */
                public getCall(request: enfonica.voice.v1beta1.IGetCallRequest): Promise<enfonica.voice.v1beta1.Call>;

                /**
                 * Calls ListCalls.
                 * @param request ListCallsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListCallsResponse
                 */
                public listCalls(request: enfonica.voice.v1beta1.IListCallsRequest, callback: enfonica.voice.v1beta1.Calls.ListCallsCallback): void;

                /**
                 * Calls ListCalls.
                 * @param request ListCallsRequest message or plain object
                 * @returns Promise
                 */
                public listCalls(request: enfonica.voice.v1beta1.IListCallsRequest): Promise<enfonica.voice.v1beta1.ListCallsResponse>;
            }

            namespace Calls {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Calls|createCall}.
                 * @param error Error, if any
                 * @param [response] Call
                 */
                type CreateCallCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Call) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Calls|getCall}.
                 * @param error Error, if any
                 * @param [response] Call
                 */
                type GetCallCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Call) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Calls|listCalls}.
                 * @param error Error, if any
                 * @param [response] ListCallsResponse
                 */
                type ListCallsCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.ListCallsResponse) => void;
            }

            /** Properties of a Call. */
            interface ICall {

                /** Call name */
                name?: (string|null);

                /** Call to */
                to?: (string|null);

                /** Call from */
                from?: (string|null);

                /** Call fromLocation */
                fromLocation?: (enfonica.voice.v1beta1.INumberLocation|null);

                /** Call fromZone */
                fromZone?: (string|null);

                /** Call isPrivate */
                isPrivate?: (boolean|null);

                /** Call labels */
                labels?: ({ [k: string]: string }|null);

                /** Call transport */
                transport?: (enfonica.voice.v1beta1.Call.Transport|keyof typeof enfonica.voice.v1beta1.Call.Transport|null);

                /** Call direction */
                direction?: (enfonica.voice.v1beta1.Call.Direction|keyof typeof enfonica.voice.v1beta1.Call.Direction|null);

                /** Call errorCode */
                errorCode?: (string|null);

                /** Call errorMessage */
                errorMessage?: (string|null);

                /** Call price */
                price?: (google.type.IMoney|null);

                /** Call state */
                state?: (enfonica.voice.v1beta1.Call.State|keyof typeof enfonica.voice.v1beta1.Call.State|null);

                /** Call createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Call startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** Call ringTime */
                ringTime?: (google.protobuf.ITimestamp|null);

                /** Call answerTime */
                answerTime?: (google.protobuf.ITimestamp|null);

                /** Call endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** Call bridged */
                bridged?: (boolean|null);

                /** Call originatingCall */
                originatingCall?: (string|null);

                /** Call createMethod */
                createMethod?: (enfonica.voice.v1beta1.Call.CreateMethod|keyof typeof enfonica.voice.v1beta1.Call.CreateMethod|null);

                /** Call options */
                options?: (enfonica.voice.v1beta1.Call.IApiCallOptions|null);

                /** Call sipCallId */
                sipCallId?: (string|null);

                /** Call answerDuration */
                answerDuration?: (google.protobuf.IDuration|null);
            }

            /** Represents a Call. */
            class Call implements ICall {

                /**
                 * Constructs a new Call.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICall);

                /** Call name. */
                public name: string;

                /** Call to. */
                public to: string;

                /** Call from. */
                public from: string;

                /** Call fromLocation. */
                public fromLocation?: (enfonica.voice.v1beta1.INumberLocation|null);

                /** Call fromZone. */
                public fromZone: string;

                /** Call isPrivate. */
                public isPrivate: boolean;

                /** Call labels. */
                public labels: { [k: string]: string };

                /** Call transport. */
                public transport: (enfonica.voice.v1beta1.Call.Transport|keyof typeof enfonica.voice.v1beta1.Call.Transport);

                /** Call direction. */
                public direction: (enfonica.voice.v1beta1.Call.Direction|keyof typeof enfonica.voice.v1beta1.Call.Direction);

                /** Call errorCode. */
                public errorCode: string;

                /** Call errorMessage. */
                public errorMessage: string;

                /** Call price. */
                public price?: (google.type.IMoney|null);

                /** Call state. */
                public state: (enfonica.voice.v1beta1.Call.State|keyof typeof enfonica.voice.v1beta1.Call.State);

                /** Call createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Call startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** Call ringTime. */
                public ringTime?: (google.protobuf.ITimestamp|null);

                /** Call answerTime. */
                public answerTime?: (google.protobuf.ITimestamp|null);

                /** Call endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** Call bridged. */
                public bridged: boolean;

                /** Call originatingCall. */
                public originatingCall: string;

                /** Call createMethod. */
                public createMethod: (enfonica.voice.v1beta1.Call.CreateMethod|keyof typeof enfonica.voice.v1beta1.Call.CreateMethod);

                /** Call options. */
                public options?: (enfonica.voice.v1beta1.Call.IApiCallOptions|null);

                /** Call sipCallId. */
                public sipCallId: string;

                /** Call answerDuration. */
                public answerDuration?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new Call instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Call instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICall): enfonica.voice.v1beta1.Call;

                /**
                 * Encodes the specified Call message. Does not implicitly {@link enfonica.voice.v1beta1.Call.verify|verify} messages.
                 * @param message Call message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Call message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Call.verify|verify} messages.
                 * @param message Call message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Call message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Call
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Call;

                /**
                 * Decodes a Call message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Call
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Call;

                /**
                 * Verifies a Call message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Call message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Call
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Call;

                /**
                 * Creates a plain object from a Call message. Also converts values to other types if specified.
                 * @param message Call
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Call to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Call {

                /** Properties of an ApiCallOptions. */
                interface IApiCallOptions {

                    /** ApiCallOptions handlerUris */
                    handlerUris?: (string[]|null);

                    /** ApiCallOptions stateUpdateUri */
                    stateUpdateUri?: (string|null);

                    /** ApiCallOptions timeoutSeconds */
                    timeoutSeconds?: (number|null);

                    /** ApiCallOptions recording */
                    recording?: (enfonica.voice.v1beta1.ICallRecordingConfig|null);
                }

                /** Represents an ApiCallOptions. */
                class ApiCallOptions implements IApiCallOptions {

                    /**
                     * Constructs a new ApiCallOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: enfonica.voice.v1beta1.Call.IApiCallOptions);

                    /** ApiCallOptions handlerUris. */
                    public handlerUris: string[];

                    /** ApiCallOptions stateUpdateUri. */
                    public stateUpdateUri: string;

                    /** ApiCallOptions timeoutSeconds. */
                    public timeoutSeconds: number;

                    /** ApiCallOptions recording. */
                    public recording?: (enfonica.voice.v1beta1.ICallRecordingConfig|null);

                    /**
                     * Creates a new ApiCallOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApiCallOptions instance
                     */
                    public static create(properties?: enfonica.voice.v1beta1.Call.IApiCallOptions): enfonica.voice.v1beta1.Call.ApiCallOptions;

                    /**
                     * Encodes the specified ApiCallOptions message. Does not implicitly {@link enfonica.voice.v1beta1.Call.ApiCallOptions.verify|verify} messages.
                     * @param message ApiCallOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: enfonica.voice.v1beta1.Call.IApiCallOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApiCallOptions message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Call.ApiCallOptions.verify|verify} messages.
                     * @param message ApiCallOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: enfonica.voice.v1beta1.Call.IApiCallOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiCallOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiCallOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Call.ApiCallOptions;

                    /**
                     * Decodes an ApiCallOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApiCallOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Call.ApiCallOptions;

                    /**
                     * Verifies an ApiCallOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApiCallOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApiCallOptions
                     */
                    public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Call.ApiCallOptions;

                    /**
                     * Creates a plain object from an ApiCallOptions message. Also converts values to other types if specified.
                     * @param message ApiCallOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: enfonica.voice.v1beta1.Call.ApiCallOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApiCallOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    QUEUED = 1,
                    STARTING = 2,
                    RINGING = 3,
                    IN_PROGRESS = 4,
                    COMPLETED = 5,
                    FAILED = 6,
                    NOT_ANSWERED = 7,
                    BUSY = 8,
                    REJECTED = 9
                }

                /** Direction enum. */
                enum Direction {
                    DIRECTION_UNSPECIFIED = 0,
                    OUTGOING = 1,
                    INCOMING = 2
                }

                /** Transport enum. */
                enum Transport {
                    TRANSPORT_UNSPECIFIED = 0,
                    PSTN = 1,
                    CLIENT = 2,
                    SIP = 3
                }

                /** CreateMethod enum. */
                enum CreateMethod {
                    CREATE_METHOD_UNSPECIFIED = 0,
                    INCOMING_CALL = 1,
                    PARENT_CALL = 2,
                    API = 3
                }
            }

            /** Properties of a NumberLocation. */
            interface INumberLocation {

                /** NumberLocation regionCode */
                regionCode?: (string|null);

                /** NumberLocation administrativeArea */
                administrativeArea?: (string|null);

                /** NumberLocation locality */
                locality?: (string|null);

                /** NumberLocation coordinates */
                coordinates?: (google.type.ILatLng|null);
            }

            /** Represents a NumberLocation. */
            class NumberLocation implements INumberLocation {

                /**
                 * Constructs a new NumberLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.INumberLocation);

                /** NumberLocation regionCode. */
                public regionCode: string;

                /** NumberLocation administrativeArea. */
                public administrativeArea: string;

                /** NumberLocation locality. */
                public locality: string;

                /** NumberLocation coordinates. */
                public coordinates?: (google.type.ILatLng|null);

                /**
                 * Creates a new NumberLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NumberLocation instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.INumberLocation): enfonica.voice.v1beta1.NumberLocation;

                /**
                 * Encodes the specified NumberLocation message. Does not implicitly {@link enfonica.voice.v1beta1.NumberLocation.verify|verify} messages.
                 * @param message NumberLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.INumberLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NumberLocation message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.NumberLocation.verify|verify} messages.
                 * @param message NumberLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.INumberLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NumberLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NumberLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.NumberLocation;

                /**
                 * Decodes a NumberLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NumberLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.NumberLocation;

                /**
                 * Verifies a NumberLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NumberLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NumberLocation
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.NumberLocation;

                /**
                 * Creates a plain object from a NumberLocation message. Also converts values to other types if specified.
                 * @param message NumberLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.NumberLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NumberLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateCallRequest. */
            interface ICreateCallRequest {

                /** CreateCallRequest parent */
                parent?: (string|null);

                /** CreateCallRequest call */
                call?: (enfonica.voice.v1beta1.ICall|null);
            }

            /** Represents a CreateCallRequest. */
            class CreateCallRequest implements ICreateCallRequest {

                /**
                 * Constructs a new CreateCallRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICreateCallRequest);

                /** CreateCallRequest parent. */
                public parent: string;

                /** CreateCallRequest call. */
                public call?: (enfonica.voice.v1beta1.ICall|null);

                /**
                 * Creates a new CreateCallRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateCallRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICreateCallRequest): enfonica.voice.v1beta1.CreateCallRequest;

                /**
                 * Encodes the specified CreateCallRequest message. Does not implicitly {@link enfonica.voice.v1beta1.CreateCallRequest.verify|verify} messages.
                 * @param message CreateCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICreateCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateCallRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CreateCallRequest.verify|verify} messages.
                 * @param message CreateCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICreateCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateCallRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CreateCallRequest;

                /**
                 * Decodes a CreateCallRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CreateCallRequest;

                /**
                 * Verifies a CreateCallRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateCallRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateCallRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CreateCallRequest;

                /**
                 * Creates a plain object from a CreateCallRequest message. Also converts values to other types if specified.
                 * @param message CreateCallRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CreateCallRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateCallRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetCallRequest. */
            interface IGetCallRequest {

                /** GetCallRequest name */
                name?: (string|null);
            }

            /** Represents a GetCallRequest. */
            class GetCallRequest implements IGetCallRequest {

                /**
                 * Constructs a new GetCallRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetCallRequest);

                /** GetCallRequest name. */
                public name: string;

                /**
                 * Creates a new GetCallRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetCallRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetCallRequest): enfonica.voice.v1beta1.GetCallRequest;

                /**
                 * Encodes the specified GetCallRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetCallRequest.verify|verify} messages.
                 * @param message GetCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetCallRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetCallRequest.verify|verify} messages.
                 * @param message GetCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetCallRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetCallRequest;

                /**
                 * Decodes a GetCallRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetCallRequest;

                /**
                 * Verifies a GetCallRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetCallRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetCallRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetCallRequest;

                /**
                 * Creates a plain object from a GetCallRequest message. Also converts values to other types if specified.
                 * @param message GetCallRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetCallRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetCallRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListCallsRequest. */
            interface IListCallsRequest {

                /** ListCallsRequest parent */
                parent?: (string|null);

                /** ListCallsRequest pageSize */
                pageSize?: (number|null);

                /** ListCallsRequest pageToken */
                pageToken?: (string|null);

                /** ListCallsRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListCallsRequest. */
            class ListCallsRequest implements IListCallsRequest {

                /**
                 * Constructs a new ListCallsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListCallsRequest);

                /** ListCallsRequest parent. */
                public parent: string;

                /** ListCallsRequest pageSize. */
                public pageSize: number;

                /** ListCallsRequest pageToken. */
                public pageToken: string;

                /** ListCallsRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListCallsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListCallsRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListCallsRequest): enfonica.voice.v1beta1.ListCallsRequest;

                /**
                 * Encodes the specified ListCallsRequest message. Does not implicitly {@link enfonica.voice.v1beta1.ListCallsRequest.verify|verify} messages.
                 * @param message ListCallsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListCallsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListCallsRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListCallsRequest.verify|verify} messages.
                 * @param message ListCallsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListCallsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListCallsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListCallsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListCallsRequest;

                /**
                 * Decodes a ListCallsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListCallsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListCallsRequest;

                /**
                 * Verifies a ListCallsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListCallsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCallsRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListCallsRequest;

                /**
                 * Creates a plain object from a ListCallsRequest message. Also converts values to other types if specified.
                 * @param message ListCallsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListCallsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCallsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListCallsResponse. */
            interface IListCallsResponse {

                /** ListCallsResponse calls */
                calls?: (enfonica.voice.v1beta1.ICall[]|null);

                /** ListCallsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListCallsResponse. */
            class ListCallsResponse implements IListCallsResponse {

                /**
                 * Constructs a new ListCallsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListCallsResponse);

                /** ListCallsResponse calls. */
                public calls: enfonica.voice.v1beta1.ICall[];

                /** ListCallsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListCallsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListCallsResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListCallsResponse): enfonica.voice.v1beta1.ListCallsResponse;

                /**
                 * Encodes the specified ListCallsResponse message. Does not implicitly {@link enfonica.voice.v1beta1.ListCallsResponse.verify|verify} messages.
                 * @param message ListCallsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListCallsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListCallsResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListCallsResponse.verify|verify} messages.
                 * @param message ListCallsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListCallsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListCallsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListCallsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListCallsResponse;

                /**
                 * Decodes a ListCallsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListCallsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListCallsResponse;

                /**
                 * Verifies a ListCallsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListCallsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCallsResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListCallsResponse;

                /**
                 * Creates a plain object from a ListCallsResponse message. Also converts values to other types if specified.
                 * @param message ListCallsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListCallsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCallsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Recordings */
            class Recordings extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Recordings service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Recordings service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Recordings;

                /**
                 * Calls GetRecording.
                 * @param request GetRecordingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Recording
                 */
                public getRecording(request: enfonica.voice.v1beta1.IGetRecordingRequest, callback: enfonica.voice.v1beta1.Recordings.GetRecordingCallback): void;

                /**
                 * Calls GetRecording.
                 * @param request GetRecordingRequest message or plain object
                 * @returns Promise
                 */
                public getRecording(request: enfonica.voice.v1beta1.IGetRecordingRequest): Promise<enfonica.voice.v1beta1.Recording>;

                /**
                 * Calls ListRecordings.
                 * @param request ListRecordingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListRecordingsResponse
                 */
                public listRecordings(request: enfonica.voice.v1beta1.IListRecordingsRequest, callback: enfonica.voice.v1beta1.Recordings.ListRecordingsCallback): void;

                /**
                 * Calls ListRecordings.
                 * @param request ListRecordingsRequest message or plain object
                 * @returns Promise
                 */
                public listRecordings(request: enfonica.voice.v1beta1.IListRecordingsRequest): Promise<enfonica.voice.v1beta1.ListRecordingsResponse>;

                /**
                 * Calls DeleteRecording.
                 * @param request DeleteRecordingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Recording
                 */
                public deleteRecording(request: enfonica.voice.v1beta1.IDeleteRecordingRequest, callback: enfonica.voice.v1beta1.Recordings.DeleteRecordingCallback): void;

                /**
                 * Calls DeleteRecording.
                 * @param request DeleteRecordingRequest message or plain object
                 * @returns Promise
                 */
                public deleteRecording(request: enfonica.voice.v1beta1.IDeleteRecordingRequest): Promise<enfonica.voice.v1beta1.Recording>;
            }

            namespace Recordings {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Recordings|getRecording}.
                 * @param error Error, if any
                 * @param [response] Recording
                 */
                type GetRecordingCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Recording) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Recordings|listRecordings}.
                 * @param error Error, if any
                 * @param [response] ListRecordingsResponse
                 */
                type ListRecordingsCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.ListRecordingsResponse) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Recordings|deleteRecording}.
                 * @param error Error, if any
                 * @param [response] Recording
                 */
                type DeleteRecordingCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Recording) => void;
            }

            /** Properties of a Recording. */
            interface IRecording {

                /** Recording name */
                name?: (string|null);

                /** Recording state */
                state?: (enfonica.voice.v1beta1.Recording.State|keyof typeof enfonica.voice.v1beta1.Recording.State|null);

                /** Recording source */
                source?: (enfonica.voice.v1beta1.Recording.Source|keyof typeof enfonica.voice.v1beta1.Recording.Source|null);

                /** Recording duration */
                duration?: (google.protobuf.IDuration|null);

                /** Recording channelCount */
                channelCount?: (number|null);

                /** Recording postProcessing */
                postProcessing?: (enfonica.voice.v1beta1.PostProcessing[]|null);

                /** Recording errorCode */
                errorCode?: (enfonica.voice.v1beta1.Recording.ErrorCode|keyof typeof enfonica.voice.v1beta1.Recording.ErrorCode|null);

                /** Recording audio */
                audio?: (enfonica.voice.v1beta1.IRecordingAudio[]|null);

                /** Recording startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** Recording createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Recording readyUri */
                readyUri?: (string|null);
            }

            /** Represents a Recording. */
            class Recording implements IRecording {

                /**
                 * Constructs a new Recording.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IRecording);

                /** Recording name. */
                public name: string;

                /** Recording state. */
                public state: (enfonica.voice.v1beta1.Recording.State|keyof typeof enfonica.voice.v1beta1.Recording.State);

                /** Recording source. */
                public source: (enfonica.voice.v1beta1.Recording.Source|keyof typeof enfonica.voice.v1beta1.Recording.Source);

                /** Recording duration. */
                public duration?: (google.protobuf.IDuration|null);

                /** Recording channelCount. */
                public channelCount: number;

                /** Recording postProcessing. */
                public postProcessing: enfonica.voice.v1beta1.PostProcessing[];

                /** Recording errorCode. */
                public errorCode: (enfonica.voice.v1beta1.Recording.ErrorCode|keyof typeof enfonica.voice.v1beta1.Recording.ErrorCode);

                /** Recording audio. */
                public audio: enfonica.voice.v1beta1.IRecordingAudio[];

                /** Recording startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** Recording createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Recording readyUri. */
                public readyUri: string;

                /**
                 * Creates a new Recording instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Recording instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IRecording): enfonica.voice.v1beta1.Recording;

                /**
                 * Encodes the specified Recording message. Does not implicitly {@link enfonica.voice.v1beta1.Recording.verify|verify} messages.
                 * @param message Recording message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Recording message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Recording.verify|verify} messages.
                 * @param message Recording message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Recording message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Recording
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Recording;

                /**
                 * Decodes a Recording message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Recording
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Recording;

                /**
                 * Verifies a Recording message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Recording message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Recording
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Recording;

                /**
                 * Creates a plain object from a Recording message. Also converts values to other types if specified.
                 * @param message Recording
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.Recording, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Recording to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Recording {

                /** Source enum. */
                enum Source {
                    SOURCE_UNSPECIFIED = 0,
                    RECORD_ACTION = 1,
                    CALL_RECORDING = 2
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    PENDING = 1,
                    SUCCEEDED = 2,
                    EMPTY = 3,
                    FAILED = 4
                }

                /** ErrorCode enum. */
                enum ErrorCode {
                    ERROR_CODE_UNSPECIFIED = 0,
                    TIMEOUT = 1,
                    INTERNAL_ERROR = 2
                }
            }

            /** Properties of a RecordingAudio. */
            interface IRecordingAudio {

                /** RecordingAudio mimeType */
                mimeType?: (string|null);

                /** RecordingAudio encoding */
                encoding?: (enfonica.voice.v1beta1.RecordingAudio.AudioEncoding|keyof typeof enfonica.voice.v1beta1.RecordingAudio.AudioEncoding|null);

                /** RecordingAudio sampleRate */
                sampleRate?: (number|null);

                /** RecordingAudio sizeBytes */
                sizeBytes?: (number|null);

                /** RecordingAudio uri */
                uri?: (string|null);
            }

            /** Represents a RecordingAudio. */
            class RecordingAudio implements IRecordingAudio {

                /**
                 * Constructs a new RecordingAudio.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IRecordingAudio);

                /** RecordingAudio mimeType. */
                public mimeType: string;

                /** RecordingAudio encoding. */
                public encoding: (enfonica.voice.v1beta1.RecordingAudio.AudioEncoding|keyof typeof enfonica.voice.v1beta1.RecordingAudio.AudioEncoding);

                /** RecordingAudio sampleRate. */
                public sampleRate: number;

                /** RecordingAudio sizeBytes. */
                public sizeBytes: number;

                /** RecordingAudio uri. */
                public uri: string;

                /**
                 * Creates a new RecordingAudio instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RecordingAudio instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IRecordingAudio): enfonica.voice.v1beta1.RecordingAudio;

                /**
                 * Encodes the specified RecordingAudio message. Does not implicitly {@link enfonica.voice.v1beta1.RecordingAudio.verify|verify} messages.
                 * @param message RecordingAudio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IRecordingAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RecordingAudio message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.RecordingAudio.verify|verify} messages.
                 * @param message RecordingAudio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IRecordingAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RecordingAudio message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RecordingAudio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.RecordingAudio;

                /**
                 * Decodes a RecordingAudio message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RecordingAudio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.RecordingAudio;

                /**
                 * Verifies a RecordingAudio message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RecordingAudio message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RecordingAudio
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.RecordingAudio;

                /**
                 * Creates a plain object from a RecordingAudio message. Also converts values to other types if specified.
                 * @param message RecordingAudio
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.RecordingAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RecordingAudio to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace RecordingAudio {

                /** AudioEncoding enum. */
                enum AudioEncoding {
                    AUDIO_ENCODING_UNSPECIFIED = 0,
                    AUDIO_ENCODING_PCM_16BIT = 1,
                    AUDIO_ENCODING_MP3 = 2
                }
            }

            /** Properties of a GetRecordingRequest. */
            interface IGetRecordingRequest {

                /** GetRecordingRequest name */
                name?: (string|null);

                /** GetRecordingRequest view */
                view?: (enfonica.voice.v1beta1.RecordingView|keyof typeof enfonica.voice.v1beta1.RecordingView|null);
            }

            /** Represents a GetRecordingRequest. */
            class GetRecordingRequest implements IGetRecordingRequest {

                /**
                 * Constructs a new GetRecordingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetRecordingRequest);

                /** GetRecordingRequest name. */
                public name: string;

                /** GetRecordingRequest view. */
                public view: (enfonica.voice.v1beta1.RecordingView|keyof typeof enfonica.voice.v1beta1.RecordingView);

                /**
                 * Creates a new GetRecordingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetRecordingRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetRecordingRequest): enfonica.voice.v1beta1.GetRecordingRequest;

                /**
                 * Encodes the specified GetRecordingRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetRecordingRequest.verify|verify} messages.
                 * @param message GetRecordingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetRecordingRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetRecordingRequest.verify|verify} messages.
                 * @param message GetRecordingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetRecordingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetRecordingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetRecordingRequest;

                /**
                 * Decodes a GetRecordingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetRecordingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetRecordingRequest;

                /**
                 * Verifies a GetRecordingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetRecordingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetRecordingRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetRecordingRequest;

                /**
                 * Creates a plain object from a GetRecordingRequest message. Also converts values to other types if specified.
                 * @param message GetRecordingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetRecordingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetRecordingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListRecordingsRequest. */
            interface IListRecordingsRequest {

                /** ListRecordingsRequest parent */
                parent?: (string|null);

                /** ListRecordingsRequest pageSize */
                pageSize?: (number|null);

                /** ListRecordingsRequest pageToken */
                pageToken?: (string|null);

                /** ListRecordingsRequest view */
                view?: (enfonica.voice.v1beta1.RecordingView|keyof typeof enfonica.voice.v1beta1.RecordingView|null);
            }

            /** Represents a ListRecordingsRequest. */
            class ListRecordingsRequest implements IListRecordingsRequest {

                /**
                 * Constructs a new ListRecordingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListRecordingsRequest);

                /** ListRecordingsRequest parent. */
                public parent: string;

                /** ListRecordingsRequest pageSize. */
                public pageSize: number;

                /** ListRecordingsRequest pageToken. */
                public pageToken: string;

                /** ListRecordingsRequest view. */
                public view: (enfonica.voice.v1beta1.RecordingView|keyof typeof enfonica.voice.v1beta1.RecordingView);

                /**
                 * Creates a new ListRecordingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListRecordingsRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListRecordingsRequest): enfonica.voice.v1beta1.ListRecordingsRequest;

                /**
                 * Encodes the specified ListRecordingsRequest message. Does not implicitly {@link enfonica.voice.v1beta1.ListRecordingsRequest.verify|verify} messages.
                 * @param message ListRecordingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListRecordingsRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListRecordingsRequest.verify|verify} messages.
                 * @param message ListRecordingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListRecordingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListRecordingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListRecordingsRequest;

                /**
                 * Decodes a ListRecordingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListRecordingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListRecordingsRequest;

                /**
                 * Verifies a ListRecordingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListRecordingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListRecordingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListRecordingsRequest;

                /**
                 * Creates a plain object from a ListRecordingsRequest message. Also converts values to other types if specified.
                 * @param message ListRecordingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListRecordingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListRecordingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListRecordingsResponse. */
            interface IListRecordingsResponse {

                /** ListRecordingsResponse recordings */
                recordings?: (enfonica.voice.v1beta1.IRecording[]|null);

                /** ListRecordingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListRecordingsResponse. */
            class ListRecordingsResponse implements IListRecordingsResponse {

                /**
                 * Constructs a new ListRecordingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListRecordingsResponse);

                /** ListRecordingsResponse recordings. */
                public recordings: enfonica.voice.v1beta1.IRecording[];

                /** ListRecordingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListRecordingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListRecordingsResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListRecordingsResponse): enfonica.voice.v1beta1.ListRecordingsResponse;

                /**
                 * Encodes the specified ListRecordingsResponse message. Does not implicitly {@link enfonica.voice.v1beta1.ListRecordingsResponse.verify|verify} messages.
                 * @param message ListRecordingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListRecordingsResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListRecordingsResponse.verify|verify} messages.
                 * @param message ListRecordingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListRecordingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListRecordingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListRecordingsResponse;

                /**
                 * Decodes a ListRecordingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListRecordingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListRecordingsResponse;

                /**
                 * Verifies a ListRecordingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListRecordingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListRecordingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListRecordingsResponse;

                /**
                 * Creates a plain object from a ListRecordingsResponse message. Also converts values to other types if specified.
                 * @param message ListRecordingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListRecordingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListRecordingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteRecordingRequest. */
            interface IDeleteRecordingRequest {

                /** DeleteRecordingRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteRecordingRequest. */
            class DeleteRecordingRequest implements IDeleteRecordingRequest {

                /**
                 * Constructs a new DeleteRecordingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IDeleteRecordingRequest);

                /** DeleteRecordingRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteRecordingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRecordingRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IDeleteRecordingRequest): enfonica.voice.v1beta1.DeleteRecordingRequest;

                /**
                 * Encodes the specified DeleteRecordingRequest message. Does not implicitly {@link enfonica.voice.v1beta1.DeleteRecordingRequest.verify|verify} messages.
                 * @param message DeleteRecordingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IDeleteRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRecordingRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.DeleteRecordingRequest.verify|verify} messages.
                 * @param message DeleteRecordingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IDeleteRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRecordingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRecordingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.DeleteRecordingRequest;

                /**
                 * Decodes a DeleteRecordingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRecordingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.DeleteRecordingRequest;

                /**
                 * Verifies a DeleteRecordingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRecordingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRecordingRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.DeleteRecordingRequest;

                /**
                 * Creates a plain object from a DeleteRecordingRequest message. Also converts values to other types if specified.
                 * @param message DeleteRecordingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.DeleteRecordingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRecordingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** RecordingView enum. */
            enum RecordingView {
                RECORDING_VIEW_UNSPECIFIED = 0,
                BASIC = 1,
                FULL = 2
            }

            /** Represents a SipDomains */
            class SipDomains extends $protobuf.rpc.Service {

                /**
                 * Constructs a new SipDomains service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new SipDomains service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SipDomains;

                /**
                 * Calls CreateSipDomain.
                 * @param request CreateSipDomainRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SipDomain
                 */
                public createSipDomain(request: enfonica.voice.v1beta1.ICreateSipDomainRequest, callback: enfonica.voice.v1beta1.SipDomains.CreateSipDomainCallback): void;

                /**
                 * Calls CreateSipDomain.
                 * @param request CreateSipDomainRequest message or plain object
                 * @returns Promise
                 */
                public createSipDomain(request: enfonica.voice.v1beta1.ICreateSipDomainRequest): Promise<enfonica.voice.v1beta1.SipDomain>;

                /**
                 * Calls GetSipDomain.
                 * @param request GetSipDomainRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SipDomain
                 */
                public getSipDomain(request: enfonica.voice.v1beta1.IGetSipDomainRequest, callback: enfonica.voice.v1beta1.SipDomains.GetSipDomainCallback): void;

                /**
                 * Calls GetSipDomain.
                 * @param request GetSipDomainRequest message or plain object
                 * @returns Promise
                 */
                public getSipDomain(request: enfonica.voice.v1beta1.IGetSipDomainRequest): Promise<enfonica.voice.v1beta1.SipDomain>;

                /**
                 * Calls ListSipDomains.
                 * @param request ListSipDomainsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListSipDomainsResponse
                 */
                public listSipDomains(request: enfonica.voice.v1beta1.IListSipDomainsRequest, callback: enfonica.voice.v1beta1.SipDomains.ListSipDomainsCallback): void;

                /**
                 * Calls ListSipDomains.
                 * @param request ListSipDomainsRequest message or plain object
                 * @returns Promise
                 */
                public listSipDomains(request: enfonica.voice.v1beta1.IListSipDomainsRequest): Promise<enfonica.voice.v1beta1.ListSipDomainsResponse>;

                /**
                 * Calls UpdateSipDomain.
                 * @param request UpdateSipDomainRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SipDomain
                 */
                public updateSipDomain(request: enfonica.voice.v1beta1.IUpdateSipDomainRequest, callback: enfonica.voice.v1beta1.SipDomains.UpdateSipDomainCallback): void;

                /**
                 * Calls UpdateSipDomain.
                 * @param request UpdateSipDomainRequest message or plain object
                 * @returns Promise
                 */
                public updateSipDomain(request: enfonica.voice.v1beta1.IUpdateSipDomainRequest): Promise<enfonica.voice.v1beta1.SipDomain>;

                /**
                 * Calls DeleteSipDomain.
                 * @param request DeleteSipDomainRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SipDomain
                 */
                public deleteSipDomain(request: enfonica.voice.v1beta1.IDeleteSipDomainRequest, callback: enfonica.voice.v1beta1.SipDomains.DeleteSipDomainCallback): void;

                /**
                 * Calls DeleteSipDomain.
                 * @param request DeleteSipDomainRequest message or plain object
                 * @returns Promise
                 */
                public deleteSipDomain(request: enfonica.voice.v1beta1.IDeleteSipDomainRequest): Promise<enfonica.voice.v1beta1.SipDomain>;
            }

            namespace SipDomains {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipDomains|createSipDomain}.
                 * @param error Error, if any
                 * @param [response] SipDomain
                 */
                type CreateSipDomainCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.SipDomain) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipDomains|getSipDomain}.
                 * @param error Error, if any
                 * @param [response] SipDomain
                 */
                type GetSipDomainCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.SipDomain) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipDomains|listSipDomains}.
                 * @param error Error, if any
                 * @param [response] ListSipDomainsResponse
                 */
                type ListSipDomainsCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.ListSipDomainsResponse) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipDomains|updateSipDomain}.
                 * @param error Error, if any
                 * @param [response] SipDomain
                 */
                type UpdateSipDomainCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.SipDomain) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipDomains|deleteSipDomain}.
                 * @param error Error, if any
                 * @param [response] SipDomain
                 */
                type DeleteSipDomainCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.SipDomain) => void;
            }

            /** Properties of a SipDomain. */
            interface ISipDomain {

                /** SipDomain name */
                name?: (string|null);

                /** SipDomain sipDomainId */
                sipDomainId?: (string|null);

                /** SipDomain displayName */
                displayName?: (string|null);

                /** SipDomain allowRegister */
                allowRegister?: (boolean|null);

                /** SipDomain callTerminationMode */
                callTerminationMode?: (enfonica.voice.v1beta1.SipDomain.TerminationMode|keyof typeof enfonica.voice.v1beta1.SipDomain.TerminationMode|null);

                /** SipDomain callTerminationHandlerUris */
                callTerminationHandlerUris?: (string[]|null);

                /** SipDomain cidrBlocks */
                cidrBlocks?: (enfonica.voice.v1beta1.ICidrBlock[]|null);

                /** SipDomain callRecording */
                callRecording?: (enfonica.voice.v1beta1.ICallRecordingConfig|null);

                /** SipDomain createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** SipDomain deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a SipDomain. */
            class SipDomain implements ISipDomain {

                /**
                 * Constructs a new SipDomain.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ISipDomain);

                /** SipDomain name. */
                public name: string;

                /** SipDomain sipDomainId. */
                public sipDomainId: string;

                /** SipDomain displayName. */
                public displayName: string;

                /** SipDomain allowRegister. */
                public allowRegister: boolean;

                /** SipDomain callTerminationMode. */
                public callTerminationMode: (enfonica.voice.v1beta1.SipDomain.TerminationMode|keyof typeof enfonica.voice.v1beta1.SipDomain.TerminationMode);

                /** SipDomain callTerminationHandlerUris. */
                public callTerminationHandlerUris: string[];

                /** SipDomain cidrBlocks. */
                public cidrBlocks: enfonica.voice.v1beta1.ICidrBlock[];

                /** SipDomain callRecording. */
                public callRecording?: (enfonica.voice.v1beta1.ICallRecordingConfig|null);

                /** SipDomain createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** SipDomain deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new SipDomain instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SipDomain instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ISipDomain): enfonica.voice.v1beta1.SipDomain;

                /**
                 * Encodes the specified SipDomain message. Does not implicitly {@link enfonica.voice.v1beta1.SipDomain.verify|verify} messages.
                 * @param message SipDomain message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ISipDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SipDomain message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.SipDomain.verify|verify} messages.
                 * @param message SipDomain message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ISipDomain, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SipDomain message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SipDomain
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.SipDomain;

                /**
                 * Decodes a SipDomain message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SipDomain
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.SipDomain;

                /**
                 * Verifies a SipDomain message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SipDomain message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SipDomain
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.SipDomain;

                /**
                 * Creates a plain object from a SipDomain message. Also converts values to other types if specified.
                 * @param message SipDomain
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.SipDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SipDomain to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SipDomain {

                /** TerminationMode enum. */
                enum TerminationMode {
                    TERMINATION_MODE_UNSPECIFIED = 0,
                    TERMINATION_MODE_DISABLED = 1,
                    PSTN_TRUNK = 2,
                    PROGRAMMABLE = 3
                }
            }

            /** Properties of a CidrBlock. */
            interface ICidrBlock {

                /** CidrBlock displayName */
                displayName?: (string|null);

                /** CidrBlock cidrBlock */
                cidrBlock?: (string|null);
            }

            /** Represents a CidrBlock. */
            class CidrBlock implements ICidrBlock {

                /**
                 * Constructs a new CidrBlock.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICidrBlock);

                /** CidrBlock displayName. */
                public displayName: string;

                /** CidrBlock cidrBlock. */
                public cidrBlock: string;

                /**
                 * Creates a new CidrBlock instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CidrBlock instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICidrBlock): enfonica.voice.v1beta1.CidrBlock;

                /**
                 * Encodes the specified CidrBlock message. Does not implicitly {@link enfonica.voice.v1beta1.CidrBlock.verify|verify} messages.
                 * @param message CidrBlock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CidrBlock message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CidrBlock.verify|verify} messages.
                 * @param message CidrBlock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CidrBlock message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CidrBlock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CidrBlock;

                /**
                 * Decodes a CidrBlock message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CidrBlock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CidrBlock;

                /**
                 * Verifies a CidrBlock message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CidrBlock message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CidrBlock
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CidrBlock;

                /**
                 * Creates a plain object from a CidrBlock message. Also converts values to other types if specified.
                 * @param message CidrBlock
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CidrBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CidrBlock to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateSipDomainRequest. */
            interface ICreateSipDomainRequest {

                /** CreateSipDomainRequest parent */
                parent?: (string|null);

                /** CreateSipDomainRequest sipDomain */
                sipDomain?: (enfonica.voice.v1beta1.ISipDomain|null);

                /** CreateSipDomainRequest sipDomainId */
                sipDomainId?: (string|null);
            }

            /** Represents a CreateSipDomainRequest. */
            class CreateSipDomainRequest implements ICreateSipDomainRequest {

                /**
                 * Constructs a new CreateSipDomainRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICreateSipDomainRequest);

                /** CreateSipDomainRequest parent. */
                public parent: string;

                /** CreateSipDomainRequest sipDomain. */
                public sipDomain?: (enfonica.voice.v1beta1.ISipDomain|null);

                /** CreateSipDomainRequest sipDomainId. */
                public sipDomainId: string;

                /**
                 * Creates a new CreateSipDomainRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateSipDomainRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICreateSipDomainRequest): enfonica.voice.v1beta1.CreateSipDomainRequest;

                /**
                 * Encodes the specified CreateSipDomainRequest message. Does not implicitly {@link enfonica.voice.v1beta1.CreateSipDomainRequest.verify|verify} messages.
                 * @param message CreateSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICreateSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateSipDomainRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CreateSipDomainRequest.verify|verify} messages.
                 * @param message CreateSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICreateSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateSipDomainRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CreateSipDomainRequest;

                /**
                 * Decodes a CreateSipDomainRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CreateSipDomainRequest;

                /**
                 * Verifies a CreateSipDomainRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateSipDomainRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateSipDomainRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CreateSipDomainRequest;

                /**
                 * Creates a plain object from a CreateSipDomainRequest message. Also converts values to other types if specified.
                 * @param message CreateSipDomainRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CreateSipDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateSipDomainRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetSipDomainRequest. */
            interface IGetSipDomainRequest {

                /** GetSipDomainRequest name */
                name?: (string|null);
            }

            /** Represents a GetSipDomainRequest. */
            class GetSipDomainRequest implements IGetSipDomainRequest {

                /**
                 * Constructs a new GetSipDomainRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetSipDomainRequest);

                /** GetSipDomainRequest name. */
                public name: string;

                /**
                 * Creates a new GetSipDomainRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSipDomainRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetSipDomainRequest): enfonica.voice.v1beta1.GetSipDomainRequest;

                /**
                 * Encodes the specified GetSipDomainRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetSipDomainRequest.verify|verify} messages.
                 * @param message GetSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSipDomainRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetSipDomainRequest.verify|verify} messages.
                 * @param message GetSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSipDomainRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetSipDomainRequest;

                /**
                 * Decodes a GetSipDomainRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetSipDomainRequest;

                /**
                 * Verifies a GetSipDomainRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSipDomainRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSipDomainRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetSipDomainRequest;

                /**
                 * Creates a plain object from a GetSipDomainRequest message. Also converts values to other types if specified.
                 * @param message GetSipDomainRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetSipDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSipDomainRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListSipDomainsRequest. */
            interface IListSipDomainsRequest {

                /** ListSipDomainsRequest parent */
                parent?: (string|null);

                /** ListSipDomainsRequest pageSize */
                pageSize?: (number|null);

                /** ListSipDomainsRequest pageToken */
                pageToken?: (string|null);

                /** ListSipDomainsRequest showDeleted */
                showDeleted?: (boolean|null);
            }

            /** Represents a ListSipDomainsRequest. */
            class ListSipDomainsRequest implements IListSipDomainsRequest {

                /**
                 * Constructs a new ListSipDomainsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListSipDomainsRequest);

                /** ListSipDomainsRequest parent. */
                public parent: string;

                /** ListSipDomainsRequest pageSize. */
                public pageSize: number;

                /** ListSipDomainsRequest pageToken. */
                public pageToken: string;

                /** ListSipDomainsRequest showDeleted. */
                public showDeleted: boolean;

                /**
                 * Creates a new ListSipDomainsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSipDomainsRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListSipDomainsRequest): enfonica.voice.v1beta1.ListSipDomainsRequest;

                /**
                 * Encodes the specified ListSipDomainsRequest message. Does not implicitly {@link enfonica.voice.v1beta1.ListSipDomainsRequest.verify|verify} messages.
                 * @param message ListSipDomainsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListSipDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSipDomainsRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListSipDomainsRequest.verify|verify} messages.
                 * @param message ListSipDomainsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListSipDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSipDomainsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSipDomainsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListSipDomainsRequest;

                /**
                 * Decodes a ListSipDomainsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSipDomainsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListSipDomainsRequest;

                /**
                 * Verifies a ListSipDomainsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSipDomainsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSipDomainsRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListSipDomainsRequest;

                /**
                 * Creates a plain object from a ListSipDomainsRequest message. Also converts values to other types if specified.
                 * @param message ListSipDomainsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListSipDomainsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSipDomainsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListSipDomainsResponse. */
            interface IListSipDomainsResponse {

                /** ListSipDomainsResponse sipDomains */
                sipDomains?: (enfonica.voice.v1beta1.ISipDomain[]|null);

                /** ListSipDomainsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListSipDomainsResponse. */
            class ListSipDomainsResponse implements IListSipDomainsResponse {

                /**
                 * Constructs a new ListSipDomainsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListSipDomainsResponse);

                /** ListSipDomainsResponse sipDomains. */
                public sipDomains: enfonica.voice.v1beta1.ISipDomain[];

                /** ListSipDomainsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListSipDomainsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSipDomainsResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListSipDomainsResponse): enfonica.voice.v1beta1.ListSipDomainsResponse;

                /**
                 * Encodes the specified ListSipDomainsResponse message. Does not implicitly {@link enfonica.voice.v1beta1.ListSipDomainsResponse.verify|verify} messages.
                 * @param message ListSipDomainsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListSipDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSipDomainsResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListSipDomainsResponse.verify|verify} messages.
                 * @param message ListSipDomainsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListSipDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSipDomainsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSipDomainsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListSipDomainsResponse;

                /**
                 * Decodes a ListSipDomainsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSipDomainsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListSipDomainsResponse;

                /**
                 * Verifies a ListSipDomainsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSipDomainsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSipDomainsResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListSipDomainsResponse;

                /**
                 * Creates a plain object from a ListSipDomainsResponse message. Also converts values to other types if specified.
                 * @param message ListSipDomainsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListSipDomainsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSipDomainsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateSipDomainRequest. */
            interface IUpdateSipDomainRequest {

                /** UpdateSipDomainRequest sipDomain */
                sipDomain?: (enfonica.voice.v1beta1.ISipDomain|null);

                /** UpdateSipDomainRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateSipDomainRequest. */
            class UpdateSipDomainRequest implements IUpdateSipDomainRequest {

                /**
                 * Constructs a new UpdateSipDomainRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IUpdateSipDomainRequest);

                /** UpdateSipDomainRequest sipDomain. */
                public sipDomain?: (enfonica.voice.v1beta1.ISipDomain|null);

                /** UpdateSipDomainRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateSipDomainRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateSipDomainRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IUpdateSipDomainRequest): enfonica.voice.v1beta1.UpdateSipDomainRequest;

                /**
                 * Encodes the specified UpdateSipDomainRequest message. Does not implicitly {@link enfonica.voice.v1beta1.UpdateSipDomainRequest.verify|verify} messages.
                 * @param message UpdateSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IUpdateSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateSipDomainRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.UpdateSipDomainRequest.verify|verify} messages.
                 * @param message UpdateSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IUpdateSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateSipDomainRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.UpdateSipDomainRequest;

                /**
                 * Decodes an UpdateSipDomainRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.UpdateSipDomainRequest;

                /**
                 * Verifies an UpdateSipDomainRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateSipDomainRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateSipDomainRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.UpdateSipDomainRequest;

                /**
                 * Creates a plain object from an UpdateSipDomainRequest message. Also converts values to other types if specified.
                 * @param message UpdateSipDomainRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.UpdateSipDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateSipDomainRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteSipDomainRequest. */
            interface IDeleteSipDomainRequest {

                /** DeleteSipDomainRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteSipDomainRequest. */
            class DeleteSipDomainRequest implements IDeleteSipDomainRequest {

                /**
                 * Constructs a new DeleteSipDomainRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IDeleteSipDomainRequest);

                /** DeleteSipDomainRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteSipDomainRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSipDomainRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IDeleteSipDomainRequest): enfonica.voice.v1beta1.DeleteSipDomainRequest;

                /**
                 * Encodes the specified DeleteSipDomainRequest message. Does not implicitly {@link enfonica.voice.v1beta1.DeleteSipDomainRequest.verify|verify} messages.
                 * @param message DeleteSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IDeleteSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSipDomainRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.DeleteSipDomainRequest.verify|verify} messages.
                 * @param message DeleteSipDomainRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IDeleteSipDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSipDomainRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.DeleteSipDomainRequest;

                /**
                 * Decodes a DeleteSipDomainRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSipDomainRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.DeleteSipDomainRequest;

                /**
                 * Verifies a DeleteSipDomainRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSipDomainRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSipDomainRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.DeleteSipDomainRequest;

                /**
                 * Creates a plain object from a DeleteSipDomainRequest message. Also converts values to other types if specified.
                 * @param message DeleteSipDomainRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.DeleteSipDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSipDomainRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a SipInfoService */
            class SipInfoService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new SipInfoService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new SipInfoService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SipInfoService;

                /**
                 * Calls GetSipInfo.
                 * @param request GetSipInfoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SipInfo
                 */
                public getSipInfo(request: enfonica.voice.v1beta1.IGetSipInfoRequest, callback: enfonica.voice.v1beta1.SipInfoService.GetSipInfoCallback): void;

                /**
                 * Calls GetSipInfo.
                 * @param request GetSipInfoRequest message or plain object
                 * @returns Promise
                 */
                public getSipInfo(request: enfonica.voice.v1beta1.IGetSipInfoRequest): Promise<enfonica.voice.v1beta1.SipInfo>;
            }

            namespace SipInfoService {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.SipInfoService|getSipInfo}.
                 * @param error Error, if any
                 * @param [response] SipInfo
                 */
                type GetSipInfoCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.SipInfo) => void;
            }

            /** Properties of a SipInfo. */
            interface ISipInfo {

                /** SipInfo name */
                name?: (string|null);

                /** SipInfo startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** SipInfo endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** SipInfo messages */
                messages?: (enfonica.voice.v1beta1.ISipMessage[]|null);

                /** SipInfo sipCallId */
                sipCallId?: (string|null);

                /** SipInfo pcap */
                pcap?: (Uint8Array|string|null);
            }

            /** Represents a SipInfo. */
            class SipInfo implements ISipInfo {

                /**
                 * Constructs a new SipInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ISipInfo);

                /** SipInfo name. */
                public name: string;

                /** SipInfo startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** SipInfo endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** SipInfo messages. */
                public messages: enfonica.voice.v1beta1.ISipMessage[];

                /** SipInfo sipCallId. */
                public sipCallId: string;

                /** SipInfo pcap. */
                public pcap: (Uint8Array|string);

                /**
                 * Creates a new SipInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SipInfo instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ISipInfo): enfonica.voice.v1beta1.SipInfo;

                /**
                 * Encodes the specified SipInfo message. Does not implicitly {@link enfonica.voice.v1beta1.SipInfo.verify|verify} messages.
                 * @param message SipInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ISipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SipInfo message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.SipInfo.verify|verify} messages.
                 * @param message SipInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ISipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SipInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SipInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.SipInfo;

                /**
                 * Decodes a SipInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SipInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.SipInfo;

                /**
                 * Verifies a SipInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SipInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SipInfo
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.SipInfo;

                /**
                 * Creates a plain object from a SipInfo message. Also converts values to other types if specified.
                 * @param message SipInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.SipInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SipInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SipMessage. */
            interface ISipMessage {

                /** SipMessage offsetDuration */
                offsetDuration?: (google.protobuf.IDuration|null);

                /** SipMessage sourceIp */
                sourceIp?: (string|null);

                /** SipMessage sourcePort */
                sourcePort?: (number|null);

                /** SipMessage destinationIp */
                destinationIp?: (string|null);

                /** SipMessage destinationPort */
                destinationPort?: (number|null);

                /** SipMessage method */
                method?: (string|null);

                /** SipMessage requestLine */
                requestLine?: (string|null);

                /** SipMessage data */
                data?: (string|null);
            }

            /** Represents a SipMessage. */
            class SipMessage implements ISipMessage {

                /**
                 * Constructs a new SipMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ISipMessage);

                /** SipMessage offsetDuration. */
                public offsetDuration?: (google.protobuf.IDuration|null);

                /** SipMessage sourceIp. */
                public sourceIp: string;

                /** SipMessage sourcePort. */
                public sourcePort: number;

                /** SipMessage destinationIp. */
                public destinationIp: string;

                /** SipMessage destinationPort. */
                public destinationPort: number;

                /** SipMessage method. */
                public method: string;

                /** SipMessage requestLine. */
                public requestLine: string;

                /** SipMessage data. */
                public data: string;

                /**
                 * Creates a new SipMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SipMessage instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ISipMessage): enfonica.voice.v1beta1.SipMessage;

                /**
                 * Encodes the specified SipMessage message. Does not implicitly {@link enfonica.voice.v1beta1.SipMessage.verify|verify} messages.
                 * @param message SipMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ISipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SipMessage message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.SipMessage.verify|verify} messages.
                 * @param message SipMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ISipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SipMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SipMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.SipMessage;

                /**
                 * Decodes a SipMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SipMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.SipMessage;

                /**
                 * Verifies a SipMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SipMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SipMessage
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.SipMessage;

                /**
                 * Creates a plain object from a SipMessage message. Also converts values to other types if specified.
                 * @param message SipMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.SipMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SipMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetSipInfoRequest. */
            interface IGetSipInfoRequest {

                /** GetSipInfoRequest name */
                name?: (string|null);
            }

            /** Represents a GetSipInfoRequest. */
            class GetSipInfoRequest implements IGetSipInfoRequest {

                /**
                 * Constructs a new GetSipInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetSipInfoRequest);

                /** GetSipInfoRequest name. */
                public name: string;

                /**
                 * Creates a new GetSipInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSipInfoRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetSipInfoRequest): enfonica.voice.v1beta1.GetSipInfoRequest;

                /**
                 * Encodes the specified GetSipInfoRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetSipInfoRequest.verify|verify} messages.
                 * @param message GetSipInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetSipInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSipInfoRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetSipInfoRequest.verify|verify} messages.
                 * @param message GetSipInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetSipInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSipInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSipInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetSipInfoRequest;

                /**
                 * Decodes a GetSipInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSipInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetSipInfoRequest;

                /**
                 * Verifies a GetSipInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSipInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSipInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetSipInfoRequest;

                /**
                 * Creates a plain object from a GetSipInfoRequest message. Also converts values to other types if specified.
                 * @param message GetSipInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetSipInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSipInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Streams */
            class Streams extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Streams service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Streams service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Streams;

                /**
                 * Calls StreamCall.
                 * @param request StreamCallRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and StreamCallResponse
                 */
                public streamCall(request: enfonica.voice.v1beta1.IStreamCallRequest, callback: enfonica.voice.v1beta1.Streams.StreamCallCallback): void;

                /**
                 * Calls StreamCall.
                 * @param request StreamCallRequest message or plain object
                 * @returns Promise
                 */
                public streamCall(request: enfonica.voice.v1beta1.IStreamCallRequest): Promise<enfonica.voice.v1beta1.StreamCallResponse>;
            }

            namespace Streams {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Streams|streamCall}.
                 * @param error Error, if any
                 * @param [response] StreamCallResponse
                 */
                type StreamCallCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.StreamCallResponse) => void;
            }

            /** Properties of a StreamCallRequest. */
            interface IStreamCallRequest {

                /** StreamCallRequest setup */
                setup?: (enfonica.voice.v1beta1.IStreamSetup|null);

                /** StreamCallRequest inputAudio */
                inputAudio?: (enfonica.voice.v1beta1.IInputAudio|null);

                /** StreamCallRequest updateRequestParameters */
                updateRequestParameters?: (enfonica.voice.v1beta1.IUpdateRequestParameters|null);
            }

            /** Represents a StreamCallRequest. */
            class StreamCallRequest implements IStreamCallRequest {

                /**
                 * Constructs a new StreamCallRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IStreamCallRequest);

                /** StreamCallRequest setup. */
                public setup?: (enfonica.voice.v1beta1.IStreamSetup|null);

                /** StreamCallRequest inputAudio. */
                public inputAudio?: (enfonica.voice.v1beta1.IInputAudio|null);

                /** StreamCallRequest updateRequestParameters. */
                public updateRequestParameters?: (enfonica.voice.v1beta1.IUpdateRequestParameters|null);

                /**
                 * Creates a new StreamCallRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamCallRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IStreamCallRequest): enfonica.voice.v1beta1.StreamCallRequest;

                /**
                 * Encodes the specified StreamCallRequest message. Does not implicitly {@link enfonica.voice.v1beta1.StreamCallRequest.verify|verify} messages.
                 * @param message StreamCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IStreamCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamCallRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.StreamCallRequest.verify|verify} messages.
                 * @param message StreamCallRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IStreamCallRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamCallRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.StreamCallRequest;

                /**
                 * Decodes a StreamCallRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamCallRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.StreamCallRequest;

                /**
                 * Verifies a StreamCallRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamCallRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamCallRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.StreamCallRequest;

                /**
                 * Creates a plain object from a StreamCallRequest message. Also converts values to other types if specified.
                 * @param message StreamCallRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.StreamCallRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamCallRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StreamSetup. */
            interface IStreamSetup {

                /** StreamSetup stream */
                stream?: (string|null);

                /** StreamSetup audioConfig */
                audioConfig?: (enfonica.voice.v1beta1.IAudioConfig|null);
            }

            /** Represents a StreamSetup. */
            class StreamSetup implements IStreamSetup {

                /**
                 * Constructs a new StreamSetup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IStreamSetup);

                /** StreamSetup stream. */
                public stream: string;

                /** StreamSetup audioConfig. */
                public audioConfig?: (enfonica.voice.v1beta1.IAudioConfig|null);

                /**
                 * Creates a new StreamSetup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamSetup instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IStreamSetup): enfonica.voice.v1beta1.StreamSetup;

                /**
                 * Encodes the specified StreamSetup message. Does not implicitly {@link enfonica.voice.v1beta1.StreamSetup.verify|verify} messages.
                 * @param message StreamSetup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IStreamSetup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamSetup message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.StreamSetup.verify|verify} messages.
                 * @param message StreamSetup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IStreamSetup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamSetup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamSetup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.StreamSetup;

                /**
                 * Decodes a StreamSetup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamSetup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.StreamSetup;

                /**
                 * Verifies a StreamSetup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamSetup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamSetup
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.StreamSetup;

                /**
                 * Creates a plain object from a StreamSetup message. Also converts values to other types if specified.
                 * @param message StreamSetup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.StreamSetup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamSetup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateRequestParameters. */
            interface IUpdateRequestParameters {

                /** UpdateRequestParameters parameters */
                parameters?: ({ [k: string]: string }|null);
            }

            /** Represents an UpdateRequestParameters. */
            class UpdateRequestParameters implements IUpdateRequestParameters {

                /**
                 * Constructs a new UpdateRequestParameters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IUpdateRequestParameters);

                /** UpdateRequestParameters parameters. */
                public parameters: { [k: string]: string };

                /**
                 * Creates a new UpdateRequestParameters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateRequestParameters instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IUpdateRequestParameters): enfonica.voice.v1beta1.UpdateRequestParameters;

                /**
                 * Encodes the specified UpdateRequestParameters message. Does not implicitly {@link enfonica.voice.v1beta1.UpdateRequestParameters.verify|verify} messages.
                 * @param message UpdateRequestParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IUpdateRequestParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateRequestParameters message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.UpdateRequestParameters.verify|verify} messages.
                 * @param message UpdateRequestParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IUpdateRequestParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateRequestParameters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateRequestParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.UpdateRequestParameters;

                /**
                 * Decodes an UpdateRequestParameters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateRequestParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.UpdateRequestParameters;

                /**
                 * Verifies an UpdateRequestParameters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateRequestParameters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateRequestParameters
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.UpdateRequestParameters;

                /**
                 * Creates a plain object from an UpdateRequestParameters message. Also converts values to other types if specified.
                 * @param message UpdateRequestParameters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.UpdateRequestParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateRequestParameters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StreamCallResponse. */
            interface IStreamCallResponse {

                /** StreamCallResponse callConnected */
                callConnected?: (enfonica.voice.v1beta1.ICallConnectedEvent|null);

                /** StreamCallResponse outputAudio */
                outputAudio?: (enfonica.voice.v1beta1.IOutputAudioEvent|null);

                /** StreamCallResponse inputAudioBufferEmpty */
                inputAudioBufferEmpty?: (enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent|null);
            }

            /** Represents a StreamCallResponse. */
            class StreamCallResponse implements IStreamCallResponse {

                /**
                 * Constructs a new StreamCallResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IStreamCallResponse);

                /** StreamCallResponse callConnected. */
                public callConnected?: (enfonica.voice.v1beta1.ICallConnectedEvent|null);

                /** StreamCallResponse outputAudio. */
                public outputAudio?: (enfonica.voice.v1beta1.IOutputAudioEvent|null);

                /** StreamCallResponse inputAudioBufferEmpty. */
                public inputAudioBufferEmpty?: (enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent|null);

                /** StreamCallResponse event. */
                public event?: ("callConnected"|"outputAudio"|"inputAudioBufferEmpty");

                /**
                 * Creates a new StreamCallResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamCallResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IStreamCallResponse): enfonica.voice.v1beta1.StreamCallResponse;

                /**
                 * Encodes the specified StreamCallResponse message. Does not implicitly {@link enfonica.voice.v1beta1.StreamCallResponse.verify|verify} messages.
                 * @param message StreamCallResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IStreamCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamCallResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.StreamCallResponse.verify|verify} messages.
                 * @param message StreamCallResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IStreamCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamCallResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamCallResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.StreamCallResponse;

                /**
                 * Decodes a StreamCallResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamCallResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.StreamCallResponse;

                /**
                 * Verifies a StreamCallResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamCallResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamCallResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.StreamCallResponse;

                /**
                 * Creates a plain object from a StreamCallResponse message. Also converts values to other types if specified.
                 * @param message StreamCallResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.StreamCallResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamCallResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CallConnectedEvent. */
            interface ICallConnectedEvent {

                /** CallConnectedEvent call */
                call?: (string|null);
            }

            /** Represents a CallConnectedEvent. */
            class CallConnectedEvent implements ICallConnectedEvent {

                /**
                 * Constructs a new CallConnectedEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ICallConnectedEvent);

                /** CallConnectedEvent call. */
                public call: string;

                /**
                 * Creates a new CallConnectedEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CallConnectedEvent instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ICallConnectedEvent): enfonica.voice.v1beta1.CallConnectedEvent;

                /**
                 * Encodes the specified CallConnectedEvent message. Does not implicitly {@link enfonica.voice.v1beta1.CallConnectedEvent.verify|verify} messages.
                 * @param message CallConnectedEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ICallConnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CallConnectedEvent message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.CallConnectedEvent.verify|verify} messages.
                 * @param message CallConnectedEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ICallConnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CallConnectedEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CallConnectedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.CallConnectedEvent;

                /**
                 * Decodes a CallConnectedEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CallConnectedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.CallConnectedEvent;

                /**
                 * Verifies a CallConnectedEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CallConnectedEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CallConnectedEvent
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.CallConnectedEvent;

                /**
                 * Creates a plain object from a CallConnectedEvent message. Also converts values to other types if specified.
                 * @param message CallConnectedEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.CallConnectedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CallConnectedEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OutputAudioEvent. */
            interface IOutputAudioEvent {

                /** OutputAudioEvent audio */
                audio?: (Uint8Array|string|null);
            }

            /** Represents an OutputAudioEvent. */
            class OutputAudioEvent implements IOutputAudioEvent {

                /**
                 * Constructs a new OutputAudioEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IOutputAudioEvent);

                /** OutputAudioEvent audio. */
                public audio: (Uint8Array|string);

                /**
                 * Creates a new OutputAudioEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputAudioEvent instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IOutputAudioEvent): enfonica.voice.v1beta1.OutputAudioEvent;

                /**
                 * Encodes the specified OutputAudioEvent message. Does not implicitly {@link enfonica.voice.v1beta1.OutputAudioEvent.verify|verify} messages.
                 * @param message OutputAudioEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IOutputAudioEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutputAudioEvent message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.OutputAudioEvent.verify|verify} messages.
                 * @param message OutputAudioEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IOutputAudioEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputAudioEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputAudioEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.OutputAudioEvent;

                /**
                 * Decodes an OutputAudioEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutputAudioEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.OutputAudioEvent;

                /**
                 * Verifies an OutputAudioEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutputAudioEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutputAudioEvent
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.OutputAudioEvent;

                /**
                 * Creates a plain object from an OutputAudioEvent message. Also converts values to other types if specified.
                 * @param message OutputAudioEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.OutputAudioEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutputAudioEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InputAudioBufferEmptyEvent. */
            interface IInputAudioBufferEmptyEvent {
            }

            /** Represents an InputAudioBufferEmptyEvent. */
            class InputAudioBufferEmptyEvent implements IInputAudioBufferEmptyEvent {

                /**
                 * Constructs a new InputAudioBufferEmptyEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent);

                /**
                 * Creates a new InputAudioBufferEmptyEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InputAudioBufferEmptyEvent instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent): enfonica.voice.v1beta1.InputAudioBufferEmptyEvent;

                /**
                 * Encodes the specified InputAudioBufferEmptyEvent message. Does not implicitly {@link enfonica.voice.v1beta1.InputAudioBufferEmptyEvent.verify|verify} messages.
                 * @param message InputAudioBufferEmptyEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InputAudioBufferEmptyEvent message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.InputAudioBufferEmptyEvent.verify|verify} messages.
                 * @param message InputAudioBufferEmptyEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IInputAudioBufferEmptyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputAudioBufferEmptyEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InputAudioBufferEmptyEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.InputAudioBufferEmptyEvent;

                /**
                 * Decodes an InputAudioBufferEmptyEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InputAudioBufferEmptyEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.InputAudioBufferEmptyEvent;

                /**
                 * Verifies an InputAudioBufferEmptyEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InputAudioBufferEmptyEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InputAudioBufferEmptyEvent
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.InputAudioBufferEmptyEvent;

                /**
                 * Creates a plain object from an InputAudioBufferEmptyEvent message. Also converts values to other types if specified.
                 * @param message InputAudioBufferEmptyEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.InputAudioBufferEmptyEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InputAudioBufferEmptyEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InputAudio. */
            interface IInputAudio {

                /** InputAudio config */
                config?: (enfonica.voice.v1beta1.IAudioConfig|null);

                /** InputAudio audio */
                audio?: (Uint8Array|string|null);

                /** InputAudio clear */
                clear?: (boolean|null);
            }

            /** Represents an InputAudio. */
            class InputAudio implements IInputAudio {

                /**
                 * Constructs a new InputAudio.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IInputAudio);

                /** InputAudio config. */
                public config?: (enfonica.voice.v1beta1.IAudioConfig|null);

                /** InputAudio audio. */
                public audio: (Uint8Array|string);

                /** InputAudio clear. */
                public clear: boolean;

                /**
                 * Creates a new InputAudio instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InputAudio instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IInputAudio): enfonica.voice.v1beta1.InputAudio;

                /**
                 * Encodes the specified InputAudio message. Does not implicitly {@link enfonica.voice.v1beta1.InputAudio.verify|verify} messages.
                 * @param message InputAudio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IInputAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InputAudio message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.InputAudio.verify|verify} messages.
                 * @param message InputAudio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IInputAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputAudio message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InputAudio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.InputAudio;

                /**
                 * Decodes an InputAudio message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InputAudio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.InputAudio;

                /**
                 * Verifies an InputAudio message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InputAudio message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InputAudio
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.InputAudio;

                /**
                 * Creates a plain object from an InputAudio message. Also converts values to other types if specified.
                 * @param message InputAudio
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.InputAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InputAudio to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AudioConfig. */
            interface IAudioConfig {

                /** AudioConfig audioEncoding */
                audioEncoding?: (enfonica.voice.v1beta1.AudioEncoding|keyof typeof enfonica.voice.v1beta1.AudioEncoding|null);

                /** AudioConfig sampleRateHertz */
                sampleRateHertz?: (number|null);
            }

            /** Represents an AudioConfig. */
            class AudioConfig implements IAudioConfig {

                /**
                 * Constructs a new AudioConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IAudioConfig);

                /** AudioConfig audioEncoding. */
                public audioEncoding: (enfonica.voice.v1beta1.AudioEncoding|keyof typeof enfonica.voice.v1beta1.AudioEncoding);

                /** AudioConfig sampleRateHertz. */
                public sampleRateHertz: number;

                /**
                 * Creates a new AudioConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AudioConfig instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IAudioConfig): enfonica.voice.v1beta1.AudioConfig;

                /**
                 * Encodes the specified AudioConfig message. Does not implicitly {@link enfonica.voice.v1beta1.AudioConfig.verify|verify} messages.
                 * @param message AudioConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IAudioConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AudioConfig message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.AudioConfig.verify|verify} messages.
                 * @param message AudioConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IAudioConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AudioConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AudioConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.AudioConfig;

                /**
                 * Decodes an AudioConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AudioConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.AudioConfig;

                /**
                 * Verifies an AudioConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AudioConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AudioConfig
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.AudioConfig;

                /**
                 * Creates a plain object from an AudioConfig message. Also converts values to other types if specified.
                 * @param message AudioConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.AudioConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AudioConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** AudioEncoding enum. */
            enum AudioEncoding {
                AUDIO_ENCODING_UNSPECIFIED = 0,
                AUDIO_ENCODING_MULAW = 1,
                AUDIO_ENCODING_ALAW = 2
            }

            /** Represents a Transcriptions */
            class Transcriptions extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Transcriptions service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Transcriptions service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Transcriptions;

                /**
                 * Calls GetTranscription.
                 * @param request GetTranscriptionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Transcription
                 */
                public getTranscription(request: enfonica.voice.v1beta1.IGetTranscriptionRequest, callback: enfonica.voice.v1beta1.Transcriptions.GetTranscriptionCallback): void;

                /**
                 * Calls GetTranscription.
                 * @param request GetTranscriptionRequest message or plain object
                 * @returns Promise
                 */
                public getTranscription(request: enfonica.voice.v1beta1.IGetTranscriptionRequest): Promise<enfonica.voice.v1beta1.Transcription>;

                /**
                 * Calls ListTranscriptions.
                 * @param request ListTranscriptionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListTranscriptionsResponse
                 */
                public listTranscriptions(request: enfonica.voice.v1beta1.IListTranscriptionsRequest, callback: enfonica.voice.v1beta1.Transcriptions.ListTranscriptionsCallback): void;

                /**
                 * Calls ListTranscriptions.
                 * @param request ListTranscriptionsRequest message or plain object
                 * @returns Promise
                 */
                public listTranscriptions(request: enfonica.voice.v1beta1.IListTranscriptionsRequest): Promise<enfonica.voice.v1beta1.ListTranscriptionsResponse>;

                /**
                 * Calls DeleteTranscription.
                 * @param request DeleteTranscriptionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteTranscription(request: enfonica.voice.v1beta1.IDeleteTranscriptionRequest, callback: enfonica.voice.v1beta1.Transcriptions.DeleteTranscriptionCallback): void;

                /**
                 * Calls DeleteTranscription.
                 * @param request DeleteTranscriptionRequest message or plain object
                 * @returns Promise
                 */
                public deleteTranscription(request: enfonica.voice.v1beta1.IDeleteTranscriptionRequest): Promise<google.protobuf.Empty>;
            }

            namespace Transcriptions {

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Transcriptions|getTranscription}.
                 * @param error Error, if any
                 * @param [response] Transcription
                 */
                type GetTranscriptionCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.Transcription) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Transcriptions|listTranscriptions}.
                 * @param error Error, if any
                 * @param [response] ListTranscriptionsResponse
                 */
                type ListTranscriptionsCallback = (error: (Error|null), response?: enfonica.voice.v1beta1.ListTranscriptionsResponse) => void;

                /**
                 * Callback as used by {@link enfonica.voice.v1beta1.Transcriptions|deleteTranscription}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteTranscriptionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a Transcription. */
            interface ITranscription {

                /** Transcription name */
                name?: (string|null);

                /** Transcription recording */
                recording?: (string|null);

                /** Transcription state */
                state?: (enfonica.voice.v1beta1.Transcription.State|keyof typeof enfonica.voice.v1beta1.Transcription.State|null);

                /** Transcription duration */
                duration?: (google.protobuf.IDuration|null);

                /** Transcription channelCount */
                channelCount?: (number|null);

                /** Transcription createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Transcription updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** Transcription readyUri */
                readyUri?: (string|null);

                /** Transcription utterances */
                utterances?: (enfonica.voice.v1beta1.IUtterance[]|null);
            }

            /** Represents a Transcription. */
            class Transcription implements ITranscription {

                /**
                 * Constructs a new Transcription.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.ITranscription);

                /** Transcription name. */
                public name: string;

                /** Transcription recording. */
                public recording: string;

                /** Transcription state. */
                public state: (enfonica.voice.v1beta1.Transcription.State|keyof typeof enfonica.voice.v1beta1.Transcription.State);

                /** Transcription duration. */
                public duration?: (google.protobuf.IDuration|null);

                /** Transcription channelCount. */
                public channelCount: number;

                /** Transcription createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Transcription updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Transcription readyUri. */
                public readyUri: string;

                /** Transcription utterances. */
                public utterances: enfonica.voice.v1beta1.IUtterance[];

                /**
                 * Creates a new Transcription instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transcription instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.ITranscription): enfonica.voice.v1beta1.Transcription;

                /**
                 * Encodes the specified Transcription message. Does not implicitly {@link enfonica.voice.v1beta1.Transcription.verify|verify} messages.
                 * @param message Transcription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.ITranscription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Transcription message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Transcription.verify|verify} messages.
                 * @param message Transcription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.ITranscription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transcription message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transcription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Transcription;

                /**
                 * Decodes a Transcription message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Transcription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Transcription;

                /**
                 * Verifies a Transcription message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Transcription message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Transcription
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Transcription;

                /**
                 * Creates a plain object from a Transcription message. Also converts values to other types if specified.
                 * @param message Transcription
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.Transcription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Transcription to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Transcription {

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    PENDING = 1,
                    COMPLETED = 2,
                    FAILED = 3
                }
            }

            /** Properties of an Utterance. */
            interface IUtterance {

                /** Utterance channel */
                channel?: (number|null);

                /** Utterance offset */
                offset?: (google.protobuf.IDuration|null);

                /** Utterance duration */
                duration?: (google.protobuf.IDuration|null);

                /** Utterance text */
                text?: (string|null);
            }

            /** Represents an Utterance. */
            class Utterance implements IUtterance {

                /**
                 * Constructs a new Utterance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IUtterance);

                /** Utterance channel. */
                public channel: number;

                /** Utterance offset. */
                public offset?: (google.protobuf.IDuration|null);

                /** Utterance duration. */
                public duration?: (google.protobuf.IDuration|null);

                /** Utterance text. */
                public text: string;

                /**
                 * Creates a new Utterance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Utterance instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IUtterance): enfonica.voice.v1beta1.Utterance;

                /**
                 * Encodes the specified Utterance message. Does not implicitly {@link enfonica.voice.v1beta1.Utterance.verify|verify} messages.
                 * @param message Utterance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IUtterance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Utterance message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.Utterance.verify|verify} messages.
                 * @param message Utterance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IUtterance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Utterance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Utterance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.Utterance;

                /**
                 * Decodes an Utterance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Utterance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.Utterance;

                /**
                 * Verifies an Utterance message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Utterance message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Utterance
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.Utterance;

                /**
                 * Creates a plain object from an Utterance message. Also converts values to other types if specified.
                 * @param message Utterance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.Utterance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Utterance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetTranscriptionRequest. */
            interface IGetTranscriptionRequest {

                /** GetTranscriptionRequest name */
                name?: (string|null);

                /** GetTranscriptionRequest view */
                view?: (enfonica.voice.v1beta1.TranscriptionView|keyof typeof enfonica.voice.v1beta1.TranscriptionView|null);
            }

            /** Represents a GetTranscriptionRequest. */
            class GetTranscriptionRequest implements IGetTranscriptionRequest {

                /**
                 * Constructs a new GetTranscriptionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IGetTranscriptionRequest);

                /** GetTranscriptionRequest name. */
                public name: string;

                /** GetTranscriptionRequest view. */
                public view: (enfonica.voice.v1beta1.TranscriptionView|keyof typeof enfonica.voice.v1beta1.TranscriptionView);

                /**
                 * Creates a new GetTranscriptionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTranscriptionRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IGetTranscriptionRequest): enfonica.voice.v1beta1.GetTranscriptionRequest;

                /**
                 * Encodes the specified GetTranscriptionRequest message. Does not implicitly {@link enfonica.voice.v1beta1.GetTranscriptionRequest.verify|verify} messages.
                 * @param message GetTranscriptionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IGetTranscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTranscriptionRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.GetTranscriptionRequest.verify|verify} messages.
                 * @param message GetTranscriptionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IGetTranscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTranscriptionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTranscriptionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.GetTranscriptionRequest;

                /**
                 * Decodes a GetTranscriptionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTranscriptionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.GetTranscriptionRequest;

                /**
                 * Verifies a GetTranscriptionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTranscriptionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTranscriptionRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.GetTranscriptionRequest;

                /**
                 * Creates a plain object from a GetTranscriptionRequest message. Also converts values to other types if specified.
                 * @param message GetTranscriptionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.GetTranscriptionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTranscriptionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListTranscriptionsRequest. */
            interface IListTranscriptionsRequest {

                /** ListTranscriptionsRequest parent */
                parent?: (string|null);

                /** ListTranscriptionsRequest pageSize */
                pageSize?: (number|null);

                /** ListTranscriptionsRequest pageToken */
                pageToken?: (string|null);

                /** ListTranscriptionsRequest view */
                view?: (enfonica.voice.v1beta1.TranscriptionView|keyof typeof enfonica.voice.v1beta1.TranscriptionView|null);
            }

            /** Represents a ListTranscriptionsRequest. */
            class ListTranscriptionsRequest implements IListTranscriptionsRequest {

                /**
                 * Constructs a new ListTranscriptionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListTranscriptionsRequest);

                /** ListTranscriptionsRequest parent. */
                public parent: string;

                /** ListTranscriptionsRequest pageSize. */
                public pageSize: number;

                /** ListTranscriptionsRequest pageToken. */
                public pageToken: string;

                /** ListTranscriptionsRequest view. */
                public view: (enfonica.voice.v1beta1.TranscriptionView|keyof typeof enfonica.voice.v1beta1.TranscriptionView);

                /**
                 * Creates a new ListTranscriptionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTranscriptionsRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListTranscriptionsRequest): enfonica.voice.v1beta1.ListTranscriptionsRequest;

                /**
                 * Encodes the specified ListTranscriptionsRequest message. Does not implicitly {@link enfonica.voice.v1beta1.ListTranscriptionsRequest.verify|verify} messages.
                 * @param message ListTranscriptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListTranscriptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTranscriptionsRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListTranscriptionsRequest.verify|verify} messages.
                 * @param message ListTranscriptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListTranscriptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTranscriptionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTranscriptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListTranscriptionsRequest;

                /**
                 * Decodes a ListTranscriptionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTranscriptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListTranscriptionsRequest;

                /**
                 * Verifies a ListTranscriptionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTranscriptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTranscriptionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListTranscriptionsRequest;

                /**
                 * Creates a plain object from a ListTranscriptionsRequest message. Also converts values to other types if specified.
                 * @param message ListTranscriptionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListTranscriptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTranscriptionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListTranscriptionsResponse. */
            interface IListTranscriptionsResponse {

                /** ListTranscriptionsResponse transcriptions */
                transcriptions?: (enfonica.voice.v1beta1.ITranscription[]|null);

                /** ListTranscriptionsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListTranscriptionsResponse. */
            class ListTranscriptionsResponse implements IListTranscriptionsResponse {

                /**
                 * Constructs a new ListTranscriptionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IListTranscriptionsResponse);

                /** ListTranscriptionsResponse transcriptions. */
                public transcriptions: enfonica.voice.v1beta1.ITranscription[];

                /** ListTranscriptionsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListTranscriptionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTranscriptionsResponse instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IListTranscriptionsResponse): enfonica.voice.v1beta1.ListTranscriptionsResponse;

                /**
                 * Encodes the specified ListTranscriptionsResponse message. Does not implicitly {@link enfonica.voice.v1beta1.ListTranscriptionsResponse.verify|verify} messages.
                 * @param message ListTranscriptionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IListTranscriptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTranscriptionsResponse message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.ListTranscriptionsResponse.verify|verify} messages.
                 * @param message ListTranscriptionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IListTranscriptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTranscriptionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTranscriptionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.ListTranscriptionsResponse;

                /**
                 * Decodes a ListTranscriptionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTranscriptionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.ListTranscriptionsResponse;

                /**
                 * Verifies a ListTranscriptionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTranscriptionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTranscriptionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.ListTranscriptionsResponse;

                /**
                 * Creates a plain object from a ListTranscriptionsResponse message. Also converts values to other types if specified.
                 * @param message ListTranscriptionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.ListTranscriptionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTranscriptionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteTranscriptionRequest. */
            interface IDeleteTranscriptionRequest {

                /** DeleteTranscriptionRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteTranscriptionRequest. */
            class DeleteTranscriptionRequest implements IDeleteTranscriptionRequest {

                /**
                 * Constructs a new DeleteTranscriptionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: enfonica.voice.v1beta1.IDeleteTranscriptionRequest);

                /** DeleteTranscriptionRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteTranscriptionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteTranscriptionRequest instance
                 */
                public static create(properties?: enfonica.voice.v1beta1.IDeleteTranscriptionRequest): enfonica.voice.v1beta1.DeleteTranscriptionRequest;

                /**
                 * Encodes the specified DeleteTranscriptionRequest message. Does not implicitly {@link enfonica.voice.v1beta1.DeleteTranscriptionRequest.verify|verify} messages.
                 * @param message DeleteTranscriptionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: enfonica.voice.v1beta1.IDeleteTranscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteTranscriptionRequest message, length delimited. Does not implicitly {@link enfonica.voice.v1beta1.DeleteTranscriptionRequest.verify|verify} messages.
                 * @param message DeleteTranscriptionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: enfonica.voice.v1beta1.IDeleteTranscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteTranscriptionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteTranscriptionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): enfonica.voice.v1beta1.DeleteTranscriptionRequest;

                /**
                 * Decodes a DeleteTranscriptionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteTranscriptionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): enfonica.voice.v1beta1.DeleteTranscriptionRequest;

                /**
                 * Verifies a DeleteTranscriptionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteTranscriptionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteTranscriptionRequest
                 */
                public static fromObject(object: { [k: string]: any }): enfonica.voice.v1beta1.DeleteTranscriptionRequest;

                /**
                 * Creates a plain object from a DeleteTranscriptionRequest message. Also converts values to other types if specified.
                 * @param message DeleteTranscriptionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: enfonica.voice.v1beta1.DeleteTranscriptionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteTranscriptionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** TranscriptionView enum. */
            enum TranscriptionView {
                TRANSCRIPTION_VIEW_UNSPECIFIED = 0,
                TRANSCRIPTION_VIEW_BASIC = 1,
                TRANSCRIPTION_VIEW_FULL = 2
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|string|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long|string);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
