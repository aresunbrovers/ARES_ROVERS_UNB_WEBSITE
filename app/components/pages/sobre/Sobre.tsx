import Image from "next/image";
import equipeImg from "@/public/equipe.jpg";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt
        className="text-3xl text-[#D4A017] sm:text-4xl"
        style={{ fontFamily: "var(--font-russo-one)" }}
      >
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">
        {label}
      </dd>
    </div>
  );
}

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="flex min-h-screen w-full flex-col overflow-hidden text-white md:flex-row"
    >
      {/* ── Coluna da imagem ── */}
      <div className="relative h-72 w-full flex-shrink-0 sm:h-96 md:h-auto md:flex-1">
        <Image
          src={equipeImg}
          alt="Equipe Ares Rovers reunida na UnB"
          fill
          className="object-cover object-[center_70%]"
        />
        {/* Gradiente de transição: transparente → preto, só na borda direita (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 hidden md:block" />
        {/* Gradiente de transição: transparente → preto, borda inferior (mobile) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 md:hidden" />
        {/* Acento roxo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(76,29,149,0.3),transparent_50%)]" />
      </div>

      {/* ── Coluna do texto (fundo escuro) ── */}
      <div className="flex w-full flex-col justify-center bg-black px-8 py-16 md:w-[46%] md:flex-none md:py-24 lg:px-14">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
          Sobre nós
        </span>
        <h2
          className="mt-4 text-4xl uppercase leading-tight sm:text-5xl lg:text-[3.25rem]"
          style={{ fontFamily: "var(--font-russo-one)" }}
        >
          Engenharia que{" "}
          <span className="text-[#4c1d95]">conquista</span> outros mundos
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
          A ARES (Aerospace Rover Exploration System) é a equipe oficial de
          Rovers da Universidade de Brasília, vinculada à Engenharia
          Aeroespacial da UnB. Nosso objetivo é desenvolver veículos
          robóticos capazes de operar em terrenos análogos a superfícies
          extraterrestres.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Atuamos de forma multidisciplinar nas áreas de estruturas,
          dinâmica, eletrônica, telecomunicações e sistemas embarcados,
          integrando ensino, pesquisa e inovação aplicada.
        </p>

        <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
          <Stat value="5+" label="Subsistemas" />
          <Stat value="30+" label="Membros" />
          <Stat value="∞" label="Ambições" />
        </dl>
      </div>
    </section>
  );
}
