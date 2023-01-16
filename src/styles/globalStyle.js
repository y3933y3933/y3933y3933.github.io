import { createGlobalStyle } from "styled-components"
import typographyStyle from './typographyStyle'


const GlobalStyle = createGlobalStyle`
${typographyStyle}
body{
	font-family: 'Roboto Slab', serif;
}





  
`

export default GlobalStyle