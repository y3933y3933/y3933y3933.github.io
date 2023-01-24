import * as React from 'react'
import styled from 'styled-components'
import ContainerStyles from '../styles/containerStyle'

const FooterWrapper =styled.footer`border-top:1px solid #eee;`

const StyledFooter = styled.div`
    ${ContainerStyles}
    text-transform: uppercase;
    color:${(props) => props.theme.color.secondary};
    font-size:14px;
    padding:16px;
    
`

const StyledLink = styled.a`
    text-transform:none;
    color:${(props)=>props.theme.color.link};
    cursor:pointer;

    &:hover{
        text-decoration-line: underline;

    }
`

const Footer = () => <FooterWrapper><StyledFooter>&copy;2023 by CHIAO.  Powered by &nbsp;<StyledLink href="https://www.gatsbyjs.com/" target="_blank">Gatsby.js</StyledLink>.</StyledFooter></FooterWrapper>

export default Footer