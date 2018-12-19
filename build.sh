#!/usr/bin/env bash

# Build script
# Produces a new version of the docker image named 'nickbelzeme'

npm install
npm run build
docker build -t nickbelzerme .
