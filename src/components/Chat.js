import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, orderBy, query} from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import { db } from "../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";
function Chat() {
  const chatRef =useRef(null)
  const roomId =useSelector(selectRoomId);
 
  const [roomDetails ] = useDocument(roomId && doc(db, 'rooms', roomId) ,
  {
    snapshotListenOptions: { includeMetadataChanges: true },
  } 
);
 const [roomMessage , loading, error]=useCollection( roomId && collection(doc(db, "rooms",roomId), 'messages'),
 {
  snapshotListenOptions: { includeMetadataChanges: true },
} );

 console.log('hh',JSON.stringify(roomDetails?.data()))


 console.log('hhgg',roomMessage?.docs.sort())
useEffect(()=>{
chatRef?.currrent?.scrollIntoView();
},[roomId,loading])
  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
        <>
      <Header>
        <HeaderLeft>
          <h4> <strong>#{roomDetails?.data().name}</strong></h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined />
            Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>{/*list out the messsages*/}
      {roomMessage?.docs.map(doc => {
        const {message , timestamp ,user , userImage} = doc.data();
        return (
          <Message 
          key={doc.id}
          message={message}
          timestamp = {timestamp}
          user ={user}
          userImage ={userImage}
          />
        )
      })}
      </ChatMessages>
      <ChatBottom ref={chatRef} />
<ChatInput
chatRef={chatRef}
channelId={roomId}
channelName={roomDetails?.data().name}
/>
</>
      )}
      
    </ChatContainer>
  );
}

export default Chat;
const Header = styled.div`
display:flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const HeaderLeft = styled.div`
  display:flex;
  align-items:center;
>h4 {
  display:flex;
  text-transform:lowercase;
  margin-right:10px;
}
>h4 >.MuiSvgIcon-root{
  margin-left: 10px;
  font-size:18px;
}
`;
const HeaderRight = styled.div``;
const ChatMessages = styled.div``;
const ChatBottom  = styled.div`
padding-bottom:200px;
`;