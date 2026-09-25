export interface WhatsAppLinkInput {
	phoneNumber: string;
	messageTemplate: string;
	giftName: string;
}

export function buildWhatsAppUrl({
	phoneNumber,
	messageTemplate,
	giftName,
}: WhatsAppLinkInput): string | null {
	const normalizedPhoneNumber = phoneNumber.replace(/\D/g, '');

	if (normalizedPhoneNumber.length < 8) {
		return null;
	}

	const message = messageTemplate.replaceAll('{giftName}', giftName);

	return `https://wa.me/${normalizedPhoneNumber}?text=${encodeURIComponent(message)}`;
}
