import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";

type Item = { id: number; value: string | null };

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
        const object: Item = {
          id: 0,
          value: newValue,
        };
        if (data?.final_object)
          for (const obj of data.final_object) {
            if (object.value === obj.name) {
              object.id = obj.id;
            }
          }

        setSelectedInput({ ...selectedInput, [objKey]: object });
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
