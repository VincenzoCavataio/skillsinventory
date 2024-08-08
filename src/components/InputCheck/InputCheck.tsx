import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { InputSelectType } from "../InputSelect/types";

import { useSelector } from "react-redux";
import { searchFiltersCitySelector } from "../../redux/searchSlice";

export const InputChecks = ({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  objKey,
}: InputSelectType) => {
  const selectedCities = useSelector(searchFiltersCitySelector);

  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSelectedInput({ ...selectedInput, [objKey]: value });
  };

  const isSelected = (name: string) => {
    return selectedCities.includes(name);
  };

  return (
    <FormControl sx={{ width: width }}>
      <InputLabel
        id="demo-multiple-checkbox-label"
        sx={{ background: "white" }}
      >
        {t(label)}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedCities}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {data?.map((element) => (
          <MenuItem key={element.id ?? element} value={element.name ?? element}>
            <Checkbox checked={isSelected(element.name ?? element)} />
            <ListItemText primary={element.name ?? element} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
