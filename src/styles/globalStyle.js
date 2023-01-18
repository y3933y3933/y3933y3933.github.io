import { createGlobalStyle } from "styled-components"
import typographyStyle from './typographyStyle'


const GlobalStyle = createGlobalStyle`
${typographyStyle}
html{
	scroll-behavior: smooth;

}
body{
	font-family: 'Roboto Slab', serif;
}





  
`

export default GlobalStyle