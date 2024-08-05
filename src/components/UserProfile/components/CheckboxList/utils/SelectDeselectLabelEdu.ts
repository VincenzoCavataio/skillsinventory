import { useTranslation } from "react-i18next";
import { CheckedEdu } from "../../../../../redux/types";

type Props = {
  allChecked: boolean;
  checkedEdusStore: CheckedEdu[];
};

/** It renders the select/deselect elements of skill list selection */
export const SelectDeselectLabelEdu = ({
  allChecked,
  checkedEdusStore,
}: Props) => {
  const { t } = useTranslation();
  return allChecked
    ? `${t(`pages.userPage.info.deselect`)} ${checkedEdusStore?.length} ${
        checkedEdusStore?.length > 1
          ? t(`pages.userPage.info.elements`)
          : t(`pages.userPage.info.element`)
      }`
    : t(`pages.userPage.info.selectAll`);
};
