import Image from "next/image";
import Link from "next/link";
import roverImg from "@/public/rover_by_gettyimages.jpeg";
import logoImg from "@/public/Logo_dourada_roxa_dark.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={roverImg}
        alt="Rover em paisagem marciana"
        fill
        preload
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start justify-end px-6 pb-20 pt-28 lg:px-10 lg:pb-28">
        <Image
          src={logoImg}
          alt="Logo Ares Rovers"
          width={200}
          height={200}
          preload
          className="mb-6 h-24 w-24 drop-shadow-lg sm:h-28 sm:w-28"
        />
        <h1
          className="text-4xl uppercase tracking-wide text-white sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Bem-vindo a ARES
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Ares Rovers UnB — A equipe oficial de Rovers da UnB.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#sobre"
            className="rounded-full bg-[#D4A017] px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#F5C842]"
          >
            Conheça a equipe
          </Link>
          <Link
            href="#projetos"
            className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
          >
            Nossos projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
