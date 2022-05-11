import { Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import LoginContainer from "./components/LoginContainer";

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
          <HeroHeader />
          <LoginContainer />
        </Flex>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
