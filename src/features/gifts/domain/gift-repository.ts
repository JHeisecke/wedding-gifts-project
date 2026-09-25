import type { Gift } from './gift';

export interface GiftRepository {
	list(): Promise<readonly Gift[]>;
}
