import { Box, Tab, Tabs, Container } from "@mui/material";
import React from "react";
import Summary from "../templates/Summary";
import Career from "../templates/Career";
import Academics from "../templates/Academics";
import Publications from "../templates/Publications";
import Achievtivities from "../templates/Achievtivities";

function Resume() {
  const tabsList = [
    { value: "Summary", label: "Summary" },
    { value: "Career", label: "Career" },
    { value: "Academics", label: "Academics" },
    { value: "Publications", label: "Publications" },
    { value: "Achievtivities", label: "Achievements & Extra-Curricular" },
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
      case "Achievtivities":
        return <Achievtivities />;
      default:
        return <Summary />;
    }
  };

  return (
    <Container
      style={{ paddingLeft: 0, paddingRight: 0 }}
      sx={{
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
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="primary tabs example"
        sx={{
          marginLeft: "2%",
          marginRight: "2%",
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
