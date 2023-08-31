import React from "react";
import { Navbar } from "./components/Navbar";
import { Section1 } from "./components/Section1";
import { CssBaseline } from "@mui/material";
import { Section2 } from "./components/Section2";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Section3 } from "./components/Section3";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
      </ThemeProvider>
    </>
  );
};
