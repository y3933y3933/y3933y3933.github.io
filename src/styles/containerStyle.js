import { css } from 'styled-components'

const ContainerStyles = css`
    margin:0 auto;
    padding:0 15px;
    display:flex;

    @media (min-width:${(props) => props.theme.size.md}){
        width:750px;
    }

    @media (min-width:${(props) => props.theme.size.lg}){
        width:992px;
    }
    @media (min-width:${(props) => props.theme.size.xl}){
        width:1170px;
    }
`

export default ContainerStyles