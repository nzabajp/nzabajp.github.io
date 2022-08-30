import { Link } from "react-router-dom"
import styled from "styled-components"

import { StyledUl, LinkIcon } from "./Styles"

//Styles
const NavList = styled(StyledUl)`
    margin: 0;
    font-size: 1.5rem;

    & a {
        margin: 0 .5em;
    }

    @media (min-width: 800px) {
        font-size: 2rem;
    }
`

//Component
function Header() {
    return (
        <header>
            <h3>
                <Link 
                    to="/"
                    style={{textDecoration: "none", color: "var(--clr-dark)"}}    
                >
                    {"< NzabaJP />"}
                </Link>
            </h3>
            <NavList>
                <li>
                    <LinkIcon 
                        href="https://www.linkedin.com/in/nzabajp"
                        target="_blank"
                    >
                        <i className="ri-linkedin-box-fill"></i>
                    </LinkIcon>
                </li>
                <li>
                    <LinkIcon 
                        href="https://github.com/nzabajp"
                        target="_blank"    
                    >
                        <i className="ri-github-fill"></i>
                    </LinkIcon>
                </li>
            </NavList>
        </header>
    )
}

export default Header