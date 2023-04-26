type hero = {
    image: StaticImageData,
    typewriter_names: string[],
    description: Element<any>,
    socials: {
        github: {
            label: string,
            url: string,
            icon: Icon
        },
        linkedin: {
            label: string,
            url: string,
            icon: Icon
        }
    },
    actions: {
        resume: {
            url: string,
            text: string,
            primary: boolean,
            icon: Icon
        },
        contact: {
            url: string,
            text: string,
            primary: boolean,
            icon: Icon

        }
    }
}

type about = {
    profileImage: StaticImageData,
    description: Element<any>,
    aboutItems: {label: string, text: string, Icon: Icon}[],
}

type Card = {
    title: string;
    description: string;
    href?: string;
    image?: string | StaticImageData;
    tags: string[];
  };

type education = {
    date: string,
    location: string,
    title: string,
    content: Element<any>
}

type experience = {
    date: string,
    location: string,
    title: string,
    content: Element<any>
}

type SkillType = {
    name: string;
    level: number;
    max?: number;
  }
  
type SkillGroupType = {
    name: string;
    skills: SkillType[];
  }
