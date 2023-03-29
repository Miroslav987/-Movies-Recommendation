import AppBar from "@mui/material/AppBar";
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
import "./Navbar.css";
import image from "../media/Navimage.png";
import { useState } from "react";

export const Navbar = () => {
  const [age, SetAge] = useState("");
  console.log(age);
  // function handleSave() {}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#282F39", color: "#FCCC25" }}
        position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            YOURMOVIE
          </Typography>

          <Box sx={{ flexGrow: 10 }} />
          <Box className="navicon" sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={0} color="error">
                <LikeIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit">
              <UserIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0.2 }} />
        </Toolbar>
      </AppBar>
      <Box
        className="block1Nav"
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fccc25",
        }}>
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
          }}>
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
            onChange={e => SetAge(e.target.value)}
            label="Age">
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
            onChange={e => SetAge(e.target.value)}
            label="Age">
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
            onChange={e => SetAge(e.target.value)}
            label="Age">
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
          }}>
          Искать
        </Button>
      </Box>
    </Box>
  );
};
