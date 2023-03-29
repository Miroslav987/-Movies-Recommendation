import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import UserIcon from "@mui/icons-material//AccountCircle";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box
          sx={{
            marginTop: "150px",
            with: "100vw",
            height: "auto",
            background: "#4F565D",
          }}>
          <Typography
            variant="h6"
            sx={{
              width: "90vw",
              margin: " auto",
              paddingTop: "100px",
              paddingBottom: "100px",
              color: "white",
              letterSpacing: "1px",
            }}>
            Кино (кинематограф) — вид искусства с использованием движущихся
            изображений, важнейшая часть современной культуры. В киноискусстве
            сочетаются литература, изобразительное искусство, музыка и театр.
            Киносценарии представляют собой литературную основу, но образы в
            кино визуальные. Из театра в кинематограф пришли декорации, опыт
            постановки мизансцен, выбор актёров. Живопись дала кино построение
            кадров и цветовые решения. Музыка дополняет видеоряд и делает
            выразительнее сюжетные линии. Современное кино делится на
            художественное и документальное или игровое и неигровое. В новом
            веке появился цифровой кинематограф, теперь фильмы можно снимать без
            киноплёнки. Во многих странах киноиндустрия является важной частью
            экономики.
          </Typography>
        </Box>
        <AppBar
          sx={{ background: "#282F39", color: "#FCCC25" }}
          position="static">
          <Toolbar sx={{ height: "80px" }}>
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

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "70px",
                color: "white",
              }}>
              <Typography onClick={() => navigate("/newcards")}>
                Новинки
              </Typography>
              <Typography onClick={() => navigate("/likecards")}>
                Понравившиеся
              </Typography>
              <Typography onClick={() => navigate("/endcards")}>
                Последние просмотренные
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1.3 }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
