import React from 'react'
import styled from "styled-components"
import CodeBlock from './codeBlock'

const H1 = styled.h1`
font-size:2.25rem;
line-height:1.25;
margin:28px 0;
`



const H2 = styled.h2`
    font-size:1.875rem;
    line-height:1.25;
    margin:28px 0;

`

const H3 = styled.h3`
    font-size:1.5rem;
    line-height:1.25;
    margin:20px 0 ;
`

const P = styled.p`
    font-size:1.25rem;
    line-height: 2;
    // margin-bottom:16px;

`


const Hr = styled.hr`
    color:#cbd5e0;
    margin:28px 0;
`

const BlockQuote = styled.blockquote`
background-color: #eeeeee;
border-left:4px solid #63b3ed;
padding-left:2rem;
padding-top:10px;
padding-bottom:10px;
font-size:1.25rem;
margin:28px 0;
`

const Th = styled.th`
  border-bottom: 1px solid #edf2f7;
  font-weight:700;
`

const Code = styled.code`
color: #c7254e;
background-color: #f9f2f4;
overflow-wrap: break-word;
`


const Link = styled.a`
color:${(props) => props.theme.color.link};
cursor:pointer;

&:hover{
 text-decoration-line: underline;

}
`

const components = {
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
    p: props => <P {...props} />,
    hr: props => <Hr {...props} />,
    blockquote: props => <BlockQuote {...props} />,
    th: props => <Th {...props} />,
    pre: props => <CodeBlock {...props} />,
    code: props => <Code {...props} />,
    a:props=><Link {...props}/>
}

export default components