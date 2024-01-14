import { Typography, Box } from "@mui/material";
import WorkTitle from "../atoms/WorkDescription";
import Experience from "../molecules/Experience";
import CareerTimeline from "../molecules/CareerTimeLine";

function Career() {
  return (
    <Box>
      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
          fontSize: "2rem",
          paddingBottom: "0.7rem",
        }}
      >
        Career
      </Typography>

      <Box style={{ display: "flex" }}>
        <Box style={{ marginTop: "30px" }}>
          <CareerTimeline />
        </Box>
        <Box marginLeft={2} style={{ marginTop: "30px" }}>
          <Experience />
        </Box>
        <Box marginLeft={4}>hello there</Box>
      </Box>
    </Box>
  );
}

export default Career;
