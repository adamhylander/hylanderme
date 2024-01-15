import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
  startDate: string;
  stopDate: string;
  company: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  startDate,
  stopDate,
  company,
}) => {
  return (
    <div>
      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
          fontSize: "1.2rem",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 550,
          color: "gray",
          textDecoration: "none",
          fontSize: "1rem",
          textTransform: "uppercase",
        }}
      >
        {startDate} - {stopDate} | {company}
      </Typography>
    </div>
  );
};

export default Title;
