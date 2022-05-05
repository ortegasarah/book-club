import styled from "styled-components";
import { Pill } from '../../globalStyles'
import { ReactComponent as MagnifyingIcon } from '../../assets/search.svg';

export const SearchContainer = styled(Pill) `
    width: ${({$showOnDesktop})=> ($showOnDesktop ? '420px' : '20px')};
    transition: 300ms;

    @media (max-width: 800px) {
        width: 85%;
    }
    

    input, button {
        display: ${({$showOnDesktop})=> ($showOnDesktop ? 'block' : 'none')};
        @media (max-width: 800px) {
            display: block;
        }
    }
`

export const Input = styled.input `
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 18px;
    flex-grow: 1;
    background: inherit;
    border: none;
    padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
    width: 20px;
    cursor: pointer;
`

export const Wrapper = styled.div`
    @media (max-width:800px){
        background: #fdf5e3;
        border: 2px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 64px;
        width: 100vw;
        left: 0;
        bottom: 0;
        position: fixed;
        z-index: 1;
    }
`