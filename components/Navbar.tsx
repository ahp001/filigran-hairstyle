export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-4 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-white backdrop-blur-md md:px-5 md:py-4">
          <a
            href="#"
            className="max-w-[160px] text-sm font-semibold tracking-wide sm:max-w-none sm:text-base md:text-lg"
          >
            Filigran Hairstylist
          </a>

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

          <a
            href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-black transition hover:scale-[1.02] sm:px-4 sm:text-sm"
          >
            Buchen
          </a>
        </div>
      </div>
    </header>
  );
}