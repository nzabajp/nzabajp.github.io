import styled from "styled-components";

const SectionTitle = styled.h1`
    margin-bottom: .25em;
    max-width: 100%;
`

const SectionSubtitle = styled.p`
    margin: 0;
    font-size: var(--fs-h3);
`

const Email = styled.a`
    color: inherit;
    text-decoration: none;
    font-weight: var(--fw-bold);

    :hover {
        opacity: .7;
        text-decoration: underline;
    }
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0 0;
    padding: 0;
`

const LinkIcon = styled(Email)`
    margin: 1em;
    font-weight: unset;

    :hover {
        text-decoration: unset;
    }
`

const BtnLink = styled.a`
    display: block;
    width: max-content;
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    padding: .5em 2.5em;
    background: var(--clr-accent);
    color: var(--clr-dark);
    text-decoration: none;
    cursor: pointer;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: var(--fw-bold);
    transition: all .15s ease-in-out;

    :hover,
    :focus {
        transform: scale(1.1);
        color: var(--clr-light);
        border-radius: 10px;
    }
`

const Lang = styled.span`
    background-color: var(--clr-dark);
    color: var(--clr-accent);
    border-radius: 10px;
    font-size: .9rem;
    font-weight: 600;
    margin: .3em;
    padding: .3em .5em;
    display: inline-block;
`

export { 
    Email, 
    StyledUl, 
    LinkIcon, 
    BtnLink, 
    Lang, 
    SectionTitle, 
    SectionSubtitle 
}