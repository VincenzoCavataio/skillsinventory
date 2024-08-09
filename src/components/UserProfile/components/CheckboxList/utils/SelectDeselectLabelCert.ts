import { useTranslation } from "react-i18next";
import { CheckedCert } from "../../../../../redux/types";

type Props = {
  allChecked: boolean;
  checkedCertsStore: CheckedCert[];
};

/** It renders the select/deselect elements of certifications list selection */
export const SelectDeselectLabelCert = ({
  allChecked,
  checkedCertsStore,
}: Props) => {
  const { t } = useTranslation();
  return allChecked
    ? `${t(`pages.userPage.info.deselect`)} ${checkedCertsStore?.length} ${
        checkedCertsStore?.length > 1
          ? t(`pages.userPage.info.elements`)
          : t(`pages.userPage.info.element`)
      }`
    : t(`pages.userPage.info.selectAll`);
};
