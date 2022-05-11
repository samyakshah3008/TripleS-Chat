import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function FollowUserChip() {
  return (
    <div>
      <Flex marginBottom={4} w={260} gap={4} cursor="pointer">
        <Avatar
          size="md"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
        <Flex justifyContent="flex-start" flexDirection="column">
          <Heading size="sm">Samyak Shah</Heading>
          <Text color="gray.500" fontSize="sm">
            @SamyakShah
          </Text>
        </Flex>
        <Flex
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          gap={10}
          cursor="pointer"
        >
          <Text fontWeight="bold" color="purple.600">
            Follow +
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
