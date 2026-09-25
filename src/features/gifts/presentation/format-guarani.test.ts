import { describe, expect, it } from 'vitest';

import { formatGuarani } from './format-guarani';

describe('formatGuarani', () => {
	it('uses the Paraguayan currency format without decimals', () => {
		const result = formatGuarani(3_500_000);

		expect(result).toContain('Gs.');
		expect(result).toContain('3.500.000');
		expect(result).not.toContain(',00');
	});
});
