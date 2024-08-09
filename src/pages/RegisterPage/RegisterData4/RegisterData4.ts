import { useTranslation } from "react-i18next";
import { orgType } from "../RegisterAutocomplete/RegisterAutocomplete";
export type KeyFormType = {
  id: string;
  objType: string;
  label: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  type?: string;
  option?: string[];
  weirdBackendOptions?: orgType[];
};

export const RegisterData4 = () => {
  const { t } = useTranslation();

  const ORGANIZATIONS: orgType[] = [
    { label: "ALMALAUREA" },
    { label: "BE" },
    { label: "ILLIMITY" },
    { label: "NEXTRE" },
    { label: "YOUCO" },
    { label: "PWC" },
    { label: "TEMP" },
    { label: "Other.." },
  ];
  const REGISTERDATA4: KeyFormType[] = [
    {
      id: "firstName",
      label: t("pages.registerPage.regFName"),
      name: "First Name",
      autoComplete: "FirstName",
      required: true,
      objType: "GenericTextField",
    },
    {
      id: "lastName",
      label: t("pages.registerPage.regLName"),
      name: "Last Name",
      autoComplete: "LastName",
      required: true,
      objType: "GenericTextField",
    },
    {
      id: "email",
      label: t("pages.registerPage.regEmail"),
      name: "Email",
      autoComplete: "Email",
      required: true,
      objType: "GenericTextField",
    },
    {
      id: "orgSelect",
      weirdBackendOptions: ORGANIZATIONS,
      label: t("pages.registerPage.regSelOrg"),
      required: true,
      objType: "AutocompleteField",
    },
    {
      id: "personalPhoneNumber",
      label: t("pages.registerPage.regPNumb"),
      type: "number",
      name: "Personal Phone Number",
      autoComplete: "PersonalPhoneNumber",
      objType: "NumberTextField",
    },
    {
      id: "workPhoneNumber",
      label: t("pages.registerPage.regWNumb"),
      type: "number",
      name: "Work Phone Number",
      autoComplete: "WorkPhoneNumber",
      objType: "NumberTextField",
    },
    {
      id: "address",
      label: t("pages.registerPage.regAddress"),
      name: "Address",
      autoComplete: "Address",
      objType: "GenericTextField",
    },
    {
      id: "city",
      label: t("pages.registerPage.regCity"),
      name: "City",
      autoComplete: "City",
      objType: "GenericTextField",
    },
    {
      id: "province",
      label: t("pages.registerPage.regProvince"),
      name: "Province",
      autoComplete: "Province",
      objType: "GenericTextField",
    },
  ];
  return REGISTERDATA4;
};
