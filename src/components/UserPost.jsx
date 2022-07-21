import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as VsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPosts,
  dislikePosts,
  likePosts,
  removeBookmarkPosts,
} from "../store/postSlice";

export default function UserPost() {
  const { posts, bookmarks } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loggedUser = users?.find(
    (eachUser) => eachUser.username === userInfo.username
  );

  const loggedUserFollowing = loggedUser?.following;

  const feedPost = posts.filter(
    (eachPost) =>
      loggedUserFollowing?.find(
        (each) => each.username === eachPost.username
      ) || eachPost.username === loggedUser?.username
  );

  const bookmarkByUser = (selectedPostId) => {
    return (
      bookmarks?.filter((bookmarkId) => bookmarkId === selectedPostId)
        .length !== 0
    );
  };

  const bookmarkHandler = (postId) => {
    if (bookmarkByUser(postId)) {
      dispatch(removeBookmarkPosts({ postId, token: token }));
    } else {
      dispatch(bookmarkPosts({ postId, token: token }));
    }
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

  return (
    <div>
      {feedPost?.map((post) => {
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
          </>
        );
      })}
    </div>
  );
}
