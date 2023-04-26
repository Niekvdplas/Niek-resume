import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="bg-neutral-100 text-black px-4 pt-16 md:pt-24 lg:px-8 pb-8">
      <div className="mx-auto max-w-screen-lg">
        {/* A contact form with socials */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="text-6xl font-bold mb-2">Get in touch.</h2>
            <p className="text-xl mb-4 pr-16">
              {/* Tell readers how to reach you without saying you are looking for a new job*/}
              If you&apos;re interested in connecting with me, I&apos;d love to
              hear from you. Feel free to drop me a message, and I&apos;ll be
              happy to chat about potential opportunities or collaborate on
              exciting projects. Looking forward to connecting!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-x-4">
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
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5 0H2.5C1.11929 0 0 1.11929 0 2.5V21.5C0 22.8807 1.11929 24 2.5 24H21.5C22.8807 24 24 22.8807 24 21.5V2.5C24 1.11929 22.8807 0 21.5 0ZM8.5 19.5H4.5V9.5H8.5V19.5ZM6.5 7.5C5.67157 7.5 5 6.82843 5 6C5 5.17157 5.67157 4.5 6.5 4.5C7.32843 4.5 8 5.17157 8 6C8 6.82843 7.32843 7.5 6.5 7.5ZM19.5 19.5H15.5V14.5C15.5 13.1193 14.3807 12 13 12C11.6193 12 10.5 13.1193 10.5 14.5V19.5H6.5V9.5H10.5V10.5H10.55C10.95 9.85 11.75 9 13 9C15.2091 9 17 10.7909 17 13V19.5Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
