"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/equipe", label: "Equipe" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-black/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-black/70"
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 justify-self-start"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/Logo dourada_roxa_dark.png"
            alt="Ares Rovers"
            width={120}
            height={28}
            priority
            className="h-7 w-auto inverted"
          />
        </Link>

        <ul className="hidden items-center gap-8 justify-self-center md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white inverted"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 justify-self-end md:flex">
          <Link
            href="/apoie"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Apoie-nos
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-white md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-base text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="/apoie"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full border border-white/30 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white hover:text-black"
            >
              Apoie-nos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
