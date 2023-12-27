"use client";

import { Button, Center } from "@chakra-ui/react";
import { login, logOut } from "../redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useAppSelector } from "../redux/hooks";

const LoginComponent = () => {
  const username = useAppSelector((state) => state.authreducer.value.username);
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    console.log("cliked");
    dispatch(login("fsmdeveloper"));
  };

  return (
    <>
      <Center>
        <header>{username}</header>
        <Button mt={110} color={"Highlight"} onClick={onClickLogin}>
          Login
        </Button>
      </Center>
    </>
  );
};

export default LoginComponent;
