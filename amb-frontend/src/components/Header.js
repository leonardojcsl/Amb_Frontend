import logo from "../images/Logo.png"
import styled from "styled-components"

const Logo = styled.img`
    max-width: 12em;
    max-height: 12em
`


export const Header = () => {
    return (
        <Logo src={logo} />
    )
}