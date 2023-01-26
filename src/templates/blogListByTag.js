import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import { navigate, graphql } from "gatsby"
import Card from "../components/card"


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:20px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

const TagWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight:700;
  &:hover {
    color: ${props => props.theme.color.link};
  }
`



const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`


const BlogListByTag = ({ data, pageContext }) => {
  const tag = pageContext.tag
  const { allMdx: { nodes } } = data

  return (
    <>
      <Header>
        <Title>{tag}</Title>
        <TagWrapper onClick={() => navigate('/blog')}>
          全部文章
        </TagWrapper>
      </Header>


      <CardList>
        {nodes.map(node => {
          return <Card key={node.id} {...node} />
        })}
      </CardList>
    </>
  )
}

export const blogPostsQuery = graphql`
  query MyQuery($skip: Int!, $tag:String!)  {
    allMdx(skip: $skip, limit: 10, sort: { frontmatter: { date: DESC } } , filter: {frontmatter: {tag: {eq: $tag}}}) {
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
            gatsbyImageData(height: 320, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`



export default BlogListByTag

export const Head = ({ data }) => <Seo title="" />
