import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import "./Cards.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MainRouter } from "../../MainRouter";
export const Cards = () => {
  return (
    <>
      <Box className="Containercard ">
        <Box className="Categcard">
          <Box className="CategcardText">
            <article id="newcard">
              <NavLink to="/newcards">
                <Box className="boxline">
                  <Typography>Новинки</Typography>
                  <Box className="textline"></Box>
                </Box>
              </NavLink>
            </article>
            <NavLink to="/endcards">
              <Box className="boxline">
                <Typography>Последние просмотренные</Typography>
                <Box className="textline"></Box>
              </Box>
            </NavLink>
            <NavLink to="/likecards">
              <Box className="boxline">
                <Typography>Понравившиеся</Typography>
                <Box className="textline"></Box>
              </Box>
            </NavLink>
          </Box>
          <Box className="line"></Box>
        </Box>
        <MainRouter />
      </Box>
    </>
  );
};
