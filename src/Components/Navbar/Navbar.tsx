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
import { useState } from "react";
import { Filter } from "./Filter";
import { Recommendation } from "../Recommendation/Recommendation";
import { Navinfo } from "./NavInfo/Navinfo";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [modal1, setModal1] = useState("none");
  return (
    <>
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
            <Box
              className="navicon"
              sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit">
                <SearchIcon />
              </IconButton>
              <Link to="/likecards">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit">
                  <Badge badgeContent={0} color="error">
                    <LikeIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                onMouseMove={() => setModal1("block")}
                onMouseOut={() => setModal1("none")}
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
          onMouseMove={() => setModal1("block")}
          onMouseOut={() => setModal1("none")}
          sx={{ display: modal1 }}>
          <Navinfo />
        </Box>
      </Box>
    </>
  );
};
