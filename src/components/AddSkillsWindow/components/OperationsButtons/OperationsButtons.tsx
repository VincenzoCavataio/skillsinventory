import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSkills,
  insertSkills,
  skillsSelector,
} from "../../../../redux/skillsSlice";
import { Skill } from "../../../../redux/types";
import { useTranslation } from "react-i18next";
import { Triangle } from "../Triangle/Triangle";

type Props = {
  data: ResponseElementObjectData[];
  setMappedData: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
  selectedElements: number[];
  setSelectedElements: React.Dispatch<React.SetStateAction<number[]>>;
};

type Operators = "<" | ">" | "=" | ">=" | "<=";

/** Component for handling skill operations and selection. */
export const OperationsButtons = ({
  data,
  setMappedData,
  selectedElements,
  setSelectedElements,
}: Props) => {
  /** Translation hook for multi-language support. */
  const { t } = useTranslation();

  /** Skill levels available for selection. */
  const LEVELS = [1, 2, 3, 4, 5];

  /** Operators available for selection. */
  const OPERATORS: Operators[] = ["=", ">", "<", ">=", "<="];

  /** State to manage selected operator for skills. */
  const [operator, setOperator] = useState<Operators>("=");

  /** State to manage selected level for skills. */
  const [level, setLevel] = useState<number>(1);

  /** State to manage selected skills. */
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  /** Retrieve skills from Redux store. */
  const skillsInStore = useSelector(skillsSelector);

  /** Update selected skills based on data, level, and operator. */
  useEffect(() => {
    setSelectedSkills(
      data
        .filter((skill) => skill.selected)
        .map((skill) => ({
          name: skill.name,
          level,
          operator,
          id: skill.id,
          selected: false,
          selectedToBeDeleted: false,
        }))
    );
  }, [data, level, operator]);

  /** Dispatch hook for triggering Redux actions. */
  const dispatch = useDispatch();

  /** Handle change in operator selection. */
  const handleChangeOperator = (event: SelectChangeEvent<Operators>) => {
    setOperator(event.target.value as Operators);
  };

  /** Handle change in level selection. */
  const handleChangeLevel = (event: SelectChangeEvent<string>) => {
    setLevel(Number(event.target.value));
  };

  /** Add selected skills to the Redux store. */
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

  /** Remove selected skills from the Redux store. */
  const removeFromStore = () => {
    const updatedSkills = skillsInStore?.skills.filter(
      (skill) => skill.id && !selectedElements.includes(skill.id)
    );

    setSelectedElements([]);
    dispatch(deleteSkills({ skills: updatedSkills }));
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
          mb: 1.25,
        }}
      >
        <Typography variant="caption">
          {t("pages.dashboard.search.operator")}
        </Typography>
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
          mb: 1.25,
        }}
      >
        <Typography variant="caption">
          {t("pages.dashboard.search.level")}
        </Typography>

        <Select value={String(level)} size="small" onChange={handleChangeLevel}>
          {LEVELS.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        display="flex"
        width={100}
        justifyContent="space-between"
        sx={{ transform: "scale(.7)" }}
      >
        <Triangle action={removeFromStore} direction="left" />
        <Triangle action={addToStore} direction="right" />
      </Box>
    </Box>
  );
};
