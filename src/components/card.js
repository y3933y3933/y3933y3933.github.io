import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as slugify from 'slugify'


const Wrapper = styled.section`
  display:grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  border:1px solid #eee;
  border-radius:5px;
  overflow:hidden;

 @media (min-width:${(props) => props.theme.size.md}){
  grid-template-columns: repeat(2, minmax(0, 1fr));

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
  display:flex;
  flex-direction:column;
  @media (min-width:${(props) => props.theme.size.md}){
    padding:32px;
  }
`

const Block = styled.div`
 
 display:flex;
 align-items-center;
 justify-content:center;
 background:black;
 

 @media (min-width:${(props) => props.theme.size.md}){
  flex:1;
}
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
margin-top:auto;
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


const Card = ({ frontmatter, excerpt, featuredImg }) => {
  const path = '/blog/' + slugify(frontmatter.title, { lower: true })
  return <Wrapper>
    <Block>
      <GatsbyImage image={getImage(featuredImg)}
        alt=""
        objectFit='contain'
        
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