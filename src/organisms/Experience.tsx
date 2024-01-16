import React, { useState } from "react";
import WorkDescription from "../molecules/WorkDescription";

interface WorkData {
  title: string;
  startDate: string;
  stopDate: string;
  company: string;
  description: string;
}

function Experience() {
  const workData: WorkData[] = [
    {
      title: "Penetration tester summer trainee",
      startDate: "Jun 2023",
      stopDate: "Sep 2023",
      company: "Nixu AB (Now DNV Cyber)",
      description:
        "Learned and gained hands-on experience in the field of pentesting, with a primary focus on web-based security, under the guidance of industry professionals.",
    },
    {
      title: "Summer intern as python developer",
      startDate: "Jul 2022",
      stopDate: "Aug 2022",
      company: "SAAB",
      description:
        "Wrote an integrated automation tool in python which helped facilitate the setup of python development environments.",
    },
    {
      title: "Facilitator in Problem Based Learning",
      startDate: "Sep 2023",
      stopDate: "Dec 2023",
      company: "Linköping University",
      description:
        "I was both a supervisor and a tutor for a group of 8 students in the courses Linear Algebra, Data Structures and Algorithms, Design and Development of Interactive Systems, and Diversity and Gender in Application Development.",
    },
    {
      title: "Barista",
      startDate: "2014",
      stopDate: "2018",
      company: "Kaffemoppen i Enskede AB",
      description:
        "Was a barista for the café shop on wheels that was known as Kaffemoppen. At times I worked the cash register as well.",
    },
  ];

  return (
    <>
      {workData.map((work, index) => (
        <WorkDescription
          key={index}
          title={work.title}
          startDate={work.startDate}
          stopDate={work.stopDate}
          company={work.company}
          description={work.description}
        />
      ))}
    </>
  );
}

export default Experience;
