import { Box, Tab, Tabs, Container } from "@mui/material";
import React from "react";
import {
  Summary,
  Career,
  Academics,
  Publications,
  Skills,
  ExtraCurricular,
  Projects,
} from "../templates";

function Resume() {
  const tabsList = [
    { value: "Summary", label: "Summary" },
    { value: "Career", label: "Career" },
    { value: "Academics", label: "Academics" },
    { value: "Publications", label: "Publications" },
    { value: "Projects", label: "Projects" },
    { value: "ExtraCurricular", label: "Extra-Curricular" },
    { value: "Skills", label: "Skills" },
  ];

  const [value, setValue] = React.useState("Summary");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderTabComponent = () => {
    switch (value) {
      case "Summary":
        return <Summary />;
      case "Career":
        return <Career />;
      case "Academics":
        return <Academics />;
      case "Publications":
        return <Publications />;
      case "Projects":
        return <Projects />;
      case "ExtraCurricular":
        return <ExtraCurricular />;
      case "Skills":
        return <Skills />;
      default:
        return <Summary />;
    }
  };

  return (
    <Container
      style={{ paddingLeft: 0, paddingRight: 0 }}
      sx={{
        overflowY: "auto",
        maxWidth: "none !important",
        borderRadius: "18px",
        width: "100%",
        height: "630px",
        backgroundColor: "#fafafa",
        paddingTop: "10px",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="primary tabs example"
        sx={{
          paddingLeft: "1%",
          paddingRight: "1%",
          "& .MuiTabs-indicator": {
            backgroundColor: "#FFA000",
          },
          "& .Mui-selected": {
            color: "#FFA000",
            "&.MuiTab-textColorPrimary": {
              color: "#FFA000",
            },
          },
          "& .MuiTab-root": {
            color: "#FFA000",
          },
          "& .MuiTabs-scrollButtons.Mui-disabled": {
            opacity: 0.3,
          },
          "& .MuiTabs-scrollButtons": {
            color: "#D46E00",
            borderRadius: "18px",
            width: "2%",
            margin: "1%",
          },
        }}
      >
        {tabsList.map((tab, index) => (
          <Tab key={index} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
      <Box style={{ padding: "20px" }}>{renderTabComponent()}</Box>
    </Container>
  );
}

export default Resume;
