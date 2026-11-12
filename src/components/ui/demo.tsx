"use client";

import React from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Wizja",
    title: "Pomysł",
    rightLabel: "Strategia",
    background:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
  },
  {
    leftLabel: "Design",
    title: "Interfejs",
    rightLabel: "Doświadczenie",
    background:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=2000&q=80",
  },
  {
    leftLabel: "Kod",
    title: "Wydajność",
    rightLabel: "Architektura",
    background:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80",
  },
  {
    leftLabel: "Testy",
    title: "Jakość",
    rightLabel: "Stabilność",
    background:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    leftLabel: "Wdrożenie",
    title: "Skala",
    rightLabel: "Rozwój",
    background:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
  },
];

export default function PortfolioHero() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <>
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>InTheShadow</div>          </>
        }
        footer={
          <a
            href="#kontakt"
            className="text-inherit transition-opacity duration-300 hover:opacity-60"
          >
            Kontakt
          </a>
        }
        fontFamily="var(--font-display), var(--font-sans), system-ui, sans-serif"
        colors={{
          text: "rgba(245,245,245,0.94)",
          overlay: "rgba(5,5,5,0.55)",
          pageBg: "#050505",
          stageBg: "#000000",
        }}
        durations={{ change: 0.7, snap: 800 }}
        showProgress
        apiRef={apiRef}
        ariaLabel="Portfolio Tomasza Kowalczyka, przewijana prezentacja"
      />
    </>
  );
}
