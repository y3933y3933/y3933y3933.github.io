import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"


import GlobalStyle from "../styles/globalStyle"
import ResetStyle from '../styles/resetStyle'
import theme from "../styles/theme"
import ContainerStyles from "../styles/containerStyle"


const StyledWrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`

const StyledMain = styled.main`
  ${ContainerStyles}
   flex:1;
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <StyledWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  )

}

export default Layout