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
} from "@chakra-ui/react";
import * as BsIcons from "react-icons/bs";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComments } from "../store/postSlice";
import { deleteCommentsServices } from "../services/postServices";

export default function Comments({ eachPost }) {
  const { posts } = useSelector((state) => state.posts);
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const editCommentHandler = () => {};

  const deleteCommentHandler = (comment) => {
    console.log(eachPost, "each post id");

    console.log(comment, "comment id");
    dispatch(
      deleteComments({
        postId: eachPost._id,
        commentId: comment._id,
        token: token,
      })
    );
  };

  return (
    <div>
      {eachPost.comments.map((eachComment) => {
        console.log(eachComment);

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
                    <MenuItem onClick={editCommentHandler}>Edit</MenuItem>
                    <MenuItem onClick={() => deleteCommentHandler(eachComment)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
          </>
        );
      })}
    </div>
  );
}
