export const IN_MEMORY = 'in-memory';
export const SPARK_LOCAL = 'spark';
export const SPARK_CLUSTER = 'spark-cluster';
export const IN_JS = 'in-js';

export const EMPTY_CONFIG = {
	id: 'empty',
	label: 'Empty lab',
	inMemoryData: [],
	sparkLocalData: [],
	sparkClusterData: [],
	script: '',
	defaultBindings: {},
	scope: ['in-memory', 'spark', 'spark-cluster'],
};
