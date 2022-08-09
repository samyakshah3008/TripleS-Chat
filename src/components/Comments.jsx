import {
  Avatar,
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Textarea,
  Input,
} from "@chakra-ui/react";
import * as BsIcons from "react-icons/bs";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComments, editComments } from "../store/postSlice";
import { deleteCommentsServices } from "../services/postServices";
import { useState } from "react";

export default function Comments({ eachPost }) {
  const { posts } = useSelector((state) => state.posts);
  const { userInfo, token } = useSelector((state) => state.auth);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [demo, setDemo] = useState();

  const dispatch = useDispatch();

  const deleteCommentHandler = (comment) => {
    dispatch(
      deleteComments({
        postId: eachPost._id,
        commentId: comment._id,
        token: token,
      })
    );
  };

  const editOpenHandler = (particularComment) => {
    setDemo(particularComment.text);
  };

  const updatedCommentHandler = (particularComment) => {
    dispatch(
      editComments({
        postId: eachPost._id,
        commentId: particularComment._id,
        commentData: demo,
        token: token,
      })
    );

    onClose();
  };

  return (
    <div>
      {eachPost.comments.map((eachComment) => {
        return (
          <>
            <Box h="auto" p={5} marginTop="20px" bg="white">
              <Flex alignItems="center" gap={5}>
                <Avatar size="md" name="Ryan Florence" src={userInfo.avatar} />
                <Text padding={2} bg="gray.100" flexGrow="1">
                  {eachComment.text}
                </Text>

                <Menu>
                  <MenuButton>
                    <BsIcons.BsThreeDotsVertical cursor="pointer" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        onOpen();
                        editOpenHandler(eachComment);
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => deleteCommentHandler(eachComment)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit comment</ModalHeader>

                  <ModalCloseButton />
                  <ModalBody>
                    <Textarea
                      _focus={{
                        border: "2px",
                        borderColor: "purple.600",
                      }}
                      value={demo}
                      onChange={(e) => setDemo(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      onClick={() => updatedCommentHandler(eachComment)}
                      colorScheme="purple"
                      mr={3}
                    >
                      Update
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </>
        );
      })}
    </div>
  );
}
