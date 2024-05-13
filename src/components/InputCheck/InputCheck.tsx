import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { t } from "i18next";
import { CompiledFields } from "../../pages/DashboardPage/types";
import { InputSelectType } from "../InputSelect/types";

export function InputChecks({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  objKey,
}: InputSelectType) {
  const [elements, setElements] = React.useState<string[]>([]);
  const final_object = data?.final_object;

  const handleChange = (event: SelectChangeEvent<typeof elements>) => {
    const {
      target: { value },
    } = event;
    setElements(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  useEffect(() => {
    //TODO: Capire perché all'atterraggio in pagina popola lo stato "cities" su redux con [];
    if (elements.length == 0) {
      setSelectedInput({ ...selectedInput, [objKey]: null });
    } else {
      setSelectedInput({ ...selectedInput, [objKey]: elements });
    }
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
          <MenuItem key={element.id ?? element} value={element.name ?? element}>
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
// {
//   const [elements, setElements] = useState<
//     { name: string; id: string }[] | undefined
//   >([]);
//   const final_object = data?.final_object;

//   const handleChange = (event: SelectChangeEvent<typeof elements>) => {
//     const {
//       target: { value },
//     } = event;
//     // fare un filtro di data per ottenere i valori checkati, sia id che name
//     // string > {id: string, name: string}
//     const filteredData = final_object?.filter((element) => {
//       if (typeof value === "string" || typeof element.name === "object") {
//         return;
//       }
//       const temp = value && value.includes(element.name);

//       return temp;
//     });

//     setElements(filteredData);
//   };

// useEffect(() => {
//   //TODO: Capire perché all'atterraggio in pagina popola lo stato "cities" su redux con []
//   console.log({ elements, type });
//   setSelectedInput({ ...selectedInput, [type]: elements });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [elements]);
