export const IN_MEMORY = 'in-memory';
export const SPARK_LOCAL = 'spark';
export const SPARK_STATIC = 'spark-static';
export const SPARK_KUBE = 'spark-kube';
export const IN_JS = 'in-js';

export const EMPTY_CONFIG = {
	id: 'empty',
	label: 'Empty lab',
	inMemoryData: [],
	sparkLocalData: [],
	sparkClusterData: [],
	script: '',
	defaultBindings: {},
	scope: [IN_MEMORY, SPARK_LOCAL, SPARK_STATIC, SPARK_KUBE],
};

export const READY = 'READY';
export const RUNNING = 'RUNNING';
export const DONE = 'DONE';
export const FAILED = 'FAILED';
