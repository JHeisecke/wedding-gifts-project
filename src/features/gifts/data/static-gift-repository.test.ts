import { describe, expect, it } from 'vitest';

import type { Gift } from '../domain/gift';
import { StaticGiftRepository } from './static-gift-repository';

const createGift = (id: string, displayOrder: number): Gift => ({
	id,
	title: id,
	description: id,
	category: 'home',
	image: { src: '/placeholder.svg', alt: id },
	targetAmount: 1,
	confirmedAmount: 0,
	displayOrder,
});

describe('StaticGiftRepository', () => {
	it('returns gifts in display order without mutating its source', async () => {
		const source = [createGift('second', 2), createGift('first', 1)];
		const repository = new StaticGiftRepository(source);

		const gifts = await repository.list();

		expect(gifts.map(({ id }) => id)).toEqual(['first', 'second']);
		expect(source.map(({ id }) => id)).toEqual(['second', 'first']);
	});

	it('supports an empty catalog', async () => {
		const repository = new StaticGiftRepository([]);

		expect(await repository.list()).toEqual([]);
	});

	it('does not impose a catalog size limit', async () => {
		const source = Array.from({ length: 10 }, (_, index) => createGift(`gift-${index}`, index));
		const repository = new StaticGiftRepository(source);

		expect(await repository.list()).toHaveLength(10);
	});
});
