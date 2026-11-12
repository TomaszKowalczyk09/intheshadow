"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL = "kontakt@intheshadow.dev";

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const inputBase =
  "w-full rounded-none border bg-zinc-950 px-3.5 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:ring-2";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const uid = useId();

  function update(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) {
      next.name = "Podaj imię lub nazwę firmy.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Podaj poprawny adres e-mail.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Opisz projekt w minimum 10 znakach.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    const subject = encodeURIComponent(`Wiadomość od ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\nOdpowiedź na: ${values.email.trim()}`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  }

  function reset() {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[440px] flex-col justify-between border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <div>
          <span className="flex h-11 w-11 items-center justify-center border border-signal/30 bg-signal/10">
            <Check className="h-5 w-5 text-signal" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-heading text-2xl text-zinc-100">Wiadomość gotowa</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Otworzyłem Twój program pocztowy. Jeśli okno się nie pojawiło, napisz bezpośrednio na{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-zinc-100 underline decoration-white/30 underline-offset-4 transition hover:decoration-signal"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-white/15 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-300 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 active:translate-y-px"
        >
          Wyślij kolejną
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-white/10 bg-zinc-900/40 p-6 sm:p-8"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor={`${uid}-name`}
            className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-400"
          >
            Imię lub firma
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Jan Kowalski"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={cn(
              inputBase,
              errors.name
                ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
                : "border-white/10 focus:border-signal focus:ring-signal/20"
            )}
          />
          {errors.name ? (
            <p id={`${uid}-name-error`} className="text-xs text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`${uid}-email`}
            className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-400"
          >
            E-mail
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="jan@firma.pl"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={cn(
              inputBase,
              errors.email
                ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
                : "border-white/10 focus:border-signal focus:ring-signal/20"
            )}
          />
          {errors.email ? (
            <p id={`${uid}-email-error`} className="text-xs text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`${uid}-message`}
            className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-zinc-400"
          >
            Wiadomość
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Opowiedz krótko o projekcie, celu i terminie."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${uid}-message-error` : undefined}
            className={cn(
              inputBase,
              "resize-none",
              errors.message
                ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
                : "border-white/10 focus:border-signal focus:ring-signal/20"
            )}
          />
          {errors.message ? (
            <p id={`${uid}-message-error`} className="text-xs text-red-400">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 bg-signal px-5 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[#0b1000] transition hover:bg-[#d6ff5e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle
              className="h-4 w-4 animate-spin motion-reduce:animate-none"
              aria-hidden="true"
            />
            Wysyłanie
          </>
        ) : (
          <>
            Napisz do mnie
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-[0.7rem] leading-relaxed text-zinc-500">
        Odpowiadam w ciągu jednego dnia roboczego. Dane wykorzystam wyłącznie do kontaktu.
      </p>
    </form>
  );
}
