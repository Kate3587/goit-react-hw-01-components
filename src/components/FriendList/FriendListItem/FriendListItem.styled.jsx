import styled from "styled-components";

export const FriendItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    width: 300px;
    background-color: #fff;
    box-shadow: 10px 10px 28px -19px rgba(0,0,0,0.73);
`;
export const Status = styled.span`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props =>
    props.isOnline ? "green" : "red"
        };
    margin-right: 15px;
`;

export const FriendAvatar = styled.img`
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 10px 10px 28px -19px rgba(0,0,0,0.73);
`;
export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: black;
`;

