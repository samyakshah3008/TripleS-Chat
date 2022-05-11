import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import MainContainer from "./MainContainer";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Box
          p={3}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          height="80px"
        >
          <Heading
            marginLeft={20}
            as="h4"
            color="purple.600"
            fontWeight="extrabold"
            size="md"
          >
            TripleS-Chat
          </Heading>
        </Box>
      </nav>
    </div>
  );
}
