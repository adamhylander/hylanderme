import { Typography, Box } from "@mui/material";

function Academics() {
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
        Academical Background
      </Typography>

      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
          fontSize: "1.2rem",
        }}
      >
        MSc in Information Technology, Linköping University, 2024
      </Typography>

      <div style={{ fontFamily: "Roboto Mono", fontSize: "1rem" }}>
        Started the Master of Science in Information Technology programme in
        autumn 2019. Luckily for me, cybersecurity was deeply embedded into the
        programme. Some of the course programmes include:
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

      <Typography
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
          fontSize: "1.2rem",
        }}
      >
        Exchange Semester, KU Leuven, 2022
      </Typography>
      <div style={{ fontFamily: "Roboto Mono", fontSize: "1rem" }}>
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
            (ZAP) such as a warning for corrupted images and unsafe zipped
            downloads.
          </li>
        </ul>
      </div>
    </Box>
  );
}

export default Academics;
