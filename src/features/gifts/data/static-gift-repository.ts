import type { GiftRepository } from '../domain/gift-repository';
import type { Gift } from '../domain/gift';

export class StaticGiftRepository implements GiftRepository {
	constructor(private readonly gifts: readonly Gift[]) {}

	async list(): Promise<readonly Gift[]> {
		return [...this.gifts].sort((left, right) => left.displayOrder - right.displayOrder);
	}
}
