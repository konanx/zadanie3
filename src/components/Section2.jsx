import { Box, CssBaseline, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import grid from "../assets/grid.png";
export const Section2 = () => {
  return (
    <Box
      mt={14}
      id="menu-O MNIE"
    >
      <Grid
        container
        sx={{ width: "100%" }}
        spacing={{
          xl: 14,
          md: 0,
        }}
      >
        <Grid
          xl={6}
          md={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={grid}
            className="img-grid"
          />
        </Grid>
        <Grid
          xl={6}
          md={12}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            mt={6}
            variant="h2"
            fontFamily="Montserrat"
            fontWeight={800}
            letterSpacing="1.2rem"
            color="black"
          >
            O MNIE
          </Typography>
          <Divider
            sx={{ color: "red", background: "red", height: "2px", mt: 2 }}
          />
          <Stack
            spacing={3}
            mt={6}
          >
            <Typography fontFamily="Montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography fontFamily="Montserrat">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut
            </Typography>
            <Typography fontFamily="Montserrat">
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
