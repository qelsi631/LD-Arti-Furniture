function WhatsAppCTA() {
	const message = encodeURIComponent("Përshëndetje, dëshiroj të mësoni më shumë për mobiljet tuaja.");

	return (
		<a
			href={`https://wa.me/?text=${message}`}
			target="_blank"
			rel="noreferrer"
			aria-label="Na kontaktoni në WhatsApp"
			className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-[#06171d] shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-[#40e879] sm:bottom-6 sm:right-6"
		>
			<span aria-hidden="true" className="text-lg leading-none">&#9742;</span>
			<span>WhatsApp</span>
		</a>
	);
}

export default WhatsAppCTA;
