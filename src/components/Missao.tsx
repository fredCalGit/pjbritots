import React from "react";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListSubheader,
  styled,
  Typography,
} from "@mui/material";
import { useImages } from "../hooks/useImages";
import { Button } from "./@pjbrito/Button";

export const Missao = () => {
  const { flow } = useImages();
  return (
    <StyledGridContainer container spacing={0}>
      <StyledGridItem xs={12} md={12} lg={6}>
        <StyledHeader variant="h4">Missão</StyledHeader>
        <Typography variant="body1">
          Temos a missão de entregar informações claras e objetivas, auxiliando
          nossos clientes a tomarem as melhores decisões. Sabemos que estamos
          lidando com sonhos, nosso objetivo é colaborar com essa realização.
        </Typography>
        <StyledHeader variant="h4">Valores</StyledHeader>
        <List sx={{ columnCount: 2 }}>
          <StyledListSubheader>
            <Typography variant="h6" fontWeight={"bold"}>
              Respeito
            </Typography>
            <Typography variant="body2">Com nossos Clientes</Typography>
            <Typography variant="body2">Colaboradores</Typography>
            <Typography variant="body2">Parceiros</Typography>
          </StyledListSubheader>
          <StyledListSubheader>
            <Typography variant="h6" fontWeight={"bold"}>
              Integridade
            </Typography>
            <Typography variant="body2">Em nossas decisões</Typography>
            <Typography variant="body2">Nas negociações</Typography>
            <Typography variant="body2">Em nossa comunicação</Typography>
          </StyledListSubheader>
          <StyledListSubheader>
            <Typography variant="h6" fontWeight={"bold"}>
              Trabalho em equipe
            </Typography>
            <Typography variant="body2">Nos grupos de trabalho</Typography>
            <Typography variant="body2">Nas diferentes funções</Typography>
            <Typography variant="body2">Nas lideranças</Typography>
          </StyledListSubheader>
          <StyledListSubheader>
            <Typography variant="h6" fontWeight={"bold"}>
              Excelência
            </Typography>
            <Typography variant="body2">Em nossos serviços</Typography>
            <Typography variant="body2">Em nossos padrões</Typography>
            <Typography variant="body2">Em nossas operações</Typography>
          </StyledListSubheader>
        </List>
        <Button handleClick={(event) => console.log("click")}>
          Simular Plano
        </Button>
      </StyledGridItem>
      <StyledGridImage xs={12} md={8} lg={6} xl={6}>
        <StyledAvatar src={flow} variant="square" />
      </StyledGridImage>
    </StyledGridContainer>
  );
};

const StyledGridContainer = styled(Grid)`
  padding: 5vw;
  background: ${({ theme }) => theme.palette.background.paper};
  overflow: hidden;
  color: ${({ theme }) => theme.palette.grey[500]};
`;

const StyledGridItem = styled(Grid)`
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5vh;
`;

const StyledGridImage = styled(Grid)`
  display: flex;
  margin: auto;
  padding: 5vh;
`;

const StyledAvatar = styled(Avatar)`
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

const StyledHeader = styled(Typography)`
  font-weight: bold;
`;

const StyledListSubheader = styled(ListSubheader)`
  flex-direction: column;
  color: ${({ theme }) => theme.palette.grey[500]};
  margin-bottom: 15px;
  padding: 0;
`;
