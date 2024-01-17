import { Box, Typography } from "@mui/material";

interface ProjectProps {
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, description }) => {
  return (
    <div
      style={{
        marginRight: "2%",
        padding: "10px",
        height: "370px",
        width: "270px",
        borderRadius: "10px",
        margin: "1%",
        flexShrink: 0,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.3), 0px 4px 5px 0px rgba(0,0,0,0.22), 0px 1px 10px 0px rgba(0,0,0,0.18)",
      }}
    >
      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
          fontSize: "1.2rem",
          paddingBottom: "0.3rem",
          whiteSpace: "wrap",
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.1rem",
          letterSpacing: ".1rem",
          whiteSpace: "wrap",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default Project;
