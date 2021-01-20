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

# rm -rf ./libs/nodejs-messaging
# rm -rf ./libs/nodejs-numbering

# Make temp directory and copy out the readme files 
mkdir temp
mkdir temp/messaging
mkdir temp/numbering

# Copy out the readme files as they are overwritten
sudo cp -fr ./libs/nodejs-messaging/README.md ./temp/messaging/
sudo cp -fr ./libs/nodejs-numbering/README.md ./temp/numbering/

# Using the docker instance of the client generator, generate the libraries.
docker run --rm --mount type=bind,source=/c/dev/enfonicaapis/enfonica/messaging,destination=/in/enfonica/messaging,readonly --mount type=bind,source=`pwd`/libs/nodejs-messaging,destination=/out gcr.io/gapic-images/gapic-generator-typescript:latest
docker run --rm --mount type=bind,source=/c/dev/enfonicaapis/enfonica/numbering,destination=/in/enfonica/numbering,readonly --mount type=bind,source=`pwd`/libs/nodejs-numbering,destination=/out gcr.io/gapic-images/gapic-generator-typescript:latest

 