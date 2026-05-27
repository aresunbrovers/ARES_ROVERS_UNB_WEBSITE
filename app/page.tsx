import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/rover_by_gettyimages.jpeg"
        alt="Rover em paisagem marciana"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />

      <div className="relative z-10 flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-20 lg:px-10 lg:pb-28">
        <Image
          src="/Logo dourada_roxa_dark.png"
          alt="Logo Ares Rovers"
          width={200}
          height={200}
          priority
          className="mb-6 h-24 w-24 drop-shadow-lg sm:h-28 sm:w-28"
        />
        <h1
          className="text-4xl uppercase tracking-wide text-white sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Bem vindo ao ARES
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Ares Rovers UnB — A equipe oficial de Rovers da UnB. 
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://www.instagram.com/ares.unb/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition hover:bg-white/90"
          >
            Conheça a nossa equipe
          </Link>
          <Link
            href="/projetos"
            className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
          >
            Nossos projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
