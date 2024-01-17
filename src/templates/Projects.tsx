import { Box, Button, Typography } from "@mui/material";
import Project from "../molecules/Project";
import { useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number,
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

function Projects() {
  const contentWrapper = useRef<HTMLDivElement>(document.createElement("div"));

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
        Projects
      </Typography>
      <Box
        ref={contentWrapper}
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          scrollBehavior: "smooth",
        }}
      >
        <Project
          title={"Advent of Cyber 2023"}
          description={
            "Completed Advent of Cyber on TryHackMe, a daily challenge program throughout December. Gained expertise in essential cybersecurity concepts, network security, ethical hacking, and incident response through hands-on training."
          }
        />
        <Project
          title={"PortSwigger's Web Security Academy"}
          description={
            "I have solved 48% of the available vulnerability lags, of which 46/56 were on Apprentice level, 81/162 on Practitioner level, and 1/36 on Expert level."
          }
        />
        <Project
          title={"OWASP Juice Shop"}
          description={
            "Solved 50% of the challenges on the OWASP Juice Shop — an intentionally vulnerable website used in security trainings, awareness demos, CTFs, and as a testbed for security tools."
          }
        />
        <Project
          title={"The Nixu Challenge CTFs"}
          description={
            "The Nixu Challenge is a site where you can do Capture the Flag (CTF) challenges. The ones I have completed are: Device Control Pwnel, Device Control Pwnel - part 2, and The first secret"
          }
        />
        <Project
          title={"Merchant on rankk.org"}
          description={
            "With 62 challenge points I am Merchant rank 4^0 on the site rankk.org which is top 1103."
          }
        />
        <Project
          title={"WordPress based Webshop"}
          description={
            "I made a website for a company called Handpocket which sold hand sanitizer in mobile, smaller packages. The website was created using WooCommerce templates and extensions."
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button
          startIcon={<KeyboardArrowLeftIcon sx={{ color: "black" }} />}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "black",
            textDecoration: "none",
            backgroundColor: "#ffc500",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#b89316" },
            marginRight: "5%",
          }}
          onClick={() => {
            sideScroll(contentWrapper.current, 80, 350, -150);
          }}
        >
          Left
        </Button>
        <Button
          endIcon={<KeyboardArrowRightIcon sx={{ color: "black" }} />}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "black",
            textDecoration: "none",
            backgroundColor: "#ffc500",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#b89316" },
          }}
          onClick={() => {
            sideScroll(contentWrapper.current, 80, 400, 150);
          }}
        >
          Right
        </Button>
      </Box>
    </Box>
  );
}

export default Projects;
