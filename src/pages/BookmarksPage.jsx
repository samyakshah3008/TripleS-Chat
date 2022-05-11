import { Flex } from "@chakra-ui/react";
import React from "react";
import BookmarkPostContainer from "../components/BookmarkPostContainer";
import NavBar from "../components/NavBar";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";

export default function BookmarksPage() {
  return (
    <div>
      <NavBar />
      <Flex bg="#E5E5E5">
        <SideBar />
        <BookmarkPostContainer />
        <RightSideBar />
      </Flex>
    </div>
  );
}
