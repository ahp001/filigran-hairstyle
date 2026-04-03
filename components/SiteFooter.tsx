export default function Footer() {
  return (
    <footer className="border-t border-[#ece6de] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="text-lg font-semibold">Filigran Hairstylist</h3>
          <p className="mt-3 text-sm leading-7 text-[#5c5650]">
            Moderne, filigrane Haarkunst in Augsburg. Individuelle Beratung,
            präzise Stylings und bequeme Online-Terminbuchung.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <div className="mt-3 space-y-2 text-sm text-[#5c5650]">
            <p>Schmiedberg 17, 86152 Augsburg</p>
            <p>
              <a href="tel:017620664037" className="hover:underline">
                0176 20664037
              </a>
            </p>
            <p>
              <a
                href="https://www.planity.com/de-DE/filigran-hairstylist-86152-augsburg"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Online Termin buchen
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
          <div className="mt-3 space-y-2 text-sm text-[#5c5650]">
            <p>Dienstag: 09:00 - 15:30</p>
            <p>Mittwoch: 09:00 - 15:30</p>
            <p>Donnerstag: 09:00 - 18:00</p>
            <p>Freitag: 09:00 - 15:30</p>
            <p>Samstag: 09:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ece6de] px-6 py-4 text-center text-sm text-[#7a746d]">
        © 2026 Filigran Hairstylist
      </div>
    </footer>
  );
}
