import { Avatar, Box, Button, Flex, Textarea } from "@chakra-ui/react";
import React, { useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/postSlice";
import { getAny } from "../store/userSlice";
import UserPost from "./UserPost";

export default function PostContainer() {
  const { posts, bookmarks } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAny());
  }, [dispatch]);

  const loggedUser = users?.find(
    (eachUser) => eachUser.username === userInfo.username
  );

  const loggedUserFollowing = loggedUser?.following;

  const feedPost = posts?.filter(
    (eachPost) =>
      loggedUserFollowing?.find(
        (each) => each.username === eachPost.username
      ) || eachPost.username === loggedUser?.username
  );

  return (
    <>
      <Box flexGrow="1" w="25%" h="auto">
        <Box p={5} h={250} w="full" marginTop="70px" bg="white">
          <Flex gap={5}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
            <Flex gap={7} flexGrow={1} flexDirection="column">
              <Textarea
                placeholder="Write Something interesting..."
                _focus={{
                  border: "2px",
                  borderColor: "purple.600",
                }}
                bg="#E5E5E5"
                h={150}
              ></Textarea>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                fontSize="xl"
              >
                <Flex gap={10}>
                  <GrIcons.GrGallery cursor="pointer" />
                  <AiIcons.AiOutlineFileGif cursor="pointer" />
                  <AiIcons.AiOutlineSmile cursor="pointer" />
                </Flex>
                <Button colorScheme="purple">Post this</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {feedPost.map((post) => {
          return <UserPost post={post} />;
        })}
      </Box>
    </>
  );
}
