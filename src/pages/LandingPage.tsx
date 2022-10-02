import React from "react";
import { Box, Container, styled } from "@mui/material";
import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { Missao } from "../components/Missao";

export const LandingPage = () => {
  return (
    <StyledBox>
      <Hero />
      <Clients />
      <Missao />
    </StyledBox>
  );
};

const StyledBox = styled(Box)``;
