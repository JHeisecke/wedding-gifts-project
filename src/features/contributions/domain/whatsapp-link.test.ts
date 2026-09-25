import { describe, expect, it } from 'vitest';

import { buildWhatsAppUrl } from './whatsapp-link';

describe('buildWhatsAppUrl', () => {
	it('normalizes the number and encodes the selected gift', () => {
		const url = buildWhatsAppUrl({
			phoneNumber: '+595 981 123 456',
			messageTemplate: 'Hola, quiero aportar para “{giftName}”.',
			giftName: 'Vuelo de ida a Mendoza',
		});

		expect(url).toBe(
			'https://wa.me/595981123456?text=Hola%2C%20quiero%20aportar%20para%20%E2%80%9CVuelo%20de%20ida%20a%20Mendoza%E2%80%9D.',
		);
	});

	it('returns null when the destination number is missing', () => {
		expect(
			buildWhatsAppUrl({
				phoneNumber: '',
				messageTemplate: 'Aporte para {giftName}',
				giftName: 'Licuadora',
			}),
		).toBeNull();
	});
});
