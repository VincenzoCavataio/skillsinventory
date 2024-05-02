import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSkills, insertSkills } from "../../../../redux/skillsSlice";
import { ReduxStore, Skill } from "../../../../redux/types";

type Props = {
  data: ResponseElementObjectData[];
  setMappedData: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
  selectedElements: number[];
  setSelectedElements: React.Dispatch<React.SetStateAction<number[]>>;
};

type Operators = "<" | ">" | "=" | ">=" | "<=";

export const OperationsButtons = ({
  data,
  setMappedData,
  selectedElements,
  setSelectedElements,
}: Props) => {
  const LEVELS = [1, 2, 3, 4, 5];
  const OPERATORS = ["=", ">", "<", ">=", "<="];

  const [operator, setOperator] = useState<Operators>("=");
  const [level, setLevel] = useState<number>(2);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const skillsInStore = useSelector((state: ReduxStore) => state.skills);

  useEffect(() => {
    setSelectedSkills(
      data
        .filter((skill) => skill.selected)
        .map((skill) => ({
          name: skill.name,
          level: level,
          operator: operator,
          id: skill.id,
          selected: false,
          selectedToBeDeleted: false,
        }))
    );
  }, [data, level, operator]);

  const dispatch = useDispatch();

  const handleChangeOperator = (event: SelectChangeEvent<Operators>) => {
    setOperator(event.target.value as Operators);
  };

  const handleChangeLevel = (event: SelectChangeEvent<string>) => {
    setLevel(Number(event.target.value));
  };

  const addToStore = () => {
    const resetSelectedData: ResponseElementObjectData[] = data.map(
      (element) => ({
        id: element.id,
        name: element.name,
        selected: false,
        selectedToBeDeleted: element.selectedToBeDeleted,
      })
    );
    dispatch(insertSkills({ skills: selectedSkills }));
    setMappedData(resetSelectedData);
  };

  const removeFromStore = () => {
    const updatedSkills = skillsInStore?.skills.filter(
      (skill) => skill.id && !selectedElements.includes(skill.id)
    );

    setSelectedElements([]);
    dispatch(
      deleteSkills({
        skills: updatedSkills,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Typography variant="caption">Operator</Typography>
        <Select value={operator} size="small" onChange={handleChangeOperator}>
          {OPERATORS.map((operator) => (
            <MenuItem key={operator} value={operator}>
              {operator}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Typography variant="caption">Level</Typography>

        <Select value={String(level)} size="small" onChange={handleChangeLevel}>
          {LEVELS.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box>
        <Button onClick={addToStore}>Add</Button>
        <Button onClick={removeFromStore}>Remove</Button>
      </Box>
    </Box>
  );
};
