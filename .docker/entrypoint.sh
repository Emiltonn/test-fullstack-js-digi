#!/bin/bash

yarn install
yarn run typeorm migration:run
yarn run dev
chmod +x .docker/entrypoint.sh
