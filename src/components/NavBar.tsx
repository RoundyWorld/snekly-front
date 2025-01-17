"use client";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SneklyIcon from "@/components/SneklyIcon";
import NextLink from "next/link";
import Avatar from "@mui/material/Avatar";
import snake from "@/assets/snake.png";
import { usePathname } from "next/navigation";

interface NavBarProps {
  pages: string[];
  rootPage: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: "#05336140",
  // backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

export default function NavBar({ pages, rootPage }: NavBarProps) {
  const pathname = usePathname();
  const pathWithoutSlash = pathname.startsWith("/")
    ? pathname.slice(1)
    : pathname;

  const [selectedPage, setSelectedPage] = useState(() => {
    if (pathWithoutSlash === "") return rootPage;
    else if (pages.includes(pathWithoutSlash)) return pathWithoutSlash;
    else return "";
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <SneklyIcon />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`/${page}`}
                  variant="text"
                  color="info"
                  size="small"
                  component={NextLink}
                  onClick={() => setSelectedPage(page)}
                  style={{
                    backgroundColor:
                      selectedPage === page
                        ? "rgba(211, 211, 211, 0.25)"
                        : "inherit",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Avatar alt="Snek" src={snake.src} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    href={`/${page}`}
                    onClick={() => {
                      setSelectedPage(page);
                      setOpen(false);
                    }}
                    component={NextLink}
                  >
                    {page}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
