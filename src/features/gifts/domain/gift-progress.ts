import type { Gift } from './gift';

export interface GiftProgress {
	confirmedAmount: number;
	remainingAmount: number;
	percentage: number;
	isCompleted: boolean;
}

export function calculateGiftProgress(
	gift: Pick<Gift, 'targetAmount' | 'confirmedAmount'>,
): GiftProgress {
	if (gift.targetAmount <= 0) {
		throw new RangeError('targetAmount must be greater than zero');
	}

	if (gift.confirmedAmount < 0) {
		throw new RangeError('confirmedAmount cannot be negative');
	}

	return {
		confirmedAmount: gift.confirmedAmount,
		remainingAmount: Math.max(0, gift.targetAmount - gift.confirmedAmount),
		percentage: Math.min(100, (gift.confirmedAmount / gift.targetAmount) * 100),
		isCompleted: gift.confirmedAmount >= gift.targetAmount,
	};
}
