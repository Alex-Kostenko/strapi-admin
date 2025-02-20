#!/bin/bash
pushd src/plugins/pdf-preview/ || exit 1 

npm install 
npm run build 

popd

npm i 
npm run develop
