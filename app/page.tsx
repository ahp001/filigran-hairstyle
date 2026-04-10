"use client";

import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "Über uns",        href: "#about" },
  { label: "Leistungen",      href: "#services" },
  { label: "Galerie",         href: "#gallery" },
  { label: "Preise",          href: "#prices" },
  { label: "Kontakt",         href: "#contact" },
];

const stats = [
  { value: "500+", label: "zufriedene Kunden" },
  { value: "5 ★",  label: "Google Bewertung" },
  { value: "8+",   label: "Jahre Erfahrung" },
  { value: "2",    label: "Expertinnen" },
];

const services = [
  {
    num: "01",
    title: "Damen",
    desc: "Präzise Schnitte, Waschen, Föhnen und feminine Looks – abgestimmt auf deine Persönlichkeit und Haarstruktur.",
    price: "ab 55 €",
  },
  {
    num: "02",
    title: "Coloration",
    desc: "Balayage, Ombré, Glossing und vollständige Colorationen mit hochwertigen Produkten für natürliche Tiefe.",
    price: "ab 85 €",
  },
  {
    num: "03",
    title: "Herren",
    desc: "Klare, moderne Schnitte mit Struktur und Stil – für den Mann, der Wert auf sein Erscheinungsbild legt.",
    price: "ab 35 €",
  },
  {
    num: "04",
    title: "Bridal & Events",
    desc: "Braut-Stylings, Hochsteckfrisuren und Looks für Verlobung, Hennaabend, Fotoshooting und besondere Momente.",
    price: "ab 120 €",
  },
];

const gallery = [
  "/videos/showcase-01.mp4",
  "/videos/showcase-03.mp4",
  "/videos/showcase-04.mp4",
  "/videos/showcase-05.mp4",
  "/videos/showcase-06.mp4",
];

const reviews = [
  {
    name: "M. K.",
    text: "Absolut begeistert! Filiz hat genau verstanden, was ich mir vorgestellt habe. Das Ergebnis war noch besser als erwartet – wunderschöner Balayage-Effekt.",
    date: "März 2025",
  },
  {
    name: "S. A.",
    text: "Traumhaftes Brautstyling – ich habe mich wie eine Königin gefühlt. Die Atmosphäre ist elegant, das Team herzlich. Absolute Empfehlung für jede Braut.",
    date: "Februar 2025",
  },
  {
    name: "L. W.",
    text: "Endlich ein Friseur, der wirklich zuhört. Die Coloration ist exakt so geworden wie aus dem Magazin. Ich komme nie wieder woanders hin.",
    date: "Januar 2025",
  },
];

const pricesDamen = [
  ["Waschen, Schnitt & Föhnen",  "ab 65 €"],
  ["Kurzhaarschnitt & Styling",  "ab 55 €"],
  ["Balayage / Ombré",           "ab 110 €"],
  ["Vollcoloration",             "ab 85 €"],
  ["Glossing / Toning",          "ab 65 €"],
  ["Strähnen (komplett)",        "ab 95 €"],
];

const pricesHerren = [
  ["Schnitt & Stylen",  "ab 35 €"],
  ["Waschen & Schnitt", "ab 42 €"],
  ["Bart trimmen",      "ab 18 €"],
];

const pricesBridal = [
  ["Hochsteckfrisur",          "ab 80 €"],
  ["Brautstyling komplett",    "ab 150 €"],
  ["Probestyling",             "ab 65 €"],
  ["Hennaabend Styling",       "ab 75 €"],
];

