#!/bin/bash

set -x

rm -f /opt/PRISON-API/tmp/pids/server.pid

cd /opt/PRISON-API
# bash bin/update_art_metadata.sh development

exec "$@"