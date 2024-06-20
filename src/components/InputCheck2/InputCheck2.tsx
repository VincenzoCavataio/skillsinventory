import React from "react";
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

// export const InputChecks2 = ({
//   data,
//   label,
//   width = 300,
//   setSelectedInput,
//   selectedInput,
//   objKey,
// }: InputSelectType) => {
//   const [elements, setElements] = React.useState<CompiledFieldsWithID[]>([]);
//   const final_object = data?.final_object;

//   const handleChange = (event: SelectChangeEvent<CompiledFieldsWithID[]>) => {
//     const selectedValues = event.target.value as CompiledFieldsWithID[];
//     setElements(selectedValues);
//     setSelectedInput({ ...selectedInput, [objKey]: selectedValues });
//   };

//   return (
//     <FormControl sx={{ width: width }}>
//       <InputLabel
//         id="demo-multiple-checkbox-label"
//         sx={{ background: "white" }}
//       >
//         {t(label)}
//       </InputLabel>
//       <Select
//         labelId="demo-multiple-checkbox-label"
//         id="demo-multiple-checkbox"
//         multiple
//         value={elements}
//         onChange={handleChange}
//         input={<OutlinedInput label="Tag" />}
//         renderValue={(selected) =>
//           (selected as CompiledFieldsWithID[]).length === 1
//             ? (selected as CompiledFieldsWithID[])[0].name
//             : (selected as CompiledFieldsWithID[])
//                 .map((item) => item.name)
//                 .join(", ")
//         }
//       >
//         {final_object?.map((element) => (
//           <MenuItem key={element.id} value={element}>
//             <Checkbox checked={elements.some((el) => el.id === element.id)} />
//             <ListItemText primary={element.name} />
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

export const InputChecks2 = ({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  objKey,
}: InputSelectType) => {
  const [elements, setElements] = React.useState<CompiledFieldsWithID[]>([]);
  const [selectedMap, setSelectedMap] = React.useState<{
    [key: number]: boolean;
  }>({});
  const final_object = data?.final_object;
  const { t } = useTranslation();
  const handleChange = (event: SelectChangeEvent<CompiledFieldsWithID[]>) => {
    const selectedValues = event.target.value as CompiledFieldsWithID[];
    setElements(selectedValues);
    const newSelectedMap = selectedValues.reduce((acc, cur) => {
      if (cur.id !== undefined) acc[cur.id] = true;
      return acc;
    }, {} as { [key: number]: boolean });
    setSelectedMap(newSelectedMap);
    setSelectedInput({ ...selectedInput, [objKey]: selectedValues });
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
        value={elements}
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
        {final_object?.map((element) => (
          <MenuItem key={element.id} value={element}>
            <Checkbox checked={!!selectedMap[element.id]} />
            <ListItemText primary={element.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
