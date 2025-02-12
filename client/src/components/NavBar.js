import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore } from "./store/authStore";

export default function NavBar() {
  const { logout, authUser } = useAuthStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "transparent" }}
        elevation={12}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            <WhatshotIcon /> WhatsChat
          </Typography>
          {authUser && (
            <Button onClick={logout} color="inherit">
              <LogoutIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
