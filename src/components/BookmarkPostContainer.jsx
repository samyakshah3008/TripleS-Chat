import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import UserPost from "./UserPost";

export default function BookmarkPostContainer() {
  return (
    <>
      <Box flexGrow="1" w="25%" h={700}>
        <Heading marginTop="70px" size="xl">
          Your Bookmarks
        </Heading>
        <UserPost />
        <UserPost />
      </Box>
    </>
  );
}
