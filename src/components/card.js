import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as slugify from 'slugify'


const Wrapper = styled.section`
 display:flex;
 flex-direction:column;

 @media (min-width:${(props) => props.theme.size.md}){
  flex-direction:row;
}
`
const Title = styled.h2`
font-size:1.875rem;
cursor:pointer;
line-height:1.25;
  margin-bottom:24px;
`


const DescriptionBlock = styled.div`
  flex:1;
  padding:24px;
  background:#f9f9f9;

  @media (min-width:${(props) => props.theme.size.md}){
    padding:32px;
  }
`

const Block = styled.div`
 flex:1;
 display:flex;
 align-items-center;
 justify-content:center;
 background:black;
`

const Excerpt = styled.p`
  font-weight:500;
  font-size:1.25rem;
  line-height:1.8;
  margin-bottom:24px;
  color:${(props) => props.theme.color.secondary};
`


const Footer = styled.div`
color:${(props) => props.theme.color.secondary};
font-size:14px;
display:flex;
justify-content:space-between;
`

const Tag = styled.span`
 display:inline-block;
 color:${(props) => props.theme.color.link};
 text-transform:uppercase;
 cursor:pointer;
 letter-spacing:1px;
 margin-bottom:16px;
`


const ReadMore = styled(Link)`
  &:hover{
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
  }
`


const Card = ({frontmatter,excerpt}) => {
  const path = '/blog/' + slugify(frontmatter.title, { lower: true })
  return <Wrapper>
    <Block>
      <GatsbyImage image={getImage(frontmatter.featuredImage)}
        alt=""
      />

    </Block>
    <DescriptionBlock>
      <Tag>{frontmatter.tag}</Tag>
      <Title>{frontmatter.title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Footer>
        <time dateTime='frontmatter.date'>{frontmatter.date}</time>
        <ReadMore to={path}> 閱讀更多</ReadMore>

      </Footer>
    </DescriptionBlock>
  </Wrapper>
}


export default Card