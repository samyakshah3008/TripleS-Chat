import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Flex, Avatar, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as VsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";
import {
  bookmarkPosts,
  dislikePosts,
  likePosts,
  removeBookmarkPosts,
} from "../store/postSlice";

export default function ExplorePostContainer() {
  const dispatch = useDispatch();
  const { userInfo, token } = useSelector((state) => state.auth);

  const filteredList = [
    "For You",
    "Trending",
    "Technology",
    "Sports",
    "News",
    "Entertainment",
  ];

  const [filter, setFilter] = useState("For You");
  const [filteredData, setFilteredData] = useState([]);
  const { posts, bookmarks } = useSelector((state) => state.posts);

  const bookmarkByUser = (selectedPostId) => {
    return (
      bookmarks?.filter((bookmarkId) => bookmarkId === selectedPostId)
        .length !== 0
    );
  };

  const likeByUser = (selectedPost) => {
    return (
      selectedPost.likes.likedBy?.filter(
        (users) => users.username === userInfo.username
      ).length !== 0
    );
  };

  const likeHandler = (post) => {
    if (likeByUser(post)) {
      dispatch(dislikePosts({ postId: post._id, token: token }));
    } else {
      dispatch(likePosts({ postId: post._id, token: token }));
    }
  };

  useEffect(() => {
    setFilteredData(
      posts.filter((data) =>
        filter === "For You"
          ? true
          : data.category.toLowerCase() === filter.toLowerCase()
      )
    );
  }, [filter]);

  const bookmarkHandler = (postId) => {
    if (bookmarkByUser(postId)) {
      dispatch(removeBookmarkPosts({ postId, token: token }));
    } else {
      dispatch(bookmarkPosts({ postId, token: token }));
    }
  };

  return (
    <>
      <Box flexGrow="1" w="25%">
        <Heading marginTop="80px" size="md">
          Explore
        </Heading>
        <Flex justifyContent="space-between" marginTop={5} gap="20px">
          {filteredList.map((element) => {
            return (
              <Button
                onClick={() => setFilter(element)}
                key={element}
                colorScheme="gray"
              >
                {element}
              </Button>
            );
          })}
        </Flex>

        {filteredData.map((post) => {
          return (
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
                      {likeByUser(post) ? (
                        <AiIcons.AiFillHeart
                          bg="red"
                          onClick={() => likeHandler(post)}
                          cursor="pointer"
                        />
                      ) : (
                        <AiIcons.AiOutlineHeart
                          onClick={() => likeHandler(post)}
                          cursor="pointer"
                        />
                      )}
                      <Box fontSize={15}> {post.likes.likeCount} </Box>
                    </Flex>
                    <VsIcons.VscComment cursor="pointer" />
                    <AiIcons.AiOutlineShareAlt cursor="pointer" />
                    {bookmarkByUser(post._id) ? (
                      <BsIcons.BsFillBookmarkCheckFill
                        onClick={() => bookmarkHandler(post._id)}
                        cursor="pointer"
                      />
                    ) : (
                      <BsIcons.BsBookmarkStar
                        onClick={() => bookmarkHandler(post._id)}
                        cursor="pointer"
                      />
                    )}
                    <SiIcons.SiSimpleanalytics cursor="pointer" />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
