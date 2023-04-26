import ResumeSection from "./ResumeSection";
import { SkillGroup } from "./Skills";
import TimelineItem from "./TimelineItem";

type Props = {
  skills: SkillGroupType[];
  education: education[];
  experience: experience[];
  noPadding: boolean;
};

export default function Resume({ skills, education, experience, noPadding = false }: Props) {
    return (
      <section className="bg-neutral-100 text-black px-4 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex flex-col divide-y-2 divide-neutral-300">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <TimelineItem {...item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Work">
              {experience.map((item, index) => (
                <TimelineItem {...item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Skills">
              <p className="pb-8">
                Here you can show a snapshot of your skills to show off to
                employers
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {skills.map((skillgroup, index) => (
                  <SkillGroup
                    key={`${skillgroup.name}-${index}`}
                    skillGroup={skillgroup}
                  />
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
      </section>
    );
  }
