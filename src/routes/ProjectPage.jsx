import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Hero from "../components/Hero";
import { Context } from '../Context';
import { BtnLink, LinkIcon, Lang } from '../components/Styles'

//Styles
const PortfolioInfo = styled.div`
    padding: 0 2em 2em;
    max-width: 1000px;
    margin: 0 auto;

    & p {
        max-width: 700px;
    }
`

const NewLang = styled(Lang)`
    color: white;
`

const StyledDiv = styled.div`
    margin: 1em 0;
`

//Compenent
function ProjectPage() {
    const [project, setProject] = useState({})
    const [language, setLanguage] = useState([])
    const {projectId} = useParams()
    const data = useContext(Context).find(({id}) => id === Number(projectId))

    //to avoid infinite re-renders
    if(data && Object.keys(project).length === 0) {
        setProject(data)
        const langSpan = data.languages.map(lang => {
            return <NewLang key={lang}>{lang}</NewLang>
        })
        setLanguage(langSpan)
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <>
            <Hero project={project} />
            <PortfolioInfo>
                <h3>Overview</h3>
                <p>{project.overview}</p>
                <h3>My process</h3>
                <p>{project.myProcess}</p>
                <h3>Tech stack used</h3>
                <StyledDiv>
                    {language}
                </StyledDiv>
                <h3>Links</h3>
                <ul>
                    <li>
                        <LinkIcon 
                            href={project.liveSite} 
                            target="_blank"
                        >
                            Live Site URL 
                            <i className="ri-external-link-fill"></i>
                        </LinkIcon>
                    </li>
                    <li>
                        <LinkIcon 
                            href={project.github}
                            target="_blank"
                        >
                            Github Repository 
                            <i className="ri-external-link-fill"></i>
                        </LinkIcon>
                    </li>
                </ul>
                <BtnLink as={Link} to="/" >Go Back</BtnLink>
            </PortfolioInfo>
            
        </>
    )
}

export default ProjectPage