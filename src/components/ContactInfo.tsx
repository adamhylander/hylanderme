import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ContactDetail from "./ContactDetail";

function ContactInfo() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ borderColor: "#ffc500" }} variant="outlined" />
          <TimelineConnector
            style={{ marginLeft: "-2px", marginRight: "-2px" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '1px' }}>
          <ContactDetail headliner="Email" text="adam@hylander.me" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ borderColor: "#ffc500" }} variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '1px' }}>
          <ContactDetail headliner="Phone Number" text="+46 72 - 541 32 11" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ borderColor: "#ffc500" }} variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '1px' }}>
          <ContactDetail headliner="LinkedIn" text="adam-hylander" link="https://www.linkedin.com/in/adam-hylander/" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ borderColor: "#ffc500" }} variant="outlined" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '1px' }}>
          <ContactDetail headliner="GitHub" text="adamhylander" link="https://www.github.com/adamhylander" />
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}

export default ContactInfo;
