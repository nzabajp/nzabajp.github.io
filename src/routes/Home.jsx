import { useEffect } from 'react'

import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import TechSkills from '../components/TechSkills'
import MyProjects from '../components/MyProjects'


function Home() {
    useEffect(() => {
        window.scrollTo({top:0})
    }, [])
    return (
        <>
            <Hero />
            <AboutMe />
            <TechSkills />
            <MyProjects />
        </>
    )
}

export default Home