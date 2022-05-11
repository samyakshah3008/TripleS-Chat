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
import React from "react";
import { Link } from "react-router-dom";
import TripleSChatLogo from "../assets/TripleS-final-logo.png";

export default function LoginContainer() {
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
                placeholder="Phone Number, username or email"
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
              Log In
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="outline" colorScheme="purple" size="md" w="full">
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
