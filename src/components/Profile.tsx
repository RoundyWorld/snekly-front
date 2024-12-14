import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import lovina from "@/assets/lovina.png";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import NextLink from "next/link";

export default function Profile() {
  return (
    <Container
      id="profile"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%", px: 1, py: 2 }}>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          sx={{ display: "flex" }}
          //   alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt="Github Avatar"
            src={lovina.src}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 9 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: { sm: "100%", md: "100%" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                sx={{
                  color: "text.primary",
                }}
              >
                Lovina Roundy
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ justifyContent: "right" }}
              >
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://github.com/LovinaRoundy"
                  aria-label="GitHub"
                  sx={{ alignSelf: "center" }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://www.linkedin.com/in/lovina-roundy/"
                  aria-label="LinkedIn"
                  sx={{ alignSelf: "center" }}
                >
                  <LinkedIn />
                </IconButton>
              </Stack>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              Middle aged in middle earth, looking for my next midlife crisis.
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
                  Extensive experience with rest APIs, full-stack development,
                  user interactions, and teen support
                </li>
              </ul>
            </Typography>
            <Button
              href={`/resume`}
              variant="outlined"
              color="info"
              size="small"
              component={NextLink}
            >
              resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
