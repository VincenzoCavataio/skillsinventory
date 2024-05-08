import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";

type Item = { id: string; value?: string };

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
          id: "0",
          value: newValue,
        };
        if (object.value == "Master") {
          object.id = "3";
        }
        if (object.value == "Bachelor") {
          object.id = "2";
        }
        if (object.value == "Bicocca") {
          object.id = "258";
        }
        if (object.value == "Università degli studi del Piemonte Orientale") {
          object.id = "259";
        }
        if (object.value == "Università degli studi dell'Insubria") {
          object.id = "256";
        }

        setSelectedInput({ ...selectedInput, [objKey]: object });
        console.log(object);
      }}
      // onChange={(_, newValue) => {
      //   setSelectedInput({ ...selectedInput, [objKey]: newValue || "" });
      //   console.log(objKey, newValue);
      // }}
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
