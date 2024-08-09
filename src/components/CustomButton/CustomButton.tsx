import { Button } from "@mui/material";

type Props = {
  label: string;
  callback: VoidFunction;
  color: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  icon: JSX.Element;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
};

export const CustomButton = ({
  label,
  callback,
  color = "primary",
  icon,
  variant = "contained",
  size = "medium",
}: Props) => {
  return (
    <Button
      color={color}
      size={size}
      sx={{
        height: "100%",
        background: variant === "outlined" ? "white" : undefined,
      }}
      variant={variant}
      endIcon={icon}
      onClick={callback}
    >
      {label}
    </Button>
  );
};
