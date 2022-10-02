import { Avatar, Box, Grid, ImageList, styled } from "@mui/material";
import React from "react";
import { useImages } from "../hooks/useImages";

export const Clients = () => {
  const { automar, centrocor, manaira, piresbezerra, samaritano } = useImages();
  return (
    <StyledGridContainer container spacing={0}>
      <StyledGridItem xs={6} md={4} lg={2}>
        <StyledAvatar src={automar} variant="square" />
      </StyledGridItem>
      <StyledGridItem xs={6} md={4} lg={2}>
        <StyledAvatar src={centrocor} variant="square" />
      </StyledGridItem>
      <StyledGridItem xs={6} md={4} lg={2}>
        <StyledAvatar src={manaira} variant="square" />
      </StyledGridItem>
      <StyledGridItem xs={6} md={4} lg={2}>
        <StyledAvatar src={piresbezerra} variant="square" />
      </StyledGridItem>
      <StyledGridItem xs={6} md={4} lg={2}>
        <StyledAvatar src={samaritano} variant="square" />
      </StyledGridItem>
    </StyledGridContainer>
  );
};

const StyledGridContainer = styled(Grid)`
  padding-left: 5vw;
  justify-content: space-evenly;
`;
const StyledGridItem = styled(Grid)`
  margin: auto 10px;
`;
const StyledAvatar = styled(Avatar)`
  width: 100%;
  height: auto;
`;
