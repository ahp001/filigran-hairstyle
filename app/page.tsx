export default function HomePage() {
  const featuredLogos = [
    "PREMIUM",
    "STYLING",
    "AUGSBURG",
    "BALAYAGE",
    "BRIDAL",
    "LUXURY",
  ];

  const benefits = [
    "Individuelle Beratung für deinen perfekten Look",
    "Moderne Techniken für Schnitt, Farbe und Styling",
    "Luxuriöse Atmosphäre im Herzen Augsburgs",
    "Event-, Bridal- und Premium-Stylings mit Gefühl",
  ];

  const openingHours = [
    ["Montag", "Geschlossen"],
    ["Dienstag", "09:00 – 15:30"],
    ["Mittwoch", "09:00 – 15:30"],
    ["Donnerstag", "09:00 – 18:00"],
    ["Freitag", "09:00 – 15:30"],
    ["Samstag", "09:00 – 18:00"],
    ["Sonntag", "Geschlossen"],
  ];

  return (
    <main className="bg-[#f5f1eb] text-[#2b241f]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="flex items-center">
  <img
    src="/images/logo.png"
    alt="Filigran Hairstylist"
    className="h-20 w-auto"
  />
</a>

          <nav className="hidden items-center gap-7 xl:flex">
            <a href="#about" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Über uns
            </a>
            <a href="#services" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Damen
            </a>
            <a href="#services" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Herren
            </a>
            <a href="#event" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Styling & Anlass
            </a>
            <a href="#gallery" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Galerie
            </a>
            <a href="#prices" className="text-[15px] text-[#3c332b] hover:text-[#b48b3c]">
              Preise
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-[#c8a25a] px-6 text-sm font-medium text-white transition hover:bg-[#b89249]"
            >
              Termin anfragen
            </a>
            <a
              href="tel:+4917620664037"
              className="inline-flex h-12 items-center gap-3 rounded-md border border-white/70 bg-white/20 px-5 text-sm font-medium text-[#2b241f] backdrop-blur hover:bg-white/35"
            >
              <span className="text-base">📞</span>
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-[930px] overflow-hidden">
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,241,235,0.96)_0%,rgba(245,241,235,0.78)_20%,rgba(245,241,235,0.18)_48%,rgba(205,168,120,0.18)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[930px] max-w-[1400px] items-center px-6 pt-32 pb-20 lg:px-10">
          <div className="max-w-[760px]">
            <h1 className="max-w-[760px] font-serif text-[52px] leading-[1.08] text-white sm:text-[68px] lg:text-[78px]">
              Filigran Hairstylist Augsburg –
              <span className="block text-white/95">
                Dein Premium Friseurerlebnis
              </span>
            </h1>

            <p className="mt-7 max-w-[720px] text-[22px] leading-[1.6] text-white/95">
              Luxus für dein Haar – exklusiver Friseur in Augsburg für moderne
              Schnitte, Balayage, Styling und besondere Anlässe.
            </p>

            <div className="mt-10">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[58px] items-center rounded-md bg-[#c79b2c] px-9 text-[18px] font-medium text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:bg-[#b88a1c]"
              >
                Jetzt Termin sichern
              </a>
            </div>

            <div className="mt-9">
              <p className="text-[17px] italic text-white/80">Beliebte Bereiche</p>

              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 text-[28px] font-semibold tracking-tight text-[#201d1a]">
                {featuredLogos.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/30 px-3 py-1 text-[26px] text-[#1d1a18] backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#f3f2f0] py-24"
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-[760px]">
            <h2 className="font-serif text-[48px] leading-[1.18] text-[#342b24] sm:text-[58px]">
              Warum Filigran Hairstylist in Augsburg
              <span className="block">die beste Wahl ist</span>
            </h2>

            <p className="mt-8 max-w-[760px] text-[25px] leading-[1.65] text-[#4f463f]">
              Willst du einen Friseur auf höchstem Niveau? Bei Filigran
              Hairstylist erwartet dich ein exklusives Styling-Erlebnis mit
              modernen Techniken, hochwertiger Pflege und einem stilvollen
              Salon-Ambiente im Herzen von Augsburg.
            </p>

            <div className="mt-10 space-y-7">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#efe6d4] text-[#c39b58]">
                    ✓
                  </div>
                  <p className="text-[23px] leading-[1.6] text-[#403731]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 self-start">
  <div className="overflow-hidden bg-[#ddd6cf]">
    <img
      src="/images/about-1.jpeg"
      className="h-[360px] w-full object-cover"
      alt=""
    />
  </div>

  <div className="overflow-hidden bg-[#ddd6cf]">
    <img
      src="/images/about-2.jpeg"
      className="h-[360px] w-full object-cover"
      alt=""
    />
  </div>

  <div className="overflow-hidden bg-[#ddd6cf]">
    <img
      src="/images/about-3.jpeg"
      className="h-[360px] w-full object-cover"
      alt=""
    />
  </div>

  <div className="overflow-hidden bg-[#ddd6cf]">
    <img
      src="/images/about-4.jpeg"
      className="h-[360px] w-full object-cover"
      alt=""
    />
  </div>
</div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f3ed] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[14px] uppercase tracking-[0.25em] text-[#9b8560]">
                Leistungen
              </p>
              <h2 className="mt-4 font-serif text-[44px] leading-tight text-[#342b24] sm:text-[54px]">
                Luxus, Styling und Schönheit im Detail
              </h2>
            </div>

            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-md border border-[#d2c1a1] px-6 text-sm font-medium text-[#614e34] transition hover:bg-[#efe4d1]"
            >
              Alle Leistungen auf Planity
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[20px] border border-[#e7dccd] bg-white p-7 shadow-sm">
              <h3 className="font-serif text-[31px] text-[#312821]">Damen</h3>
              <p className="mt-4 text-[18px] leading-8 text-[#5b5149]">
                Präzise Haarschnitte, Waschen, Föhnen und moderne Looks mit
                femininem Finish.
              </p>
            </article>

            <article className="rounded-[20px] border border-[#e7dccd] bg-white p-7 shadow-sm">
              <h3 className="font-serif text-[31px] text-[#312821]">Coloration</h3>
              <p className="mt-4 text-[18px] leading-8 text-[#5b5149]">
                Balayage, Glossing, Ansatzfarbe und hochwertige Farbtechniken
                für natürliche Eleganz.
              </p>
            </article>

            <article className="rounded-[20px] border border-[#e7dccd] bg-white p-7 shadow-sm">
              <h3 className="font-serif text-[31px] text-[#312821]">Herren</h3>
              <p className="mt-4 text-[18px] leading-8 text-[#5b5149]">
                Moderne, saubere Schnitte mit Stil, Struktur und einem gepflegten Gesamtbild.
              </p>
            </article>

            <article
              id="event"
              className="rounded-[20px] border border-[#e7dccd] bg-white p-7 shadow-sm"
            >
              <h3 className="font-serif text-[31px] text-[#312821]">Styling & Anlass</h3>
              <p className="mt-4 text-[18px] leading-8 text-[#5b5149]">
                Brautstyling, Hochstecken und Looks für Verlobung, Hennaabend,
                Fotoshooting und Events.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#efeae3] py-24">
  <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
    <div className="mb-14">
      <p className="text-[14px] uppercase tracking-[0.25em] text-[#9b8560]">
        Galerie
      </p>
      <h2 className="mt-4 font-serif text-[44px] text-[#342b24] sm:text-[54px]">
        Eindrücke aus dem Salon
      </h2>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[
        "/videos/showcase-01.mp4",

        "/videos/showcase-03.mp4",
        "/videos/showcase-04.mp4",
        "/videos/showcase-05.mp4",
        "/videos/showcase-06.mp4",
      ].map((src, index) => (
        <div
          key={src}
          className={`overflow-hidden rounded-[18px] bg-[#ddd6cf] ${
            index === 0 ? "md:col-span-2" : ""
          }`}
        >
          {src.endsWith(".mp4") ? (
            <video
              className="w-full object-cover h-[360px]"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={src}
              alt="Showcase"
              className={`w-full object-cover ${
                index === 0 ? "h-[440px]" : "h-[360px]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="prices" className="bg-white py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div className="rounded-[24px] border border-[#eadfce] bg-[#faf7f2] p-8 lg:p-10">
            <p className="text-[14px] uppercase tracking-[0.25em] text-[#9b8560]">
              Kontakt
            </p>
            <h2 className="mt-4 font-serif text-[42px] leading-tight text-[#342b24] sm:text-[52px]">
              Buche dein Friseurerlebnis in Augsburg
            </h2>

            <div className="mt-8 space-y-6 text-[20px] leading-9 text-[#4e443c]">
              <p>
                <span className="block text-[14px] uppercase tracking-[0.22em] text-[#9b8560]">
                  Adresse
                </span>
                Schmiedberg 17
                <br />
                86152 Augsburg
              </p>

              <p>
                <span className="block text-[14px] uppercase tracking-[0.22em] text-[#9b8560]">
                  Terminbuchung
                </span>
                24/7 online über Planity
              </p>

              <p>
                <span className="block text-[14px] uppercase tracking-[0.22em] text-[#9b8560]">
                  Ansprechpartner
                </span>
                Filiz · Arjuwan
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-[#c79b2c] px-8 text-[16px] font-medium text-white hover:bg-[#b88a1c]"
              >
                Termin online buchen
              </a>

              <a
                href="tel:+4917620664037"
                className="inline-flex h-14 items-center justify-center rounded-md border border-[#d8c6a8] px-8 text-[16px] font-medium text-[#5e4a2d] hover:bg-[#f4ecdf]"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#eadfce] bg-[#faf7f2] p-8 lg:p-10">
            <p className="text-[14px] uppercase tracking-[0.25em] text-[#9b8560]">
              Öffnungszeiten
            </p>

            <div className="mt-8 space-y-4">
              {openingHours.map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-[#e8ddcf] pb-4 text-[18px] text-[#4e443c]"
                >
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[18px]">
              <iframe
                title="Filigran Hairstylist Augsburg Karte"
                src="https://www.google.com/maps?q=Schmiedberg%2017,%2086152%20Augsburg&z=15&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ece2d5] bg-[#f8f4ee]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-8 text-[15px] text-[#7a6a58] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>© {new Date().getFullYear()} Filigran Hairstylist · Augsburg</div>

          <div className="flex flex-wrap gap-5">
            <a href="/impressum" className="hover:text-[#b48b3c]">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-[#b48b3c]">
              Datenschutz
            </a>
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b48b3c]"
            >
              Planity
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-[#c79b2c] px-6 py-3 text-sm font-medium text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#b88a1c]"
      >
        Termin buchen
      </a>
    </main>
  );
}