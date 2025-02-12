import { Box, Button, Divider, Input, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useChatStore } from "./store/chatStore";
import { useAuthStore } from "./store/authStore";
import { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import scrollstyles from "./scrollStyles";

const SideContainer = () => {
  const [searchInput, updateSearch] = useState("");
  const { getUsers, users, setSelectedUser, selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users.filter((each) =>
    each.fullName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Box
      sx={{
        p: 2,
        height: "80vh",
        width: { xs: selectedUser ? "0px" : "100%", md: "30%" },
        overflowX: "hidden",
        overflowY: "scroll",
        display: { xs: selectedUser ? "none" : "block", md: "block" },
        flexGrow: 1,
        ...scrollstyles,
      }}
    >
      <Typography sx={{ color: "white" }} variant="h3">
        Chats
      </Typography>
      <Input
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
        value={searchInput}
        sx={{ marginTop: 2, width: "100%", color: "white" }}
        color="secondary"
        placeholder="Search"
      />
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {filteredUsers.map((userData) => (
          <Button
            onClick={() => {
              setSelectedUser(userData);
            }}
            variant="secondary"
            key={userData._id}
            sx={{
              textTransform: "none",
              display: "flex",
              gap: 2,
              padding: 2,
              justifyContent: "flex-start",
              border: "1px solid gray",
              borderRadius: 5,
              alignItems: "center",
              backgroundImage: "linear-gradient(to left,white,#bda9e2 )",
              cursor: "pointer",
              ":hover": {
                backgroundImage: "linear-gradient(to right,white,#bda9e2 )",
                ".face-icon": {
                  color: "purple",
                },
              },
              ":active": {
                backgroundImage: "linear-gradient(to left,white,#bda9e2 )",
                ".face-icon": {
                  color: "white",
                },
              },
            }}
          >
            <FaceIcon
              className="face-icon"
              sx={{ transform: "scale(1.7)", color: "white" }}
            />

            <Box>
              <Typography color="secondary" variant="h6">
                {userData.fullName}
              </Typography>
              <Typography
                color="secondary"
                sx={{ display: "flex", alignItems: "center", fontSize: 12 }}
              >
                <CircleIcon
                  sx={{
                    transform: "scale(0.7)",
                    color: onlineUsers.includes(userData._id)
                      ? "green"
                      : "gray",
                  }}
                />{" "}
                {onlineUsers.includes(userData._id) ? "Online" : "Offline"}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SideContainer;
