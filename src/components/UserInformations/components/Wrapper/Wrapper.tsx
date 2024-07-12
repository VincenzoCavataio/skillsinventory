import { useSelector } from "react-redux";
import { Infos } from "../Infos";
import { Box, Typography } from "@mui/material";
import {
  ReduxStore,
  Residence,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";
import { useTranslation } from "react-i18next";
import { IdInfo } from "../IdInfo";
import { Infos2 } from "../Infos2";
import { Infos3 } from "../Infos3";
import { Infos4 } from "../Infos4";

// type keysType =
//   | "id"
//   | "gender"
//   | "firstName"
//   | "lastName"
//   | "email_login"
//   | "personalPhoneNumber"
//   | "driver_license"
//   | "birthDate"
//   | "workPhoneNumber"
//   | "actualEmploymentDate"
//   | "firstEmploymentDate";

// const KEYS: keysType[] = [
//   "id",
//   "gender",
//   "firstName",
//   "lastName",
//   "email_login",
//   "personalPhoneNumber",
//   "driver_license",
//   "birthDate",
//   "workPhoneNumber",
//   "actualEmploymentDate",
//   "firstEmploymentDate",
// ];

type KeyObjectType = {
  id: string;
  objType: string;
};

const KEYS: KeyObjectType[] = [
  { id: "id", objType: "noEditField" },
  { id: "gender", objType: "autocompleteField" },
  { id: "firstName", objType: "txtField" },
  { id: "lastName", objType: "txtField" },
  { id: "email_login", objType: "txtField" },
  { id: "personalPhoneNumber", objType: "txtField" },
  { id: "driver_license", objType: "autocompleteField" },
  { id: "birthDate", objType: "dateField" },
  { id: "workPhoneNumber", objType: "txtField" },
  { id: "actualEmploymentDate", objType: "dateField" },
  { id: "firstEmploymentDate", objType: "dateField" },
];
export const Wrapper = () => {
  const { t } = useTranslation();
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;

  if (!userData) return;
  let drivLicTXT: string = "";
  if (userData.driver_license === 1) {
    drivLicTXT = t("pages.userPage.informationDetails.yes");
  } else {
    drivLicTXT = t("pages.userPage.informationDetails.no");
  }
  const personalData: ResponseProfileElementObjectData = {
    id: userData?.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email_login: userData.email_login,
    personalPhoneNumber: userData.personalPhoneNumber,
    driver_license: drivLicTXT,
    birthDate: userData.birthDate,
    workPhoneNumber: userData.workPhoneNumber,
    actualEmploymentDate: userData.actualEmploymentDate,
    firstEmploymentDate: userData.firstEmploymentDate,
    gender: userData.gender,
  };

  // const ADDRESS: string[] = [
  //   `${userData?.residence?.address ?? ""}`,
  //   `${userData?.residence?.address_number ?? ""}`,
  //   `${userData?.residence?.zip_code ?? ""}`,
  //   `${userData?.residence?.city ?? ""}`,
  //   `${userData?.residence?.province ?? ""}`,
  //   `${userData?.residence?.nation ?? ""}`,
  // ];
  const ADDRESS2: Residence = {
    address: userData?.residence?.address,
    address_number: userData?.residence?.address_number,
    city: userData?.residence?.city,
    nation: userData?.residence?.nation,
    province: userData?.residence?.province,
    zip_code: userData?.residence?.zip_code,
  };
  // console.log(ADDRESS2);
  // console.log(KEYS);
  //TODO:per la questione degli hidden, controllo ruolo orgadmin perchè se manualmente cambio un mio campo in hidden poi non è modificabile
  return (
    <Box bgcolor="white">
      <IdInfo data={personalData.id} />
      {/* {KEYS.filter((key) => key !== "id").map((key: keysType) => (
        <Infos title={key} data={personalData[key]} key={key} type="row" />
      ))} */}
      {KEYS.filter((key) => key.id !== "id").map((key: KeyObjectType) => {
        switch (key.objType) {
          case "autocompleteField":
            return (
              <Infos2 key={key.id} title={key.id} data={personalData[key.id]} />
            );
          case "txtField":
            return (
              <Infos3 key={key.id} title={key.id} data={personalData[key.id]} />
            );
          case "dateField":
            return (
              <Infos4 key={key.id} title={key.id} data={personalData[key.id]} />
            );
          default:
            return null;
        }
      })}
      <Infos
        title={t(`pages.userPage.informationDetails.address`)}
        data={ADDRESS2}
        // data={ADDRESS}
        type="list"
      />
    </Box>
  );
};

{
  /* {KEYS.filter((key) => key.id !== "id").map((key: KeyObjectType) => (
  <Infos
    title={key.id}
    data={personalData[key.id]}
    key={key.id}
    type="row"
  />
))} */
}
