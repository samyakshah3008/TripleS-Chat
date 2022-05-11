import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Box marginTop={10}>
        <Flex gap={4} justifyContent="center" width="80%" margin="auto">
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Meta
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            About
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Blog
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Jobs
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Help
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            API
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Privacy
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Terms
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Top Accounts
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Hashtags
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Locations
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            TripleS-Chat lite
          </Button>
        </Flex>
      </Box>
      <Box marginTop={0}>
        <Flex gap={4} justifyContent="center" width="80%" margin="auto">
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Dance
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Food & Drink
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Home & Garden
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Music
          </Button>
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            Visual Arts
          </Button>
        </Flex>
      </Box>
      <Box marginTop={0}>
        <Flex gap={4} justifyContent="center" width="80%" margin="auto">
          <Button fontWeight="thin" variant="unstyled" fontSize="small">
            © 2022 TripleS-Chat from Meta
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
