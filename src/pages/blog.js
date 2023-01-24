import * as React from "react"
import Seo from "../components/seo"
import styled from "styled-components"
import CategoryIcon from "../images/icons/category.inline.svg"
import { navigate } from "gatsby"

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

const Blog = () => {
  return (
    <>
      <Seo title="文章列表" />
      <Header>
        <Title>文章列表</Title>
        <TagWrapper onClick={()=>navigate('/categories')}>
          <StyledIcon />
          分類
        </TagWrapper>
      </Header>
    </>
  )
}

export default Blog
