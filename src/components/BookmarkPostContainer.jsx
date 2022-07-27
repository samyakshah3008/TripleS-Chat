import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import BookmarkCard from "./BookmarkCard";

export default function BookmarkPostContainer() {
  const { bookmarks, posts } = useSelector((state) => state.posts);

  const bookmarkPost = bookmarks.map((eachBookmark) => {
    return posts?.find((post) => post._id === eachBookmark);
  });

  return (
    <>
      <Box flexGrow="1" w="25%" h={700}>
        <Heading marginTop="70px" size="xl">
          Your Bookmarks
        </Heading>

        {bookmarkPost.length === 0 ? (
          <Heading
            alignItems="center"
            justifyContent="center"
            display="flex"
            marginTop="70px"
            size="md"
          >
            Start bookmarking posts
          </Heading>
        ) : (
          ""
        )}

        {bookmarkPost?.map((eachBookmark) => (
          <BookmarkCard post={eachBookmark} id={eachBookmark._id} />
        ))}
      </Box>
    </>
  );
}
