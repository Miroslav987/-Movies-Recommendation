import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import React from "react";
import "./Navinfo.css";
import UserIcon from "@mui/icons-material//AccountCircle";
import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";

export const Navinfo = () => {
  return (
    <>
      <Box className="modalprofile">
        <Box className="modalprofile_info">
          <Box
            className="textCurs"
            sx={{
              display: "flex",
              margin: "20px",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            {/* {user ? (
                <Typography>rthrt</Typography>
              ) : ( */}

            {/* )} */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <Typography sx={{ borderBottom: "1px solid white" }}>
                mirsichkar@gmail.com
              </Typography>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit">
                <UserIcon className="modal1Img" />
              </IconButton>
            </Box>

            <Link to="/newcards">
              <Typography>Домой</Typography>
            </Link>
            <Link to="/myFilm">
              <Typography>Мои фильмы</Typography>
            </Link>

            <Link to="/recommendation">
              <Typography>Фильмы</Typography>
            </Link>
            <Typography>Выйти</Typography>
          </Box>
        </Box>
        {/* ) : ( */}
        {/* <h1>Пусто</h1> */}
        {/* )} */}
      </Box>
    </>
  );
};
