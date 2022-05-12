import { Flex } from "@chakra-ui/react";
import React from "react";
import ExplorePostContainer from "../components/ExplorePostContainer";
import NavBar from "../components/NavBar";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";

export default function ExplorePage() {
  return (
    <div>
      <NavBar />
      <Flex bg="#E5E5E5">
        <SideBar />
        <ExplorePostContainer />
        <RightSideBar />
      </Flex>
    </div>
  );
}
