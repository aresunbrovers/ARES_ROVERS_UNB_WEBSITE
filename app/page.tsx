import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <h1 className="text-3xl font-normal" style={{ fontFamily: "var(--font-russo-one)" }}>Bem vindo ao A.R.E.S</h1>
        <Image
          src="/Logo dourada_roxa.png"
          alt="Ares logo"
          width={300}
          height={60}
          priority
          className="block dark:hidden"
        />
        <Image
          src="/Logo dourada_roxa_dark.png"
          alt="Ares logo"
          width={300}
          height={60}
          priority
          className="hidden dark:block"
        />
        <div className="flex flex-col items-center gap-4 text-center">
        </div>
        <div className="flex flex-col items-center gap-4 text-base font-large sm:flex-row">
        </div>
      </main>
    </div>
  );
}
