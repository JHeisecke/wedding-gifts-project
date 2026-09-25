export interface BankAccountConfig {
	bankName: string;
	holderName: string;
	accountNumber: string;
	alias?: string;
}

export interface WhatsAppConfig {
	phoneNumber: string;
	messageTemplate: string;
}

export interface SiteConfig {
	language: 'es-PY';
	coupleNames: string;
	weddingDate: string;
	heroEyebrow: string;
	heroSubtitle: string;
	bankAccount: BankAccountConfig;
	whatsApp: WhatsAppConfig;
}

export const siteConfig = {
	language: 'es-PY',
	coupleNames: 'Javier & Yara',
	weddingDate: '20 de febrero de 2027',
	heroEyebrow: 'Nos casamos',
	heroSubtitle: 'Ayúdanos a construir nuestro nuevo hogar y luna de miel en Mendoza.',
	bankAccount: {
		bankName: 'Pendiente de definir',
		holderName: 'Pendiente de definir',
		accountNumber: '',
	},
	whatsApp: {
		phoneNumber: '',
		messageTemplate:
			'Hola, quiero enviarte el comprobante de mi aporte para “{giftName}”.',
	},
} satisfies SiteConfig;
