function CategoryCard({ category }) {
	const { name, description, image, href = "#products" } = category;

	return (
		<a
			href={href}
			className="group relative isolate flex min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0b252d]"
		>
			<img
				src={image}
				alt={name}
				className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06171d] via-[#06171d]/65 to-transparent" />

			<div className="mt-auto w-full p-5 sm:p-6">
				<p className="text-xl font-semibold text-white">{name}</p>
				<p className="mt-2 max-w-xs text-sm leading-6 text-white/70">{description}</p>
				<span className="mt-4 inline-block text-sm font-semibold text-[#08cbd6] transition group-hover:translate-x-1">
					Shiko koleksionin &rarr;
				</span>
			</div>
		</a>
	);
}

export default CategoryCard;
