import { CodeXml, MessagesSquare, ShieldCheck, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/sections/section-intro";

const features = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Testy, którym można ufać",
    body: "Testuję sprzęt i oprogramowanie, zanim trafi do użytkownika. Szukam błędów wcześnie, żeby kosztowały mniej.",
    tint: false,
  },
  {
    n: "02",
    icon: CodeXml,
    title: "Full-stack od pomysłu",
    body: "Rozwijam aplikacje webowe po stronie interfejsu i serwera. Dbam o to, żeby funkcje działały od pierwszego wdrożenia.",
    tint: false,
  },
  {
    n: "03",
    icon: MessagesSquare,
    title: "Komunikacja po ludzku",
    body: "Prowadzę media społecznościowe i mówię wprost o ryzykach oraz terminach. Krótkie statusy, jasne decyzje.",
    tint: false,
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
      className="relative border-t border-white/10 bg-zinc-950 py-16 sm:py-24 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionIntro
          index="01"
          title="Co mnie wyróżnia"
          description="Łączę testowanie, kod i komunikację. Dzięki temu projekty są przewidywalne, a użytkownicy nie są beta testerami."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:auto-rows-fr">
          <div className="relative col-span-1 overflow-hidden bg-zinc-900 sm:col-span-2 lg:col-span-6 lg:row-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              srcSet="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=640&q=75 640w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=960&q=75 960w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&q=75 1280w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80 1600w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Deweloper pracujący nad kodem w zaciemnionym pokoju"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition duration-700 ease-out hover:opacity-75 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/10" />
            <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6 sm:min-h-[340px] sm:p-8 lg:min-h-full lg:p-10">
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
                  "group relative col-span-1 flex flex-col justify-between bg-zinc-950 p-6 transition-colors duration-300 hover:bg-zinc-900 sm:p-8 lg:col-span-3",
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
                <div className="mt-8 sm:mt-10">
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
