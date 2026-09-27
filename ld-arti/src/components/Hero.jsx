import heroImage from "../assets/interior.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#06171d]"
    >
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="LD arti Furniture - Mobilje moderne"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Left dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06171d] via-[#06171d]/95 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 sm:pt-24">

        <div className="max-w-2xl">

          {/* Small title */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-8 bg-[#08cbd6] sm:w-12"></span>

            <span className="text-[10px] font-medium tracking-[0.18em] text-[#08cbd6] sm:text-sm sm:tracking-[0.25em]">
              LD ARTI FURNITURE
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Mobilje moderne

            <span className="mt-2 block text-[#08cbd6] sm:mt-3">
              për shtëpinë tuaj
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            Dizajn, cilësi dhe funksionalitet në çdo detaj.
            Mobilje të përzgjedhura me kujdes për çdo hapësirë
            të shtëpisë tuaj.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">

            {/* Products button */}
            <a
              href="#products"
              className="rounded-full bg-[#08cbd6] px-5 py-3 text-center text-sm font-semibold text-[#06171d] transition duration-300 hover:scale-[1.02] hover:bg-[#13e0eb] sm:px-7 sm:py-3.5 sm:text-base"
            >
              Shiko produktet
            </a>

            {/* Contact button */}
            <a
              href="#contact"
              className="rounded-full border border-[#08cbd6] px-5 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-[#08cbd6] hover:text-[#06171d] sm:px-7 sm:py-3.5 sm:text-base"
            >
              Na kontakto
            </a>

          </div>

        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#06171d] to-transparent"></div>

    </section>
  );
}

export default Hero;