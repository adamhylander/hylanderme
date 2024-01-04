import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

function Resume() {
  const tabsList = [
    { value: "summary", label: "Summary" },
    { value: "career", label: "Career" },
    { value: "academics", label: "Academics" },
    // Add more values and labels here if needed
  ];

  const [value, setValue] = React.useState("summary");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
            color: "#FFA000", // Text color for the selected tab
            "&.MuiTab-textColorPrimary": {
              color: "#FFA000", // Text color for the selected tab when active
            },
          },
          "& .MuiTab-root": {
            color: "#FFA000", // Text color for unselected tabs
          },
        }}
      >
        {tabsList.map((tab, index) => (
          <Tab
            key={index} // Ensure each tab has a unique key
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
    </Container>
  );
}

export default Resume;
