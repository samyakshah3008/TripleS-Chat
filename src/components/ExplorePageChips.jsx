import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export default function ExplorePageChips() {
  return (
    <>
      <Flex justifyContent="space-between" marginTop={5} gap="20px">
        <Button colorScheme="gray">For You</Button>
        <Button colorScheme="gray">Trending</Button>
        <Button colorScheme="gray">Technology</Button>
        <Button colorScheme="gray">Sports</Button>
        <Button colorScheme="gray">News</Button>
        <Button colorScheme="gray">Entertainment</Button>
      </Flex>
    </>
  );
}
