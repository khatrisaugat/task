import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    overflow: hidden;
    z-index: 1000;
    height:100%;
    margin:auto;
    animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
