#!/bin/sh

/generate-envjs.sh /usr/share/nginx/html/env.js
nginx -g 'daemon off;'

sleep 9999999999999