import {
  Box,
  Button,
  FormControl,
  GridItem,
  Image,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TripleSChatLogo from "../assets/TripleS-final-logo.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authInfo, getToken } from "../store/authSlice";

export default function LoginContainer() {
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const loginHandler = async (isUser) => {
    try {
      const loginData = await axios.post(
        "/api/auth/login",
        isUser ? { username: "aron20", password: "aron123" } : userDetail
      );

      dispatch(authInfo(loginData.data.foundUser));
      dispatch(getToken(loginData.data.encodedToken));

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <VStack w="full" h="full" spacing={10} alignItems="center" p={5}>
        <Box>
          <Image src={TripleSChatLogo}></Image>
        </Box>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                name="username"
                value={userDetail.username}
                onChange={changeHandler}
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="gray.100"
                placeholder="Phone Number, username"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                name="password"
                onChange={changeHandler}
                value={userDetail.password}
                type="password"
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="gray.100"
                placeholder="Password"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              onClick={() => loginHandler(false)}
              colorScheme="purple"
              size="md"
              w="full"
            >
              Log In
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              onClick={() => loginHandler(true)}
              variant="outline"
              colorScheme="purple"
              size="md"
              w="full"
            >
              Log In with Test Credentials
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <Link to="/signup">
              <Button variant="ghost" colorScheme="purple" size="md" w="full">
                Sign Up Instead
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}
