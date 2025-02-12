import { Box, Button, Checkbox, Paper, Typography } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useChatStore } from "./store/chatStore";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "./store/authStore";
import scrollstyles from "./scrollStyles";
import { formatMessageTime } from "../libraries/utilities";
import animations from "../libraries/animations";

const MessageSection = () => {
  const [checkedMessages, updateCheckedList] = useState([]);
  const [selectOption, toggleSelectOption] = useState(
    checkedMessages.length === 0 ? false : true
  );
  const {
    getMessages,
    selectedUser,
    messages,
    subscribeToMessages,
    unsubscribeFromMessages,
    deleteMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const onCheckUser = (id) => {
    updateCheckedList((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((msgId) => msgId !== id)
        : [...prevChecked, id]
    );
  };

  const onDeleteMessages = async () => {
    try {
      await deleteMessages(checkedMessages);
      await getMessages(selectedUser._id);
      updateCheckedList([]);
      toggleSelectOption(false);
    } catch (error) {
      console.error("Error deleting messages:", error);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        height: "60vh",
        overflowY: "auto",
        ...scrollstyles,
      }}
    >
      {checkedMessages.length === 0 && (
        <Button
          disabled={messages.length > 0 ? false : true}
          onClick={() => {
            toggleSelectOption(true);
          }}
          variant="contained"
          color="secondary"
          sx={{
            alignSelf: "center",
            position: "fixed",
            ...animations.slideDown,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ChecklistIcon />
          Select Chats
        </Button>
      )}
      {checkedMessages.length > 0 && (
        <>
          {" "}
          <Button
            onClick={onDeleteMessages}
            variant="contained"
            sx={{
              position: "fixed",
              alignSelf: "center",
              backgroundColor: "#de3f22",
              ...animations.slideDown,
            }}
          >
            Delete Messages
          </Button>
          <Button
            onClick={() => {
              updateCheckedList([]);
              toggleSelectOption(false);
            }}
            sx={{ position: "fixed", marginLeft: 32, alignSelf: "center" }}
            variant="outlined"
            color="secondary"
          >
            <DoDisturbIcon />
          </Button>
        </>
      )}

      <Box sx={{ height: 40 }}></Box>
      {messages.map((msg) => (
        <Box
          key={msg._id}
          ref={messageEndRef}
          sx={{
            ...animations.slideRight,
            display: "flex",
            alignItems: "center",
            justifyContent:
              authUser._id === msg.senderId ? "flex-end" : "flex-start",
            gap: 1,
            alignSelf:
              authUser._id === msg.senderId ? "flex-end" : "flex-start",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "#bda9e2",
              textAlign: authUser._id === msg.senderId ? "right" : "left",
              px: 2,
              ...(selectOption && animations.wobble),
              padding: "5px",
              display: "flex",
              gap: 1,
              alignItems: "flex-end",
              maxWidth: "300px",
            }}
          >
            <Box sx={{ wordBreak: "break-word" }}>
              <Typography
                sx={{
                  color: "white",
                  textAlign: "left",
                }}
              >
                {msg.text}{" "}
                <span style={{ fontSize: 10, color: "#bc56c3 " }}>
                  {formatMessageTime(msg.createdAt)}
                </span>
              </Typography>
            </Box>
          </Paper>
          {selectOption && (
            <Checkbox
              onChange={() => {
                onCheckUser(msg._id);
              }}
              sx={{ order: authUser._id === msg.senderId ? "-1" : "0" }}
              color="secondary"
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MessageSection;
