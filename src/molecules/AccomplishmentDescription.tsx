import { Typography } from "@mui/material";
import Title from "../atoms/Title";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface AccomplishmentDescriptionProps {
  title: string;
  date: string;
  description: string;
}

const AccomplishmentDescription: React.FC<AccomplishmentDescriptionProps> = ({
  title,
  date,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: isHovered ? "133px" : "63px",
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
            fontSize: "1.1rem",
            textTransform: "uppercase",
          }}
        >
          {title}{" "}
          <span
            style={{
              fontFamily: "monospace",
              fontWeight: 550,
              color: "gray",
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            | {date}
          </span>
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

export default AccomplishmentDescription;
