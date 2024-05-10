import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";

type Item = { id: number; value?: string };

export const InputSelect = ({
  selectedInput,
  setSelectedInput,
  data,
  label,
  objKey,
  width = 300,
}: InputSelectType) => {
  // console.log({ data });
  // console.log(data?.final_object[0].id);
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

// const item: { id: number; value: string };

// onChange={(_, newValue: string) => {
//   let object: item = {
//     id: 0,
//     value: newValue,
//   };
//   if (object.value == "Master") {
//     object.id = 3;
//   }
//   if (object.value == "Bachelor") {
//     object.id = 2;
//   }

//   setSelectedInput({ ...selectedInput, [objKey]: object });
//   console.log(newValue);
// }}
