import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import FollowUserChip from "./FollowUserChip";

export default function RightSideBar() {
  return (
    <>
      <Box w="25%" h="auto">
        <Flex
          pos="sticky"
          top="0"
          gap={5}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Input
            _focus={{
              border: "2px",
              borderColor: "purple.600",
            }}
            placeholder="Search Posts, People, anything"
            marginTop="70px"
            w="80%"
            bg="white"
          ></Input>
          <Box w="80%" p={3} bg="white">
            <FollowUserChip />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
