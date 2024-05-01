import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { WindowSelectedSkills } from "../WindowSelectedSkills";
import { WindowAllSkills } from "../WindowAllSkills";
import { OperationsButtons } from "../OperationsButtons";
import { Props } from "../../types";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

export const Wrapper = ({ data }: Props) => {
  const [mappedData, setMappedData] = useState<ResponseElementObjectData[]>([]);

  useEffect(() => {
    if (data?.final_object) {
      const updatedData = data.final_object.map(
        (el: ResponseElementObjectData) => ({
          name: el.name,
          id: el.id,
          selected: false,
        })
      );
      console.log({ data, updatedData });
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
      }}
    >
      <WindowAllSkills data={mappedData} setMappedData={setMappedData} />
      <OperationsButtons data={mappedData} />
      <WindowSelectedSkills data={mappedData} setMappedData={setMappedData} />
    </Box>
  );
};
