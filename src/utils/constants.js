export const IN_MEMORY = 'MEMORY';
export const SPARK = 'SPARK';
export const LOCAL = 'LOCAL';
export const SPARK_LOCAL = 'LOCAL';
export const SPARK_STATIC = 'CLUSTER_STATIC';
export const SPARK_KUBE = 'CLUSTER_KUBERNETES';
export const IN_JS = 'in-js';
export const V2_IN_MEMORY = 'V2_IN_MEMORY';

export const EMPTY_CONFIG = {
	id: 'empty',
	label: 'Empty lab',
	inMemoryData: [],
	sparkLocalData: [],
	sparkClusterData: [],
	script: '',
	defaultBindings: {},
	scope: [IN_MEMORY, SPARK_LOCAL, SPARK_STATIC, SPARK_KUBE, V2_IN_MEMORY],
};

export const READY = 'READY';
export const RUNNING = 'RUNNING';
export const DONE = 'DONE';
export const FAILED = 'FAILED';

// Binding types

export const LOCAL_JSON = 'JSON';
export const JDBC = 'JDBC';
