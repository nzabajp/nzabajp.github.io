import styled from 'styled-components'

import photo from '../assets/jp-photo.jpg'
import { SectionTitle, SectionSubtitle } from './Styles'

//Styles
const HeroContainer = styled.section`
    position: relative;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    @media (min-width: 600px) {
        display: grid;
        margin: 0 auto;
        grid-column-gap: 1em;
        grid-template-areas: 
            "img title"
            "img subtitle";
        grid-template-columns: min-content minmax(200px,1000px);
    }
`

const HeroTitle = styled(SectionTitle)`
    font-weight: var(--fw-light);

    & strong {
        display: block;
    }
`

const HeroSubtitle = styled(SectionSubtitle)`
    display: inline-block;
    background: var(--clr-accent);
    padding: .25em 1em;
    font-family: var(--ff-secondary);
    margin-bottom: 1em;

    @media (min-width: 600px) {
        align-self: start;
        grid-column: -1 / 1;
        grid-row: 2;
        text-align: right;
        position: relative;
        left: -1.5em;
        max-width: calc(100% + 1.5em);
    }
`

const Image = styled.img`
    box-shadow: var(--bs);
    border-radius: 5px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;

    @media (min-width: 600px) {
        grid-area: img;
        min-width: 250px;
        position: relative;
        z-index: 2;
    }
`

//Component
function Hero({project}) {
    return (
        <HeroContainer>
            <HeroTitle>
                {!project && "Hi, I am"} 
                    <strong>
                        {project ? project.title : "Jean Claude"}
                    </strong>
            </HeroTitle>
            <HeroSubtitle>
                {project ? "project" : "front-end dev"}
            </HeroSubtitle>
            <Image 
                src={project ? project.picUrl : photo}
            />
        </HeroContainer>
    )
}

export default Hero