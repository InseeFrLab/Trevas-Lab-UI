import * as C from './constants';

export const getMode = (pathname) => {
	switch (pathname) {
		case C.IN_MEMORY_PATH:
			return C.IN_MEMORY;
		default:
			return C.SPARK;
	}
};
