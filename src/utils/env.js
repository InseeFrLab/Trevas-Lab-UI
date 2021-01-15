export const getEnvVar = (key) =>
	window?._env_?.[key] || process.env[`REACT_APP_${key}`];

export const getEnv = () => process.env.NODE_ENV;
