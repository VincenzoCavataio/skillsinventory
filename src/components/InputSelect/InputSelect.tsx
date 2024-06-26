import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";

const InputSelect = ({
  selectedInput,
  setSelectedInput,
  data,
  label,
  objKey,
}: InputSelectType) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={
        data?.final_object.map(
          (tecnologyData: ResponseElementObjectData) => tecnologyData?.name
        ) || []
      }
      onChange={(_, newValue) =>
        setSelectedInput({ ...selectedInput, [objKey]: newValue || "" })
      }
      noOptionsText={<Button>{t("pages.dashboard.search.noOptions")}</Button>}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default InputSelect;
