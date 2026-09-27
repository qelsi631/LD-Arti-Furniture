import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

const categories = [
  {
    name: "Dhoma e ndenjes",
    description: "Krijoni një ambient të ngrohtë për çdo ditë.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Kuzhina",
    description: "Zgjidhje praktike me stil të qëndrueshëm.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Dhoma e gjumit",
    description: "Qetësi, rehati dhe dizajn për pushimin tuaj.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-[#06171d] text-white">
      <Navbar />
      <Hero/>
      <Products />

    <section id="categories" className="bg-[#071d26] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#08cbd6]">
            Kategoritë
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mobilje për çdo hapësirë
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>

    <WhatsAppCTA />
    <Footer />
    </div>
  );
}

function ProductDetailsPage() {
	return (
		<div className="min-h-screen bg-[#06171d] text-white">
			<Navbar />
			<ProductDetails />
			<WhatsAppCTA />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products/:productId" element={<ProductDetailsPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;