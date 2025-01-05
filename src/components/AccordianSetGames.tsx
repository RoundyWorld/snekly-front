"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordianSetProps {
  sectionTitle: string;
  content: {
    icon: JSX.Element;
    title: string;
    description: string;
    detail: JSX.Element;
  }[];
}

export default function AccordianSetGames({
  sectionTitle,
  content,
}: AccordianSetProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="accordianset"
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
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        {sectionTitle}
      </Typography>
      <Box sx={{ width: "100%", textAlign: "left" }}>
        {content.map((item, index) => (
          <Accordion
            key={item.title + index}
            expanded={expanded === item.title + index}
            onChange={handleChange(item.title + index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.title}-content`}
              id={`${item.title}-header`}
            >
              <>
                <span
                  style={{
                    marginRight: "1rem",
                    marginTop: "0.4rem",
                    color: "var(--foreground-secondary)",
                  }}
                >
                  {item.icon}
                </span>
                <span>
                <Typography component="h3" variant="h5">
                  {item.title}
                </Typography>
                <Typography component="sub" variant="subtitle1" color="text.secondary">
                    {item.description}
                </Typography>
                </span>
              </>
            </AccordionSummary>
            <AccordionDetails sx={{ mx: 1.5 }}>
              {item.detail}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
