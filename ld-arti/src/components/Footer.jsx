import interiorImage from "../assets/interior.jpg";
import logo from "../assets/LD-arti-logo.png";

const footerLinks = [
	{ label: "Ballina", href: "#home" },
	{ label: "Mobilje", href: "#products" },
	{ label: "Kategoritë", href: "#categories" },
	{ label: "Kontakt", href: "#contact" },
];

const categories = [
	"Dhoma e ndenjes",
	"Kuzhina",
	"Dhoma e gjumit",
];

function Footer() {
	return (
		<footer id="contact" className="relative isolate overflow-hidden border-t border-white/10 bg-[#041217]">
			<img
				src={interiorImage}
				alt=""
				aria-hidden="true"
				className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover blur-[2px]"
			/>
			<div className="absolute inset-0 -z-10 bg-[#041217]/65" />

			<div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
				<div>
					<a href="#home" className="inline-block">
						<img
							src={logo}
							alt="LD arti Furniture"
							className="h-12 w-auto"
						/>
					</a>
					<p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
						Mobilje moderne, cilësi e përzgjedhur dhe zgjidhje të bukura për shtëpinë tuaj.
					</p>
				</div>

				<div>
					<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#08cbd6]">
						Navigimi
					</h2>
					<nav className="mt-5 flex flex-col gap-3 text-sm text-white/65">
						{footerLinks.map((link) => (
							<a key={link.label} href={link.href} className="transition hover:text-white">
								{link.label}
							</a>
						))}
					</nav>
				</div>

				<div>
					<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#08cbd6]">
						Kategoritë
					</h2>
					<div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
						{categories.map((category) => (
							<a key={category} href="#products" className="transition hover:text-white">
								{category}
							</a>
						))}
					</div>
				</div>

				<div>
					<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#08cbd6]">
						Na kontaktoni
					</h2>
					<div className="mt-5 space-y-3 text-sm leading-6 text-white/65">
						<a href="tel:+355000000000" className="block transition hover:text-white">
							+355 00 000 0000
						</a>
						<a href="mailto:info@ldarti.com" className="block transition hover:text-white">
							info@ldarti.com
						</a>
						<p>Hënë - Shtunë, 09:00 - 18:00</p>
					</div>
				</div>
			</div>

			<div className="relative border-t border-white/10 bg-[#041217]/35 px-4 py-5 sm:px-6">
				<div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
					<p>&copy; {new Date().getFullYear()} LD arti Furniture. Të gjitha të drejtat e rezervuara.</p>
					<a href="#home" className="transition hover:text-white">Kthehu lart &uarr;</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
