import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/sections/section-intro";
import ContactForm from "@/components/sections/contact-form";

const EMAIL = "kontakt@intheshadow.dev";

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative border-t border-white/10 bg-zinc-950 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 xl:col-span-7">
            <SectionIntro
              index="03"
              title="Kontakt"
              description="Masz projekt, który wymaga zarówno dobrego produktu, jak i solidnego kodu? Napisz. Odpowiadam w ciągu jednego dnia roboczego."
            />

            <div className="mt-10 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Otwarty na nowe projekty
            </div>

            <div className="mt-10">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-3 font-heading text-xl text-zinc-100 transition-colors duration-300 hover:text-white sm:text-2xl xl:text-3xl"
              >
                <span className="underline decoration-white/20 underline-offset-[6px] transition-colors duration-300 group-hover:decoration-signal">
                  {EMAIL}
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400 transition-colors duration-300 hover:text-signal"
                >
                  {link.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
