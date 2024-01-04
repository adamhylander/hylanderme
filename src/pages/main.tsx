import Box from "@mui/material/Box";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Resume from "../components/Resume";

function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Updated line
        marginTop: "20px",
      }}
    >
      <Box sx={{ display: "flex", width: "80%" }}>
        <Box sx={{ width: "24%" }}>
          <Profile />
        </Box>
        <Box sx={{ width: "76%", marginLeft: "20px" }}>
          <Header />
          <Box sx={{ marginTop: "20px" }}>
            <Resume />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
