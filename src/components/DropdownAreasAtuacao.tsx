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
        <StyledTypography color="secondary">
          Advogados e Escritórios de Advocacia
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Empresas Comerciais
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Hospitais e Clínicas Médicas
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">Empresas de TI</StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Lojas Virtuais / E-Commerce
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Empresas do Ramo Imobiliário
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Entidades sem fins lucrativos
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Bares e Restaurantes
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Serviços Educacionais
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">Startups</StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Agropecuária e Agroindústria
        </StyledTypography>
      </MenuItem>
      <MenuItem>
        <StyledTypography color="secondary">
          Serviços de Transporte
        </StyledTypography>
      </MenuItem>
    </Menu>
  );
};

const StyledTypography = styled(Typography)`
  text-align: "center";
`;
