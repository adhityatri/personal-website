import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: 'Heebo', sans-serif;
        font-weight: 500;
        font-size: 16px;
        width: 100vw;
        background: ${props => props.theme.colors.bgLight};
    }
`