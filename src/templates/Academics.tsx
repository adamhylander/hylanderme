import { Typography, Box } from "@mui/material";
import Title from "../atoms/Title";

function Academics() {
  return (
    <Box sx={{ overflowY: "auto" }}>
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
        Academical Background
      </Typography>

      <Title
        title={"MSc in Information Technology"}
        startDate={"August 2019"}
        stopDate={"June 2024"}
        company={"Linköping University"}
      />

      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.1rem",
          marginTop: "5px",
        }}
      >
        Started the Master of Science in Information Technology programme in
        autumn 2019. I chose the master profile{" "}
        <a href="https://www.ida.liu.se/edu/ugrad/program/profiler/secsy/">
          Secure Systems
        </a>{" "}
        focusing on development of secure software systems, combining industrial
        software development courses with a focus on security. Moreover, as
        cybersecurity was deeply embedded into the programme I have gained a
        good understanding of the underlying theory. Some of the course projects
        include:
        <ul>
          <li>
            Using React I created a game called På-Spårdle which has two game
            modes. The main game mode called På-Spårdle where the player is
            supposed to guess a city based on real clues from the Swedish trivia
            tv-show På-Spåret. The other game mode is a geoguessr type game,
            where the player is presented with a video. After the video has
            played, the player has to guess where the contents of the video took
            place on a map.
          </li>
          <li>
            Reverse engineered the crackme Android applications from OWASP to
            compare dynamic and static analysis tools.
          </li>
          <li>
            Underwent all stages of app production including interviewing target
            audience and creating personas, evaluating concepts, constructing a
            prototype as well as developing parts of the app in Android Studios.
          </li>
        </ul>
      </div>

      <Title
        title={"Exchange Semester"}
        startDate={"September 2022"}
        stopDate={"February 2023"}
        company={"KU Leuven"}
      />

      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.1rem",
          marginTop: "5px",
        }}
      >
        In autumn 2023 I was on an exchange semester at the Faculty of
        Engineering Science at KU Leuven in Belgium. Some of the course projects
        there included:
        <ul>
          <li>
            CTF-based lab series focusing on buffer overflow attacks, including
            return-to-libc and format string vulnerabilities.
          </li>
          <li>
            Group project which added functionality to OWASPs Zed Attack Proxy
            (ZAP) such as a warning for corrupted images and zip bombs.
          </li>
        </ul>
      </div>
    </Box>
  );
}

export default Academics;
