import React, { useState } from "react";
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
import TripleSChatLogo from "../assets/TripleS-final-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authInfo, getToken } from "../store/authSlice";
import axios from "axios";

export default function SignupContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const signUpClickHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userDetail);
      dispatch(authInfo(response.data.createdUser));
      dispatch(getToken(response.data.encodedToken));
      navigate("/home");
    } catch (error) {
      console.log(error.response);
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
                onChange={changeHandler}
                name="firstName"
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="gray.100"
                placeholder="First Name"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                onChange={changeHandler}
                name="lastName"
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="gray.100"
                placeholder="Last Name"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                onChange={changeHandler}
                name="email"
                type="email"
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="gray.100"
                placeholder="Email"
              ></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Input
                onChange={changeHandler}
                name="password"
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
              onClick={signUpClickHandler}
              colorScheme="purple"
              size="md"
              w="full"
            >
              Sign Up
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <Link to="/">
              <Button variant="ghost" colorScheme="purple" size="md" w="full">
                Already have an account?
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
}
