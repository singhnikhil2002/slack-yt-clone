import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import { db } from './firbase';
import firebase from "firebase/compat/app";
// import IMG from "../img"


const ChatInput = ({channelName, channelId}) => {
    const [input,setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault(); // Prevents refresh

        if(!channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Nikhil Singh",
            userImage : "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2xhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        });
        
        setInput("");
    }
  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position : relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position : fixed;
        bottom : 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
