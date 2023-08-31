import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Link,
  Collapse,
  Paper,
  Box,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/LOGO_Placeholder.svg";
import { Formularz } from "./Formularz";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
const menuItems = ["START", "O MNIE", "GALERIA", "KONTAKT"];
const icons = ["youtube", "facebook", "instagram"];
export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <AppBar
      sx={{ bgcolor: "white", boxShadow: "none" }}
      position="fixed"
    >
      <Toolbar sx={{ p: 1 }}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              spacing={6}
              alignItems="center"
            >
              <img
                src={logo}
                loading="lazy"
              />
              {!mobile &&
                menuItems.map((item) => (
                  <Link
                    key={item}
                    href={`#menu-${item}`}
                    underline="none"
                    onClick={() => {
                      if (item == "KONTAKT") setModalOpen(true);
                    }}
                  >
                    <Typography
                      variant="button"
                      color="#AFAFAF"
                      noWrap
                      fontFamily="Montserrat"
                      sx={{ cursor: "pointer" }}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              {!mobile &&
                icons.map((icon) => (
                  <IconButton key={icon}>
                    <img
                      height="29px"
                      src={`/${icon}.svg`}
                    />
                  </IconButton>
                ))}
              {mobile && (
                <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
      <Formularz
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Collapse
        in={mobileMenuOpen}
        timeout={350}
        collapsedSize={0}
      >
        <Paper
          elevation={1}
          sx={{ pt: 2 }}
        >
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem}
              href={`#menu-${menuItem}`}
              underline="none"
              onClick={() => {
                setMobileMenuOpen(false);
                if (menuItem == "KONTAKT") setModalOpen(true);
              }}
            >
              <Box sx={{ p: 1.5, mx: 1 }}>
                <Typography
                  variant="h4"
                  fontFamily="Montserrat"
                  fontWeight={600}
                >
                  {menuItem}
                </Typography>
              </Box>
            </Link>
          ))}
        </Paper>
      </Collapse>
    </AppBar>
  );
};
