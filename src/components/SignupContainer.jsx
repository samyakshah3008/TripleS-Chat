import React from "react";
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
import { Link } from "react-router-dom";
export default function SignupContainer() {
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
            <Button colorScheme="purple" size="md" w="full">
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
