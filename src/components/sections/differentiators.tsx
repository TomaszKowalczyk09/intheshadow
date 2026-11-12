import { CodeXml, Gauge, MessagesSquare, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/sections/section-intro";

const features = [
  {
    n: "01",
    icon: CodeXml,
    title: "Kod, który się czyta",
    body: "Piszę z myślą o zespole. Czytelna struktura, sensowne nazwy i testy, które naprawdę chronią przed regresją.",
  },
  {
    n: "02",
    icon: Gauge,
    title: "Wydajność od startu",
    body: "Mierzę, zanim optymalizuję. Budżet wydajności, Core Web Vitals i realne dane zamiast domysłów.",
  },
  {
    n: "03",
    icon: MessagesSquare,
    title: "Komunikacja bez ściemy",
    body: "Mówię wprost o ryzykach i terminach. Krótkie statusy, jasne decyzje i brak niespodzianek na koniec sprintu.",
  },
  {
    n: "04",
    icon: Target,
    title: "Właścicielstwo projektu",
    body: "Od decyzji architektonicznych po monitoring na produkcji. Biorę odpowiedzialność za efekt, nie tylko za ticket.",
    tint: true,
  },
];

export default function Differentiators() {
  return (
    <section
      id="wyroznienia"
      className="relative border-t border-white/10 bg-zinc-950 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionIntro
          index="01"
          title="Co mnie wyróżnia"
          description="Nie sprzedaję godzin. Dostarczam rozwiązania, które da się utrzymać, rozwinąć i wdrożyć bez niespodzianek."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:auto-rows-fr">
          <div className="relative col-span-1 overflow-hidden bg-zinc-900 sm:col-span-2 lg:col-span-6 lg:row-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              alt="Deweloper pracujący nad kodem w zaciemnionym pokoju"
              className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition duration-700 ease-out hover:opacity-75 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/10" />
            <div className="relative flex h-full min-h-[340px] flex-col justify-end p-8 sm:p-10 lg:min-h-full">
              <span className="h-px w-10 bg-signal" />
              <p className="mt-5 max-w-md font-heading text-2xl leading-snug text-zinc-100 sm:text-3xl">
                Dobra architektura jest nudna. I właśnie dlatego działa.
              </p>
            </div>
          </div>

          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.n}
                className={cn(
                  "group relative col-span-1 flex flex-col justify-between bg-zinc-950 p-8 transition-colors duration-300 hover:bg-zinc-900 lg:col-span-3",
                  feature.tint && "bg-[#0b0f04] hover:bg-[#0e1507]"
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-6 w-6 text-signal transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-600">
                    {feature.n}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="font-heading text-xl text-zinc-100">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
