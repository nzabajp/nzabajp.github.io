import { useState, useEffect } from "react"
import styled from "styled-components"
import { createClient } from "@supabase/supabase-js"

//Styles
const SectionContainer = styled.section`
    max-width: 1000px;
    margin: 0 auto;
`

const SkillsContainer = styled.div`
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1em;
`

const Skill = styled.p`
    margin: 0;
    padding: .5em;
    font-weight: var(--fw-semibold);
    text-align: center;
    border-radius: 10px;
    background-color: var(--clr-accent);
    transition: all .15s;

    &:hover,
    &:focus {
        transform: translateY(-3px);
        box-shadow: var(--bs);
        cursor: default;
    }
`

//Component
function TechSkills() {
    const [skills, setSkills] = useState([])
    
    useEffect( () => {
        const supabaseUrl = 'https://uetlunwokhygydtqbvpr.supabase.co'
        const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVldGx1bndva2h5Z3lkdHFidnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2Mjc5NzQsImV4cCI6MTk3NzIwMzk3NH0.PpKiR5k3E27VGFC8T_SrEE8nbDkhwDcinGUDtDG7x90'
        const supabase = createClient(supabaseUrl, supabaseKey)
        async function fetchSkills() {
            const {data, error} = await supabase
                .from('Skills')
                .select('*')
            error ? console.error(error) : setSkills(data)
        }
        fetchSkills()
    }, [])

    const skillsElement = skills.map(({icon, language, id}) => (
        <Skill
            key={id}
        >
            <i className={icon}></i> {language}
        </Skill>
    ))

    return (
        <SectionContainer>
            <h2>
                My Tech Skills
            </h2>
            <SkillsContainer>
                {skills.length !== 0 ? skillsElement : <h3>Loading...</h3>}
            </SkillsContainer>
        </SectionContainer>
    )
}

export default TechSkills