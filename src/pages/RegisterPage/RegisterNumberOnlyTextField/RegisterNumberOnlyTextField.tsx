import { TextField } from "@mui/material";

type RegisterNumberOnlyTextFieldProps = {
  name?: string;
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
};
// id="outlined-number"
// type="number"

export const RegisterNumberOnlyTextField: React.FC<
  RegisterNumberOnlyTextFieldProps
> = ({ name, label, id, type, autoComplete }) => {
  return (
    <TextField
      type={type}
      margin="normal"
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      sx={{ mb: 2, backgroundColor: "white" }}
    />
  );
};
