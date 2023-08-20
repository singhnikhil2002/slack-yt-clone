import React from "react";
import styled from "styled-components";

const Chat = () => {
  return <div>
    <ChatContainer>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <Header>
            <HeaderLeft></HeaderLeft>
            <HeaderRight></HeaderRight>
        </Header>
    </ChatContainer>
  </div>;
};

export default Chat;

const Header = styled.div``;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-frow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
