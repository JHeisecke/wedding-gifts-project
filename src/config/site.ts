export interface BankAccountConfig {
	bankName: string;
	holderName: string;
	accountNumber: string;
	documentNumber: string;
	alias?: string;
}

export interface WhatsAppConfig {
	phoneNumber: string;
	messageTemplate: string;
}

export interface ContributionStep {
	number: string;
	title: string;
	description: string;
}

export interface SiteConfig {
	language: 'es-PY';
	pageTitle: string;
	pageDescription: string;
	robots: 'noindex, nofollow';
	prototypeNotice: string;
	coupleNames: string;
	weddingDate: string;
	weddingDateIso: string;
	heroEyebrow: string;
	heroSubtitle: string;
	heroCta: string;
	contributionEyebrow: string;
	contributionTitle: string;
	contributionIntro: string;
	contributionSteps: readonly ContributionStep[];
	giftsEyebrow: string;
	giftsTitle: string;
	giftsIntro: string;
	thankYouTitle: string;
	thankYouMessage: string;
	bankAccount: BankAccountConfig;
	whatsApp: WhatsAppConfig;
}

export const siteConfig = {
	language: 'es-PY',
	pageTitle: 'Javier & Iara — Nos casamos',
	pageDescription: 'Regalos para acompañar a Javier y Iara en su nuevo hogar y luna de miel.',
	robots: 'noindex, nofollow',
	prototypeNotice: 'Versión prototipo — por favor, no realices transferencias todavía.',
	coupleNames: 'Javier & Iara',
	weddingDate: '20 de febrero de 2027',
	weddingDateIso: '2027-02-20',
	heroEyebrow: 'Nos casamos',
	heroSubtitle: 'Ayúdanos a construir nuestro nuevo hogar y luna de miel en Mendoza.',
	heroCta: 'Ver regalos',
	contributionEyebrow: 'Cómo contribuir',
	contributionTitle: 'Un regalo, a tu manera',
	contributionIntro:
		'Elegí el regalo que más te guste y aportá el monto que quieras. Nosotros nos encargamos del resto.',
	contributionSteps: [
		{
			number: '01',
			title: 'Elegí un regalo',
			description: 'Recorré nuestras ideas y elegí la que quieras acompañar.',
		},
		{
			number: '02',
			title: 'Hacé la transferencia',
			description: 'Copiá los datos bancarios y transferí el monto que prefieras.',
		},
		{
			number: '03',
			title: 'Enviá el comprobante',
			description: 'Abrí WhatsApp desde la página y envianos el comprobante.',
		},
	],
	giftsEyebrow: 'Nuestra lista',
	giftsTitle: 'Regalos para esta nueva etapa',
	giftsIntro:
		'Cada aporte, grande o pequeño, nos acerca un poquito más a estos sueños compartidos.',
	thankYouTitle: 'Gracias por acompañarnos',
	thankYouMessage:
		'Gracias por ser parte de este comienzo. Cada mensaje, abrazo y aporte hace que esta etapa sea todavía más especial.',
	bankAccount: {
		bankName: 'Banco Continental',
		holderName: 'JAVIER HEISECKE ECHEVERRIA',
		accountNumber: '010034916007',
		documentNumber: '0000000',
	},
	whatsApp: {
		phoneNumber: '+595 983459888',
		messageTemplate:
			'Hola, Javier e Iara. Quiero contribuir al regalo “{giftName}”. Adjunto mi comprobante. Mi nombre es: _____. Mensaje para ustedes (opcional): _____.',
	},
} satisfies SiteConfig;
