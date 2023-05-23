import heroImage from "../images/bg.jpg";
import profileImage from "../images/pf.jpg";
import woodzImage from "../images/woodz.png";
import deltaImage from "../images/lhddelta.png";

import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const heroData: hero = {
  image: heroImage,
  typewriter_names: [
    "Niek van der Plas.",
    "a Software Engineer.",
    "a full-stack developer.",
    "a quick learner.",
    "a problem solver.",
    "a leader.",
  ],
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">software engineer</strong>{" "}
        based in Leiden, currently working at
        <strong className="text-stone-100"> Capgemini</strong>. I am passionate
        about creating innovative solutions that can transform the world around
        us. With my strong coding skills and drive to excel, I am committed to
        pushing the boundaries of what is possible and making a positive impact
        on people&apos;s lives through technology.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me in the{" "}
        <strong className="text-stone-100">gym</strong>, in the mountains{" "}
        <strong className="text-stone-100">skiing</strong>, hanging out with my{" "}
        <strong className="text-stone-100">friends</strong>, or{" "}
        <strong className="text-stone-100">exploring</strong> the world.{" "}
      </p>
      <p>
        I have a proven track record of successfully delivering complex software
        projects and thrive in a collaborative, fast-paced environment.
      </p>
    </>
  ),
  actions: {
    resume: {
      text: "Resume",
      url: "/docs/Resume_Niek.pdf",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      ),
      primary: true,
    },
    contact: {
      text: "Contact",
      url: "#contact",
      icon: null,
      primary: false,
    },
  },
  socials: {
    github: {
      url: "https://www.github.com/Niekvdplas/",
      label: "Github",
      icon: (
        <>
          <path
            clipRule="evenodd"
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
            fillRule="evenodd"
          />
          <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
        </>
      ),
    },
    linkedin: {
      url: "https://www.linkedin.com/in/niek-van-der-plas-0b896714a/",
      label: "LinkedIn",
      icon: (
        <>
          <path
            d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
            fill="currentColor"
          ></path>
        </>
      ),
    },
  },
};

export const projects: Card[] = [
  {
    title: "ChatGPT clone",
    description:
      "I got access to the GPT-4 API and created a simple clone of the ChatGPT website. This website allows you to chat with a GPT-4 model.",
    href: "https://github.com/Niekvdplas/chat",
    image:
      "https://uploads-ssl.webflow.com/5b105a0c66f2f636c7884a17/64063dbcad97bd421b437096_chatgpt.jpg",
    tags: ["GPT-4", "OpenAI", "NextJS 13", "Tailwind"],
  },
  {
    title: "Woodz kozijnen",
    description:
      "A website for a local company that sells and installs windows and doors.",
    href: "https://www.woodzkozijnen.nl",
    image: woodzImage,
    tags: [
      "Next JS",
      "Tailwind",
      "Typescript",
      "Sanity IO",
      "Front end development",
      "SSR",
      "Caching and revalidation",
    ],
  },
  {
    title: "L.H.D. Delta",
    description: "A website I created for my fraternity in Leiden.",
    href: "https://www.lhddelta.nl",
    image: deltaImage,
    tags: [
      "Next JS",
      "Tailwind",
      "Typescript",
      "AWS",
      "DynamoDB",
      "Amazon S3",
      "Amazon Amplify",
      "GraphQL",
      "ISR",
      "SSR",
      "Caching and revalidation",
    ],
  },
  {
    title: "Demo application with Apache Kafka and websockets",
    description:
      "Demo application that reads data from Apache Kafka and send it to an Angular web application through a websocket connection.",
    href: "https://github.com/Niekvdplas/Kafka-Docker-Mongo-Angular",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--aIv4Kv5A--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oiwssqmq889dm2lkfl5z.png",
    tags: [
      "Angular",
      "Apache Kafka",
      "Websockets",
      "Docker",
      "MongoDB",
      "Spring Boot",
    ],
  },
  {
    title: "X-arm robot clock",
    description: "A 7-segment clock I created using an X-arm 7 robot arm.",
    href: "https://blog.decos.com/de-meest-digitale-klok-van-nederland",
    image:
      "https://blog.decos.com/hs-fs/hubfs/blog%20robotklok.jpg?width=1200&name=blog%20robotklok.jpg",
    tags: ["Python", "Robotics", "C++"],
  },

  {
    title: "Contributions to OSS",
    description:
      "Several contributions to open source projects such as Kubernetes and Ktrain.",
    href: "https://github.com/amaiya/ktrain",
    image:
      "https://github.com/amaiya/ktrain/raw/master/ktrain_logo_200x100.png",
    tags: ["Python", "Kubernetes", "Machine Learning", "OSS", "Contributions"],
  },
  {
    title: "Detecting PII in Git commits",
    description:
      "For Master thesis, which I did at ING, I proposed a heavily modifiable tool in which the strength of regular expressions is combined with a state-of-the-art machine learning model to detect a variety of import PII in Git commits. This tool was able to mitigate a significant part of the potential data leaks and was graded with an 8.",
    href: "https://repository.tudelft.nl/islandora/object/uuid:fe195c17-ecf5-4811-a987-89f238a6802f",
    image:
      "https://opengraph.githubassets.com/25281c37000814e31a325c00c87c68ffc0da43c32c4ee0f751a5b5516aa3ede2/microsoft/CodeBERT",
    tags: [
      "GPT-3",
      "CodeBERT",
      "Python",
      "Machine Learning",
      "NLP",
      "Regex",
      "Git",
      "Flask",
    ],
  },
  {
    title: "Citizen complaint classification",
    description:
      "For my Bachelor thesis I fine-tuned a machine learning model (BERT) that classifies citizen complaints for Decos. The model was trained on 100.000+ complaints and was able to classify complaints with an accuracy of 84%. This model was exposed using a Flask API and containerized using Docker in Azure cloud. The model was used in a proof of concept for the local municipalities. It was graded with a 9 and was submitted to COLING'2020",
    href: "https://theses.liacs.nl/1865",
    image:
      "https://www.traffictoday.be/wp-content/uploads/sites/2/2019/10/GoogleBert_1920.jpg",
    tags: [
      "Python",
      "Machine Learning",
      "NLP",
      "Huggingface",
      "Tensorflow",
      "Flask",
      "NGINX",
    ],
  },
  {
    title: "Lunch site",
    description:
      "During my Bachelor study I worked part-time at a local software company. During this time I created a website for the company's lunch service. Which had all state-of-the-art technologies at the time.",
    tags: [
      "CI/CD",
      "Kubernetes",
      ".NET Core",
      "Angular",
      "SQL Server",
      "Azure",
      "Docker",
      "Typescript",
      "C#",
      "3rd party APIs (Rabobank, GCP)",
      "ADFS/OAuth 2.0",
      "SSL Certificates",
      "DevOps",
    ],
  },
];

