import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="bg-neutral-100 text-black px-4 pt-16 md:pt-24 lg:px-8 pb-8">
      <div className="mx-auto max-w-screen-lg">
        {/* A contact form with socials */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="text-6xl font-bold mb-2">Get in touch.</h2>
            <p className="text-xl mb-4 ">
              {/* Tell readers how to reach you without saying you are looking for a new job*/}
              If you&apos;re interested in connecting with me, I&apos;d love to
              hear from you. Feel free to drop me a message, and I&apos;ll be
              happy to chat about potential opportunities or collaborate on
              exciting projects. Looking forward to connecting!
            </p>
            <div className="flex flex-row items-center gap-x-4">
              {/* href email with subject how to do that */}
              <a
                href="mailto:niekvanderplas1@gmail.com?subject=Contact from website:"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition duration-300 ease-in-out"
              >
                <EnvelopeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/niek-van-der-plas-0b896714a/"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition duration-300 ease-in-out"
              >
                <svg
                  fill="#000000"
                  viewBox="0 0 128 128"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                    fill="#000000"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
