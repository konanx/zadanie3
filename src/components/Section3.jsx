import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/tlo.png";
import { Box, Divider, Typography } from "@mui/material";

export const Section3 = () => {
  return (
    <>
      <Box id="menu-GALERIA"></Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={14}
        mb={12}
      >
        <Typography
          textAlign="center"
          variant="h2"
          fontFamily="Montserrat"
          fontWeight={800}
          sx={{ borderBottom: "2px solid #FF4359", paddingBottom: "15px" }}
        >
          GALERIA
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { lg: "70%" } }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src="./slide1.png"
                loading="lazy"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  img-fluid"
                src="./slide2.png"
                loading="lazy"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  img-fluid"
                src="./slide3.png"
                loading="lazy"
              />
            </Carousel.Item>
          </Carousel>
        </Box>
      </Box>
    </>
  );
};
