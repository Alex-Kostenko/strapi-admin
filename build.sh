#!/bin/bash
npm i 

pushd src/plugins/pdf-preview/ || exit 1 

npm install 
npm run build 

popd

# npm run develop
