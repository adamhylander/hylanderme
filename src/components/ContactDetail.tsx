import React from "react";

interface ContactDetailProps {
  headliner: string;
  text: string;
  link?: string;
}

const ContactDetail: React.FC<ContactDetailProps> = (props) => {
  if (!props.link) {
    return (
      <div style={{ fontFamily: "monospace" }}>
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          {props.headliner}:
        </span>
        <br />
        <span style={{ color: "#aaa", fontSize: "16px" }}>{props.text}</span>
      </div>
    );
  } else {
    return (
      <div style={{ fontFamily: "monospace" }}>
        <span style={{ fontWeight: "600", fontSize: "18px" }}>
          {props.headliner}:
        </span>
        <br />
        <a href={props.link} style={{ color: "#aaa", fontSize: "16px" }}>{props.text}</a>
      </div>
    );
  }
};

export default ContactDetail;
