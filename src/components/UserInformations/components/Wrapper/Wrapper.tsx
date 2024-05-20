import { useSelector } from "react-redux";
import { MOCK_USER_DATA, MOCK_USER_DATA_ADDRESS } from "../../../../constants";
import { Infos } from "../Infos";
import { Box } from "@mui/material";
import { ReduxStore, User } from "../../../../redux/types";

const KEYS = [
  "id",
  "gender",
  "firstName",
  "lastName",
  "email_login",
  "personalPhoneNumber",
  "driver_license",
  "birthDate",
];

export const Wrapper = () => {
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;

  const personalData = {
    id: userData?.id,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email_login: userData?.email_login,
    personalPhoneNumber: userData?.personalPhoneNumber,
    driver_license: userData?.driver_license,
    birthDate: userData?.birthDate,
  };

  const addressData = userData?.residence;
  if (!userData) return;

  return (
    <Box>
      {KEYS.map((key) => (
        <Infos title={key} data={personalData[key]} key={key} type="row" />
      ))}
      <Infos title="Address" data={MOCK_USER_DATA_ADDRESS} type="list" />
    </Box>
  );
};
