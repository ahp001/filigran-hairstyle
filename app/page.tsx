import Image from "next/image";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const services = [
  {
    title: "Damen",
    text: "Waschen, Schneiden, Föhnen, Styling und individuelle Looks für kurzes, mittellanges und langes Haar.",
  },
  {
    title: "Coloration",
    text: "Ansatzfarbe, Globalfärbung, Glossing sowie filigrane Farb- und Strähnentechniken.",
  },
  {
    title: "Herren",
    text: "Waschen, Schneiden, Föhnen, Styling, Maschinenhaarschnitt und Bartpflege.",
  },
  {
    title: "Kinder",
    text: "Haarschnitte für Mädchen und Jungen bis 14 Jahre in entspannter Atmosphäre.",
  },
  {
    title: "Kosmetik",
    text: "Augenbrauen zupfen mit Fadentechnik, Augenbrauenfärben und Wimpernfärben.",
  },
  {
    title: "Event Styling",
    text: "Brautstyling, Probetermine, Eventstyling sowie Styling für Verlobung, Fotoshooting und Hennaabend.",
  },
];

const openingHours = [
  { day: "Montag", time: "Geschlossen" },
  { day: "Dienstag", time: "09:00 - 15:30" },
  { day: "Mittwoch", time: "09:00 - 15:30" },
  { day: "Donnerstag", time: "09:00 - 18:00" },
  { day: "Freitag", time: "09:00 - 15:30" },
  { day: "Samstag", time: "09:00 - 18:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5f1] pb-24 text-[#1f1f1f] md:pb-0">
      <Navbar />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hair-hero.jpg"
            alt="Filigran Hairstylist Augsburg"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-center px-5 py-20 sm:px-6 md:min-h-[88vh] md:px-10 md:py-24">
          <div className="max-w-3xl pt-20 text-white md:pt-24">
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs backdrop-blur sm:px-4 sm:text-sm">
              Filigran Hairstylist • Schmiedberg 17 • Augsburg
            </p>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
              Moderne, filigrane Haarkunst für deinen perfekten Look
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base md:mt-6 md:text-lg">
              Individuelle Beratung, präzises Handwerk und stilvolle Ergebnisse
              für Damen, Herren und Kinder – mit Coloration, Styling, Kosmetik
              und Event Looks.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Jetzt online buchen
              </a>

              <a
                href="tel:017620664037"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Jetzt anrufen
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/90 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <span className="inline-flex w-fit rounded-full bg-[#d4af37] px-3 py-1 font-semibold text-black">
                5,0 Bewertung
              </span>
              <span>Online-Terminbuchung verfügbar</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] sm:text-sm">
              Über den Salon
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Schönheit liegt im Detail
            </h2>
          </div>

          <div className="text-base leading-8 text-[#4f4b45] sm:text-[17px]">
            <p>
              Bei FILIGRAN Hairstyle Augsburg steht jedes Detail im Mittelpunkt.
              Der Salon verbindet präzises Handwerk mit kreativer Leidenschaft –
              für Looks, die nicht nur schön aussehen, sondern die Persönlichkeit
              perfekt unterstreichen.
            </p>
            <p className="mt-4">
              Ob trendige Haarschnitte, sanfte Balayage-Verläufe, filigrane
              Strähnentechniken oder elegante Stylings: Hier entstehen
              individuelle Ergebnisse mit viel Feingefühl, hochwertigen
              Produkten und echter Herzlichkeit.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] sm:text-sm">
              Leistungen
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Für Alltag, Pflege und besondere Anlässe
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-[#ece6de] bg-[#f8f5f1] p-6 shadow-sm md:p-7"
              >
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-[#59544d]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] sm:text-sm">
            Team
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Mit Liebe zum Detail für dich da
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#ece6de] md:p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f1f1f] text-xl font-semibold text-white">
              F
            </div>
            <h3 className="text-2xl font-semibold">Filiz</h3>
            <p className="mt-3 leading-7 text-[#59544d]">
              Persönliche Beratung, moderne Looks und filigrane Haarkunst mit
              Gespür für Form, Farbe und Stil.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#ece6de] md:p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f1f1f] text-xl font-semibold text-white">
              A
            </div>
            <h3 className="text-2xl font-semibold">Arjuwan</h3>
            <p className="mt-3 leading-7 text-[#59544d]">
              Unterstützung bei Styling und besonderen Event-Looks mit Fokus auf
              ein harmonisches und hochwertiges Ergebnis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 md:px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Buche deinen Termin schnell und unkompliziert online
          </h2>
          <p className="mt-4 text-sm text-white/80 sm:mt-5 sm:text-base">
            Sofortige Bestätigung und bequeme Terminbuchung über Planity.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-black"
            >
              Online buchen
            </a>
            <a
              href="tel:017620664037"
              className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white"
            >
              Telefonisch kontaktieren
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] sm:text-sm">
              Kontakt
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Besuche uns in Augsburg
            </h2>

            <div className="mt-8 space-y-4 text-base text-[#4f4b45] sm:text-[17px]">
              <p>
                <span className="font-semibold text-black">Adresse:</span>
                <br />
                Schmiedberg 17
                <br />
                86152 Augsburg
              </p>

              <p>
                <span className="font-semibold text-black">Telefon:</span>
                <br />
                <a href="tel:017620664037" className="hover:underline">
                  0176 20664037
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] sm:text-sm">
              Öffnungszeiten
            </p>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#ece6de]">
              {openingHours.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between gap-4 px-5 py-4 md:px-6 ${
                    index !== openingHours.length - 1 ? "border-b border-[#eee8e0]" : ""
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className="text-right text-[#59544d]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href="tel:017620664037"
            className="w-1/2 rounded-2xl bg-black px-4 py-3 text-center font-semibold text-white"
          >
            Anrufen
          </a>
          <a
            href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 rounded-2xl bg-[#d4af37] px-4 py-3 text-center font-semibold text-black"
          >
            Buchen
          </a>
        </div>
      </div>
    </main>
  );
}