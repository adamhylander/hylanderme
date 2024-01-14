import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import { Facebook, LinkedIn, GitHub, Send, Home } from "@mui/icons-material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "10px",
        backgroundColor: "#fafafa",
        width: "100%",
        height: "75px",
        padding: "0",
        margin: 0,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75px",
            backgroundColor: "#ffc500",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            width: "12%",
            "@media screen and (max-width: 440px)": {
              display: "none",
            },
          }}
        >
          <Home style={{ color: "black", fontSize: "32px" }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
            marginRight: "auto",
            marginLeft: "20px"
          }}
        >
          HYLANDER.ME
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "50%",
            marginRight: "3%",
          }}
        >
          <a
            href="https://www.facebook.com/adam.hylander"
            style={{ marginRight: "4%", marginTop: "5px" }}
          >
            <Facebook sx={{ color: "black", "&:hover": { color: "#ccc" } }} />
          </a>

          <a
            href="https://www.linkedin.com/in/adam-hylander/"
            style={{ marginRight: "4%", marginTop: "5px" }}
          >
            <LinkedIn sx={{ color: "black", "&:hover": { color: "#ccc" } }} />
          </a>

          <a
            href="https://www.github.com/adamhylander"
            style={{ marginRight: "4%", marginTop: "5px" }}
          >
            <GitHub sx={{ color: "black", "&:hover": { color: "#ccc" } }} />
          </a>

          <a href="mailto:adam@hylander.me">
            <Button
              startIcon={<Send sx={{ color: "black" }} />}
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "black",
                textDecoration: "none",
                backgroundColor: "#ffc500",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#b89316" },
              }}
            >
              EMAIL
            </Button>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
