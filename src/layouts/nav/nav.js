import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from "gatsby"
import useMediaQuery from '../../hooks/useMediaQuery'


const baseLinkStyles = css`
font-size:20px;
position: relative;
text-transform: uppercase;
letter-spacing:0.125rem;
&::after {
  content: "";
  left: 15px;
  right: 15px;
  bottom: -0.2em;
  height: 2px;
  background:${(props) => props.theme.color.primary};
  display: block;
  opacity: 0;
  position: absolute;
  transition: all .4s ease 0s;
}




&:hover::after {
  opacity: 1;
  left: 0;
  right: 0;
}

&:hover{
  text-decoration:none;
}


`

const Wrapper = styled.nav`
padding-right:10px;
&>a:not(:first-child){
    margin-left:40px;
 }
`

const StyledLink = styled(Link)`
${baseLinkStyles}


&.active::after{
    opacity:1;
    left:0;
    right:0;
  }
`


const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    display:none;
`

const IconBox = styled.label`
    background-color: #eee;
    height:3rem;
    width:3rem;
    z-index:99;
    position:relative;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Icon = styled.span`
    position:relative;
    &,&::before,&::after{
        border-radius:10px;
        width:24px;
        height:1.5px;
        background-color:black;
        display: inline-block;
    }
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all .2s;
    }
    
    &::before { top: -8px; }
    &::after { top: 8px; }

    &.active{
      background-color: transparent;

      &::before{
        top:0;
        transform: rotate(135deg);
      }

      &::after{
        top:0;
        transform: rotate(-135deg);
      }
    }
    
    
`



const Nav = ({ setShowMobileNav, showMobileNav }) => {
  const isMd = useMediaQuery('(min-width:768px)')

  const handleToggle = (e) => {
    setShowMobileNav(e.target.checked)
  }

  return (
    <>
      {
        isMd ? <Wrapper>
          <StyledLink partiallyActive={true} to="/blog" activeClassName="active" >Blog</StyledLink>
          <StyledLink partiallyActive={true} to="/project" activeClassName="active">Project</StyledLink>
          <StyledLink partiallyActive={true} to="/about" activeClassName="active">About</StyledLink>
        </Wrapper> : <> <Checkbox id="toggle" onChange={handleToggle}  checked={showMobileNav}/>
          <IconBox htmlFor="toggle">
            <Icon className={`${showMobileNav && 'active'}`} />
          </IconBox></>
      }

    </>
  )
}


export default Nav