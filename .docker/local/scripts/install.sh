#!/bin/bash

set -e

yarn install --network-timeout 100000
yarn add @nrwl/nx-linux-arm64-gnu -D