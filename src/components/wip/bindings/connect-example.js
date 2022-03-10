export const connectExample = {
	dataStucture: [
		{ name: 'id', type: 'INTEGER', role: 'IDENTIFIER' },
		{ name: 'mes1', type: 'INTEGER', role: 'MEASURE' },
		{ name: 'mes2', type: 'BOOLEAN', role: 'MEASURE' },
		{ name: 'attr', type: 'STRING', role: 'ATTRIBUTE' },
	],
	dataPoints: [
		[1, 10, true, 'kg'],
		[2, 20000, false, 'g'],
	],
};
