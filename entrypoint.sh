#!/bin/sh
echo "window._env_['API_BASE_URL'] = '$API_BASE_URL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['CONFIGURATION_URL'] = '$CONFIGURATION_URL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['AUTH_MODE'] = '$AUTH_MODE';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['OIDC_AUTHORITY'] = '$OIDC_AUTHORITY';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['OIDC_CLIENT_ID'] = '$OIDC_CLIENT_ID';" >> /usr/share/nginx/html/env-config.js
exec "$@"