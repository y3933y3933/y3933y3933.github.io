import React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from "@mdx-js/react"
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import styled from 'styled-components'
import components from '../styles/markdownStyles'
import TableOfContents from '../components/tableOfContents'
import Comments from '../components/comment'


const Article = styled.article`
`


const ArticleTitle = styled.h1`
    font-size:2.25rem;
    line-height:1.25;
    font-weight:700;
`



const SubWrapper = styled.div`
 display:flex;
 color:${(props) => props.theme.color.secondary};
 margin-bottom:20px;
`

const Tag = styled.span`
color:${(props) => props.theme.color.link};
text-transform:uppercase;
cursor:pointer;

&:hover{
 text-decoration-line: underline;

}
`

const CommentsWrapper = styled.div`
  border-top:1px solid #eee;
  margin-top:40px;

`

const PostDetail = ({ data, children }) => {
  const { mdx } = data;
  console.log(mdx)
  return (
    <>
      <Seo title={mdx.frontmatter.title} />
      <Article>
        {/* <GatsbyImage image={getImage(frontmatter.featuredImg )} alt={post.frontmatter.altText} imgStyle={{ width: '100%' }} /> */}
        <ArticleTitle>{mdx.frontmatter.title}</ArticleTitle>
        <SubWrapper>
          <time dateTime={mdx.frontmatter.date}>{mdx.frontmatter.date}</time>
          <span>&nbsp;—&nbsp;</span>
          <Tag>{mdx.frontmatter.tag}</Tag>
        </SubWrapper>
        <TableOfContents headings={mdx.tableOfContents.items} />
        <MDXProvider components={components} >
          {children}
        </MDXProvider>
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>

      </Article>
    </>
  )
}


export default PostDetail

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        tag  
      }
      featuredImg  {
        childImageSharp {
          gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
        }
    }    
    }
  }
`