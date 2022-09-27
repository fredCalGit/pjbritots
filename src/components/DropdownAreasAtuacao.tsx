import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

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
        "aria-labelledby": "basic-button",
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
        <Typography textAlign="center" color="secondary" variant="dark">
          Profile
        </Typography>
      </MenuItem>
    </Menu>
  );
};
