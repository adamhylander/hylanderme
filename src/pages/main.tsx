import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Profile from "../components/Profile";

function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <Box sx={{ marginTop: "20px", width: "60%" }}>
        <Header />
      </Box>
      <Box>
        <Profile />
      </Box>
    </Box>
  );
}

export default Main;
