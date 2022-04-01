import { atom } from 'recoil';

export const IN_MEMORY_SCRIPT = atom({
	key: 'IN_MEMORY_SCRIPT',
	default: '',
});

export const SPARK_SCRIPT = atom({
	key: 'SPARK_SCRIPT',
	default: '',
});

export const IN_MEMORY_BINDINGS = atom({
	key: 'IN_MEMORY_BINDINGS',
	default: {},
});

export const SPARK_BINDINGS = atom({
	key: 'SPARK_BINDINGS',
	default: {},
});
