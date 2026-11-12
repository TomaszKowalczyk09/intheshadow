import { Check } from "lucide-react";
import { SectionIntro } from "@/components/sections/section-intro";

const roles = [
  {
    period: "sierpnia 2026 - teraz",
    duration: "4 mies.",
    company: "MemoLiga",
    role: "Programista Full Stack",
    body: "Rozwijam aplikację edukacyjną jako full-stack developer. Pracuję nad funkcjami produktu, interfejsem i stroną serwerową.",
    stack: ["Full Stack", "Web", "Produkt"],
  },
  {
    period: "grudnia 2025 - teraz",
    duration: "1 rok",
    company: "Młodzieżowa Rada Miejska w Gryfinie",
    role: "Sekretarz",
    body: "Prowadzę dokumentację i organizację pracy Rady. Wspieram komunikację projektów skierowanych do młodzieży w gminie.",
    stack: ["Organizacja", "Komunikacja", "Samorząd"],
  },
  {
    period: "października 2025 - teraz",
    duration: "1 rok 2 mies.",
    company: "I LO im. A. Omieczyńskiego w Gryfinie",
    role: "Menedżer ds. mediów społecznościowych",
    body: "Planuję publikacje, tworzę treści i prowadzę komunikację szkoły w mediach społecznościowych.",
    stack: ["Social media", "Treści", "Komunikacja"],
  },
  {
    period: "września 2025 - teraz",
    duration: "1 rok 3 mies.",
    company: "Zwolnieni z Teorii",
    role: "Kierownik projektu",
    body: "Koordynuję zespół w ogólnopolskim programie projektów społecznych. Odpowiadam za plan, realizację i rozliczenie działań.",
    stack: ["Zarządzanie projektem", "Zespół", "Planowanie"],
  },
  {
    period: "października 2024 - teraz",
    duration: "2 lata 2 mies.",
    company: "SpaceY",
    role: "Programista-tester oprogramowania",
    body: "Testuję sprzęt i oprogramowanie oraz przygotowuję dane do treningu AI dla minisatelity CanSat.",
    stack: ["Testy", "AI", "CanSat"],
  },
];

const skills = [
  "Inżynieria testów",
  "Komunikacja w mediach społecznościowych",
  "Technologie witryn internetowych",
];

const languages = [
  { name: "Niemiecki", level: "Professional Working" },
  { name: "Angielski", level: "Professional Working" },
];

const certifications = [
  "Marketing internetowy, kurs zaawansowany I stopnia",
  "Goethe Zertifikat B1",
  "Zarządzanie sprzedażą i relacjami z klientami",
  "Efektywna współpraca",
  "Preliminary English Test",
];

export default function Experience() {
  return (
    <section
      id="doswiadczenie"
      className="relative border-t border-white/10 bg-zinc-950 py-16 sm:py-24 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionIntro
          index="02"
          title="Moje doświadczenie"
          description="Praca przy produktach, projektach społecznych i komunikacji. Poniżej aktualne role oraz umiejętności, języki i certyfikaty."
        />

        <ol className="mt-14 border-t border-white/10 lg:mt-20">
          {roles.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="group grid grid-cols-1 gap-6 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:py-10 md:grid-cols-12 md:gap-8 md:px-4 lg:py-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs tracking-[0.08em] text-zinc-400">{item.period}</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-zinc-600">
                  {item.duration}
                </p>
                <p className="mt-4 font-heading text-sm leading-snug text-zinc-300">{item.company}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-heading text-2xl text-zinc-100 transition-colors duration-300 group-hover:text-white">
                  {item.role}
                </h3>
                <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-white/10 px-2.5 py-1 font-mono text-[0.68rem] text-zinc-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
              Umiejętności
            </h3>
            <ul className="mt-5 space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                  <span className="mt-2.5 h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
              Języki
            </h3>
            <ul className="mt-5 space-y-3">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 text-sm"
                >
                  <span className="text-zinc-300">{language.name}</span>
                  <span className="font-mono text-[0.65rem] text-zinc-500">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-500">
              Certyfikaty
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((certification) => (
                <li key={certification} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
