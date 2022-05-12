import { Flex } from "@chakra-ui/react";
import React from "react";
import PostContainer from "./PostContainer";
import RightSideBar from "./RightSideBar";
import SideBar from "./SideBar";

export default function MainContainer() {
  return (
    <>
      <Flex bg="#E5E5E5">
        <SideBar />

        <PostContainer />

        <RightSideBar />
      </Flex>
    </>
  );
}
