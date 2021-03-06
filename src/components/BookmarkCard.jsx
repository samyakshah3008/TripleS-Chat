import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as VsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmarkPosts } from "../store/postSlice";

export default function BookmarkCard({ post }) {
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const bookmarkHandler = (postId) => {
    dispatch(removeBookmarkPosts({ postId, token: token }));
  };

  return (
    <>
      <Box h="auto" p={5} marginTop="20px" bg="white">
        <Flex gap={5}>
          <Avatar size="md" name="Ryan Florence" src={post.avatar} />
          <Flex
            justifyContent="space-between"
            gap={4}
            flexGrow={1}
            flexDirection="column"
          >
            <Flex gap={2} alignItems="center">
              <Heading size="sm"> {post.username} </Heading>
              <Text color="gray.500">@ {post.username} </Text>
            </Flex>

            <Text>{post.content}</Text>
            <Flex justifyContent="space-between" fontSize="xl" gap={10}>
              <Flex gap={3} alignItems="center">
                <AiIcons.AiOutlineHeart cursor="pointer" />
                <Box fontSize={15}> {post.likes.likeCount} </Box>
              </Flex>
              <VsIcons.VscComment cursor="pointer" />
              <AiIcons.AiOutlineShareAlt cursor="pointer" />
              <BsIcons.BsFillBookmarkCheckFill
                onClick={() => bookmarkHandler(post._id)}
                cursor="pointer"
              />
              <SiIcons.SiSimpleanalytics cursor="pointer" />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