const openingHours: [string, string, boolean][] = [
  ["Montag",     "Geschlossen",  false],
  ["Dienstag",   "09:00 – 15:30", true],
  ["Mittwoch",   "09:00 – 15:30", true],
  ["Donnerstag", "09:00 – 18:00", true],
  ["Freitag",    "09:00 – 15:30", true],
  ["Samstag",    "09:00 – 18:00", true],
  ["Sonntag",    "Geschlossen",  false],
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Sticky nav shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reveal animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Lock scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Force-play all videos on mobile (iOS Safari fix) */
  useEffect(() => {
    const tryPlay = () => {
      document.querySelectorAll("video").forEach((v) => {
        v.muted = true;
        v.play().catch(() => {});
      });
    };
    tryPlay();
    document.addEventListener("touchstart", tryPlay, { once: true });
    return () => document.removeEventListener("touchstart", tryPlay);
  }, []);

  return (
    <main style={{ background: "#0c0b09", color: "#f0ead8" }}>

      {/* ══════════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════════ */}
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,11,9,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/images/logo.png" alt="Filigran Hairstylist" className="h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-[14px] tracking-[0.06em] text-[#c8bda8] transition-colors hover:text-[#c9a84c]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+4917620664037"
              className="text-[14px] tracking-[0.04em] text-[#a09080] transition hover:text-[#c9a84c]"
            >
              +49 176 2066 4037
            </a>
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center rounded-full px-6 text-[13px] font-medium tracking-[0.06em] text-[#0c0b09] transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)" }}
            >
              Termin buchen
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-[5px] xl:hidden"
            aria-label="Menü"
          >
            <span
              className="block h-px w-6 bg-[#f0ead8] transition-all duration-300"
              style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}}
            />
            <span
              className="block h-px w-4 bg-[#f0ead8] transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block h-px w-6 bg-[#f0ead8] transition-all duration-300"
              style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-10"
          style={{ background: "rgba(12,11,9,0.98)", backdropFilter: "blur(20px)" }}
        >
          <nav className="flex flex-col gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-serif)] text-[36px] leading-none text-[#f0ead8] transition hover:text-[#c9a84c]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-14 items-center justify-center rounded-full text-[15px] font-medium text-[#0c0b09]"
              style={{ background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)" }}
            >
              Termin online buchen
            </a>
            <a
              href="tel:+4917620664037"
              className="inline-flex h-14 items-center justify-center rounded-full border text-[15px] text-[#c8bda8]"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            >
              +49 176 2066 4037
            </a>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Dark luxury overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(12,11,9,0.92) 0%, rgba(12,11,9,0.70) 45%, rgba(12,11,9,0.45) 100%)",
            }}
          />
          {/* Gold accent glow bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.10) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-28 pb-20 lg:px-10">
          <div className="max-w-[820px]">
            <p className="hero-line-1 text-[12px] uppercase tracking-[0.32em] text-[#c9a84c]">
              Premium Friseur · Augsburg · Seit 2016
            </p>

            <h1
              className="hero-line-2 mt-6 font-[family-name:var(--font-serif)] leading-[1.04]"
              style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
            >
              <span style={{ color: "#f0ead8" }}>Wo Schönheit</span>
              <br />
              <span className="gold-shimmer">einen Namen trägt.</span>
            </h1>

            <p
              className="hero-line-3 mt-7 leading-[1.7] text-[#a09080]"
              style={{ fontSize: "clamp(16px, 1.6vw, 20px)", maxWidth: 560 }}
            >
              Filigran Hairstylist in Augsburg vereint Präzision, Leidenschaft
              und exklusives Styling – für Frauen, Männer und besondere Anlässe.
            </p>

            <div className="hero-line-4 mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] items-center rounded-full px-8 text-[15px] font-medium text-[#0c0b09] shadow-[0_8px_32px_rgba(201,168,76,0.30)] transition hover:shadow-[0_8px_40px_rgba(201,168,76,0.45)] hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)" }}
              >
                Jetzt Termin sichern
              </a>
              <a
                href="#gallery"
                className="inline-flex h-[52px] items-center gap-2 rounded-full border px-8 text-[15px] text-[#c8bda8] transition hover:border-[#c9a84c] hover:text-[#c9a84c]"
                style={{ borderColor: "rgba(240,234,216,0.2)" }}
              >
                Galerie entdecken
                <span className="text-lg">↓</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="hero-line-5 mt-14 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-[family-name:var(--font-serif)] leading-none text-[#c9a84c]"
                    style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-[#6a5f52]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="h-8 w-px bg-[#c9a84c]" />
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#c9a84c]">Scroll</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MARQUEE TRUST BAR
      ══════════════════════════════════════════════════ */}
      <div
        className="marquee-wrap py-4"
        style={{ borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)", background: "#0e0d0b" }}
      >
        <div className="marquee-track">
          {[
            "PREMIUM SALON",
            "BALAYAGE",
            "AUGSBURG",
            "BRIDAL STYLING",
            "COLORATION",
            "LUXURIÖSE ATMOSPHÄRE",
            "HAARSCHNITT",
            "HOCHSTECKFRISUREN",
            "5 STERNE GOOGLE",
            "FILIGRAN HAIRSTYLIST",
            "PREMIUM SALON",
            "BALAYAGE",
            "AUGSBURG",
            "BRIDAL STYLING",
            "COLORATION",
            "LUXURIÖSE ATMOSPHÄRE",
            "HAARSCHNITT",
            "HOCHSTECKFRISUREN",
            "5 STERNE GOOGLE",
            "FILIGRAN HAIRSTYLIST",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-6 pl-6 text-[11px] uppercase tracking-[0.26em]">
              <span className="text-[#c9a84c]">{item}</span>
              <span className="text-[#3a3120] text-[18px] leading-none select-none">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 lg:py-36" style={{ background: "#0e0d0b" }}>
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

          {/* Text side */}
          <div className="flex flex-col justify-center">
            <p className="reveal text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
              Über Filigran
            </p>
            <h2
              className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
              style={{ fontSize: "clamp(36px, 5vw, 58px)", color: "#f0ead8" }}
            >
              Dein Rückzugsort für
              <br />
              <span className="gold-shimmer">außergewöhnliche Schönheit</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-7 text-[17px] leading-[1.8] text-[#7a6f62]" style={{ maxWidth: 520 }}>
              Willst du einen Friseur auf höchstem Niveau? Bei Filigran Hairstylist
              erwartet dich ein exklusives Erlebnis mit modernen Techniken,
              hochwertiger Pflege und einem stilvollen Salon-Ambiente im Herzen
              von Augsburg – Schmiedberg 17.
            </p>

            <div className="reveal reveal-delay-3 mt-10 space-y-4">
              {[
                "Individuelle Beratung für deinen perfekten Look",
                "Moderne Techniken für Schnitt, Farbe und Styling",
                "Premium-Atmosphäre direkt im Augsburger Zentrum",
                "Event-, Bridal- und Hochzeits-Stylings mit Gefühl",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-[#0c0b09]"
                    style={{ background: "#c9a84c" }}
                  >
                    ✓
                  </span>
                  <p className="text-[16px] leading-[1.6] text-[#a09080]">{item}</p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4 mt-10">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full border px-7 text-[14px] tracking-[0.05em] text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#0c0b09]"
                style={{ borderColor: "rgba(201,168,76,0.4)" }}
              >
                Termin vereinbaren →
              </a>
            </div>
          </div>

          {/* Image grid */}
          <div className="reveal reveal-delay-1 grid grid-cols-2 gap-3 self-start">
            {["/images/about-1.jpeg", "/images/about-2.jpeg", "/images/about-3.jpeg", "/images/about-4.jpeg"].map((src) => (
              <div
                key={src}
                className="overflow-hidden"
                style={{ borderRadius: 12 }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-[280px] w-full object-cover transition duration-500 hover:scale-105 lg:h-[320px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════ */}
      <section id="services" className="py-28 lg:py-36" style={{ background: "#0c0b09" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="reveal text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
                Leistungen
              </p>
              <h2
                className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
                style={{ fontSize: "clamp(34px, 4.5vw, 54px)", color: "#f0ead8" }}
              >
                Luxus, Styling und
                <br />Schönheit im Detail
              </h2>
            </div>
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="reveal reveal-delay-2 inline-flex h-10 items-center rounded-full border px-6 text-[13px] tracking-[0.04em] text-[#a09080] transition hover:border-[#c9a84c] hover:text-[#c9a84c]"
              style={{ borderColor: "rgba(240,234,216,0.12)" }}
            >
              Alle Leistungen ansehen
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => (
              <article
                key={s.num}
                className={`service-card reveal reveal-delay-${i + 1} flex flex-col rounded-[18px] border p-7`}
                style={{ background: "#141210", borderColor: "#2a2520" }}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#3a3120]">{s.num}</p>
                <h3
                  className="mt-5 font-[family-name:var(--font-serif)] text-[30px] leading-none text-[#f0ead8]"
                >
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.75] text-[#6a5f52]">{s.desc}</p>
                <p
                  className="mt-7 text-[14px] font-medium tracking-[0.06em] text-[#c9a84c]"
                >
                  {s.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════ */}
      <section id="gallery" className="py-28 lg:py-36" style={{ background: "#0e0d0b" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16">
            <p className="reveal text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
              Galerie
            </p>
            <h2
              className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
              style={{ fontSize: "clamp(34px, 4.5vw, 54px)", color: "#f0ead8" }}
            >
              Einblicke aus dem Salon
            </h2>
          </div>

          {/* 5-video grid: 2 top + 3 bottom */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Top 2 */}
            {gallery.slice(0, 2).map((src, i) => (
              <div
                key={src}
                className={`reveal reveal-delay-${i + 1} overflow-hidden`}
                style={{ borderRadius: 16 }}
              >
                <video
                  className="h-[360px] w-full object-cover transition duration-500 hover:scale-[1.02] lg:h-[420px]"
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {/* Bottom 3 */}
            {gallery.slice(2).map((src, i) => (
              <div
                key={src}
                className={`reveal reveal-delay-${i + 1} overflow-hidden`}
                style={{ borderRadius: 16 }}
              >
                <video
                  className="h-[280px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-36" style={{ background: "#0c0b09" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="reveal text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
              Kundenstimmen
            </p>
            <h2
              className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
              style={{ fontSize: "clamp(34px, 4.5vw, 54px)", color: "#f0ead8" }}
            >
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`review-card reveal reveal-delay-${i + 1} rounded-[18px] border p-8`}
                style={{ background: "#141210", borderColor: "#2a2520" }}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#c9a84c] text-[16px]">
                  {"★★★★★".split("").map((star, j) => (
                    <span key={j}>{star}</span>
                  ))}
                </div>
                <p className="mt-5 text-[16px] leading-[1.75] text-[#7a6f62] italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-[14px] font-medium text-[#c8bda8]">{r.name}</p>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#4285F4]">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-[12px] text-[#3a3120]">{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PRICES
      ══════════════════════════════════════════════════ */}
      <section id="prices" className="py-28 lg:py-36" style={{ background: "#0e0d0b" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16">
            <p className="reveal text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
              Preise
            </p>
            <h2
              className="reveal reveal-delay-1 mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
              style={{ fontSize: "clamp(34px, 4.5vw, 54px)", color: "#f0ead8" }}
            >
              Transparente Preise,
              <br />exklusive Qualität
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: "Damen", items: pricesDamen },
              { title: "Herren", items: pricesHerren },
              { title: "Bridal & Events", items: pricesBridal },
            ].map((cat, ci) => (
              <div
                key={cat.title}
                className={`reveal reveal-delay-${ci + 1} rounded-[18px] border p-8`}
                style={{ background: "#141210", borderColor: "#2a2520" }}
              >
                <h3
                  className="font-[family-name:var(--font-serif)] text-[28px] text-[#f0ead8]"
                >
                  {cat.title}
                </h3>
                <div className="mt-6 space-y-1">
                  {cat.items.map(([name, price]) => (
                    <div
                      key={name}
                      className="price-row flex items-center justify-between rounded-lg px-3 py-3"
                    >
                      <span className="text-[15px] text-[#7a6f62]">{name}</span>
                      <span className="text-[15px] font-medium text-[#c9a84c]">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[12px] text-[#3a3120]">
                  * Endpreise abhängig von Haarlänge und Aufwand
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full border px-8 text-[14px] tracking-[0.05em] text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-[#0c0b09]"
              style={{ borderColor: "rgba(201,168,76,0.35)" }}
            >
              Jetzt Termin buchen →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT + HOURS
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-28 lg:py-36" style={{ background: "#0c0b09" }}>
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-2 lg:px-10">

          {/* Contact card */}
          <div
            className="reveal rounded-[24px] border p-8 lg:p-10"
            style={{ background: "#141210", borderColor: "#2a2520" }}
          >
            <p className="text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">Kontakt</p>
            <h2
              className="mt-5 font-[family-name:var(--font-serif)] leading-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#f0ead8" }}
            >
              Buche dein Friseurerlebnis
              <span className="block text-[#c9a84c]">in Augsburg</span>
            </h2>

            <div className="mt-8 space-y-6">
              {[
                { label: "Adresse", value: "Schmiedberg 17\n86152 Augsburg" },
                { label: "Ansprechpartnerinnen", value: "Filiz · Arjuwan" },
                { label: "Terminbuchung", value: "24/7 online via Planity" },
                { label: "Telefon", value: "+49 176 2066 4037" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#3a3120]">{item.label}</p>
                  <p className="mt-2 whitespace-pre-line text-[17px] leading-[1.6] text-[#a09080]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-full px-8 text-[15px] font-medium text-[#0c0b09] transition hover:opacity-85"
                style={{
                  height: 52,
                  background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)",
                }}
              >
                Termin online buchen
              </a>
              <a
                href="tel:+4917620664037"
                className="inline-flex h-[52px] items-center justify-center rounded-full border px-8 text-[15px] text-[#a09080] transition hover:border-[#c9a84c] hover:text-[#c9a84c]"
                style={{ borderColor: "rgba(240,234,216,0.14)" }}
              >
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Hours + Map */}
          <div
            className="reveal reveal-delay-1 rounded-[24px] border p-8 lg:p-10"
            style={{ background: "#141210", borderColor: "#2a2520" }}
          >
            <p className="text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">Öffnungszeiten</p>

            <div className="mt-7 space-y-3">
              {openingHours.map(([day, hours, open]) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b pb-3 text-[15px]"
                  style={{ borderColor: "#1e1c18" }}
                >
                  <span className={String(open) === "true" ? "text-[#a09080]" : "text-[#3a3120]"}>
                    {day}
                  </span>
                  <span className={String(open) === "true" ? "text-[#c9a84c]" : "text-[#3a3120]"}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden" style={{ borderRadius: 14 }}>
              <iframe
                title="Filigran Hairstylist Augsburg"
                src="https://www.google.com/maps?q=Schmiedberg%2017,%2086152%20Augsburg&z=15&output=embed"
                className="h-[240px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FULL-WIDTH CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(135deg, #181410 0%, #1e1a10 50%, #181410 100%)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="reveal relative z-10 mx-auto max-w-[800px] px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.30em] text-[#c9a84c]">
            Bereit für deine Transformation?
          </p>
          <h2
            className="mt-5 font-[family-name:var(--font-serif)] leading-[1.1]"
            style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "#f0ead8" }}
          >
            Dein nächster Termin
            <br />
            <span className="gold-shimmer">wartet auf dich.</span>
          </h2>
          <p className="mx-auto mt-6 text-[16px] leading-[1.7] text-[#6a5f52]" style={{ maxWidth: 480 }}>
            Buche jetzt online – schnell, einfach, 24/7. Kein Warten, keine
            langen Telefonate.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[52px] items-center rounded-full px-9 text-[15px] font-medium text-[#0c0b09] shadow-[0_8px_32px_rgba(201,168,76,0.30)] transition hover:opacity-85"
              style={{ background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)" }}
            >
              Jetzt Termin sichern
            </a>
            <a
              href="tel:+4917620664037"
              className="inline-flex h-[52px] items-center gap-2 rounded-full border px-8 text-[15px] text-[#a09080] transition hover:border-[#c9a84c] hover:text-[#c9a84c]"
              style={{ borderColor: "rgba(240,234,216,0.14)" }}
            >
              <span>📞</span>
              <span>Anrufen</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer style={{ background: "#0a0908", borderTop: "1px solid #1e1c18" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <img src="/images/logo.png" alt="Filigran Hairstylist" className="h-12 w-auto opacity-75" />
              <p className="mt-4 text-[14px] leading-[1.7] text-[#3a3120]" style={{ maxWidth: 280 }}>
                Premium Friseur in Augsburg – für außergewöhnliche Looks und
                unvergessliche Momente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a84c]">Salon</p>
                <div className="mt-4 flex flex-col gap-3">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-[14px] text-[#3a3120] transition hover:text-[#c9a84c]"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a84c]">Kontakt</p>
                <div className="mt-4 flex flex-col gap-3 text-[14px] text-[#3a3120]">
                  <span>Schmiedberg 17</span>
                  <span>86152 Augsburg</span>
                  <a href="tel:+4917620664037" className="transition hover:text-[#c9a84c]">
                    +49 176 2066 4037
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a84c]">Buchen</p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-[#3a3120] transition hover:text-[#c9a84c]"
                  >
                    Planity
                  </a>
                  <a href="/impressum" className="text-[14px] text-[#3a3120] transition hover:text-[#c9a84c]">
                    Impressum
                  </a>
                  <a href="/datenschutz" className="text-[14px] text-[#3a3120] transition hover:text-[#c9a84c]">
                    Datenschutz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 flex flex-col gap-4 border-t pt-8 text-[13px] text-[#2a2520] sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "#1e1c18" }}
          >
            <p>© {new Date().getFullYear()} Filigran Hairstylist · Augsburg · Alle Rechte vorbehalten</p>
            <p>Designed with ♥ for premium hair experiences</p>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════
          FLOATING CTA BUTTON
      ══════════════════════════════════════════════════ */}
      <a
        href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 items-center rounded-full px-6 text-[13px] font-medium text-[#0c0b09] shadow-[0_8px_32px_rgba(201,168,76,0.45)] transition hover:shadow-[0_8px_44px_rgba(201,168,76,0.60)] hover:opacity-90 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #d4af50 0%, #c9a030 100%)",
          transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        Termin buchen
      </a>

    </main>
  );
}
