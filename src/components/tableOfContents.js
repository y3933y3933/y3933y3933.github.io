import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledUl = styled.ul`
padding-left:14px;
font-size:10px;
color: rgba(82, 211, 170,0.5);

 & ul {
    list-style-type: disc;
 }

 
 & a {
    color:black;
    font-size:20px;
    font-weight:400;

    &:hover{
        color:${(props) => props.theme.color.primary};
    }
 }
`

const Wrapper = styled.div`
 display:flex;
 margin:2rem 0;
`

const Box = styled.div`
background:#f5f5f5;
width:100%;
border-radius:4px;
border:1px solid #e5e5e5;

@media (min-width:${(props) => props.theme.size.md}){
    width:20rem;
}
`

// const Header = styled.div`
//  font-size:16px;
//  font-weight:700;
//  padding:0.5rem 1rem;
//  border-bottom:1px solid #e5e5e5;
// `

const Content = styled.div`
    padding:1rem;
`

const Item = ({ headings }) => {
    if (!headings) return;
    return (
        <StyledUl>
            {headings.map((d) => {
                return (
                    <li key={d.title}>
                        <Link to={d.url} >{d.title}</Link>
                        <Item headings={d.items} />
                    </li>
                )
            })}
        </StyledUl>
    )
}


const TableOfContents = ({ headings }) => {
    if (!headings) return;
    return (
        <Wrapper>
            <Box>
                <Content>
                    <Item headings={headings} />
                </Content>
            </Box>
        </Wrapper>
    )
}

export default TableOfContents