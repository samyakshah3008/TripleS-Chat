import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import FollowUserChip from "./FollowUserChip";

export default function RightSideBar() {
  return (
    <>
      <Box w="25%" h={700}>
        <Flex
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
            <FollowUserChip />
            <FollowUserChip />
            <FollowUserChip />
            <FollowUserChip />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
