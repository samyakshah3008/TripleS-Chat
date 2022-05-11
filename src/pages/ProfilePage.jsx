import { Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import ProfilePostContainer from "../components/ProfilePostContainer";
import RightSideBar from "../components/RightSideBar";
import SideBar from "../components/SideBar";

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <Flex bg="#E5E5E5">
        <SideBar />
        <ProfilePostContainer />
        <RightSideBar />
      </Flex>
    </div>
  );
}
