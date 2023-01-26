import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TagWrapper = styled(Link)`
  border: 1.5px solid ${props => props.theme.color.primary};
  padding: 4px 8px;
  border-radius: 5px;
  cursor:pointer;
  
  &:hover{
    color:white;
    background: ${props => props.theme.color.primary};
  }
`

const TagLabel = styled.span`
    display:inline-block;
    margin-right:4px;
`

const Tag = ({ edges, totalCount }) => {
  const tag = edges[0].node.frontmatter.tag
  return (
    <TagWrapper to={`/blog/${tag}`}>
      <TagLabel>{tag}</TagLabel>({totalCount})
    </TagWrapper>
  )
}

export default Tag
