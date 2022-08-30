import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { StyledUl, LinkIcon, Lang } from './Styles'

//Styles
const Container = styled.div`
    background: var(--clr-accent);
    border-radius: 10px;
    padding: 2em;
    text-align: center;
    transition: all .15s;

    &:hover,
    &:focus {
        transform: scale(1.05);
        box-shadow: var(--bs);
    }

    & > .link {
        text-decoration: none;
        color: var(--clr-dark);
    }
`

const Icon = styled(LinkIcon)`
    font-size: 2rem;
    color: var(--clr-dark);

    &:hover {
        color: var(--clr-light);
        opacity: unset;
    }
`

//Component
function ProjectDiv({data}) {
    const {id, title, shortDesc, languages, github, liveSite} = data

    const langSpan = languages.map(lang => <Lang key={lang}>{lang}</Lang>)

    return (
        <Container>
            <Link 
                to={`/project/${id}`}  
                className="link"
            >
                <h3>{title}</h3>
                <p>{shortDesc}</p>
                <div>{langSpan}</div>
            </Link>
            <StyledUl>
                <li>
                    <Icon 
                        href={github}
                        target="_blank"    
                    >
                        <i className="ri-code-box-fill"></i>
                    </Icon>
                </li>
                <li>
                    <Icon 
                        href={liveSite}
                        target="_blank"    
                    >
                        <i className="ri-external-link-fill"></i>
                    </Icon>
                </li>
            </StyledUl>
        </Container>
    )
}

export default ProjectDiv