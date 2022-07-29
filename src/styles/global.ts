import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing:border-box;
    }
    body{
        padding-top:4.5rem;
        background: ${props => props.theme.colors.background_lite};
        color: ${props => props.theme.colors.text};
        font: 400 16px 'Courgette', sans-serif;
    }
    h1, h2, h3,h4, p{
        margin:0px;
    }
    ul, li{
        list-style:none;
        padding: 0px;
        margin: 0px;
    }
    img{
        display:block;
        max-width:100%;
    }
    .container{
        max-width:80rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
    a{
        text-decoration:none;
    }
    .animeLeft{
        opacity: 0;
        transform: translateX(-10px);
        animation: animeLeft .3s forwards;
    }
    @keyframes animeLeft{
        to{
            opacity: 1;
            transform: initial;
        }
    }
`;