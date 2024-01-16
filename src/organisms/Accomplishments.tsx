import AccomplishmentDescription from "../molecules/AccomplishmentDescription";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Accomplishments() {
  interface AccomplishmentData {
    title: string;
    date: string;
    description: string;
  }
  const accomplishmentData: AccomplishmentData[] = [
    {
      title: "Swedish Youth Handball Champion",
      date: "2014",
      description:
        "I was a right wing in HK Silwing/Troja P99 that won many prestigious tournaments and awards, including Norden Cup, Skadevi Cup and Partille Cup. In 2014 we were crowned Swedish youth champions for boys born 1999.",
    },
    {
      title: "Miljöansvarig of Näringslivsutskottet",
      date: "2020/2021",
      description:
        "Spoke with companies about collaborating and holding events with Datateknologsektionen at Linköping University. As Miljöansvarig I was responsible for environmental questions and the well-being of the committee.",
    },
    {
      title: "Web developer for LINK-dagarna",
      date: "2021",
      description:
        "I was a member of the webgroup at Link-dagarna. Together we designed the React-based website which core is still used for the 2023 website.",
    },
    {
      title: "Class Sponsor",
      date: "2020",
      description:
        'I took the role of a "klassfadder" during Datateknologsektionens inauguration period for newcoming students. Being a klassfadder I was responsible for a class of 20 students and managed a group of 7 other faddrar.',
    },
  ];

  return (
    <>
      {accomplishmentData.map((accomplishment, index) => (
        <AccomplishmentDescription
          key={index}
          title={accomplishment.title}
          date={accomplishment.date}
          description={accomplishment.description}
        />
      ))}
    </>
  );
}

export default Accomplishments;
