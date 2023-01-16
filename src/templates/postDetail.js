import React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from "@mdx-js/react"

import { graphql } from 'gatsby'
import Seo from '../components/seo'
import styled from 'styled-components'

const Article = styled.article`
`


const ArticleTitle = styled.h1`
    font-size:32px;
    font-weight:700;
`



const SubWrapper = styled.div`
 display:flex;
 color:${(props) => props.theme.color.secondary};
`

const Tag = styled.span`
color:${(props) => props.theme.color.link};
text-transform:uppercase;
cursor:pointer;

&:hover{
 text-decoration-line: underline;

}
`

const PostDetail = ({ data, children }) => {
  const { mdx } = data;
  console.log(children)
  return (
    <>
      <Seo title={mdx.frontmatter.title} />
      <Article>
        {/* <GatsbyImage image={getImage(frontmatter.featuredImage)} alt={post.frontmatter.altText} imgStyle={{ width: '100%' }} /> */}
        <ArticleTitle>{mdx.frontmatter.title}</ArticleTitle>
        <SubWrapper>
          <time dateTime={mdx.frontmatter.date}>{mdx.frontmatter.date}</time>
          <span>&nbsp;—&nbsp;</span>
          <Tag>{mdx.frontmatter.tag}</Tag>
        </SubWrapper>
        <MDXProvider>
          {children}
        </MDXProvider>

      </Article>
    </>
  )
}


export default PostDetail

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        altText
        tag
        featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
            }
        }      
      }
    }
  }
`