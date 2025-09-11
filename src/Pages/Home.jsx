import React from 'react'
import HomeHero from '../Components/HomeHero'
import HomeHero2 from '../Components/HomeHero2'
import HomeSwitch from '../Components/HomeSwtich'
import PhoneAppSection from '../Components/PhoneAppSection'
import HomeSectionWithVideo from '../Components/HomeSectionWithVideo'
import Energy101Section from '../Components/EnergySection'
import OurServiceSection from '../Components/HomeService'
import HomeMain from '../Components/HomeMain'
import HomeBlogSection from '../Components/HomeBLogSection'

const Home = () => {
  return (
    <div>
      <section>
        <HomeHero/>
      </section>
      <section>
        <HomeHero2/>
      </section>
      <section>
        <HomeSwitch/>
      </section>
      <section>
        <PhoneAppSection/>
      </section>
      <section>
        <HomeSectionWithVideo/>
       </section>   
       <section>
        <Energy101Section/>
       </section>
       <section>
        <OurServiceSection/>
       </section>
       <section>
        <HomeMain/>
       </section>
       <section>
        <HomeBlogSection/>
       </section>
    </div>
  )
}

export default Home
