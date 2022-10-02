import React from "react";
import { Avatar, Grid, styled, Typography } from "@mui/material";
import { useImages } from "../hooks/useImages";
import { Button } from "./@pjbrito/Button";

export const Hero = () => {
  const { hero } = useImages();
  return (
    <StyledGridContainer container spacing={0}>
      <StyledGridItem xs={12} md={12} lg={6}>
        <StyledHeader variant="h3">
          Contabilidade digital e consultoria
        </StyledHeader>
        <StyledTypography variant="body1" color="white">
          Estamos prontos para te ajudar a tornar sonhos financeiros em
          realidade. Trabalhamos com Contabilidade de maneira diferenciada,
          focando em sua necessidade e avaliando diariamente.
        </StyledTypography>
        <Button handleClick={(event) => console.log("click")}>
          Simular Plano
        </Button>
      </StyledGridItem>
      <StyledGridImage xs={12} md={8} lg={6} xl={6}>
        <StyledAvatar src={hero} variant="square" />
      </StyledGridImage>
    </StyledGridContainer>
  );
};

const StyledGridContainer = styled(Grid)`
  padding: 0 5vw;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.secondary.light} 0%,
    ${({ theme }) => theme.palette.secondary.light} 40%,
    ${({ theme }) => theme.palette.secondary.main} 100%
  );
  overflow: hidden;
`;

const StyledGridItem = styled(Grid)`
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5vh;
`;

const StyledGridImage = styled(Grid)`
  padding: 0;
  display: flex;
  margin: 0 auto;
`;

const StyledAvatar = styled(Avatar)`
  width: 100%;
  height: auto;
  max-height: 85vh;
`;

const StyledHeader = styled(Typography)`
  color: ${({ theme }) => theme.palette.background.default};
  font-weight: bold;
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.background.default};
`;
