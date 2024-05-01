import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { insertSkills } from "../../../../redux/skillsSlice";

type Props = {
  data: ResponseElementObjectData[];
};

type Operators = "<" | ">" | "=" | ">=" | "<=";

export const OperationsButtons = ({ data }: Props) => {
  const LEVELS = [1, 2, 3, 4, 5];
  const OPERATORS = ["=", ">", "<", ">=", "<="];

  const [operator, setOperator] = useState<Operators>("=");
  const [level, setLevel] = useState<number>(2);

  const dispatch = useDispatch();

  const handleChangeOperator = (event: SelectChangeEvent<Operators>) => {
    setOperator(event.target.value as Operators);
  };

  const handleChangeLevel = (event: SelectChangeEvent<string>) => {
    setLevel(Number(event.target.value));
  };

  const addToStore = () => {
    dispatch(insertSkills({ skills: selectedSkills }));
  };

  // TODO
  // const removeFromStore = () => {
  //   dispatch(() => {});
  // };

  const selectedSkills = data
    .filter((skill) => skill.selected)
    .map((skill) => ({
      label: skill.name,
      level: level,
      levelType: operator,
      id: skill.id,
    }));

  console.log({ selectedSkills });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Select
        value={operator}
        size="small"
        sx={{ width: 65 }}
        onChange={handleChangeOperator}
      >
        {OPERATORS.map((operator) => (
          <MenuItem value={operator}>{operator}</MenuItem>
        ))}
      </Select>
      <Select
        value={String(level)}
        size="small"
        sx={{ width: 65 }}
        onChange={handleChangeLevel}
      >
        {LEVELS.map((level) => (
          <MenuItem value={level}>{level}</MenuItem>
        ))}
      </Select>
      <Box>
        <Button onClick={addToStore}>Add</Button>
        <Button onClick={removeFromStore}>Remove</Button>
      </Box>
    </Box>
  );
};
