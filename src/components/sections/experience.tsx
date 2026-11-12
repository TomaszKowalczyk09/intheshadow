import { SectionIntro } from "@/components/sections/section-intro";

const roles = [
  {
    period: "2023 - teraz",
    company: "Nimbus Labs",
    role: "Senior Full-Stack Developer",
    body: "Prowadzę rozwój platformy analitycznej dla klientów B2B. Odpowiadam za architekturę, jakość wdrożeń i mentoring trzech osób w zespole.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 - 2023",
    company: "Forma Studio",
    role: "Full-Stack Developer",
    body: "Budowałem sklepy i systemy zamówień dla marek premium. Od projektu API, przez panel administracyjny, po wdrożenie i utrzymanie.",
    stack: ["React", "Node.js", "Stripe", "Docker"],
  },
  {
    period: "2019 - 2021",
    company: "Kodownia",
    role: "Frontend Developer",
    body: "Tworzyłem interfejsy produktowe z myślą o dostępności. Wdrożyłem system komponentów, który trafił do pięciu projektów.",
    stack: ["React", "TypeScript", "a11y", "Storybook"],
  },
  {
    period: "2018 - 2019",
    company: "Bright Seed",
    role: "Junior Developer",
    body: "Pierwsze produkcyjne aplikacje, pierwsze decyzje architektoniczne i pierwsze lekcje pokory. Zostały do dziś.",
    stack: ["JavaScript", "React", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section
      id="doswiadczenie"
      className="relative border-t border-white/10 bg-zinc-950 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionIntro
          index="02"
          title="Moje doświadczenie"
          description="Siedem lat pracy przy produktach, które mają użytkowników, budżet i terminy. Poniżej najważniejsze etapy."
        />

        <ol className="mt-14 border-t border-white/10 lg:mt-20">
          {roles.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="group grid grid-cols-1 gap-6 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 md:px-4 lg:py-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs tracking-[0.08em] text-zinc-500">{item.period}</p>
                <p className="mt-2 font-mono text-xs tracking-[0.16em] text-zinc-500 uppercase">
                  {item.company}
                </p>
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
      </div>
    </section>
  );
}
