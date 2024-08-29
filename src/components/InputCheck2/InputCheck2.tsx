import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { CompiledFieldsWithID } from "../../pages/DashboardPage/types";
import { InputSelectType } from "../InputSelect/types";
import { useSelector } from "react-redux";
import { searchFiltersSelector } from "../../redux/searchSlice";

export const InputChecks2 = ({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  objKey,
}: InputSelectType) => {
  const selectedElements = useSelector(searchFiltersSelector);

  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<CompiledFieldsWithID[]>) => {
    const selectedValues = event.target.value as CompiledFieldsWithID[];
    setSelectedInput({ ...selectedInput, [objKey]: selectedValues });
  };

  const isSelected = (id: number) => {
    return selectedElements.some(
      (element: CompiledFieldsWithID) => element.id === id
    );
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
        value={selectedElements}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) =>
          (selected as CompiledFieldsWithID[]).length === 1
            ? (selected as CompiledFieldsWithID[])[0].name
            : (selected as CompiledFieldsWithID[])
                .map((item) => item.name)
                .join(", ")
        }
      >
        {data?.map((element) => (
          // eslint-disable-next-line
          //@ts-ignore
          <MenuItem key={element.id} value={element}>
            <Checkbox checked={isSelected(element.id!)} />
            <ListItemText primary={element.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
