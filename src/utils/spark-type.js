import * as C from './constants';

export const getSparkType = (pathname) => {
	switch (pathname) {
		case C.SPARK_LOCAL_PATH:
			return C.LOCAL;
		case C.SPARK_STATIC_PATH:
			return C.CLUSTER_STATIC;
		case C.SPARK_KUBERNETES_PATH:
			return C.CLUSTER_KUBERNETES;
		default:
			return C.LOCAL;
	}
};

export const getMode = (pathname) => {
	switch (pathname) {
		case C.IN_MEMORY_PATH:
			return C.IN_MEMORY;
		default:
			return C.SPARK;
	}
};
