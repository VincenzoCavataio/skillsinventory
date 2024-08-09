import { useTranslation } from "react-i18next";
import { KeyFormType } from "../RegisterData4/RegisterData4";

export const RegisterData3 = () => {
  const { t } = useTranslation();

  const GENDERS = [
    t(`pages.userPage.informationDetails.male`),
    t(`pages.userPage.informationDetails.female`),
    t(`pages.userPage.informationDetails.other`),
  ];
  const DRIVERLICENSE = [
    t(`pages.userPage.informationDetails.yes`),
    t(`pages.userPage.informationDetails.no`),
  ];
  const REGISTERDATA3: KeyFormType[] = [
    {
      id: "password",
      label: t("pages.registerPage.regCreatePw"),
      type: "password",
      name: "Password",
      autoComplete: "Password",
      objType: "GenericTextField",
      required: true,
    },
    {
      id: "repeatPassword",
      label: t("pages.registerPage.regRepeatPw"),
      type: "password",
      name: "Repeat Password",
      autoComplete: "RepeatPassword",
      objType: "GenericTextField",
      required: true,
    },
    {
      id: "birthDate",
      label: t("pages.registerPage.regBday"),
      objType: "DatePicker",
    },
    {
      id: "firstEmplDate",
      label: t("pages.registerPage.regFEmplDate"),
      objType: "DatePicker",
    },
    {
      id: "actEmplDate",
      label: t("pages.registerPage.regActEmplDate"),
      objType: "DatePicker",
    },
    {
      id: "gender",
      option: GENDERS,
      label: t("pages.registerPage.regGender"),
      required: false,
      objType: "AutocompleteField",
    },
    {
      id: "zipCode",
      label: t("pages.registerPage.regZipCode"),
      type: "number",
      name: "Zip Code",
      autoComplete: "ZipCode",
      objType: "NumberTextField",
    },
    {
      id: "nation",
      label: t("pages.registerPage.regNation"),
      name: "Nation",
      autoComplete: "Nation",
      objType: "GenericTextField",
    },
    {
      id: "driverLicense",
      option: DRIVERLICENSE,
      label: t("pages.registerPage.regDriverLic"),
      objType: "AutocompleteField",
    },
  ];

  return REGISTERDATA3;
};
