import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-900/90 backdrop-blur-md border-b border-noir-700/50">
        <div className="section-container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
              <span className="text-noir-900 font-bold text-sm">N</span>
            </span>
            <span className="font-serif text-xl tracking-widest text-noir-50">
              NOIR
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#collections"
              className="text-sm tracking-widest uppercase text-noir-400 hover:text-gold-500 transition-colors"
            >
              Collections
            </Link>
            <Link
              href="#craftsmanship"
              className="text-sm tracking-widest uppercase text-noir-400 hover:text-gold-500 transition-colors"
            >
              Craftsmanship
            </Link>
            <Link
              href="#heritage"
              className="text-sm tracking-widest uppercase text-noir-400 hover:text-gold-500 transition-colors"
            >
              Heritage
            </Link>
            <Link
              href="#discover"
              className="text-sm tracking-widest uppercase bg-gold-500 text-noir-900 px-5 py-2 hover:bg-gold-400 transition-colors"
            >
              Shop
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-noir-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0a0a0a_70%)]" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center section-container">
          <p className="section-subtitle mb-4">Swiss Precision · Avant-Garde Design</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-noir-50 mb-6 leading-tight">
            Define Your
            <br />
            <span className="text-gold-500">Legacy</span>
          </h1>
          <p className="text-noir-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Where centuries-old Swiss craftsmanship meets contemporary design.
            Every Noir timepiece is a statement — precision engineered for those
            who value the art of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link href="#craftsmanship" className="btn-outline">
              Our Craft
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-noir-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/60 to-transparent" />
        </div>
      </section>

      {/* ─── Collections ─── */}
      <section id="collections" className="py-28 bg-noir-800">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Our Collections</p>
            <h2 className="section-title">Where Art Meets Engineering</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="group relative bg-noir-900 border border-noir-700/50 p-8 hover:border-gold-500/30 transition-all duration-500">
              <div className="mb-6">
                <span className="text-gold-500 text-6xl font-serif">&ldquo;</span>
              </div>
              <h3 className="text-2xl font-serif text-noir-50 mb-2 tracking-wider">
                L&apos;Ombre
              </h3>
              <p className="text-noir-500 text-xs uppercase tracking-[0.2em] mb-4">The Shadow</p>
              <p className="text-noir-300 leading-relaxed mb-6">
                A masterwork of minimalism. Skeletonized dial reveals the heartbeat
                of the movement — polished bridges, ruby jewels, and the oscillating
                weight finished in 22K gold.
              </p>
              <Link
                href="#discover"
                className="text-gold-500 text-sm tracking-widest uppercase hover:text-gold-300 transition-colors inline-flex items-center gap-2"
              >
                Discover <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Collection 2 */}
            <div className="group relative bg-noir-900 border border-noir-700/50 p-8 hover:border-gold-500/30 transition-all duration-500">
              <div className="mb-6">
                <span className="text-gold-500 text-6xl font-serif">&ldquo;</span>
              </div>
              <h3 className="text-2xl font-serif text-noir-50 mb-2 tracking-wider">
                Minuit
              </h3>
              <p className="text-noir-500 text-xs uppercase tracking-[0.2em] mb-4">Midnight</p>
              <p className="text-noir-300 leading-relaxed mb-6">
                Encased in forged carbon fiber with a deep black sunburst dial.
                LumiNova Super-LumiNova hands glow like stars against the void.
                50m water resistance meets 70-hour power reserve.
              </p>
              <Link
                href="#discover"
                className="text-gold-500 text-sm tracking-widest uppercase hover:text-gold-300 transition-colors inline-flex items-center gap-2"
              >
                Discover <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Collection 3 */}
            <div className="group relative bg-noir-900 border border-noir-700/50 p-8 hover:border-gold-500/30 transition-all duration-500">
              <div className="mb-6">
                <span className="text-gold-500 text-6xl font-serif">&ldquo;</span>
              </div>
              <h3 className="text-2xl font-serif text-noir-50 mb-2 tracking-wider">
                Héritage
              </h3>
              <p className="text-noir-500 text-xs uppercase tracking-[0.2em] mb-4">Heritage</p>
              <p className="text-noir-300 leading-relaxed mb-6">
                Inspired by vintage pocket watches of the Belle Époque. Guilloché
                dial hand-engraved on a rose engine, blued steel hands, and a
                hand-wound movement visible through the exhibition caseback.
              </p>
              <Link
                href="#discover"
                className="text-gold-500 text-sm tracking-widest uppercase hover:text-gold-300 transition-colors inline-flex items-center gap-2"
              >
                Discover <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Craftsmanship ─── */}
      <section id="craftsmanship" className="py-28 bg-noir-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-3">Craftsmanship</p>
              <h2 className="section-title mb-8">
                The Art of
                <br />
                <span className="text-gold-500">Fine Watchmaking</span>
              </h2>
              <div className="w-16 h-px bg-gold-500 mb-8" />
              <p className="text-noir-300 leading-relaxed mb-6 text-lg">
                Every Noir timepiece begins its journey in the Jura Mountains of
                Switzerland. Our master horologists spend over 200 hours
                assembling, regulating, and finishing each movement by hand.
              </p>
              <p className="text-noir-400 leading-relaxed mb-8">
                From the circular graining on the mainplate to the hand-bevelled
                edges of every bridge — no detail is too small. We believe the
                unseen should be as beautiful as the face you wear.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gold-500/50 pl-4">
                  <p className="text-3xl font-serif text-gold-500">200+</p>
                  <p className="text-noir-400 text-sm">Hours per movement</p>
                </div>
                <div className="border-l-2 border-gold-500/50 pl-4">
                  <p className="text-3xl font-serif text-gold-500">35</p>
                  <p className="text-noir-400 text-sm">Master horologists</p>
                </div>
                <div className="border-l-2 border-gold-500/50 pl-4">
                  <p className="text-3xl font-serif text-gold-500">5yr</p>
                  <p className="text-noir-400 text-sm">International warranty</p>
                </div>
                <div className="border-l-2 border-gold-500/50 pl-4">
                  <p className="text-3xl font-serif text-gold-500">1893</p>
                  <p className="text-noir-400 text-sm">Founded</p>
                </div>
              </div>
            </div>

            {/* Craftsmanship visual panel */}
            <div className="relative aspect-[4/5] bg-noir-800 border border-noir-700/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-gold-500/40 flex items-center justify-center">
                    <span className="text-gold-500 text-3xl font-serif">N</span>
                  </div>
                  <p className="text-noir-400 text-sm tracking-[0.3em] uppercase mb-4">
                    Hand assembled in
                  </p>
                  <p className="text-noir-50 text-2xl font-serif tracking-wider">
                    La Chaux-de-Fonds
                  </p>
                  <div className="w-12 h-px bg-gold-500/60 mx-auto mt-6 mb-6" />
                  <p className="text-noir-500 text-xs tracking-widest uppercase">
                    Switzerland
                  </p>
                </div>
              </div>
              {/* Decorative gear pattern */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.04]">
                <svg viewBox="0 0 100 100" fill="white">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1" fill="none" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <line
                      key={angle}
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="20"
                      stroke="white"
                      strokeWidth="3"
                      transform={`rotate(${angle} 50 50)`}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Heritage ─── */}
      <section id="heritage" className="py-28 bg-noir-800">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Heritage</p>
            <h2 className="section-title">A Century of Precision</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-noir-600 -translate-x-1/2" />

              <div className="space-y-16">
                {/* 1893 */}
                <div className="relative flex flex-col md:flex-row items-start gap-8">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-10 text-right">
                    <div>
                      <p className="text-gold-500 font-serif text-2xl">1893</p>
                      <p className="text-noir-200 font-serif text-lg">Fondation</p>
                      <p className="text-noir-400 text-sm mt-2 leading-relaxed">
                        Founded in La Chaux-de-Fonds by Henri Noir, a young
                        watchmaker with a vision to blend precision with artistry.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gold-500 -translate-x-1/2 z-10" />
                  <div className="md:hidden pl-12">
                    <p className="text-gold-500 font-serif text-xl">1893</p>
                    <p className="text-noir-200 font-serif">Fondation</p>
                    <p className="text-noir-400 text-sm mt-1 leading-relaxed">
                      Founded in La Chaux-de-Fonds by Henri Noir.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2 pl-10">
                    <p className="text-noir-400 text-sm leading-relaxed">
                      The workshop on Rue du Progrès produced just 12 pocket
                      watches in its first year. Each one bearing the signature
                      &ldquo;Noir &mdash; Genève.&rdquo;
                    </p>
                  </div>
                </div>

                {/* 1925 */}
                <div className="relative flex flex-col md:flex-row items-start gap-8">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-10 text-right">
                    <p className="text-noir-400 text-sm leading-relaxed">
                      The first Noir wristwatch won the Grand Prix at the
                      Exposition Internationale des Arts Décoratifs in Paris.
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gold-500 -translate-x-1/2 z-10" />
                  <div className="md:hidden pl-12">
                    <p className="text-gold-500 font-serif text-xl">1925</p>
                    <p className="text-noir-200 font-serif">Art Deco Triumph</p>
                    <p className="text-noir-400 text-sm mt-1 leading-relaxed">
                      Won the Grand Prix in Paris.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2 pl-10">
                    <div>
                      <p className="text-gold-500 font-serif text-2xl">1925</p>
                      <p className="text-noir-200 font-serif text-lg">Art Deco Triumph</p>
                    </div>
                  </div>
                </div>

                {/* 1968 */}
                <div className="relative flex flex-col md:flex-row items-start gap-8">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-10 text-right">
                    <div>
                      <p className="text-gold-500 font-serif text-2xl">1968</p>
                      <p className="text-noir-200 font-serif text-lg">The Minuit Caliber</p>
                      <p className="text-noir-400 text-sm mt-2 leading-relaxed">
                        Introduction of the ultra-thin automatic caliber N-681,
                        powering the iconic Minuit collection.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gold-500 -translate-x-1/2 z-10" />
                  <div className="md:hidden pl-12">
                    <p className="text-gold-500 font-serif text-xl">1968</p>
                    <p className="text-noir-200 font-serif">The Minuit Caliber</p>
                    <p className="text-noir-400 text-sm mt-1 leading-relaxed">
                      Ultra-thin automatic caliber N-681.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2 pl-10">
                    <p className="text-noir-400 text-sm leading-relaxed">
                      At just 2.8mm thick, the N-681 set a new standard for
                      haute horlogerie. Still in production, hand-finished by our
                      master watchmakers.
                    </p>
                  </div>
                </div>

                {/* Today */}
                <div className="relative flex flex-col md:flex-row items-start gap-8">
                  <div className="hidden md:flex md:w-1/2 justify-end pr-10 text-right">
                    <p className="text-noir-400 text-sm leading-relaxed">
                      A new atelier in Geneva. 35 master watchmakers. Three
                      iconic collections. One unwavering philosophy.
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gold-500 -translate-x-1/2 z-10" />
                  <div className="md:hidden pl-12">
                    <p className="text-gold-500 font-serif text-xl">Present</p>
                    <p className="text-noir-200 font-serif">Geneva Atelier</p>
                    <p className="text-noir-400 text-sm mt-1 leading-relaxed">
                      35 master watchmakers. Three collections.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2 pl-10">
                    <div>
                      <p className="text-gold-500 font-serif text-2xl">Present</p>
                      <p className="text-noir-200 font-serif text-lg">Geneva Atelier</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Call to Action ─── */}
      <section id="discover" className="py-28 bg-noir-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a1a1a_0%,_#0a0a0a_70%)]" />
        <div className="relative z-10 section-container text-center">
          <p className="section-subtitle mb-3">The Next Chapter</p>
          <h2 className="section-title mb-6">
            Made for Those Who
            <br />
            <span className="text-gold-500">Move Through Time</span>
          </h2>
          <p className="text-noir-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join an exclusive community of collectors and connoisseurs.
            Each timepiece is built to order — as unique as the wrist it
            adorns.
          </p>
          <Link
            href="#"
            className="btn-primary text-base tracking-[0.15em]"
          >
            Request an Appointment
          </Link>
          <p className="text-noir-600 text-xs mt-6 tracking-widest uppercase">
            Private viewings · By appointment only
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-noir-800 border-t border-noir-700/50 py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                  <span className="text-noir-900 font-bold text-sm">N</span>
                </span>
                <span className="font-serif text-lg tracking-widest text-noir-50">
                  NOIR
                </span>
              </div>
              <p className="text-noir-500 text-sm leading-relaxed">
                Swiss luxury timepieces since 1893.
              </p>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-noir-50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Collections
              </h4>
              <ul className="space-y-2">
                {["L&apos;Ombre", "Minuit", "Héritage"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-noir-400 text-sm hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-noir-50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                {["Warranty", "Service & Repairs", "Contact Us", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-noir-400 text-sm hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-noir-50 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Sale", "Shipping"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-noir-400 text-sm hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-noir-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-noir-600 text-xs">
              &copy; {new Date().getFullYear()} Noir Watch Co. All rights reserved.
            </p>
            <p className="text-noir-600 text-xs tracking-widest uppercase">
              La Chaux-de-Fonds &mdash; Genève
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}