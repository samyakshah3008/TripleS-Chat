import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { followUser, getAny } from "../store/userSlice";

export default function FollowUserChip() {
  const [dataBase, setDataBase] = useState({});
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const { userInfo, token } = useSelector((state) => state.auth);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get("/api/users");
        setDataBase(response.data);
        dispatch(getAny(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  const currentUser = users?.find(
    (each) => each?.username === userInfo?.username
  );

  const currentUserFollowing = currentUser?.following;

  const userSuggestion = users?.filter(
    (eachUser) =>
      !currentUserFollowing?.find(
        (each) => eachUser.username === each.username
      ) && eachUser.username !== currentUser?.username
  );

  // !currentUserFollowing.find will be having those names which are not followed.
  // second condition excludes self user account.

  return (
    <div>
      {userSuggestion?.map((item) => {
        return (
          <>
            <Flex marginBottom={4} w={260} gap={4} cursor="pointer">
              <Avatar size="md" name="Ryan Florence" src={item.avatar} />
              <Flex justifyContent="flex-start" flexDirection="column">
                <Heading size="sm"> {item.firstName} </Heading>
                <Text color="gray.500" fontSize="sm">
                  @{item.username}
                </Text>
              </Flex>
              <Flex
                flexGrow={1}
                justifyContent="flex-end"
                alignItems="center"
                gap={10}
                cursor="pointer"
              >
                <Text
                  onClick={() =>
                    dispatch(
                      followUser({ followUserId: item._id, token: token })
                    )
                  }
                  fontWeight="bold"
                  color="purple.600"
                >
                  Follow +
                </Text>
              </Flex>
            </Flex>
          </>
        );
      })}
    </div>
  );
}
