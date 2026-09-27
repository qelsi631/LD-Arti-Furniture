import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06171d]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* REAL LOGO */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/src/assets/LD-arti-logo.png"
            alt="LD arti Furniture"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm transition hover:text-[#08cbd6]"
          >
            Ballina
          </Link>

          <a
            href="#products"
            className="text-sm text-white/80 transition hover:text-[#08cbd6]"
          >
            Mobilje
          </a>

          <a
            href="#kuzhina"
            className="text-sm text-white/80 transition hover:text-[#08cbd6]"
          >
            Kuzhina
          </a>

          <a
            href="#komoda"
            className="text-sm text-white/80 transition hover:text-[#08cbd6]"
          >
            Komoda
          </a>

          <a
            href="#about"
            className="text-sm text-white/80 transition hover:text-[#08cbd6]"
          >
            Rreth nesh
          </a>

          <a
            href="#contact"
            className="text-sm text-white/80 transition hover:text-[#08cbd6]"
          >
            Kontakt
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#08cbd6] px-5 py-2.5 text-sm font-semibold text-[#06171d] transition hover:bg-[#13e0eb]"
          >
            Na kontakto
          </a>

        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/15 px-3 py-2 text-xl text-white md:hidden"
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#06171d] px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-white/85">
            <Link to="/" className="transition hover:text-[#08cbd6]">Ballina</Link>
            <a href="#products" className="transition hover:text-[#08cbd6]">Mobilje</a>
            <a href="#kuzhina" className="transition hover:text-[#08cbd6]">Kuzhina</a>
            <a href="#komoda" className="transition hover:text-[#08cbd6]">Komoda</a>
            <a href="#about" className="transition hover:text-[#08cbd6]">Rreth nesh</a>
            <a href="#contact" className="transition hover:text-[#08cbd6]">Kontakt</a>
            <a href="#contact" className="mt-2 rounded-full bg-[#08cbd6] px-4 py-2.5 text-center font-semibold text-[#06171d]">
              Na kontakto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;