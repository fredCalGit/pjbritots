import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

interface DropdownAreasAtuacaoProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}
export const DropdownAreasAtuacao = ({
  anchorEl,
  handleClose,
}: DropdownAreasAtuacaoProps) => {
  return (
    <Menu
      id="areas-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "areas de atuação",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Advogados e Escritórios de Advocacia
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Empresas Comerciais
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Hospitais e Clínicas Médicas
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Empresas de TI
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Lojas Virtuais / E-Commerce
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Empresas do Ramo Imobiliário
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Entidades sem fins lucrativos
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Bares e Restaurantes
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Serviços Educacionais
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Startups
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Agropecuária e Agroindústria
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary" variant="dark">
          Serviços de Transporte
        </StyledTypography>
      </MenuItem>
    </Menu>
  );
};

const StyledTypography = styled(Typography)`
  text-align: "center";
`;
