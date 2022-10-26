import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    height: 450px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: -3px 9px 364px -62px #272626b5;
`;

export const Description = styled.div`
    
    background-color: #fff;
    text-align: center;
`;

export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 150px;  
    margin-top: 30px;
    margin-bottom: 20px;
    border: 1px solid #ded9d9;
    box-shadow: -3px 9px 364px -62px rgba(0,0,0,0.71);

   
`;
export const ProfileName = styled.p`
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 600;

`;
export const ProfileTag = styled.p`
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #808383; 
`;
export const ProfileLocation = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #808383; 

`;
export const ProfileLabel = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #808383; 
`;
export const ProfileQuantity = styled.p`
    font-size: 14px;
    font-weight: 600;
`;
export const Stats = styled.ul`
    display: flex;
    padding: 0;
    background-color: #d7ebfb;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
`;
export const StatsItem = styled.li`
    width: 33%;
    height: 100px;
    border: 1px solid #9e9f9f;

    font-weight: 600;
    text-align: center;

`;