import React from "react";
import BiotechIcon from "@mui/icons-material/Biotech";
import GavelIcon from "@mui/icons-material/Gavel";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccordianSet from "@/components/AccordianSet";
import CardSet from "@/components/CardSet";
import Hero from "@/components/Hero";
import SkillsCollection from "@/components/SkillsCollection";

const repositories = [
  {
    title: "RoundyWorld",
    description: "Github organization for my projects",
    link: "https://github.com/RoundyWorld",
    buttonText: "go to code",
  },
  {
    title: "snekly-front",
    description: "Frontend for Snekly",
    link: "https://github.com/RoundyWorld/snekly-front",
    buttonText: "go to code",
    tools: ["React", "Next.js", "TypeScript", "Material-UI"],
  },
  {
    title: "snekly-back (yet to come)",
    description: "Backend for Snekly",
    link: "YET TO COME",
    buttonText: "go to code",
    tools: ["Python", "FastAPI"],
  },
];

const jobHistory = [
  {
    icon: <GavelIcon />,
    title: "Senior Software Engineer",
    company: "Rasa Legal",
    summary:
      "Built software to make the process of clearing a criminal record simple and affordable for everyone.",
    detail: [
      "Worked with 2 other engineers and a small legal team to create software to automate criminal record clearance for Utah and Arizona.",
      "Led effort to unify, clean, and store data across different cloud SaaS systems.",
      "Supported intern project work to type over 150K legal documents using custom-built AI tools.",
      "Helped over 460 people to clear over 1400 criminal records so those individuals could continue moving forward without shame and improving their lives.",
    ],
  },
  {
    icon: <BiotechIcon />,
    title: "Software Engineer",
    company: "Recursion Pharmaceuticals",
    summary:
      "Created tools to support biological machine-learning algorythms and research scientists.",
    detail: [
      "Built and maintained 3 PostgreSQL databases to store experiment data for over 2K experiments testing over 1M compounds.",
      "Assisted in updating AI analysis pipelines that aggregated ~23 petabytes of raw experiment data.",
      "Enabled internal and partner scientists to investigate processed experiment data with custom-built full-stack visualization tools.",
      "Maintained and iterated on internal access APIs to allow scientists to investigate post-analysis data.",
      "Improved application response times from minutes to seconds and sub-seconds and increased application stability while supporting datasets that were ~6 times wider and ~3 times longer.",
    ],
  },
  {
    icon: <QueryStatsIcon />,
    title: "Software Engineer",
    company: "Domo",
    summary:
      "Piped data from social platforms into Domo's data visualization tools.",
    detail: [
      "Built and maintained over two dozen connectors to social platform web APIs using Java. Extracted data from web APIs according to company and customer specifications.",
      "Wrote unit and integration tests for connectors using the Mockito framework. Monitored connector health using Domo's visualization and data gathering tools.",
      "Built front-end connector tools with Gradle, HTML, CSS, and JavaScript and researched the feasibility of new customer-requested connectors.",
      "Integrated Microsoft Azure speech and lang Cognitive Services into customer-facing chatbots.",
    ],
  },
  {
    icon: <EditNoteIcon />,
    title: "Technical Writer",
    company: "Xactware",
    summary:
      "Wrote customer-facing and internal documentation for home insurance software.",
    detail: [
      "Transitioned user manuals to a context-sensitive, interactive, multimedia user guide. Created and maintained content for 19 different product flavors in 7 different languages.",
      "Collaborated with 3 software development Scrum teams, including attending product demos and daily stand-ups, writing on-screen content, and documenting sprint information.",
      "Initiated the creation of a company-specific style guide with 2 other people. Organized a style committee that created and refined the company style guide.",
      "Researched and proposed the creation of a new, unified method for handling language translation across departments.",
    ],
  },
];

export default function Resume() {
  return (
    <div>
      <Hero
        title="Lovina Roundy"
        subtitle="My website for pet projects and learning. It is a perpetual work in progress and in recursive refinement. Like me."
      />
      <CardSet
        sectionTitle="Code for snekly.com"
        content={repositories}
        cardsInRow={3}
      />
      <SkillsCollection />
      <AccordianSet sectionTitle="Experience" content={jobHistory} />
    </div>
  );
}
