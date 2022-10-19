import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { ButtonInterface } from "./Button-interface";

const StyledButton = styled(Button)(() => ({
  fontWeight: 500,
}));

export default function CustomButton(props: ButtonInterface) {
  const {
    variant,
    label,
    size,
    href,
    onClick,
    disabled,
    icon,
    disableRipple,
    color,
  } = props;

  return (
    <StyledButton
      startIcon={icon}
      variant={variant}
      size={size}
      href={href}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
      color={color}
    >
      <span>{label}</span>
    </StyledButton>
  );
}

CustomButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "small",
  href: "",
  onClick: undefined,
  icon: null,
  disabled: false,
  disableRipple: true,
};
