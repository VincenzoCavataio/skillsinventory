import { useTranslation } from "react-i18next";
import { CheckedSkill } from "../../../../../redux/types";

type Props = {
  allChecked: boolean;
  checkedSkillsStore: CheckedSkill[];
};

/** It renders the select/deselect elements of skill list selection */
export const SelectDeselectLabel = ({
  allChecked,
  checkedSkillsStore,
}: Props) => {
  const { t } = useTranslation();
  return allChecked
    ? `${t(`pages.userPage.info.deselect`)} ${checkedSkillsStore?.length} ${
        checkedSkillsStore?.length > 1
          ? t(`pages.userPage.info.elements`)
          : t(`pages.userPage.info.element`)
      }`
    : t(`pages.userPage.info.selectAll`);
};
