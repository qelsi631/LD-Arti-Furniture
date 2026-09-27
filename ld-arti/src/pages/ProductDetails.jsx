import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
	const { productId } = useParams();
	const product = products.find((item) => String(item.id) === productId);

	if (!product) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center bg-[#06171d] px-4 text-center text-white">
				<h1 className="text-3xl font-bold">Produkti nuk u gjet</h1>
				<Link to="/" className="mt-6 rounded-full bg-[#08cbd6] px-5 py-3 font-semibold text-[#06171d]">
					Kthehu në ballinë
				</Link>
			</main>
		);
	}

	return (
		<main className="bg-[#06171d] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-24">
			<div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
				<div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b252d]">
					<img src={product.image} alt={product.name} className="aspect-[4/3] h-full w-full object-cover" />
				</div>

				<div>
					<Link to="/" className="text-sm text-[#08cbd6] transition hover:text-white">
						&larr; Kthehu te produktet
					</Link>
					<p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-[#08cbd6]">
						{product.category}
					</p>
					<h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{product.name}</h1>
					<p className="mt-5 max-w-xl text-base leading-7 text-white/70">{product.description}</p>
					<p className="mt-8 text-2xl font-semibold text-[#f0d8b8]">{product.price}</p>
					<a
						href="#contact"
						className="mt-8 inline-block rounded-full bg-[#08cbd6] px-6 py-3 font-semibold text-[#06171d] transition hover:bg-[#13e0eb]"
					>
						Kërko më shumë informacion
					</a>
				</div>
			</div>
		</main>
	);
}

export default ProductDetails;
