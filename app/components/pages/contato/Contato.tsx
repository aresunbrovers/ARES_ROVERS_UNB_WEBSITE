import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/Logo_dourada_roxa_dark.png";

const sociais = [
  {
    nome: "Instagram",
    handle: "@ares.unb",
    href: "https://www.instagram.com/ares.unb/",
    icone: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    nome: "LinkedIn",
    handle: "ARES UnB",
    href: "https://www.linkedin.com/company/aresunb/",
    icone: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    nome: "E-mail",
    handle: "ares.unb.rovers@gmail.com",
    href: "mailto:ares.unb.rovers@gmail.com",
    icone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.55),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
        <Image
          src={logoImg}
          alt="Logo Ares Rovers"
          width={120}
          height={120}
          className="mx-auto h-20 w-20 drop-shadow-[0_0_30px_rgba(212,160,23,0.5)]"
        />
        <h2
          className="mt-8 text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Pronto para{" "}
          <span className="bg-gradient-to-r from-[#D4A017] to-[#F5C842] bg-clip-text text-transparent">
            decolar
          </span>{" "}
          conosco?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
          Entre em contato para parcerias, processos seletivos e oportunidades
          de colaboração com a equipe oficial de Rovers da UnB.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:ares.unb.rovers@gmail.com"
            className="rounded-full bg-[#D4A017] px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#F5C842]"
          >
            Fale conosco
          </Link>
          <Link
            href="#patrocinadores"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Seja patrocinador
          </Link>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {sociais.map((s) => (
            <Link
              key={s.nome}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              {s.icone}
              <span>{s.handle}</span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} Ares Rovers · Universidade de Brasília
        </p>
      </div>
    </section>
  );
}
