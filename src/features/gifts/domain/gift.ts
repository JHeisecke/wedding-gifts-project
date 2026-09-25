export type GiftCategory = 'honeymoon' | 'home';

export interface GiftImage {
	src: string;
	alt: string;
}

export interface Gift {
	id: string;
	title: string;
	description: string;
	category: GiftCategory;
	image: GiftImage;
	targetAmount: number;
	confirmedAmount: number;
	displayOrder: number;
}
