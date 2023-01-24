import * as React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import Tag from "../components/tag"

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom:20px;
`

const TagWrapper = styled.div`
  display:flex;
  column-gap: 16px;
`

const Categories = ({ data }) => {
  const {
    allMdx: { group },
  } = data
  return (
    <>
      <Seo title="文章分類" />
      <section>
        <Title>文章分類</Title>
        <TagWrapper>
          {group.map((d, i) => (
            <Tag key={i} {...d} />
          ))}
        </TagWrapper>
      </section>
    </>
  )
}

export const PostsCategoriesQuery = graphql`
  query {
    allMdx {
      group(field: { frontmatter: { tag: SELECT } }) {
        edges {
          node {
            frontmatter {
              tag
            }
          }
        }
        totalCount
      }
    }
  }
`

export default Categories
