import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { t } from "i18next";
import {
  CompiledFields,
  ResponseElementObjectData,
  Values,
} from "../../pages/DashboardPage/types";
import { InputSelectType } from "../InputSelect/types";

export function InputChecks2({
  data,
  label,
  width = 300,
  setSelectedInput,
  selectedInput,
  objKey,
}: InputSelectType) {
  const [elements, setElements] = React.useState<ResponseElementObjectData[]>(
    []
  );
  const final_object = data?.final_object;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValues = event.target.value as ResponseElementObjectData[];
    setElements(selectedValues);
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
          (selected as ResponseElementObjectData[]).length === 1
            ? (selected as ResponseElementObjectData[])[0].name
            : (selected as ResponseElementObjectData[])
                .map((item) => item.name)
                .join(", ")
        }
      >
        {final_object?.map((element) => (
          <MenuItem key={element.id} value={element}>
            <Checkbox checked={elements.some((el) => el.id === element.id)} />
            <ListItemText primary={element.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// export function InputChecks2({
//   data,
//   label,
//   width = 300,
//   setSelectedInput,
//   selectedInput,
//   objKey,
// }: InputSelectType) {
//   const [elements, setElements] = React.useState<ResponseElementObjectData[]>(
//     []
//   );
//   const final_object = data?.final_object;

//   const handleChange = (event: SelectChangeEvent<typeof elements>) => {
//     const {
//       target: { value },
//     } = event;
//     if (typeof value === "string") {
//       const selectedValues = value.split(",").map((item) => {
//         const selectedObject = final_object?.find((obj) => obj.name === item);
//         return selectedObject
//           ? { id: selectedObject.id, name: selectedObject.name }
//           : null;
//       });
//       setElements(selectedValues.filter((item) => item !== null)); // Rimuoviamo eventuali valori null
//     } else {
//       // Se il valore selezionato è già un array di oggetti, lo assegniamo direttamente
//       setElements(value);
//     }
//   };
//   //     Array.isArray(value)
//   //       ? value.map((item) => ({ value: item.value, id: item.id })) // Se value è un array, usiamo direttamente i valori e gli ID degli oggetti
//   //       : [{ value, id: 0 }] // Se value è un oggetto, creiamo un array contenente un oggetto con il suo valore e un ID arbitrario
//   //   );
//   // };
//   //
//   //
//   //   setElements(
//   //     typeof value === "object"
//   //       ? value.split(",").map((item, index) => ({ value: item, id: index }))
//   //       : value.map((item) => ({ value: item.value, id: item.id }))
//   //   );
//   // };
//   useEffect(() => {
//     //TODO: Capire perché all'atterraggio in pagina popola lo stato "cities" su redux con [];

//     if (elements.length == 0) {
//       setSelectedInput({ ...selectedInput, [objKey]: null });
//     } else {
//       setSelectedInput({ ...selectedInput, [objKey]: elements });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [elements]);
//   console.log(selectedInput, elements);
//   //! TOFIX: Fixa altra cagata Backend (element.name ?? element)
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
//         renderValue={(selected) => selected.join(", ")}
//       >
//         {final_object?.map((element) => (
//           // console.log(element),
//           <MenuItem key={element.id ?? element} value={element.name ?? element}>
//             <Checkbox checked={elements.indexOf(element.value) > -1} />
//             <ListItemText primary={element.name ?? element} />
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// }
