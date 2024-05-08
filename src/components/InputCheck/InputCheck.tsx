import React, { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { t } from "i18next";
import { CompiledFields } from "../../pages/DashboardPage/types";

type Props = {
  data?: { final_object?: { name: string }[] };
  label: string;
  width?: number;
  selectedInput: Omit<CompiledFields, "skill">;
  setSelectedInput: (value: React.SetStateAction<CompiledFields>) => void;
  type: string;
};

export function InputChecks({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  type,
}: Props) {
  const [elements, setElements] = React.useState<string[]>([]);
  const final_object = data?.final_object;

  const handleChange = (event: SelectChangeEvent<typeof elements>) => {
    const {
      target: { value },
    } = event;
    setElements(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    //TODO: Capire perché all'atterraggio in pagina popola lo stato "cities" su redux con []
    setSelectedInput({ ...selectedInput, [type]: elements });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

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
        value={elements}
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
              checked={elements.indexOf(element.name ?? element) > -1}
            />
            <ListItemText primary={element.name ?? element} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
