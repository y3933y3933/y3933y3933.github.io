import React from 'react'
import styled from "styled-components"
import CodeBlock from './codeBlock'

const H1 = styled.h1`
font-size:2.25rem;
line-height:1.25;
`


const H2 = styled.h2`
    font-size:1.875rem;
    line-height:1.25;
`

const H3 = styled.h3`
    font-size:1.5rem;
    line-height:1.25;
`

const P = styled.p`
    font-size:1.25rem;
`


const Hr = styled.hr`
    color:#cbd5e0;
    margin:20px 0;
`

const BlockQuote = styled.blockquote`
background-color: #eeeeee;
border-left:4px solid #63b3ed;
padding-left:2rem;
font-style: italic;
padding-top:10px;
padding-bottom:10px;
font-size:1.25rem;
`

const Th = styled.th`
  border-bottom: 1px solid #edf2f7;
  font-weight:700;
`

const components = {
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
    p: props => <P {...props} />,
    hr: props => <Hr {...props} />,
    blockquote: props => <BlockQuote {...props} />,
    th: props => <Th {...props} />,
    pre: props => <CodeBlock {...props} />
}

export default components