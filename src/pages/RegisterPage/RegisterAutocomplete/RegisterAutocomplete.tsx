import { Autocomplete, TextField } from "@mui/material";
export type orgType = {
  label: string;
};
type RegisterAutocompleteProps = {
  label: string;
  option?: string[];
  required?: boolean;
  weirdBackendOptions?: orgType[];
  id: string;
};

export const RegisterAutocomplete: React.FC<RegisterAutocompleteProps> = ({
  label,
  required,
  option,
  weirdBackendOptions,
  id,
}) => {
  if (required && weirdBackendOptions) {
    return (
      <Autocomplete
        id={id}
        disablePortal
        fullWidth
        options={weirdBackendOptions}
        sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
        renderInput={(params) => (
          <TextField {...params} required label={label} />
        )}
      />
    );
  } else if (!required && option) {
    return (
      <Autocomplete
        id={id}
        disablePortal
        options={option}
        sx={{ mb: 2, mt: 2, backgroundColor: "white" }}
        fullWidth
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      //   <Select
      //   id={id}
      //   input={<OutlinedInput label={label} />}

      //   />
    );
  }
};
