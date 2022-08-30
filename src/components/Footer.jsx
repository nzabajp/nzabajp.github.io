import styled from "styled-components"

import { Email, StyledUl, LinkIcon } from './Styles'

//Styles
const StyledFooter = styled.footer`
    background: #111;
    color: var(--clr-accent);
    text-align: center;
    padding: 2.5em 0;
    font-size: var(--fs-h3);
`

//Component
function Footer() {
    return (
        <StyledFooter>
            <Email 
                href="mailto:nzabajp@gmail.com" 
                className="footer__link"
            >
                nzabajp@gmail.com
            </Email>
            <StyledUl>
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
                <li>
                    <LinkIcon 
                        href="https://twitter.com/Paul_JV"
                        target="_blank"    
                    >
                        <i className="ri-twitter-fill"></i>
                    </LinkIcon>
                </li>
            </StyledUl>
        </StyledFooter>
    )
}

export default Footer