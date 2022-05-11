import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  GridItem,
  Image,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import HeroHeader from "./assets/semi-final-img.png";
import TripleSChatLogo from "./assets/TripleS-final-logo.png";

function App() {
  return (
    <div className="App">
      <Container marginTop={30} maxW="container.lg" p={0}>
        <Flex
          gap={5}
          justifyContent="center"
          width="80%"
          margin="auto"
          h="75vh"
        >
          <Image src={HeroHeader}></Image>
          <VStack w="full" h="full" spacing={10} alignItems="center" p={5}>
            <Box>
              <Image src={TripleSChatLogo}></Image>
            </Box>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    _focus={{
                      border: "2px",
                      borderColor: "purple.600",
                    }}
                    bg="gray.100"
                    placeholder="Phone Number, username or email"
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Input
                    type="password"
                    _focus={{
                      border: "2px",
                      borderColor: "purple.600",
                    }}
                    bg="gray.100"
                    placeholder="Password"
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button colorScheme="purple" size="md" w="full">
                  Log In
                </Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  variant="outline"
                  colorScheme="purple"
                  size="md"
                  w="full"
                >
                  Log In with Test Credentials
                </Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button variant="ghost" colorScheme="purple" size="md" w="full">
                  Sign Up Instead
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
        <Box marginTop={10}>
          <Flex gap={4} justifyContent="center" width="80%" margin="auto">
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Meta
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              About
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Blog
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Jobs
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Help
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              API
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Privacy
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Terms
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Top Accounts
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Hashtags
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Locations
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              TripleS-Chat lite
            </Button>
          </Flex>
        </Box>
        <Box marginTop={0}>
          <Flex gap={4} justifyContent="center" width="80%" margin="auto">
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Dance
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Food & Drink
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Home & Garden
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Music
            </Button>
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              Visual Arts
            </Button>
          </Flex>
        </Box>
        <Box marginTop={0}>
          <Flex gap={4} justifyContent="center" width="80%" margin="auto">
            <Button fontWeight="thin" variant="unstyled" fontSize="small">
              © 2022 TripleS-Chat from Meta
            </Button>
          </Flex>
        </Box>
      </Container>
    </div>
  );
}

export default App;
