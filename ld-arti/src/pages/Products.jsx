import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
	return (
		<section id="products" className="bg-[#06171d] px-4 py-16 sm:px-6 sm:py-20">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-[#08cbd6]">
						Koleksioni ynë
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Zgjidhni pjesën tuaj të preferuar
					</h2>
					<p className="mt-4 text-base leading-7 text-white/65">
						Mobilje të përzgjedhura për ta bërë shtëpinë tuaj më të bukur dhe më funksionale.
					</p>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Products;
