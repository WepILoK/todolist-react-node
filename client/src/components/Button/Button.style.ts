import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
    width: 100%;
    border: none;
    background-color: ${props => props.color};;
    cursor: pointer;
    
    &:hover {
        opacity: 0.86;
    }
    &:active {
        opacity: 0.8;
    }
`