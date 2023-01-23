import React, { useState, useEffect } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github"
import styled from "styled-components";
import FileIcon from '../images/icons/file.inline.svg'



const langRegex = /(?<=language-).*(?=,)|(?<=language-).*$/g
const fileRegex = /(?<=,file=).*(?=,|)/g

const Pre = styled.pre.attrs((props) => ({
    lang: props.lang
}))`
  font-size:1rem;
  background:rgb(246, 248, 250);
  position:relative;
  padding:1.8rem 1rem 1rem 1rem;

  &::before{
    top:0;
    position:absolute;
    left:1rem;
    font-size:12px;
    content: "${(props) => props.lang}";
    background: ${(props) => props.theme.langBackground[props.lang]};
    color:${(props) => props.theme.langColor[props.lang]};
    border-radius:0 0 5px 5px;
    letter-spacing: 0.035rem;
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
    font-weight:bold;
  }
`

const CopyButton = styled.button`
  position:absolute;
  top:0;
  right:0;
  border-radius:0 0 4px 4px;
  font-size:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:4px 10px;
  color:${(props) => props.theme.color.secondary};
  cursor:${(props) => props.isCopied ? 'not-allowed' : 'pointer'};

  &:hover{
    background:${(props) => props.theme.color.primary};
    color:white;
  }
`

const CodeBlockWrapper = styled.div`
  margin:16px 0;
  border:1px solid #e5e5e5;
  border-radius:4px;
  max-width:100%;
  overflow:auto;
`

const File = styled.div`
  font-size:14px;
padding-left:1rem;
  display:flex;
`

const FileText = styled.span`
color:#2d3748;
flex-grow:1;
border-bottom:2px solid #63b3ed;
padding-top:4px;
padding-bottom:4px;
display:flex;
align-items:center;
`

const StyleFileIcon = styled(FileIcon)`
  width:16px;
  height:16px;
  display:inline-block;
  margin-right:4px;
`


const Line = styled.span`
  display:inline-block;
  margin-right:1rem;
  color:rgb(148 163 184);
`


const CodeBlock = props => {
    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.match(langRegex) ? className.match(langRegex)[0] : 'text';
    const file = className.match(fileRegex) ? className.match(fileRegex)[0] : '';


    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = (code) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(code).then(
                () => {
                    setIsCopied(true)
                },
                (err) => {
                    setIsCopied(false)
                    console.error('could not copy text', err)
                }
            )
        } else if (window.clipboardData) {
            window.clipboardData.setData("Text", code)
            setIsCopied(true)
        }
    }

    useEffect(() => {
        let timer;
        if (isCopied) {
            timer = setTimeout(() => setIsCopied(false), 1000)
        }
        return () => { if (timer) clearTimeout(timer) }
    }, [isCopied])

    return (
        <Highlight {...defaultProps} code={code} language={language} theme={theme}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <CodeBlockWrapper>
                    {file && <File>
                        <FileText>                        <StyleFileIcon />
                            {file}</FileText>
                    </File>}
                    <Pre lang={language}>
                        <CopyButton onClick={() => copyToClipboard(code)} isCopied={isCopied}>{isCopied ? 'Copied' : 'Copy'}</CopyButton>
                        {
                            tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    <Line>{i + 1}</Line>
                                    {line.map((token, key) => (<span {...getTokenProps({ token, key })} />))}
                                </div>
                            ))
                        }
                    </Pre>
                </CodeBlockWrapper>
            )}
        </Highlight>
    )
}

export default CodeBlock