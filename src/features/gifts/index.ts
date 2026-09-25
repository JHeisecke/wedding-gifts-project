import { seedGifts } from './data/seed-gifts';
import { StaticGiftRepository } from './data/static-gift-repository';

export const giftRepository = new StaticGiftRepository(seedGifts);

export { calculateGiftProgress } from './domain/gift-progress';
export type { Gift, GiftCategory, GiftImage } from './domain/gift';
export type { GiftRepository } from './domain/gift-repository';
