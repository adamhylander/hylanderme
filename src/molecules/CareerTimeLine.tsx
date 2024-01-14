import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";

function CareerTimeline() {
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
              {index === 0 && <SecurityIcon />}
              {index === 1 && <CodeIcon />}
              {index === 2 && <SchoolIcon />}
              {index === 3 && <CoffeeIcon />}
            </TimelineDot>
            {index < 3 && <TimelineConnector sx={{ height: "30px" }} />}
          </TimelineSeparator>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default CareerTimeline;
