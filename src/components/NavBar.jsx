import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <Button
              colorScheme="purple"
              marginRight="20px"
              size="md"
              variant="ghost"
              fontWeight="bold"
            >
              Logout
            </Button>
          </Link>
        </Box>
      </nav>
    </div>
  );
}
