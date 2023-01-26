import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import CategoryIcon from "../images/icons/category.inline.svg"
import { navigate } from "gatsby"
import { graphql } from "gatsby"
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

const StyledIcon = styled(CategoryIcon)`
  width: 24px;
  height: 24px;
  margin-right: 2px;
`

const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`


const Blog = ({ data }) => {
  return (
    <>
      <Seo title="文章列表" />
      <Header>
        <Title>文章列表</Title>
        <TagWrapper onClick={() => navigate('/categories')}>
          <StyledIcon />
          分類
        </TagWrapper>
      </Header>


      <CardList>
        {data.allMdx?.nodes.map(node => {
          return <Card key={node.id} {...node} />
        })}
      </CardList>
    </>
  )
}

export const blogPostsQuery = graphql`
  query MyQuery($skip: Int!)  {
    allMdx(skip: $skip, limit: 10, sort: { frontmatter: { date: DESC } }) {
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



export default Blog
