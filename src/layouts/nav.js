import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from "gatsby"


const baseLinkStyles = css`
font-size:20px;
position: relative;
text-transform: uppercase;
display:none;

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




`

const PcNav = styled.nav`
 display:none;
 &>a:not(:first-child){
    margin-left:40px;
 }

 @media (min-width:${(props) => props.theme.size.md}){
   display:block
}
`



const PcLink = styled(Link)`
  ${baseLinkStyles}
  @media (min-width:${(props) => props.theme.size.md}){
    display:inline-block;
  }
 

  &.active::after{
    opacity:1;
    left:0;
    right:0;
  }
`








const Nav = () => {
  return (<PcNav>
    <PcLink partiallyActive={true} to="/blog" activeClassName="active" >Blog</PcLink>
    <PcLink partiallyActive={true} to="/project" activeClassName="active">Project</PcLink>
    <PcLink partiallyActive={true} to="/about" activeClassName="active">About</PcLink>
  </PcNav >)
}

export default Nav