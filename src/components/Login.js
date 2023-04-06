import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <InnerLoginContainer>
        <img src={require("../assets/slack.svg").default} alt="slack logo" />
        <h1>Sign in to Raiden Slack</h1>
        <p>Raiden.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </InnerLoginContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.section`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const InnerLoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;
  }
`;
