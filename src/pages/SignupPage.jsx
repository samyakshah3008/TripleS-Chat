import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import SignupContainer from "../components/SignupContainer";

export default function SignupPage() {
  return (
    <div>
      <Container marginTop={30} maxW="container.lg" p={0}>
        <Flex
          gap={5}
          justifyContent="center"
          width="80%"
          margin="auto"
          h="75vh"
        >
          <HeroHeader />
          <SignupContainer />
        </Flex>
        <Footer />
      </Container>
    </div>
  );
}
