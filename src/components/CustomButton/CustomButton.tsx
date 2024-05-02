import { Button } from "@mui/material";
import { commonColors } from "../../common/commonColors";

export const CustomButton = ({
  label,
  callback,
  color = "primary",
  icon,
  variant = "contained",
}: {
  label: string;
  callback: VoidFunction;
  color: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  icon: JSX.Element;
  variant?: "contained" | "outlined" | "text";
}) => {
  return (
    <Button
      color={color}
      sx={{
        color: variant !== "outlined" ? "white" : commonColors.primary,
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
