#!/bin/bash

yarn install
yarn typeorm migration:run
chmod +x .docker/entrypoint.sh
yarn dev
