import React from "react";
import { Button as MaterialButton, styled } from "@mui/material";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  primary?: boolean;
  large?: boolean;
  children: string;
}

export const Button = ({
  handleClick,
  primary = true,
  children,
  large = false,
}: ButtonProps) => {
  return primary ? (
    <PrimaryButton
      onClick={(event) => handleClick(event)}
      sx={
        large
          ? {
              width: "300px",
              height: "56px",
            }
          : null
      }
    >
      {children}
    </PrimaryButton>
  ) : (
    <SecondaryButton
      onClick={(event) => handleClick(event)}
      sx={
        large
          ? {
              width: "300px",
              height: "56px",
            }
          : null
      }
    >
      {children}
    </SecondaryButton>
  );
};

const PrimaryButton = styled(MaterialButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  text-transform: none;
  width: 165px;
  height: 56px;
  font-weight: 700;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.background.default};
  }
`;
const SecondaryButton = styled(MaterialButton)`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: none;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  width: 165px;
  height: 56px;
  font-weight: 700;
  :hover {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
