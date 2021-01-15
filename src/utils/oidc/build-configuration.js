export const buildOidcConfiguration = (baseConfig) => {
  const {
    REACT_APP_OIDC_AUTHORITY: authority,
    REACT_APP_OIDC_CLIENT_ID: client_id,
  } = process.env;
  const { origin } = window.location;
  const updatedBaseConfigConfig = Object.entries(baseConfig.config).reduce(
    (acc, [k, v]) => ({
      ...acc,
      [k]: typeof v === "string" ? v.replace("my_origin", origin) : v,
    }),
    {}
  );
  const configuration = {
    ...baseConfig,
    origin: window.location.origin,
    config: { ...updatedBaseConfigConfig, authority, client_id },
  };
  return configuration;
};
