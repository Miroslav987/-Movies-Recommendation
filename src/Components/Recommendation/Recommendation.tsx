import {
  Button,
  Card,
  CardMedia,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import "./Recommendation.css";
import "../Cards/Cards.css";
import { Filter } from "../Navbar/Filter";
export const Recommendation = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <>
      <Filter />
      <Box>
        <Card
          sx={{
            margin: "30px auto",
            width: "93vw",
            height: "auto",
            background: "#fff0",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            boxShadow: "none",
          }}>
          <Box>
            <CardMedia
              sx={{ width: "280px" }}
              component="img"
              height="350"
              image="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg"
              alt="Paella dish"
            />{" "}
            <Box
              sx={{
                paddingTop: "12px",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <Typography
                sx={{
                  padding: "5px",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  fontSize: "20px",
                  border: "1px solid white",
                }}>
                +12
              </Typography>
              <Button variant="contained" color="warning">
                Добавить себе
              </Button>
            </Box>
          </Box>
          {/* <Box sx={{ flexGrow: 0.1 }} /> */}
          <Box
            sx={{
              width: "75vw",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              marginLeft: "30px",
            }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h4">Etgrthty Vregeg</Typography>
                <Typography>
                  rtgrthty tgrtg rgrtgrtgr rthrtgrt rthrthrt
                </Typography>
                <Typography>150 min</Typography>
              </Box>
              <Box>
                <Rating
                  sx={{ fontSize: "1.8" }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
            <Typography variant="h6">О фильме</Typography>
            <Typography sx={{ width: "60vw" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate exercitationem voluptatibus quod, reiciendis quae, nisi
              voluptates temporibus odit sequi explicabo ut et iure unde amet?
              Earum ad, vel dolores nisi doloremque molestiae possimus, est
              dignissimos asperiores totam culpa, nemo voluptate accusamus
              aperiam? Voluptates beatae consectetur saepe quaerat nesciunt,
              nostrum quisquam explicabo officiis laudantium autem similique
              sapiente dolorem ducimus voluptatum, minima ipsa? Ratione atque
              iure magni ex alias ipsum est eaque, rerum ipsa quia? Saepe nemo,
              unde voluptates accusantium rem consectetur animi dolo
            </Typography>
          </Box>{" "}
          {/* <Box sx={{ flexGrow: 1 }} /> */}
        </Card>
        <Box sx={{ width: "100%", borderBottom: "1px solid white" }}></Box>
      </Box>

      <Stack>
        <Pagination
          sx={{ margin: " 20px auto" }}
          count={10}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </>
  );
};
