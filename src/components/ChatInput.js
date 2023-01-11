import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import styled from "styled-components";
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { db } from "../firebase";

function ChatInput({ channelId, channelName,chatRef}) {
    console.log('jjj',channelId)
   
  const [input, setInput] = useState("");
  const [user] =useAuthState(auth)
  const sendMessage = (e) => {
    e.preventDefault();
console.log(channelId)
const data = {
    message: input,
    timestamp: Timestamp.fromDate(new Date()),
    user: user.displayName,
    userImage:user.photoURL,
  }
  const docRef =doc(db, "rooms",channelId)
    if (!channelId) {
      return false;
    }
addDoc(collection(docRef,'messages'),data);

chatRef.current.scrollIntoView({
  behavior:"smooth",
})
      setInput('');
  };
  return (
    <ChatInputontainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputontainer>
  );
}

export default ChatInput;

const ChatInputontainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display:none !important
  }
`;
