export interface ButtonInterface {
  variant?: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  label: string;
  size?: "small" | "medium" | "large";
  href?: "";
  onClick?: (e: unknown) => object;
  disabled?: boolean;
  icon?: React.ReactElement;
  disableRipple?: boolean;
}
