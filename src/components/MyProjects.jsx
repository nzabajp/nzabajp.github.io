import { useContext } from 'react'
import styled from 'styled-components'

import ProjectDiv from './ProjectDiv'
import { Context } from '../Context'
import { BtnLink, SectionTitle, SectionSubtitle } from './Styles'

//Styles
const ProjectsContainer = styled.section`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--clr-light);
    color: var(--clr-dark);
`

const ProjectSubitle = styled(SectionSubtitle)`
    color: var(--clr-dark);
    font-weight: var(--fw-bold);
    margin-bottom: 2em;
`

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1em;
    max-width: 1000px;
    margin: 0 auto;
`

//Component
function MyProjects() {
    const projects = useContext(Context)
    const projectsArr = projects.map(project => (
        <ProjectDiv
            key={project.id}
            data={project}
        />
    ))

    return (
        <ProjectsContainer>
            <SectionTitle 
                as="h2"
            >
                My work
            </SectionTitle>
            <ProjectSubitle>
                A selection of my range of work
            </ProjectSubitle>
            <ProjectContainer>
                {projectsArr.length === 0 ? <h3>Loading...</h3> :  projectsArr}
            </ProjectContainer>
            <BtnLink
                href="https://github.com/nzabajp?tab=repositories"
                target="_blank"
            >
                See All
            </BtnLink>
        </ProjectsContainer>
    )
}

export default MyProjects