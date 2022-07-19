import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <Box p={20} w="25%" h="auto">
        <Flex
          pos="sticky"
          top={10}
          h={530}
          fontSize={20}
          flexDirection="column"
          gap={8}
          w={260}
        >
          <Flex alignItems="center" gap={10}>
            <AiIcons.AiOutlineHome />
            <Link to="/home">
              <Text fontWeight="bold">Home</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <IoIcons.IoRocketOutline />
            <Link to="/explore">
              <Text fontWeight="bold">Explore</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <BsIcons.BsBookmarkStar />
            <Link to="/bookmarks">
              <Text fontWeight="bold">Bookmarks</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <BsIcons.BsBell />
            <Text fontWeight="bold">Notifications</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <AiIcons.AiOutlineUser />
            <Link to="/profile">
              <Text fontWeight="bold">Profile</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <Button w="full" colorScheme="purple">
              Create Post
            </Button>
          </Flex>
        </Flex>

        <Flex
          pos="sticky"
          bottom="0"
          top={600}
          w={260}
          gap={4}
          cursor="pointer"
        >
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
            <BsIcons.BsThreeDots />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
