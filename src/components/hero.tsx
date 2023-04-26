"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero({
  image,
  typewriter_names,
  description,
  socials,
  actions,
}: hero) {
  return (
    <section id="hero">
    <div className="relative flex h-screen w-screen-20 items-center justify-center">
      <Image
        alt={`bg-image`}
        className="absolute z-0"
        fill
        placeholder="blur"
        priority
        style={{objectFit: "cover"}}
        src={image}
      />

      <div className="z-10  max-w-screen-lg px-4 lg:px-0">
        <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            <span className="flex">
              I&apos;m&nbsp;
              <Typewriter
                options={{
                  strings: typewriter_names,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          {description}
          <div className="flex gap-x-4 text-neutral-100">
            {socials &&
              Object.values(socials).map((e) => (
                <a href={e.url} key={e.label}>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {e.icon}
                  </svg>
                </a>
              ))}
          </div>
          <div className="flex w-full justify-center gap-x-4">
            {actions &&
              Object.values(actions).map((e) => (
                <a
                  className={`flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base ${
                    e.primary
                      ? "border-orange-500 ring-orange-500"
                      : "border-gray-700 ring-gray-700"
                  }`}
                  href={e.url}
                  key={e.text}
                >
                  {e.text}
                  {e.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex justify-center text-black">
        <a className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2" href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 bg-transparent sm:h-6 sm:w-6"
          >
            <path

              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
    </section>
  );
}
