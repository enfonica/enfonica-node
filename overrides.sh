#!/bin/bash

# Copyright 2021 Enfonica Pty Ltd
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Override the package.json fields
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i s=\"messaging=\"@enfonica/messaging=g "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/\"google-gax\": \"^2.8.0\"/\"google-gax\": \"^2.8.0\",\n\"enfonica-auth-library\": \"1.0.0\"/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/\"webpack-cli\": \"^3.3.12\"/\"webpack-cli\": \"3.3.12\",\n\"semver\": \"^7.1.2\",\n\"tmp\": \"^0.2.0\",\n\"uglify-js\": \"^3.7.7\",\n\"espree\": \"^7.0.0\",\n\"escodegen\": \"^2.0.0\",\n\"estraverse\": \"^5.1.0\"/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/Messaging client for Node.js/Enfonica Messaging SDK for Node.js/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/googleapis/enfonica-node/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/Google LLC/Enfonica/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/google /enfonica /" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-messaging/package.json' -exec sh -c 'sed -i "s/platform/telco/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i s=\"numbering=\"@enfonica/numbering=g "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/\"google-gax\": \"^2.8.0\"/\"google-gax\": \"^2.8.0\",\n\"enfonica-auth-library\": \"1.0.0\"/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/\"webpack-cli\": \"^3.3.12\"/\"webpack-cli\": \"3.3.12\",\n\"semver\": \"^7.1.2\",\n\"tmp\": \"^0.2.0\",\n\"uglify-js\": \"^3.7.7\",\n\"espree\": \"^7.0.0\",\n\"escodegen\": \"^2.0.0\",\n\"estraverse\": \"^5.1.0\"/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/Numbering client for Node.js/Enfonica Numbering SDK for Node.js/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/googleapis/enfonica-node/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/Google LLC/Enfonica/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/google/enfonica/" "$1"' -- {} \;
find $API_TMP_DIR -type f -samefile './libs/nodejs-numbering/package.json' -exec sh -c 'sed -i "s/platform/telco/" "$1"' -- {} \;

# Override the client files where neccessary
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "s/Google LLC/Enfonica Pty Ltd/" "$1"' -- {} \;
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "/as gax from/ a\import * as localAuth from '\''enfonica-auth-library'\'';" "$1"' -- {} \;
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "s/constructor(opts?: ClientOptions) {/constructor(opts?: any) {/" "$1"' -- {} \;
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "s/auth: gax.GoogleAuth;/auth: any;/" "$1"' -- {} \;
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "/opts.port = opts.port || port;/ a\opts.auth = new localAuth.GoogleAuth({keyFilename: opts.keyFile});" "$1"' -- {} \;
find $API_TMP_DIR -type f -name '*_client.ts' -exec sh -c 'sed -i "s/this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);/this.auth = (this._gaxGrpc.auth as any);/" "$1"' -- {} \;

# Copy the temp readme files and remove the temp directory
sudo cp ./temp/messaging/README.md ./libs/nodejs-messaging/
sudo cp ./temp/numbering/README.md ./libs/nodejs-numbering/

rm -rf ./temp