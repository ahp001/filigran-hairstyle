export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-4 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-4 text-white backdrop-blur-md md:px-6 md:py-5">
          
          {/* 🔥 LOGO */}
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Filigran Hairstylist"
              className="h-16 w-auto transition hover:scale-105"
            />
          </a>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm text-white/90 transition hover:text-white">
              Über uns
            </a>
            <a href="#services" className="text-sm text-white/90 transition hover:text-white">
              Leistungen
            </a>
            <a href="#team" className="text-sm text-white/90 transition hover:text-white">
              Team
            </a>
            <a href="#contact" className="text-sm text-white/90 transition hover:text-white">
              Kontakt
            </a>
          </nav>

          {/* BUTTON */}
          <a
            href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.05]"
          >
            Buchen
          </a>
        </div>
      </div>
    </header>
  );
}