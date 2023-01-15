import * as React from 'react'
import styled from 'styled-components'
import ContainerStyles from '../styles/containerStyle'


const StyledFooter = styled.footer`
    ${ContainerStyles}
    text-transform: uppercase;
    color:${(props) => props.theme.color.secondary};
    font-size:14px;
    padding:20px 15px;
    border-top:1px solid #eee;
`

const StyledLink = styled.a`
    text-transform:none;
    color:#3273dc;
    cursor:pointer;
`

const Footer = () => <StyledFooter>&copy;2023 by CHIAO.  Powered by &nbsp;<StyledLink href="https://www.gatsbyjs.com/" target="_blank">Gatsby.js</StyledLink>.</StyledFooter>

export default Footer