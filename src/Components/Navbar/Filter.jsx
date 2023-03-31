import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import UserIcon from "@mui/icons-material//AccountCircle";
import {
  Button,
  FormControl,
  ImageList,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import image from "../media/Navimage.png";

import { Phone, call } from "./Image";
// let iphone: Phone = new Phone("iPhone X");
// call(iphone);

export const Filter = () => {
  const [age, SetAge] = useState("");
  console.log(age);
  return (
    <>
      <Box
        className="block1Nav"
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fccc25",
        }}
      >
        <img className="navimg" src={image} alt="" />
        <Box sx={{ flexGrow: 0.01 }} />
        <Typography
          sx={{
            color: "white",
            transform: "scale(1.2, 2)",
            fontFamily: "math",
            textAlign: "center",
            fontSize: "50px",
            textShadow: "0px 1px 8px #0000004d",
          }}
        >
          ЛУЧШИЕ <br /> РЕКОМЕНДОВАННЫЕ <br /> ФИЛЬМЫ
        </Typography>
        <Box sx={{ flexGrow: 0.01 }} />
      </Box>
      <Box className="FilterNav">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            По жанру
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={(e) => SetAge(e.target.value)}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1"}>Боевик</MenuItem>
            <MenuItem value={"2"}>Детектив</MenuItem>
            <MenuItem value={"3"}>Драма</MenuItem>
            <MenuItem value={"4"}>Документальный</MenuItem>
            <MenuItem value={"5"}>Вестерн</MenuItem>
            <MenuItem value={"6"}>Комедия</MenuItem>
            <MenuItem value={"7"}>Криминал</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            По тегам
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={(e) => SetAge(e.target.value)}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1"}>Боевик</MenuItem>
            <MenuItem value={"2"}>Детектив</MenuItem>
            <MenuItem value={"3"}>Драма</MenuItem>
            <MenuItem value={"4"}>Документальный</MenuItem>
            <MenuItem value={"5"}>Вестерн</MenuItem>
            <MenuItem value={"6"}>Комедия</MenuItem>
            <MenuItem value={"7"}>Криминал</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            По году выпуска
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={(e) => SetAge(e.target.value)}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1"}>Боевик</MenuItem>
            <MenuItem value={"2"}>Детектив</MenuItem>
            <MenuItem value={"3"}>Драма</MenuItem>
            <MenuItem value={"4"}>Документальный</MenuItem>
            <MenuItem value={"5"}>Вестерн</MenuItem>
            <MenuItem value={"6"}>Комедия</MenuItem>
            <MenuItem value={"7"}>Криминал</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            background: "#FFD336",
            color: "white",
            boxShadow: "0px 103px 41px rgba(0, 0, 0, 0.01)",
            textTransform: "none",
            gap: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            transform: "scale(1.1,1)",
          }}
        >
          Искать
        </Button>
      </Box>
    </>
  );
};

export default Filter;
