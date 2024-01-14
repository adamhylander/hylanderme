import Box from "@mui/material/Box";
import Header from "../organisms/Header";
import Profile from "../organisms/Profile";
import Resume from "../organisms/Resume";

function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          "@media screen and (max-width: 1915px)": {
            width: "80%",
          },
        }}
      >
        <Box
          sx={{
            width: "24%",
            "@media screen and (min-width: 1915px)": {
              width: "360px",
            },
          }}
        >
          <Profile />
        </Box>
        <Box
          sx={{
            width: "76%",
            marginLeft: "20px",
            "@media screen and (min-width: 1915px)": {
              width: "1140px",
            },
          }}
        >
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
