import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import LogoReactLogo from "@/assets/logoReact.png";
import LogoRestAPI from "@/assets/logoRestApi.png";
import LogoMaterialUI from "@/assets/logoMaterialUI.png";
import LogoTypeScript from "@/assets/logoTypeScript.png";
import LogoPython from "@/assets/logoPython.png";
import LogoGCP from "@/assets/logoGCP.png";
import LogoPostgreSQL from "@/assets/logoPostgreSQL.png";
import LogoNextJS from "@/assets/logoNextJS.png";
// import Image from "next/image";

const logos = [
  {
    title: "Google Cloud Platform",
    description:
      "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.",
    link: "https://cloud.google.com/",
    image: LogoGCP.src,
  },
  {
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system.",
    link: "https://www.postgresql.org/",
    image: LogoPostgreSQL.src,
  },
  {
    title: "Python",
    description:
      "Python is an interpreted, high-level and general-purpose programming language.",
    link: "https://www.python.org/",
    image: LogoPython.src,
  },
  {
    title: "Rest API",
    description:
      "A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.",
    link: "https://en.wikipedia.org/wiki/Representational_state_transfer",
    image: LogoRestAPI.src,
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a strongly typed, object oriented, compiled language",
    link: "https://www.typescriptlang.org/",
    image: LogoTypeScript.src,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    link: "https://reactjs.org/",
    image: LogoReactLogo.src,
  },
  {
    title: "Next.js",
    description: "The React Framework for Production",
    link: "https://nextjs.org/",
    image: LogoNextJS.src,
  },
  {
    title: "Material-UI",
    description: "React components for faster and easier web development",
    link: "https://mui.com/",
    image: LogoMaterialUI.src,
  },
];

const logoStyle = {
  width: "100px",
  // height: '80px',
  margin: "0 32px",
  opacity: 0.7,
};

export default function TechCollection() {
  return (
    <Container
      id="tech"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 4, sm: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Tech
        </Typography>
      </Box>
      <Grid container sx={{ justifyContent: "center", mt: 0.5 }}>
        {logos.map((logo, index) => (
          <Grid key={logo.title + index}>
            {/* <Image
              src={logo.image}
              alt={logo.title}
              width={100}
              height={80}
              style={logoStyle}
            /> */}
            <img src={logo.image} alt={logo.title} style={logoStyle} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
