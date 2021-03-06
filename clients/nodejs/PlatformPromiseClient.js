const grpc = require('grpc');
const { promisify } = require('util');

const {
  convertObjectToMetadata,
  utils: {
    isObject,
  },
  client: {
    interceptors: {
      jsonToProtobufInterceptorFactory,
    },
    converters: {
      jsonToProtobufFactory,
      protobufToJsonFactory,
    },
  },
} = require('@dashevo/grpc-common');

const {
  org: {
    dash: {
      platform: {
        dapi: {
          v0: {
            ApplyStateTransitionRequest: PBJSApplyStateTransitionRequest,
            ApplyStateTransitionResponse: PBJSApplyStateTransitionResponse,
            GetIdentityRequest: PBJSGetIdentityRequest,
            GetIdentityResponse: PBJSGetIdentityResponse,
            GetDataContractRequest: PBJSGetDataContractRequest,
            GetDataContractResponse: PBJSGetDataContractResponse,
            GetDocumentsRequest: PBJSGetDocumentsRequest,
            GetDocumentsResponse: PBJSGetDocumentsResponse,
            GetIdentityByFirstPublicKeyRequest: PBJSGetIdentityByFirstPublicKeyRequest,
            GetIdentityByFirstPublicKeyResponse: PBJSGetIdentityByFirstPublicKeyResponse,
            GetIdentityIdByFirstPublicKeyRequest: PBJSGetIdentityIdByFirstPublicKeyRequest,
            GetIdentityIdByFirstPublicKeyResponse: PBJSGetIdentityIdByFirstPublicKeyResponse,
          },
        },
      },
    },
  },
} = require('./platform_pbjs');

const {
  ApplyStateTransitionResponse: ProtocApplyStateTransitionResponse,
  GetIdentityResponse: ProtocGetIdentityResponse,
  GetDataContractResponse: ProtocGetDataContractResponse,
  GetDocumentsResponse: ProtocGetDocumentsResponse,
  GetIdentityByFirstPublicKeyResponse: ProtocGetIdentityByFirstPublicKeyResponse,
  GetIdentityIdByFirstPublicKeyResponse: ProtocGetIdentityIdByFirstPublicKeyResponse,
} = require('./platform_protoc');

const getPlatformDefinition = require('../../lib/getPlatformDefinition');
const stripHostname = require('../../lib/utils/stripHostname');

const PlatformNodeJSClient = getPlatformDefinition();

class PlatformPromiseClient {
  /**
   * @param {string} hostname
   * @param {?Object} credentials
   * @param {?Object} options
   */
  constructor(hostname, credentials = grpc.credentials.createInsecure(), options = {}) {
    const strippedHostname = stripHostname(hostname);

    this.client = new PlatformNodeJSClient(strippedHostname, credentials, options);

    this.client.applyStateTransition = promisify(
      this.client.applyStateTransition.bind(this.client),
    );

    this.client.getIdentity = promisify(
      this.client.getIdentity.bind(this.client),
    );

    this.client.getDataContract = promisify(
      this.client.getDataContract.bind(this.client),
    );

    this.client.getDocuments = promisify(
      this.client.getDocuments.bind(this.client),
    );

    this.client.getIdentityByFirstPublicKey = promisify(
      this.client.getIdentityByFirstPublicKey.bind(this.client),
    );

    this.client.getIdentityIdByFirstPublicKey = promisify(
      this.client.getIdentityIdByFirstPublicKey.bind(this.client),
    );

    this.protocolVersion = undefined;
  }

  /**
   * @param {!ApplyStateTransitionRequest} applyStateTransitionRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @return {Promise<!ApplyStateTransitionResponse>}
   */
  applyStateTransition(applyStateTransitionRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.applyStateTransition(
      applyStateTransitionRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocApplyStateTransitionResponse,
              PBJSApplyStateTransitionResponse,
            ),
            protobufToJsonFactory(
              PBJSApplyStateTransitionRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   * @param {!GetIdentityRequest} getIdentityRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @return {Promise<!GetIdentityResponse>}
   */
  getIdentity(getIdentityRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.getIdentity(
      getIdentityRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocGetIdentityResponse,
              PBJSGetIdentityResponse,
            ),
            protobufToJsonFactory(
              PBJSGetIdentityRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   *
   * @param {!GetDataContractRequest} getDataContractRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @returns {Promise<!GetDataContractResponse>}
   */
  getDataContract(getDataContractRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.getDataContract(
      getDataContractRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocGetDataContractResponse,
              PBJSGetDataContractResponse,
            ),
            protobufToJsonFactory(
              PBJSGetDataContractRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   *
   * @param {!GetDocumentsRequest} getDocumentsRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @returns {Promise<!GetDocumentsResponse>}
   */
  getDocuments(getDocumentsRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.getDocuments(
      getDocumentsRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocGetDocumentsResponse,
              PBJSGetDocumentsResponse,
            ),
            protobufToJsonFactory(
              PBJSGetDocumentsRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   *
   * @param {!GetIdentityByFirstPublicKeyRequest} getIdentityByFirstPublicKeyRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @returns {Promise<!GetDocumentsResponse>}
   */
  getIdentityByFirstPublicKey(getIdentityByFirstPublicKeyRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.getIdentityByFirstPublicKey(
      getIdentityByFirstPublicKeyRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocGetIdentityByFirstPublicKeyResponse,
              PBJSGetIdentityByFirstPublicKeyResponse,
            ),
            protobufToJsonFactory(
              PBJSGetIdentityByFirstPublicKeyRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   *
   * @param {!GetIdentityIdByFirstPublicKeyRequest} getIdentityIdByFirstPublicKeyRequest
   * @param {?Object<string, string>} metadata
   * @param {CallOptions} [options={}]
   * @returns {Promise<!GetDocumentsResponse>}
   */
  getIdentityIdByFirstPublicKey(getIdentityIdByFirstPublicKeyRequest, metadata = {}, options = {}) {
    if (!isObject(metadata)) {
      throw new Error('metadata must be an object');
    }

    return this.client.getIdentityIdByFirstPublicKey(
      getIdentityIdByFirstPublicKeyRequest,
      convertObjectToMetadata(metadata),
      {
        interceptors: [
          jsonToProtobufInterceptorFactory(
            jsonToProtobufFactory(
              ProtocGetIdentityIdByFirstPublicKeyResponse,
              PBJSGetIdentityIdByFirstPublicKeyResponse,
            ),
            protobufToJsonFactory(
              PBJSGetIdentityIdByFirstPublicKeyRequest,
            ),
          ),
        ],
        ...options,
      },
    );
  }

  /**
   * @param {string} protocolVersion
   */
  setProtocolVersion(protocolVersion) {
    this.setProtocolVersion = protocolVersion;
  }
}

module.exports = PlatformPromiseClient;
