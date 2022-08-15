import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as VsIcons from "react-icons/vsc";
import * as SiIcons from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkPosts,
  deletePost,
  dislikePosts,
  editPost,
  likePosts,
  postComments,
  removeBookmarkPosts,
} from "../store/postSlice";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";

export default function UserPost({ post }) {
  const { posts, bookmarks } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [editPostInput, setEditPostInput] = useState();
  const navigate = useNavigate();

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

  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const commentTextHandler = (e) => {
    setCommentData(e.target.value);
  };

  const [commentData, setCommentData] = useState("");

  const createNewCommentHandler = (post) => {
    dispatch(
      postComments({
        postId: post._id,
        commentData: commentData,
        token: token,
      })
    );
    setCommentData("");

    onClose();
  };

  const deletePostHandler = (post) => {
    console.log(post, "FROM");
    console.log(post._id, token);
    dispatch(deletePost({ postId: post._id, token: token }));
  };

  const updatePostHandler = (post) => {
    console.log(post, editPostInput);
    setEditPostInput(post.content);
    dispatch(editPost({ id: post._id, content: editPostInput, token: token }));
    onEditClose();
  };

  return (
    <div key={post._id}>
      <Box h="auto" p={5} marginTop="20px" bg="white">
        <Flex gap={5}>
          <Avatar
            onClick={() => navigate(`/profile/${post.username}`)}
            size="md"
            name="Ryan Florence"
            src={post.avatar}
            cursor="pointer"
          />
          <Flex
            justifyContent="space-between"
            gap={4}
            flexGrow={1}
            flexDirection="column"
          >
            <Flex gap={2} alignItems="center">
              <Heading
                onClick={() => navigate(`/profile/${post.username}`)}
                size="sm"
                cursor="pointer"
              >
                {post.username}
              </Heading>
              <Text
                onClick={() => navigate(`/profile/${post.username}`)}
                color="gray.500"
                cursor="pointer"
              >
                @ {post.username}
              </Text>
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
              <VsIcons.VscComment onClick={onOpen} cursor="pointer" />
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add comment</ModalHeader>

                  <ModalCloseButton />
                  <ModalBody>
                    <Textarea
                      onChange={commentTextHandler}
                      _focus={{
                        border: "2px",
                        borderColor: "purple.600",
                      }}
                      placeholder="Start Typing...."
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="purple"
                      mr={3}
                      onClick={() => createNewCommentHandler(post)}
                    >
                      Comment
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

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
              {post.username === "aron20" ? (
                <>
                  <Menu>
                    <MenuButton>
                      <BsIcons.BsThreeDotsVertical cursor="pointer" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          onEditOpen();
                          setEditPostInput(post.content);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <Modal isOpen={isEditOpen} onClose={onEditClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Edit post</ModalHeader>

                          <ModalCloseButton />
                          <ModalBody>
                            <Textarea
                              _focus={{
                                border: "2px",
                                borderColor: "purple.600",
                              }}
                              value={editPostInput}
                              onChange={(e) => setEditPostInput(e.target.value)}
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              onClick={() => updatePostHandler(post)}
                              colorScheme="purple"
                              mr={3}
                            >
                              Update
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                      <MenuItem onClick={() => deletePostHandler(post)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  {" "}
                  <SiIcons.SiSimpleanalytics cursor="pointer" />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Comments eachPost={post} />
      </Box>
    </div>
  );
}
