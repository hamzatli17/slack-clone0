import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn =(e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>sign in to hamza world</h1>
        <p>hamza.slack.com</p>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