export const aboutData: about = {
  profileImage: profileImage,
  description: `I am a highly motivated software engineer with a passion for cutting-edge technology and innovative projects. As a recent graduate, I bring fresh perspectives and up-to-date knowledge to any team. My entrepreneurial mindset enables me to take the lead and take calculated risks to achieve the desired results. I have a keen ability to learn quickly and adapt to new technologies and situations.

  My love for travel has taught me the importance of planning and considering all relevant options, while also developing my flexibility and ability to handle unexpected changes. I excel at working with others and enjoy motivating my team to believe in an idea by involving them in the process.
  
  If you're looking for a dedicated and adaptable software engineer to join your team, I'd love to connect!`,
  aboutItems: [
    {
      label: "Location",
      text: "Rijnsburg, Zuid-Holland, Netherlands",
      Icon: MapIcon,
    },
    {
      label: "Age",
      text: "24",
      Icon: CalendarIcon,
    },
    {
      label: "Nationality",
      text: "Dutch",
      Icon: FlagIcon,
    },
    {
      label: "Interests",
      text: "Gaming, Skiing, Running, Reading",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Msc. Computer Science, TU Delft",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "Capgemini",
      Icon: BuildingOffice2Icon,
    },
  ],
};

export const skills: SkillGroupType[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "Dutch",
        level: 10,
      },
      {
        name: "English",
        level: 10,
      },
      {
        name: "German",
        level: 7,
      },
      {
        name: "French",
        level: 3,
      },
    ],
  },
  {
    name: "Front-end development",

    skills: [
      {
        name: "React/NextJS",
        level: 8,
      },
      {
        name: "Angular",
        level: 7,
      },
      {
        name: "Typescript",
        level: 8,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Back-end development",
    skills: [
      {
        name: "Java/Spring boot",
        level: 8,
      },
      {
        name: "NodeJS",
        level: 7,
      },
      {
        name: "Python (Flask/Django)",
        level: 9,
      },
      {
        name: "C# (.NET Core)",
        level: 8,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        level: 8,
      },
      {
        name: "MongoDB",
        level: 7,
      },
      {
        name: "MySQL/SQL Server",
        level: 7,
      },
      {
        name: "NoSQL",
        level: 8,
      },
    ],
  },
  {
    name: "Cloud",
    skills: [
      {
        name: "AWS",
        level: 6,
      },
      {
        name: "Azure",
        level: 9,
      },
      {
        name: "GCP",
        level: 7,
      },
      {
        name: "Docker & Kubernetes",
        level: 8,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Git",
        level: 9,
      },
      {
        name: "CI/CD",
        level: 8,
      },
      {
        name: "Agile/Scrum",
        level: 8,
      },
    ],
  },
];

export const experience: experience[] = [
  {
    date: "November 2021 - September 2022",
    title: "Software engineer / Data scientist",
    location: "ING",
    content: (
      <>
        <p>
          Research in the detection and mitigation of data leaks using SOTA
          (natural) language processing techniques
        </p>
      </>
    ),
  },
  {
    date: "May 2019 - August 2021",
    title: "Software Engineer",
    location: "Decos NL",
    content: (
      <>
        <p>
          Trained a BERT model for classification + anonymization of citizens
          complaints and worked on full-stack applications
        </p>
      </>
    ),
  },
];

export const education: education[] = [
  {
    date: "September 2020 - June 2022",
    title: "Master Computer Science - Software Technology",
    location: "TU Delft",
    content: (
      <>
        <p>
          Finished with a 7.5/10. Focus on Software Technology, Technology
          management and entrepreneurship.
        </p>
      </>
    ),
  },
  {
    date: "September 2017 - June 2020",
    title: "Bachelor Computer Science",
    location: "Leiden University",
    content: (
      <>
        <p>Finished with an 8/10. Minor in Science Based Business.</p>
      </>
    ),
  },
];
