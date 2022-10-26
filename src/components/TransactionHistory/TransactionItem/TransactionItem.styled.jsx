import styled from "styled-components";

export const TransGrid = styled.td`
    text-align: center;
    padding: 15px;

    font-size: 16px;
    font-weight: 500;

    color: #9ea9ae;
    border: 1px solid #e4e7e8;

`;
export const TransaBody = styled.tr`
    &:nth-child(2n){
        background-color: #e3f5f6;
    }
`;