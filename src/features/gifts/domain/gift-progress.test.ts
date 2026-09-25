import { describe, expect, it } from 'vitest';

import { calculateGiftProgress } from './gift-progress';

describe('calculateGiftProgress', () => {
	it('returns an empty progress state', () => {
		expect(calculateGiftProgress({ targetAmount: 1_000_000, confirmedAmount: 0 })).toEqual({
			confirmedAmount: 0,
			remainingAmount: 1_000_000,
			percentage: 0,
			isCompleted: false,
		});
	});

	it('calculates partial progress', () => {
		expect(calculateGiftProgress({ targetAmount: 1_000_000, confirmedAmount: 250_000 })).toEqual({
			confirmedAmount: 250_000,
			remainingAmount: 750_000,
			percentage: 25,
			isCompleted: false,
		});
	});

	it('caps overfunded gifts at one hundred percent', () => {
		expect(
			calculateGiftProgress({ targetAmount: 1_000_000, confirmedAmount: 1_250_000 }),
		).toEqual({
			confirmedAmount: 1_250_000,
			remainingAmount: 0,
			percentage: 100,
			isCompleted: true,
		});
	});

	it('rejects invalid amounts', () => {
		expect(() => calculateGiftProgress({ targetAmount: 0, confirmedAmount: 0 })).toThrow(
			RangeError,
		);
		expect(() =>
			calculateGiftProgress({ targetAmount: 1_000_000, confirmedAmount: -1 }),
		).toThrow(RangeError);
	});
});
