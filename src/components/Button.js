import styled from "styled-components"

export const Button = styled.button`
white-space: nowrap;
color: #fff;
background: ${({ primary }) => (primary ? "#475085" : "#7C82A6")};
padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#7C82A6": "#475085")};
}

@media screen and (Max-width: 960px) {
    width: 100%;
}
`;