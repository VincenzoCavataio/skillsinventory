import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { t } from "i18next";
import { SkillRow } from "../SkillRow";

type Props = { data: ResponseElementObjectData[] } & {
  setMappedData: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
};

//TODO: Capire come fare per non farlo rallentare: (PROBABILEMENTE NON FARLI CARICARE OGNI VOLTA)
//TODO: import { IconPicker } from "../../../UserProfile/components/CheckboxList/utils/IconPicker";
//TODO: {/* <Box sx={{ mt: 0.75, ml: 1 }}>{IconPicker(e.name)}</Box> */}

export const WindowAllSkills = ({ data, setMappedData }: Props) => {
  const onClick = (element: ResponseElementObjectData) => {
    if (data) {
      setMappedData(
        data.map((el: ResponseElementObjectData) =>
          el.name === element.name
            ? {
                name: el.name,
                id: el.id,
                selected: !el.selected,
                selectedToBeDeleted: el.selectedToBeDeleted,
              }
            : el
        )
      );
    }
  };
  return (
    <ul
      className="custom-scrollbars"
      style={{
        background: "white",
        width: 250,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "normal",
        listStyle: "none",
        paddingLeft: 0,
        margin: 0,
        height: "calc( 100% - 30px) ",
      }}
    >
      {!data?.length && (
        <SkillRow label={t("pages.userPage.info.noSkillsFound")} />
      )}
      {data?.map((e) => (
        <SkillRow row={e} onClick={onClick} label={e.name} />
      ))}
    </ul>
  );
};
