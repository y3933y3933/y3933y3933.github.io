import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Card from "../components/card"
import Seo from '../components/seo'


const CardList = styled.div`
width:100%;
display:flex;
flex-direction:column;
row-gap: 2rem;
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
      <Seo title="Blog" />
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
  allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          tag
          slug
        }
        excerpt(pruneLength: 100)
        id
        featuredImg {
          childImageSharp {
            gatsbyImageData(height:320, layout: CONSTRAINED)
          }
        }
      }
    
  }
}
`


export default Blog



