import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import UserPost from "./UserPost";

export default function ProfilePostContainer() {
  return (
    <>
      <Box flexGrow="1" w="25%" h={700}>
        <Flex
          justifyContent="center"
          margin="auto"
          gap="20px"
          marginTop="40px"
          w="60%"
          p={5}
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            size="xl"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Heading size="lg">Samyak Shah</Heading>
          <Button colorScheme="gray">Edit Profile</Button>
          <Button variant="link" colorScheme="purple">
            samyakshah.com
          </Button>
        </Flex>
        <Text textAlign="center">
          18 y/o first year CSE undergrad | In love with vanillaJS | Aspiring FS
          Web Dev with @neogcamp '22 |Passionate about tech and startups |
          #151daysofcode Round 2 activated
        </Text>
        <Flex
          justifyContent="center"
          margin="auto"
          gap="50px"
          marginTop="40px"
          w="60%"
          bg="white"
          p={5}
        >
          <Flex alignItems="center" flexDirection="column">
            <Heading size="md">0</Heading>
            <Text>Following</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <Heading size="md">2k</Heading>
            <Text>Posts</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <Heading size="md">37.3k</Heading>
            <Text>Followers</Text>
          </Flex>
        </Flex>
        <Heading marginTop="40px" size="md">
          Your Posts
        </Heading>
        <UserPost />
      </Box>
    </>
  );
}
