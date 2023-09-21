import { Button } from "@mui/material";

const CustomButton = ({
  label,
  callback,
  color,
  icon,
}: {
  label: string;
  callback: VoidFunction;
  color: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  icon: JSX.Element;
}) => {
  return (
    <Button
      color={color}
      sx={{ color: "white", marginLeft: 2 }}
      variant="contained"
      endIcon={icon}
      onClick={callback}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
