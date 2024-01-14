import React, { useState } from "react";
import WorkDescription from "../atoms/WorkDescription";

interface WorkData {
  title: string;
  startDate: string;
  stopDate: string;
  company: string;
}

function Experience() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const workData: WorkData[] = [
    {
      title: "Penetration tester summer trainee",
      startDate: "Jun 2023",
      stopDate: "Sep 2023",
      company: "Nixu AB (Now DNV Cyber)",
    },
    {
      title: "Summer intern as python developer",
      startDate: "Jul 2022",
      stopDate: "Aug 2022",
      company: "SAAB",
    },
    {
      title: "Facilitator in Problem Based Learning",
      startDate: "Sep 2023",
      stopDate: "Dec 2023",
      company: "Linköping University",
    },
    {
      title: "Barista",
      startDate: "2014",
      stopDate: "2018",
      company: "Kaffemoppen i Enskede AB",
    },
  ];

  const handleWorkClick = (index: number) => {
    setSelectedWork(index);
  };

  return (
    <>
      {workData.map((work, index) => (
        <WorkDescription
          key={index}
          title={work.title}
          startDate={work.startDate}
          stopDate={work.stopDate}
          company={work.company}
          isSelected={selectedWork === index}
          onClick={() => handleWorkClick(index)}
        />
      ))}
    </>
  );
}

export default Experience;
