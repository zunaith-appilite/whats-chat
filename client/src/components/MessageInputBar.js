import { Box, Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useChatStore } from "./store/chatStore";
import toast from "react-hot-toast";

const MessageInputBar = () => {
  const [text, updateText] = useState("");
  const { sendMessage } = useChatStore();
  const handleMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await sendMessage({
        text: text.trim(),
      });
      updateText("");
    } catch (error) {
      toast.error("Error sending message");
      console.error("Failed to send message:", error);
    }
  };

  return (
    <Box>
      <form
        onSubmit={handleMessage}
        style={{ display: "flex", gap: "20px", padding: 10 }}
      >
        <Input
          value={text}
          onChange={(e) => {
            updateText(e.target.value);
          }}
          color="secondary"
          sx={{ flexGrow: 1, color: "white" }}
          placeholder={`Type Message Here...`}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
        >
          <SendIcon />
        </Button>
      </form>
    </Box>
  );
};

export default MessageInputBar;
