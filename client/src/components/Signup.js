import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
import toast from "react-hot-toast";
import animations from "../libraries/animations";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
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
          Signup
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
            <InputLabel htmlFor="fullname">Full Name</InputLabel>
            <Input
              sx={{ color: "purple " }}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              id="fullname"
            />
          </FormControl>
          <FormControl color="secondary">
            <InputLabel htmlFor="email">Email</InputLabel>

            <Input
              sx={{ color: "purple " }}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="email"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl color="secondary">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              sx={{ color: "purple " }}
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
            Sign Up
          </Button>
        </form>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }} mt={2}>
          <Typography color="#7b7b7b" variant="body2">
            Already have an account?
          </Typography>
          <Link
            onClick={() => {
              navigate("/login", { replace: true });
            }}
            variant="body2"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              opacity: 0.7,
              ":hover": { opacity: 1 },
            }}
          >
            Sign In
          </Link>
        </Box>
      </Paper>
    </Background>
  );
};

export default Signup;
