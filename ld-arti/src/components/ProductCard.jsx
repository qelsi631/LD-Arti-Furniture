import { Link } from "react-router-dom";

function ProductCard({ product }) {
	const { name, category, description, price, image, badge } = product;

	return (
		<article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b252d] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#08cbd6]/50">
			<div className="relative aspect-[4/3] overflow-hidden bg-[#173b43]">
				<img
					src={image}
					alt={name}
					className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
				/>

				{badge && (
					<span className="absolute left-4 top-4 rounded-full bg-[#08cbd6] px-3 py-1 text-xs font-semibold text-[#06171d]">
						{badge}
					</span>
				)}
			</div>

			<div className="p-5 sm:p-6">
				<p className="text-xs font-medium uppercase tracking-[0.2em] text-[#08cbd6]">
					{category}
				</p>
				<h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
				<p className="mt-3 text-sm leading-6 text-white/65">{description}</p>

				<div className="mt-5 flex items-center justify-between gap-4">
					<p className="text-lg font-semibold text-[#f0d8b8]">{price}</p>
					<Link
						to={`/products/${product.id}`}
						className="rounded-full border border-[#08cbd6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#08cbd6] hover:text-[#06171d]"
					>
						Më shumë
					</Link>
				</div>
			</div>
		</article>
	);
}

export default ProductCard;
