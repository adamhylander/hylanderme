import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface WorkDescriptionProps {
  title: string;
  startDate: string;
  stopDate: string;
  company: string;
  isSelected: boolean;
  onClick: () => void;
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({
  title,
  startDate,
  stopDate,
  company,
  isSelected,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "520px",
        display: "flex",
        marginTop: "2px",
        paddingBottom: "10px",
        marginBottom: "27px",
        backgroundColor: isHovered ? "#f5f0f0" : "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
      </div>
      <div
        style={{
          marginLeft: "auto",
          fontSize: "45px",
          color: "#ffc500",
          display: isSelected ? "block" : "none",
        }}
      >
        &#123;
      </div>
    </div>
  );
};

export default WorkDescription;
