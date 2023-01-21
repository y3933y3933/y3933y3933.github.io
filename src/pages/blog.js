import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Card from "../components/card"

const CardList = styled.div`
width:100%;
// padding: 24px 0;
`

const Title = styled.h2`
font-size:32px;
font-weight:bold;
`

const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
`

const Blog = ({ data }) => {

  return (
    <>
      <Header>
        <Title>最新文章</Title>
      </Header>

      <CardList>
        {data.allMdx?.nodes.map((node) => {
          return <Card key={node.id} {...node} />
        })}

      </CardList>
    </>
  )
}


export const blogPostsQuery = graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: ASC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          tag
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
            }
          }
        }
        excerpt(pruneLength: 100)
        id
      }
    
  }
}
`


export default Blog



