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
import { Mainrouter2 } from "../../Mainrouter2";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/login");
  };
  // function handleSave() {}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#282F39", color: "#FCCC25" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            YOURMOVIE
          </Typography>

          <Box sx={{ flexGrow: 10 }} />
          <Box className="navicon" sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <LikeIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={navigateToLoginPage}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <UserIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0.2 }} />
        </Toolbar>
      </AppBar>
      <Mainrouter2 />
    </Box>
  );
};
