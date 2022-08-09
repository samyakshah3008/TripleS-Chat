import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { followUser, unfollowUser } from "../store/authSlice";
import { editProfile } from "../store/userSlice";
import UserPost from "./UserPost";

export default function ProfilePostContainer() {
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const { userInfo, token } = useSelector((state) => state.auth);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const dispatch = useDispatch();

  let location = useLocation();
  const filteredPostByUsername = posts.filter(
    (post) => location.pathname.split("/")[2] === post.username
  );

  const filteredUserByUsername = users.filter(
    (user) => location.pathname.split("/")[2] === user.username
  );

  const [bio, setBio] = useState(filteredUserByUsername[0].bio);
  const [website, setWebsite] = useState(filteredUserByUsername[0].website);

  const updateClickHandler = () => {
    dispatch(editProfile({ bio: bio, website: website, token: token }));

    onClose();
  };

  return (
    <>
      <Box flexGrow="1" w="25%">
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
            src={filteredUserByUsername[0].avatar}
          />
          <Heading size="lg">{filteredUserByUsername[0].username}</Heading>
          {filteredUserByUsername[0].username === userInfo.username ? (
            <>
              <Button onClick={onOpen} colorScheme="gray">
                Edit Profile
              </Button>
            </>
          ) : (
            ""
          )}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex alignItems="center" gap={7}>
                  <Avatar
                    size="lg"
                    name="Ryan Florence"
                    src={filteredUserByUsername[0].avatar}
                  />
                  <Flex flexDirection="column">
                    <Heading as="h6" size="md">
                      Aron James
                    </Heading>
                    <Text fontSize={20}>@aronjames</Text>
                  </Flex>
                </Flex>

                <Flex marginTop={5} gap={8} alignItems="center">
                  <Text>Website</Text>
                  <Input
                    _focus={{
                      border: "2px",
                      borderColor: "purple.600",
                    }}
                    size="md"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Flex>
                <Flex
                  justifyContent="space-between"
                  marginTop={5}
                  gap={17}
                  alignItems="center"
                >
                  <Text>Bio</Text>
                  <Textarea
                    _focus={{
                      border: "2px",
                      borderColor: "purple.600",
                    }}
                    w={310}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={updateClickHandler}
                  colorScheme="purple"
                  mr={3}
                >
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {filteredUserByUsername[0].username === userInfo.username ? (
            ""
          ) : (
            <>
              {userInfo.following.find(
                (item) => item.username === filteredUserByUsername[0].username
              ) ? (
                <>
                  <Button
                    onClick={() =>
                      dispatch(
                        unfollowUser({
                          followUserId: filteredUserByUsername[0]._id,
                          token: token,
                        })
                      )
                    }
                    colorScheme="gray"
                  >
                    UnFollow
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() =>
                    dispatch(
                      followUser({
                        followUserId: filteredUserByUsername[0]._id,
                        token: token,
                      })
                    )
                  }
                  colorScheme="gray"
                >
                  follow
                </Button>
              )}
            </>
          )}

          <Button variant="link" colorScheme="purple">
            {filteredUserByUsername[0].website}
          </Button>
        </Flex>
        <Text textAlign="center">{filteredUserByUsername[0].bio}</Text>
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
            <Heading size="md">
              {filteredUserByUsername[0].following.length}
            </Heading>
            <Text>Following</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <Heading size="md">{filteredPostByUsername.length}</Heading>
            <Text>Posts</Text>
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <Heading size="md">
              {filteredUserByUsername[0].followers.length}
            </Heading>
            <Text>Followers</Text>
          </Flex>
        </Flex>
        <Heading marginTop="40px" size="md">
          Your Posts
        </Heading>
        {filteredPostByUsername.map((post) => {
          return (
            <>
              <UserPost post={post} />
            </>
          );
        })}
      </Box>
    </>
  );
}
