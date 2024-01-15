import { Box, Typography } from "@mui/material";

function Publications() {
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
        Publications
      </Typography>

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
          Longitudinal Analysis of Wildcard Certificates in the WebPKI
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
          David Hasselquist, Ludvig Bolin, Emil Carlsson, Adam Hylander, Martin
          Larsson, Erik Voldstad, and Niklas Carlsson, Proc. IFIP Networking,
          Barcelona, Spain, June 2023.
        </Typography>
      </div>

      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.1rem",
          padding: "10px",
        }}
      >
        My bachelor's thesis co-author and I as well as another bachelor's
        thesis group used the knowledge presented in respective thesis as well
        as some additional research to help publish a paper in 2023 IFIP
        Networking Conference (IFIP Networking).
      </div>

      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "1.1rem",
          padding: "10px",
        }}
      >
        <Typography
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "black",
            textDecoration: "none",
            fontSize: "1.15rem",
          }}
        >
          Abstract
        </Typography>
        The use of wildcard certificates and multi-domain certificates can
        impact how sensitive a certificate is to attacks and how many
        (sub)domains and machines may be impacted if a private key is
        compromised. Unfortunately, there are no globally agreed-upon best
        practices for these certificate types and the recommendations have
        changed many times over the years. In this paper, we present a 10-year
        longitudinal analysis of the usage of wildcard certificates and
        multi-domain certificates on the internet. Our analysis captures and
        highlights substantial differences in the heterogenous wildcard and
        multi-domain certificate practices. The results also show that there are
        several ways that CAs and domain owners have chosen to improve their
        practices, with many appearing to reduce the number of domains (and
        subdomains) for which each certificate is responsible.
      </div>
    </Box>
  );
}

export default Publications;
