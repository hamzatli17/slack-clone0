import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {auth} from "../firebase"
import { signOut } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"
function Header() {
  const [user] =useAuthState(auth)

  return (
    <HeaderContainer>
{/* header left*/}
<HeaderLeft>
<HeaderAvatar
onClick={()=>signOut(auth)}
alt={user?.displayName}
src={user?.photoURL}
//ToDo:add onclick
/>
<AccessTimeIcon/>
</HeaderLeft>
{/* header search*/}
<HeaderSearch>
<SearchSharpIcon />
<input placeholder='Search PAPAFAM' />
  </HeaderSearch>
{/* header right*/}
<HeaderRight>
<HelpOutlineOutlinedIcon />

</HeaderRight>

</HeaderContainer>
  )
}

export default Header;

const HeaderContainer=styled.div`
display:flex;
width: 100%;
position:fixed;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color:white;
`;
const HeaderLeft=styled.div`
flex:0.3;
display:flex;
align-items: center;
margin-left:20px;
>.MuiSvgIcon-root{
  margin-left:80px;
  margin-right:20%;
}
`;
const HeaderSearch = styled.div`
flex: 0.4;
opacity:1;
border-radius:6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;
> input {
  background-color: transparent;
  border: none;
  text-align: center;
  min-width:30vw;
  outline:0;
  color:white;
}
`;
const HeaderRight=styled.div`
flex:0.3%;
display:flex;
align-items: flex-end;
>.MuiSvgIcon-root{
  margin-left:auto;
  margin-right:20%;
}

`;

const HeaderAvatar =styled(Avatar)`

cursor:pointer;
:hover{
  opacity:0.8;
}
`;