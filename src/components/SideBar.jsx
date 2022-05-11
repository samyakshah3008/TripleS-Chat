import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";

export default function SideBar() {
  return (
    <>
      <Box p={20} w="25%" h={800}>
        <Flex h={530} fontSize={20} flexDirection="column" gap={8} w={260}>
          <Flex alignItems="center" gap={10}>
            <AiIcons.AiOutlineHome />
            <Text fontWeight="bold">Home</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <IoIcons.IoRocketOutline />
            <Text fontWeight="bold">Explore</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <BsIcons.BsBookmarkStar />
            <Text fontWeight="bold">Bookmarks</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <BsIcons.BsBell />
            <Text fontWeight="bold">Notifications</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <AiIcons.AiOutlineUser />
            <Text fontWeight="bold">Profile</Text>
          </Flex>
          <Flex alignItems="center" gap={10}>
            <Button w="full" colorScheme="purple">
              Create Post
            </Button>
          </Flex>
        </Flex>

        <Flex w={260} gap={4} cursor="pointer">
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
