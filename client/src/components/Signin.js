import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { useState } from "react";
import animations from "../libraries/animations";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <Background
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          ...animations.zoomIn,
          padding: 5,
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h4" color="secondary">
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 20,
          }}
        >
          <FormControl color="secondary">
            <InputLabel htmlFor="email">Email</InputLabel>

            <Input
              sx={{ color: "purple " }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="email"
            />
          </FormControl>
          <FormControl color="secondary">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              sx={{ color: "purple " }}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              id="password"
            />
          </FormControl>
          <Button
            sx={{ marginTop: 5 }}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Sign In
          </Button>
        </form>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }} mt={2}>
          <Typography color="brown" variant="body2">
            Not have an account?
          </Typography>
          <Link
            onClick={() => {
              navigate("/signup", { replace: true });
            }}
            variant="body2"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              opacity: 0.7,
              ":hover": { opacity: 1 },
            }}
          >
            Sign Up
          </Link>
        </Box>
      </Paper>
    </Background>
  );
};

export default Signin;
