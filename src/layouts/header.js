import * as React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import TigerIcon from '../images/icons/tiger.inline.svg'
import ContainerStyles from '../styles/containerStyle'
import Nav from './nav'




const StyledHeader = styled.header`
  padding:20px 0;
  border-bottom: 1px solid #eee;
`

const StyledContainer = styled.div`
    ${ContainerStyles}
    align-items:center;
    justify-content:space-between;
`



const StyledLogo = styled(Link)`
  & svg{
    width:45px;
    height:45px;
  }
`







const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo to="/" >
          <TigerIcon />
        </StyledLogo>
        <Nav />

      </StyledContainer>
    </StyledHeader>)
}







export default Header