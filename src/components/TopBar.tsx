import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { DropdownAreasAtuacao } from "./DropdownAreasAtuacao";
import { useImages } from "../hooks/useImages";

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElAreas, setAnchorElAreas] = useState<null | HTMLElement>(null);
  const { logoColor } = useImages();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAreasMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElAreas(event.currentTarget);
  };

  const handleCloseAreasMenu = () => {
    setAnchorElAreas(null);
  };
  const pages = ["Quem somos", "Serviços", "Áreas de Atuação", "Contato"];
  return (
    <StyledAppBar position="sticky" color="white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledLogoButton>
            <Avatar
              src={logoColor}
              alt="PJBrito Consultoria Contábil"
              variant="square"
              sx={{
                width: "220px",
                height: "auto",
              }}
            />
          </StyledLogoButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color="secondary"
                    variant="dark"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              edge="end"
              color="secondary"
              aria-label="menu"
              onClick={(event) => handleOpenNavMenu(event)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "2vw",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "5vw",
              }}
            >
              <StyledButtonNav
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
              >
                Quem somos
              </StyledButtonNav>
              <StyledButtonNav
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
              >
                Serviços
              </StyledButtonNav>
              <StyledButtonNav
                onClick={(event) => handleOpenAreasMenu(event)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
              >
                Áreas de Atuação
              </StyledButtonNav>
              <DropdownAreasAtuacao
                anchorEl={anchorElAreas}
                handleClose={handleCloseAreasMenu}
              />
              <StyledButtonNav
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
              >
                Contato
              </StyledButtonNav>
            </Box>
            <StyledButtonPortal color="secondary" disabled>
              Portal do Cliente
            </StyledButtonPortal>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  height: 15vh;
  justify-content: center;
  padding: 0 5vw;
`;

const StyledLogoButton = styled(Button)`
  max-height: 15vh;
  &:hover {
    background-color: transparent;
  }
`;
const StyledButtonPortal = styled(Button)`
  font-weight: 700;
  font-size: 1.2rem;
  border: 3px solid;
  text-transform: none;
  padding: 0 15px;
`;
const StyledButtonNav = styled(Button)`
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: none;
  color: #4c58a7;
  &:hover {
    background-color: transparent;
  }
`;
