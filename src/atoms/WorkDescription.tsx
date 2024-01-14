import React, { useState } from "react";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface WorkDescriptionProps {
  title: string;
  startDate: string;
  stopDate: string;
  company: string;
  description: string,
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({
  title,
  startDate,
  stopDate,
  company,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: isHovered ? "130px" : "53px",
        transition: "0.4s ease-in-out",
        display: "flex",
        marginTop: "2px",
        paddingBottom: "10px",
        marginBottom: "27px",
        backgroundColor: isHovered ? "#f5f0f0" : "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ flex: 1 }}>
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
        <div style={{ overflowY: "hidden" }}>
        <Typography
          style={{
            fontFamily: "monospace",
            fontWeight: 550,
            color: "black",
            textDecoration: "none",
            fontSize: "0.9rem",
            opacity: isHovered ? 1 : 0, 
            transition: "opacity 0.4s ease-in-out",
          }}
        >
          {description}
        </Typography>
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          transition: "transform 0.4s ease-in-out",
          transform: isHovered ? "rotate(90deg)" : "rotate(0deg)",
        }}
      >
        <KeyboardArrowDownIcon
          style={{
            fontSize: "40px",
            color: "#ffc500",
          }}
        />
      </div>
    </div>
  );
};

export default WorkDescription;
