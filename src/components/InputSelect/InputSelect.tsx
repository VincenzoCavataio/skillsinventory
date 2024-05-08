import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";

export const InputSelect = ({
  selectedInput,
  setSelectedInput,
  data,
  label,
  objKey,
  width = 300,
}: InputSelectType) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={
        data?.final_object?.map(
          (tecnologyData: ResponseElementObjectData) => tecnologyData?.name
        ) || []
      }
      onChange={(_, newValue) => {
        setSelectedInput({ ...selectedInput, [objKey]: newValue || "" });
      }}
      noOptionsText={<Button>{t("pages.dashboard.search.noOptions")}</Button>}
      sx={{
        width: width,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        getContentAnchorEl: null,
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
