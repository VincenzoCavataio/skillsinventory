import { Input } from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { useTranslation } from "react-i18next";
type Props = {
  data: {
    final_object?: ResponseElementObjectData[];
  };
  setData: React.Dispatch<React.SetStateAction<ResponseElementObjectData[]>>;
};

export const SkillSearch = ({ data, setData }: Props) => {
  const { t } = useTranslation();
  const onChange = (event: { target: { value: string } }) => {
    const filteredData = data?.final_object?.filter((element) =>
      element.name.toUpperCase().includes(event.target.value.toUpperCase())
    );
    filteredData && setData(filteredData);
  };
  return (
    <Input
      sx={{ width: "100%" }}
      placeholder={t("pages.dashboard.search.ricerca")}
      onChange={onChange}
    />
  );
};
