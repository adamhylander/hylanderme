import React from "react";

interface ContactDetailProps {
  headliner: string;
  text: string;
  link?: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ link, headliner, text }) => {
  if (!link) {
    return (
      <div style={{ fontFamily: "monospace" }}>
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          {headliner}:
        </span>
        <br />
        <span style={{ color: "#aaa", fontSize: "16px" }}>{text}</span>
      </div>
    );
  } else {
    return (
      <div style={{ fontFamily: "monospace" }}>
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          {headliner}:
        </span>
        <br />
        <a href={link} style={{ color: "#aaa", fontSize: "16px" }}>{text}</a>
      </div>
    );
  }
};

export default ContactDetail;
