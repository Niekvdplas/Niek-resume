import classNames from "classnames";
import Image from "next/image";

export default function About(
  { profileImage, description, aboutItems }: about,
  noPadding = false
) {
  return (
    <section
      id="about"
      className={classNames("bg-neutral-800", {
        "px-4 py-16 md:py-24 lg:px-8": !noPadding,
      })}
    >
      <div className={classNames({ "mx-auto max-w-screen-lg": !noPadding })}>
        <div
          className={classNames("grid grid-cols-1 gap-y-4", {
            "md:grid-cols-4": !!profileImage,
          })}
        >
          {!!profileImage && (
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-40 w-40 overflow-hidden rounded-xl md:h-48 md:w-48">
                <Image
                  alt="about-me-image"
                  src={profileImage}
                />
              </div>
            </div>
          )}
          <div
            className={classNames("col-span-1 flex flex-col gap-y-6", {
              "md:col-span-3": !!profileImage,
            })}
          >
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="prose prose-sm text-gray-300 sm:prose-base">
                {description}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
