import { Box } from "@mui/material";

const Background = (props) => {
  return <Box sx={{ minHeight: "100vh",...props.sx,backgroundImage:"radial-gradient(white,#bda9e2,#9c27b0)" }}>{props.children}</Box>;
};

export default Background;
