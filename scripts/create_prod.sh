#!/bin/bash

typescript="export const routes = {apiHostname: '$1'};"

echo "$typescript" > ./src/environments/api-route.prod.ts
