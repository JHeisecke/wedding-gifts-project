const guaraniFormatter = new Intl.NumberFormat('es-PY', {
	style: 'currency',
	currency: 'PYG',
	maximumFractionDigits: 0,
});

export function formatGuarani(amount: number): string {
	return guaraniFormatter.format(amount);
}
