import { TextField } from "@mui/material";

type RegisterGenericTextFieldProps = {
  name?: string;
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

export const RegisterGenericTextField: React.FC<
  RegisterGenericTextFieldProps
> = ({ name, label, id, type, required, autoComplete }) => {
  if (required) {
    return (
      <TextField
        type={type}
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        sx={{ mb: 2, backgroundColor: "white" }}
      />
    );
  } else {
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
  }
};
