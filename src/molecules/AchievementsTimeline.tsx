import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import FaceIcon from "@mui/icons-material/Face";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function AchievementTimeline() {
  return (
    <Timeline
      sx={{
        padding: 0,
        margin: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot style={{ borderColor: "#ffc500" }} variant="outlined">
              {index === 0 && <SportsHandballIcon />}
              {index === 1 && <AttachMoneyIcon />}
              {index === 2 && <WysiwygIcon />}
              {index === 3 && <FaceIcon />}
            </TimelineDot>
            {index < 3 && <TimelineConnector sx={{ height: "40px" }} />}
          </TimelineSeparator>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default AchievementTimeline;
