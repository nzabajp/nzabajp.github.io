import styled from 'styled-components'

import { SectionTitle, SectionSubtitle } from './Styles'

//Styles
const AboutMeConatiner = styled.section`
    max-width: 1000px;
    margin: 0 auto;
`

const AboutMeSubtitle = styled(SectionSubtitle)`
    background: var(--clr-accent);
    padding: .25em 1em;
    font-family: var(--ff-secondary);
    margin-bottom: 1em;

    @media (min-width: 600px) {
        grid-column: 1 / -1;
        grid-row: 2;
        position: relative;
        left: -1em;
        width: calc(100% + 2em);
        padding-left: 1em;
        padding-right: calc(150px + 4em);
    }
`

//Component
function AboutMe() {
    return (
        <AboutMeConatiner>
            <SectionTitle 
                as="h2"
            >
                Who I am
            </SectionTitle>
            <AboutMeSubtitle>
                Front-end Developer based in Durban, South Africa
            </AboutMeSubtitle>
            <p>
                I'm a Front-end Developer who is very passionate about React. My interest in web development started back in 2018 when I built a website using a website builder. This encounter got me interested to learn how to write the actual code that went into building a website. This has led me to pursue web development as a career. 
            </p>
        </AboutMeConatiner>
    )
}

export default AboutMe