import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { t } from "i18next";

export default function InputChecks({
  data,
  label,
  width = 300,
}: {
  data?: { final_object?: { name: string }[] };
  label: string;
  width?: number;
}) {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const final_object = data?.final_object;

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //! TOFIX: Fixa altra cagata Backend (element.name ?? element)
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
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {final_object?.map((element) => (
          <MenuItem
            key={element.name ?? element}
            value={element.name ?? element}
          >
            <Checkbox
              checked={personName.indexOf(element.name ?? element) > -1}
            />
            <ListItemText primary={element.name ?? element} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
