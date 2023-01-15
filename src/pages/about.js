import * as React from "react"
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'



const Wrapper = styled.div`
  display:flex;
  flex-direction:column;

  @media (min-width:${(props) => props.theme.size.md}){
   flex-direction:row;
}
`


const Title = styled.h1`
    font-size:32px;
    font-weight:bold;
    margin-bottom:20px;
`

const Description = styled.p`
     color:${(props) => props.theme.color.text};
     line-height:2;
`

const Section = styled.section`
    flex:1;
    padding-top:40px;
`

const About = () => {
    return (
        <Wrapper>
            <Section>
                <Title>關於我</Title>
                <Description>
                    我是一名集梗圖與宅宅於一身的前端工程師。
                    <br />
                    每次都被問為什麼心理系會跑來寫程式。
                    <br />
                    心理系不會教讀心術，就像工程師也不會通靈一樣。
                </Description>
            </Section>

            <Section >
                <StaticImage src="../images/about_meme.jpg" alt="meme" placeholder="dominantColor"
                    width={700}
                />
            </Section>
        </Wrapper>
    )


}


export default About