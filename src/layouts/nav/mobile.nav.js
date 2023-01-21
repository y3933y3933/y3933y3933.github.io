import * as React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"






const NavWrapper = styled.nav`
    background:white;
    height:100vh;
    position: fixed;
    top: 0px;
    left:0;
    right:0;
    z-index: 10;
`

const NavList = styled.div`
    margin-top:48px;
    width:100%;
`

const StyledLink = styled(Link)`
    font-size:20px;
    text-transform:uppercase;
    display:inline-block;
    width:100%;
    padding:10px 0 ;
    text-align:center;
    letter-spacing:0.125rem;

    &.active{
        background:#eee;
        color:${(props) => props.theme.color.primary};
    }

`

let timer;

const MobileNav = ({ setShowMobileNav }) => {
    const handleNavigate = () => {
        timer = setTimeout(() => {
            setShowMobileNav(false)
        }, 100)
    }

    React.useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [])

    return <NavWrapper>
        <NavList onClick={handleNavigate}>
            <StyledLink partiallyActive={true} to="/blog" activeClassName="active" >Blog</StyledLink>
            <StyledLink partiallyActive={true} to="/project" activeClassName="active">Project</StyledLink>
            <StyledLink partiallyActive={true} to="/about" activeClassName="active">About</StyledLink>
        </NavList>
    </NavWrapper>
}



export default MobileNav