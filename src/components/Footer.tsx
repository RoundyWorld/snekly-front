import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Flare, GitHub, LinkedIn } from '@mui/icons-material';


export default function Footer() {
  return (
    <Container
      sx={{
        color: 'var(--foreground-light)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 3, sm: 5 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 2, sm: 4 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Flare sx={{ mr: 1, fontSize: 'medium' }} />
          <Typography
            variant="body2"
            component="a"
            sx={{
              mr: 2,
              // display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            SNEKLY
          </Typography>
          <Typography variant="body2">
            Copyright © Lovina Roundy {new Date().getFullYear()}
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left' }}
          // sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/LovinaRoundy"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/lovina-roundy/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
