import { Typography, Box } from "@mui/material";
import WorkTitle from "../molecules/WorkDescription";
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
        <Box>
          <CareerTimeline />
        </Box>
        <Box marginLeft={3} style={{ width: "650px" }}>
          <Experience />
        </Box>
      </Box>
    </Box>
  );
}

export default Career;
