import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-noir-900 border-t border-noir-700/50 py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                <span className="text-noir-900 font-bold text-sm">N</span>
              </span>
              <span className="font-serif text-xl tracking-widest text-noir-50">
                NOIR
              </span>
            </div>
            <p className="text-noir-500 text-sm leading-relaxed">
              Fine Swiss watchmaking since 1893.
              <br />
              La Chaux-de-Fonds, Switzerland.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Collections
            </h4>
            <ul className="space-y-2">
              {["L'Ombre", "Minuit", "Héritage", "Chronographe", "Nocturne"].map(
                (name) => (
                  <li key={name}>
                    <Link
                      href={`/collections/${name.toLowerCase().replace("'", "").replace("é", "e")}`}
                      className="text-noir-400 hover:text-noir-50 text-sm transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/configurator", label: "Configurator" },
                { href: "/atelier", label: "Atelier" },
                { href: "/size-guide", label: "Size Guide" },
                { href: "/wishlist", label: "Wishlist" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-noir-400 hover:text-noir-50 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Maison
            </h4>
            <ul className="space-y-2">
              <li className="text-noir-400 text-sm">Rue de la Paix 12</li>
              <li className="text-noir-400 text-sm">2300 La Chaux-de-Fonds</li>
              <li className="text-noir-400 text-sm">Switzerland</li>
              <li className="pt-2">
                <a
                  href="mailto:concierge@noirwatch.co"
                  className="text-gold-500 hover:text-gold-300 text-sm transition-colors"
                >
                  concierge@noirwatch.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-noir-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-noir-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Noir Watch Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-noir-600 text-xs tracking-wider">
              Swiss Made
            </span>
            <span className="text-noir-600 text-xs tracking-wider">
              COSC Certified
            </span>
            <span className="text-noir-600 text-xs tracking-wider">
              Since 1893
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}