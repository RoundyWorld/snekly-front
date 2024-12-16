import * as React from "react";
import Hero from "@/components/Hero";
import CardSet from "@/components/CardSet";
import TechCollection from "@/components/TechCollection";
import Contributors from "@/components/Contributers";
// import ProTip from '@/components/ProTip';
// import Copyright from '@/components/Copyright';

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

export default function About() {
  return (
    <div>
      <Hero
        title="Snekly.com"
        subtitle="A website for pet projects and learning. It is a perpetual work in progress and in recursive refinement. Like us."
      />
      <CardSet
        sectionTitle="Code for snekly.com"
        content={repositories}
        cardsInRow={3}
      />
      <TechCollection />
      <Contributors />
    </div>
  );
  // return (
  //   <Container maxWidth="lg">
  //     <Box
  //       sx={{
  //         my: 4,
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
  //         Material UI - Next.js example in TypeScript THIS IS A CHANGE
  //       </Typography>
  //       <Box sx={{ maxWidth: "sm" }}>
  //         <Button variant="contained" component={NextLink} href="/">
  //           Go to the home page
  //         </Button>
  //       </Box>
  //       {/* <ProTip /> */}
  //       {/* <Copyright /> */}
  //     </Box>
  //   </Container>
  // );
}
