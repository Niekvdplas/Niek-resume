import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import { aboutData, education, experience, heroData, projects, skills } from '@/utils/mockdata'

export default function Home() {
  return (
    <div className='text-white'>
      {/* Header component */}
      <Hero {...heroData}/>
      <About {...aboutData}/>
      <Resume skills={skills} experience={experience} education={education} noPadding={false}/>
      <Portfolio projects={projects}/>
      <div id='contact'><Contact /></div>
      
    </div>
    // Hero component
  )
}
