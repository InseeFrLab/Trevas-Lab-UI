#!/bin/sh
echo "window._env_['API_BASE_URL'] = '$API_BASE_URL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['CONFIGURATION_URL'] = '$CONFIGURATION_URL';" >> /usr/share/nginx/html/env-config.js
exec "$@"