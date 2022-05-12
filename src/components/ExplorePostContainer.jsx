import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ExplorePageChips from "./ExplorePageChips";
import UserPost from "./UserPost";

export default function ExplorePostContainer() {
  return (
    <>
      <Box flexGrow="1" w="25%" h={700}>
        <Heading marginTop="80px" size="md">
          Explore
        </Heading>
        <ExplorePageChips />
        <UserPost />
        <UserPost />
      </Box>
    </>
  );
}
