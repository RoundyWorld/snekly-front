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

export default function SkillsCollection() {
  return (
    <Container
      id="testimonials"
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
          Skills
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
          component={"span"}
        >
          It may be hard for me to say it, but I am an expert. I know many
          things, I do hard things, and I push forward with a fierce
          persistence.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.primary" }}
          component={"span"}
        >
          <ul style={{ textAlign: "left" }}>
            <li>7+ years software development</li>
            <li>6+ years professional writing</li>
            <li>20+ years momming</li>
            <li>
              Extensive experience with rest APIs, full-stack development, user
              interactions, and teen support
            </li>
          </ul>
        </Typography>
      </Box>

      <Grid container sx={{ justifyContent: "center", mt: 0.5 }}>
        {logos.map((logo, index) => (
          <Grid key={logo.title + index}>
            <img src={logo.image} alt={logo.title} style={logoStyle} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
