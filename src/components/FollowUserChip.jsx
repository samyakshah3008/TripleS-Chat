import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAny } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { followUser, unfollowUser } from "../store/authSlice";

export default function FollowUserChip() {
  const [dataBase, setDataBase] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // const currentUser = users?.find(
  //   (each) => each?.username === userInfo?.username
  // );

  const allUsers = users?.filter(
    (eachUser) => eachUser.username !== userInfo.username
  );

  // const currentUserFollowing = currentUser?.following;

  // const userSuggestion = users?.filter(
  //   (eachUser) =>
  //     !currentUserFollowing?.find(
  //       (each) => eachUser.username === each.username
  //     ) && eachUser.username !== currentUser?.username
  // );

  // !currentUserFollowing.find will be having those names which are not followed.
  // second condition excludes self user account. userInfo.following find item.username

  return (
    <div>
      {allUsers?.map((item) => {
        return (
          <div key={item._id}>
            <Flex marginBottom={4} w={260} gap={4} cursor="pointer">
              <Avatar
                onClick={() => navigate(`/profile/${item.username}`)}
                size="md"
                name="Ryan Florence"
                src={item.avatar}
              />
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
                {userInfo.following.find(
                  (userInfo) => userInfo.username === item.username
                ) ? (
                  <>
                    <Text
                      onClick={() =>
                        dispatch(
                          unfollowUser({ followUserId: item._id, token: token })
                        )
                      }
                      fontWeight="bold"
                      color="purple.600"
                    >
                      UnFollow
                    </Text>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </Flex>
            </Flex>
          </div>
        );
      })}
    </div>
  );
}
