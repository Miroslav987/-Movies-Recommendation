import React from "react";
import { Box, Card, Pagination, Stack, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export const NewCards = () => {
  return (
    <>
      <Box
        sx={{
          margin: "100px auto",
          width: "90vw",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}>
        <Card
          sx={{
            boxShadow: " 0px 5px 20px 0px #00000099",
            margin: "15px",
            maxWidth: 345,
            background: "white",
          }}>
          <CardMedia
            sx={{ padding: "15px", borderRadius: "22px" }}
            component="img"
            height="250"
            image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Paella dish"
          />
          <Box sx={{ width: "90%", margin: " 15px auto" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              LLkjgyuguy
            </Typography>

            <Typography sx={{ margin: "2px 0px 5px 0px " }}>
              2013год, 2: 50, боевик, фантастика
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsam aliquid eveniet recusandae porro doloribus et consectetur
              ullam nobis est.
            </Typography>
          </Box>
        </Card>{" "}
        <Card
          sx={{
            boxShadow: " 0px 5px 20px 0px #00000099",
            margin: "15px",
            maxWidth: 345,
            background: "white",
          }}>
          <CardMedia
            sx={{ padding: "15px", borderRadius: "22px" }}
            component="img"
            height="250"
            image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Paella dish"
          />
          <Box sx={{ width: "90%", margin: " 15px auto" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              LLkjgyuguy
            </Typography>

            <Typography sx={{ margin: "2px 0px 5px 0px " }}>
              2013год, 2: 50, боевик, фантастика
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsam aliquid eveniet recusandae porro doloribus et consectetur
              ullam nobis est.
            </Typography>
          </Box>
        </Card>{" "}
        <Card
          sx={{
            boxShadow: " 0px 5px 20px 0px #00000099",
            margin: "15px",
            maxWidth: 345,
            background: "white",
          }}>
          <CardMedia
            sx={{ padding: "15px", borderRadius: "22px" }}
            component="img"
            height="250"
            image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Paella dish"
          />
          <Box sx={{ width: "90%", margin: " 15px auto" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              LLkjgyuguy
            </Typography>

            <Typography sx={{ margin: "2px 0px 5px 0px " }}>
              2013год, 2: 50, боевик, фантастика
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsam aliquid eveniet recusandae porro doloribus et consectetur
              ullam nobis est.
            </Typography>
          </Box>
        </Card>
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
