/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, children }) {
  const { site } = useStaticQuery(
    graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
           }
         }
       }
     `
  )
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{title + ' | ' + defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="type" content='website' />
      {children}
    </>

  )
}




export default Seo
