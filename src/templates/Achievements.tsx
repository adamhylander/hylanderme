import { Box, Typography } from "@mui/material";
import AchievementTimeline from "../molecules/AchievementsTimeline";
import Accomplishments from "../organisms/Accomplishments";

function Achievements() {
  return (
    <div>
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
        Achievements & Extra-Curricular Activities
      </Typography>

      <Box style={{ display: "flex" }}>
        <Box>
          <AchievementTimeline />
        </Box>
        <Box marginLeft={3} style={{ width: "650px" }}>
          <Accomplishments />
        </Box>
      </Box>
    </div>
  );
}

export default Achievements;
