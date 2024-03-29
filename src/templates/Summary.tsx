import { Typography, Box } from "@mui/material";

function Summary() {
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
        }}
      >
        About Me
      </Typography>
      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.4rem",
          padding: "0px 0px 10px 10px",
        }}
      >
        My name is Adam Hylander and I am a 24 year old student doing his final
        semester Master of Science in Information Technology at Linköping
        University. I have a passion for the cybersecurity industry with a
        particular interest in penetration testing and I am currently in the
        process of doing my master thesis at FOI (Swedish Defense Research
        Agency).
      </div>
      <br />
      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.4rem",
          padding: "0px 0px 10px 10px",
        }}
      >
        I find myself very social and spend most of my time around other people.
        On my spare time I enjoy playing a round of golf, doing activities, play
        video games, or play board games. I am also spending a lot of time on
        cybersecurity learning platforms, such as tryhackme.com, and am looking
        to give CTF challenges and competitions a go in the near future.
      </div>
      <Box>
        <Box style={{ width: "20%", height: "100px", borderRadius: "10px", }}>

        </Box>
      </Box>
    </Box>
  );
}

export default Summary;
