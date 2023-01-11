import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import {  collection } from "firebase/firestore"; 
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
function Sidebar() {
  const [channels] = useCollection(collection(db, "rooms"))
  const [user] =useAuthState(auth)
  return (
    <SidebarContainer>
        <SidebarHeader>
<SidebarInfo>
    <h2> HAMZA WORLD</h2>
    <h3>
        <FiberManualRecordIcon/>
        hamza tlili
    </h3>
</SidebarInfo>
<CreateIcon/>
        </SidebarHeader>
        <SidebarOption  Icon={InsertComment} title="Threads"/>
        <SidebarOption  Icon={Inbox} title="Mentions & reactions"/>
        <SidebarOption  Icon={Drafts} title="Saved items"/>
        <SidebarOption  Icon={BookmarkBorder} title="channel browser"/>
        <SidebarOption  Icon={PeopleAlt} title="People & user groups"/>
        <SidebarOption  Icon={Apps} title="Apps"/>
        <SidebarOption  Icon={FileCopy} title="File browser"/>
        <SidebarOption  Icon={ExpandLess} title="Show less"/>
<hr/>
<SidebarOption  Icon={ExpandMore} title="Channels"/>
<hr/>
<SidebarOption  Icon={Add} addChannelOption title="Add Channel"/>
{channels?.docs.map(doc =>(

<SidebarOption key={doc.id} id={doc.id}  title={doc.data().name}/>

))}
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer=styled.div`
color:white;
flex:0.3%;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top:60px;
background-color: var(--slack-color);
>hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
}
`;
const SidebarHeader=styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
>.MuiSvgIcon-root{
  padding: 8px;
  color: #49274b;
  background-color:white;
  border-radius:999px;
}

`;
const SidebarInfo=styled.div`
flex:1;
>h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
}
>h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items: center;
}

>h3>.MuiSvgIcon-root{
font-size: 14px;
margin-top:1px;
margin-right:2px;
color:green;
}
`;