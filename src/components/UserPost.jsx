import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as VsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";

export default function UserPost() {
  return (
    <div>
      <Box h="auto" p={5} marginTop="20px" bg="white">
        <Flex gap={5}>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Flex
            justifyContent="space-between"
            gap={4}
            flexGrow={1}
            flexDirection="column"
          >
            <Flex gap={2} alignItems="center">
              <Heading size="sm">Samyak Shah</Heading>
              <Text color="gray.500">@SamyakShah</Text>
            </Flex>

            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              esse voluptate explicabo, debitis minus earum!
            </Text>
            <Flex justifyContent="space-between" fontSize="xl" gap={10}>
              <AiIcons.AiOutlineHeart />
              <VsIcons.VscComment />
              <AiIcons.AiOutlineShareAlt />
              <BsIcons.BsBookmarkStar />
              <SiIcons.SiSimpleanalytics />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
