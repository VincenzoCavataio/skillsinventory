import { useSelector } from "react-redux";
import { Infos } from "../Infos";
import { Box } from "@mui/material";
import {
  ReduxStore,
  ResponseProfileElementObjectData,
} from "../../../../redux/types";

const KEYS: string[] = [
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
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  if (!userData) return;
  const personalData: ResponseProfileElementObjectData = {
    id: userData?.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email_login: userData.email_login,
    personalPhoneNumber: userData.personalPhoneNumber,
    driver_license: userData?.driver_license ? "Sì" : "No",
    birthDate: userData.birthDate,
    workPhoneNumber: userData.workPhoneNumber,
    actualEmploymentDate: userData.actualEmploymentDate,
    firstEmploymentDate: userData.firstEmploymentDate,
  };

  const MOCK_ADDRESS: string[] = [
    `${userData?.residence?.address ?? ""}`,
    `${userData?.residence?.address_number ?? ""}`,
    `${userData?.residence?.zip_code ?? ""}`,
    `${userData?.residence?.city ?? ""}`,
    `${userData?.residence?.nation ?? ""}`,
  ];
  //TODO: CAPIRE ERRORE PERSONALDATA
  return (
    <Box>
      {KEYS.map((key: string) => (
        <Infos title={key} data={personalData[key]} key={key} type="row" />
      ))}
      <Infos title="Address" data={MOCK_ADDRESS} type="list" />
    </Box>
  );
};
