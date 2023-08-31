import { Box, Divider } from "@mui/material";
import React from "react";
import zdjecie from "../assets/tlo.png";
export const Section1 = () => {
  return (
    <>
      <Box
        sx={{ height: "4px", backgroundColor: "#FF4359" }}
        id="menu-START"
      />
      <Box>
        <img
          src={zdjecie}
          className="img-tlo"
        />
      </Box>
    </>
  );
};
