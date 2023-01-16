import styled from "styled-components";

export const Content = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        overflow: hidden;
        overflow-y: scroll;
        height: 80%;
        margin: auto;
        position: relative;
        z-index: 1000;
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
