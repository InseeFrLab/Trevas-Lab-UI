export const IN_MEMORY = 'MEMORY';
export const SPARK = 'SPARK';
export const LOCAL = 'LOCAL';
export const SPARK_LOCAL = 'LOCAL';
export const SPARK_STATIC = 'CLUSTER_STATIC';
export const SPARK_KUBE = 'CLUSTER_KUBERNETES';
export const IN_JS = 'in-js';
export const WIP = 'WIP';

export const EMPTY_CONFIG = {
	id: 'empty',
	label: 'Empty lab',
	inMemoryData: [],
	sparkLocalData: [],
	sparkClusterData: [],
	script: '',
	defaultBindings: {},
	scope: [IN_MEMORY, SPARK_LOCAL, SPARK_STATIC, SPARK_KUBE, WIP],
};

export const READY = 'READY';
export const RUNNING = 'RUNNING';
export const DONE = 'DONE';
export const FAILED = 'FAILED';
