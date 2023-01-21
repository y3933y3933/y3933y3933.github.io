import * as React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import TigerIcon from '../images/icons/tiger.inline.svg'
import ContainerStyles from '../styles/containerStyle'
import Nav from './nav/nav'
import MobileNav from './nav/mobile.nav'



const StyledHeader = styled.header`
  border-bottom: 1px solid #eee;
`

const StyledContainer = styled.div`
    ${ContainerStyles}
    align-items:center;
    padding:0;
    justify-content:space-between;
    background:white;
    border-bottom: 1px solid #eee;

    position:relative;
    z-index:99;
    // height:48px;

    @media (min-width:${(props) => props.theme.size.md}){
      border-bottom: none;
    
  }

`

const LogoWrapper = styled.div`
  padding:10px;
`


const StyledLogo = styled(Link)`
  & svg{
    width:40px;
    height:40px;
  }

`







const Header = ({ siteTitle }) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false)



  return (
    <StyledHeader>
      <StyledContainer>
        <LogoWrapper>
          <StyledLogo to="/" >
            <TigerIcon />
          </StyledLogo>
        </LogoWrapper>

        <Nav setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav} />
      </StyledContainer>

      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} />}
    </StyledHeader>)
}







export default Header