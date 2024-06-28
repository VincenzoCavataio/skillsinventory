import { useSelector } from "react-redux";
import { Infos } from "../Infos";
import { Box } from "@mui/material";
import {
  ReduxStore,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useTranslation } from "react-i18next";
import { IdInfo } from "../IdInfo";

type keysType =
  | "id"
  | "gender"
  | "firstName"
  | "lastName"
  | "email_login"
  | "personalPhoneNumber"
  | "driver_license"
  | "birthDate"
  | "workPhoneNumber"
  | "actualEmploymentDate"
  | "firstEmploymentDate";

const KEYS: keysType[] = [
  "id",
  "gender",
  "firstName",
  "lastName",
  "email_login",
  "personalPhoneNumber",
  "driver_license",
  "birthDate",
  "workPhoneNumber",
  "actualEmploymentDate",
  "firstEmploymentDate",
];

export const Wrapper = () => {
  const { t } = useTranslation();
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;

  if (!userData) return;

  const personalData: ResponseProfileElementObjectData = {
    id: userData?.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email_login: userData.email_login,
    personalPhoneNumber: userData.personalPhoneNumber,
    driver_license: userData?.driver_license
      ? t("pages.userPage.informationDetails.yes")
      : t("pages.userPage.informationDetails.no"),
    birthDate: userData.birthDate,
    workPhoneNumber: userData.workPhoneNumber,
    actualEmploymentDate: userData.actualEmploymentDate,
    firstEmploymentDate: userData.firstEmploymentDate,
    gender: userData.gender,
  };

  const ADDRESS: string[] = [
    `${userData?.residence?.address ?? ""}`,
    `${userData?.residence?.address_number ?? ""}`,
    `${userData?.residence?.zip_code ?? ""}`,
    `${userData?.residence?.city ?? ""}`,
    `${userData?.residence?.province ?? ""}`,
    `${userData?.residence?.nation ?? ""}`,
  ];
  //per la questione degli hidden, controllo ruolo orgadmin perchè se manualmente cambio un mio campo in hidden poi non è modificabile
  return (
    <Box bgcolor="white">
      <IdInfo data={personalData.id} />
      {KEYS.filter((key) => key !== "id").map((key: keysType) => (
        <Infos title={key} data={personalData[key]} key={key} type="row" />
      ))}
      <Infos
        title={t(`pages.userPage.informationDetails.address`)}
        data={ADDRESS}
        type="list"
      />
    </Box>
  );
};
