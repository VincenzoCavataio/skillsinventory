import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type RegisterDatePickerProps = {
  label: string;
};

export const RegisterDatePicker: React.FC<RegisterDatePickerProps> = ({
  label,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        sx={{ width: "100%", mb: 2, mt: 2, backgroundColor: "white" }}
        slotProps={{
          textField: {
            required: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};
