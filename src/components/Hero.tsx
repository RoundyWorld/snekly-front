import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


interface AccordianSetProps {
  title: string;
  subtitle: string;
}

export default function Hero({title, subtitle}: AccordianSetProps) {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage:'radial-gradient(ellipse 80% 100% at 50% -15%, hsl(210, 100%, 80%), transparent)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 18, sm: 24 },
          pb: { xs: 4, sm: 8 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '60%' },
            }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
