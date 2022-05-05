import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #fdf5e3;
    border-bottom: 2px solid #DEE767;
    padding: 30px 40px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    display: flex;
    position: fixed;
    z-index: 3;

    @media (max-width: 800px) {
        padding: 20px;
    }
`