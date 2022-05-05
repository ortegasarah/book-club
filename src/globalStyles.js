import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        color: #010101;
        background-color: #fdf5e3;

    }
`

export const Pill = styled.div `
    /* background-color: #DEE767;
    background-color: #EDEDED; */
    border: 2px solid #000;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    padding: 8px;
    display: flex;
    overflow: hidden;
`

export const Close = styled.button `
    background: none;
    border: 0;
    cursor: pointer;
    height: 24px;
    width: 24px;
    padding: 0;
    position: relative;
    
    &::before,
    &::after {
        background-color: #000;
        width: 2px;
        content: '';
        height: 24px;
        position: absolute;
        top: 0;
        left: 9px;
    }

    &::before{
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`