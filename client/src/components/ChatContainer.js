import { Box } from "@mui/material";
import { useChatStore } from "./store/chatStore";
import ChatHeader from "./ChatHeader";
import MessageSection from "./MessageSection";
import MessageInputBar from "./MessageInputBar";
import animations from "../libraries/animations";

const ChatContainer = () => {
  const { selectedUser } = useChatStore();

  return (
    selectedUser && (
      <Box
        sx={{
          flexGrow: 2,
          width: "70%",
          display: "flex",
          flexDirection: "column",
          ...animations.slideLeft,
        }}
      >
        <ChatHeader />
        <MessageSection />
        <MessageInputBar />
      </Box>
    )
  );
};

export default ChatContainer;
