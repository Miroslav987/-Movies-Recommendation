import {
  Card,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Pagination,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { Filter } from "../Navbar/Filter";

export const MyFilm = () => {
  return (
    <>
      <Box sx={{ position: "absolute" }}>
        <Filter />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: "10",
          margin: "50px auto",
          width: "80vw",
          height: "auto",
          background: "white",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "black",
            height: "150px",
            color: "white",
            borderBottom: "10px solid #FCCC25",
          }}>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", width: "75vw" }}>
            <Typography variant="h5">Мои Фильмы</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" name="" id="" />

              <Typography sx={{ paddingLeft: "10px" }}>
                {" "}
                Выделить всё
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0.1 }} />
        </Box>{" "}
        <Card
          sx={{
            margin: " auto",
            width: "80vw",
            height: "auto",
            background: "#4F565E",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            boxShadow: "none",
            borderRadius: "0px",
            borderBottom: "17px solid black",
          }}>
          <Box sx={{ margin: " 40px" }}>
            <CardMedia
              component="img"
              height="250"
              image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
              alt="Paella dish"
            />
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
            </Box>
            <Typography sx={{ width: "45vw" }}>
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
        <Card
          sx={{
            margin: " auto",
            width: "80vw",
            height: "auto",
            background: "#4F565E",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            boxShadow: "none",
            borderRadius: "0px",
            borderBottom: "17px solid black",
          }}>
          <Box sx={{ margin: " 40px" }}>
            <CardMedia
              component="img"
              height="250"
              image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
              alt="Paella dish"
            />
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
            </Box>
            <Typography sx={{ width: "45vw" }}>
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
        <Stack sx={{ background: "black" }}>
          <Pagination
            sx={{ margin: " 40px auto" }}
            count={10}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </>
  );
};
