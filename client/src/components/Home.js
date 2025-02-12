import { Container, Paper } from "@mui/material";
import Background from "./Background";
import NavBar from "./NavBar";
import SideContainer from "./SideContainer";
import ChatContainer from "./ChatContainer";
import animations from "../libraries/animations";

const Home = () => {
  return (
    <Background>
      <NavBar />
      <Container>
        <Paper
          sx={{
            ...animations.slideDown,
            display: "flex",
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
          }}
        >
          <SideContainer />
          <ChatContainer />
        </Paper>
      </Container>
    </Background>
  );
};

export default Home;
