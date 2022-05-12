import { Image } from "@chakra-ui/react";
import React from "react";
import HeroHeaderImg from "../assets/semi-final-img.png";
export default function HeroHeader() {
  return (
    <>
      <Image src={HeroHeaderImg}></Image>
    </>
  );
}
