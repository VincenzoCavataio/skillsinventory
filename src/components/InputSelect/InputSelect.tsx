import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { t } from "i18next";
import { InputSelectType } from "./types";
import { useDispatch } from "react-redux";
import { insertEduLevel, insertInstitute } from "../../redux/ricercaSlice";
import { useEffect } from "react";

export const InputSelect = ({
  selectedInput,
  setSelectedInput,
  data,
  label,
  objKey,
  width = 300,
}: InputSelectType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    ricercaFiltrata();
  }, [selectedInput]);

  const ricercaFiltrata = () => {
    dispatch(insertEduLevel({ eduLevel: selectedInput?.educationalLevel }));
    dispatch(insertInstitute({ institute: selectedInput?.institute })); //so che li fa entrambi ogni volta
  };

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
        // ricercaFiltrata();
        console.log(selectedInput);
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
