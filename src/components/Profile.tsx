import Container from "@mui/material/Container";
import CV from "../images/cv.png";
import ContactInfo from "./ContactInfo";

function Profile() {
  return (
    <Container
      style={{ paddingLeft: 0, paddingRight: 0 }}
      sx={{
        borderRadius: "18px",
        width: "100%",
        height: "660px",
        backgroundColor: "#fafafa",
        paddingTop: "10px",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <h2 style={{ fontFamily: "monospace", margin: 0, marginLeft: "3%" }}>
        Adam Hylander
      </h2>
      <h3
        style={{
          fontFamily: "monospace",
          color: "#bbb",
          margin: 0,
          marginLeft: "3%",
          marginBottom: "10px",
        }}
      >
        MSc Information Technology
      </h3>

      <img
        src={CV}
        alt="cv"
        width="100%"
        style={{
          WebkitClipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
          clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
        }}
      />

    <ContactInfo />

    </Container>

  );
}

export default Profile;
