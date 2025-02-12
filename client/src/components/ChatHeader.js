import { Box, Button, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import CircleIcon from "@mui/icons-material/Circle";
import ClearIcon from "@mui/icons-material/Clear";
import { useChatStore } from "./store/chatStore";
import { useAuthStore } from "./store/authStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  return (
    <Box
      sx={{
        backgroundColor: "#bda9e2 ",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px",
        pl: 4,
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <FaceIcon
          className="face-icon"
          sx={{ transform: "scale(1.7)", color: "white" }}
        />

        <Box>
          <Typography color="white" variant="h6">
            {selectedUser.fullName}
          </Typography>
          <Typography
            color="secondary"
            sx={{ display: "flex", alignItems: "center", fontSize: 12 }}
          >
            <CircleIcon
              sx={{
                transform: "scale(0.7)",
                color: onlineUsers.includes(selectedUser._id)
                  ? "green"
                  : "gray",
              }}
            />{" "}
            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
          </Typography>
        </Box>
      </Box>
      <Button
        onClick={() => {
          setSelectedUser(null);
        }}
        sx={{
          backgroundColor: "transparent",
          borderStyle: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ClearIcon />
      </Button>
    </Box>
  );
};

export default ChatHeader;
