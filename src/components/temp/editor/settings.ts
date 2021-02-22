import './vtlEditor.css';

export enum VTL_VERSION {
	VTL_2_0 = 'vtl-2.0',
	VTL_2_0_Insee = 'vtl-2.0-insee',
	VTL_3_0 = 'vtl-3.0',
}

export interface VersionType {
	name: string;
	code: VTL_VERSION;
}

export const themes = [
	{ name: 'VTL', code: 'vtl' },
	{ name: 'Light', code: 'vs' },
	{ name: 'Dark', code: 'vs-dark' },
	{ name: 'High Contrast Dark', code: 'hc-black' },
];
export const languageVersions: VersionType[] = [
	{ name: '2.0', code: VTL_VERSION.VTL_2_0 },
	{ name: '2.0-insee', code: VTL_VERSION.VTL_2_0_Insee },
	{ name: '3.0', code: VTL_VERSION.VTL_3_0 },
];
