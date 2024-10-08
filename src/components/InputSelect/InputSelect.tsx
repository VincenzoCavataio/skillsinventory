import { Autocomplete, Button, TextField } from "@mui/material";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";
import { useTranslation } from "react-i18next";
import { InputSelectType } from "./types";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../redux/types";

type Item = { id: number; value: string | null };

export const InputSelect = ({
  selectedInput,
  setSelectedInput,
  data,
  label,
  objKey,
  width = 300,
}: InputSelectType) => {
  const inputSelectValue = useSelector((state: ReduxStore) => state.search);
  // eslint-disable-next-line
  //@ts-ignore
  const autocompleteValue = inputSelectValue?.filters[objKey]?.value ?? null;
  const { t } = useTranslation();
  return (
    <Autocomplete
      disablePortal
      options={
        data?.map(
          (tecnologyData: ResponseElementObjectData) => tecnologyData?.name
        ) || []
      }
      onChange={(_, newValue) => {
        const object: Item = {
          id: 0,
          value: newValue,
        };

        if (data)
          for (const obj of data) {
            if (object.value === obj.name) {
              object.id = obj.id;
            }
          }

        setSelectedInput({ ...selectedInput, [objKey]: object });
      }}
      value={autocompleteValue}
      clearIcon={false}
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
