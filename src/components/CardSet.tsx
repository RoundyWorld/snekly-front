import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Button, CardActions, Link } from "@mui/material";

interface CardSetProps {
  sectionTitle: string;
  content: {
    title: string;
    description: string;
    link: string;
    tools?: string[];
  }[];
  cardsInRow: number;
}

const rowSize: { [key: number]: number } = {
  4: 3,
  3: 4,
  2: 6,
};

// 4 cards = md: 3
// 3 cards = md: 4
// 2 cards = md: 6

export default function CardSet({
  sectionTitle,
  content,
  cardsInRow = 3,
}: CardSetProps) {
  return (
    <Container
      id="cardset"
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
          {sectionTitle}
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: "100%", px: 1 }}>
        {content.map((repository, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: rowSize[cardsInRow] }}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                textAlign: "left",
                padding: 1,
              }}
            >
              <Link
                href={repository.link}
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="none"
              >
                <CardHeader
                  title={repository.title}
                  subheader={repository.description}
                />
              </Link>
              <CardContent>
                {repository.tools && (
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                  >
                    Tools: {repository.tools.join(", ")}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={repository.link}
                  target="_blank"
                  rel="noopener"
                >
                  Go to code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
