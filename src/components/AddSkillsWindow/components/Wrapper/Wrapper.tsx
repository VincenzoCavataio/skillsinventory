import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { WindowSelectedSkills } from "../WindowSelectedSkills";
import { WindowAllSkills } from "../WindowAllSkills";
import { OperationsButtons } from "../OperationsButtons";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { SkillSearch } from "../SkillSearch";

export type Props = {
  data?: {
    final_object?: ResponseElementObjectData[];
  };
};

export const Wrapper = ({ data }: Props) => {
  const [mappedData, setMappedData] = useState<ResponseElementObjectData[]>([]);
  const [selectedElements, setSelectedElements] = useState<number[]>([]);

  useEffect(() => {
    if (data?.final_object) {
      const updatedData = data.final_object.map(
        (el: ResponseElementObjectData) => ({
          name: el.name,
          id: el.id,
          selected: false,
          selectedToBeDeleted: false,
        })
      );
      setMappedData(updatedData);
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{ height: "calc('100%' - 20px) !important", overflow: "hidden" }}
      >
        <SkillSearch data={data ?? {}} setData={setMappedData} />
        <WindowAllSkills data={mappedData} setMappedData={setMappedData} />
      </Box>
      <OperationsButtons
        data={mappedData}
        setMappedData={setMappedData}
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      />
      <WindowSelectedSkills
        data={mappedData}
        setMappedData={setMappedData}
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      />
    </Box>
  );
};
