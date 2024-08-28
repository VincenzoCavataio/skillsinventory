import { FC, useEffect } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Delete, Download, Edit, Save } from "@mui/icons-material";
import { FEMALE_AVATAR, MALE_AVATAR } from "../../../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { userDataSelector } from "../../../../../../redux/userDataSlice";
import {
  isEditModeSelector,
  setEditMode,
} from "../../../../../../redux/isEditMode";
import { useTranslation } from "react-i18next";
import { callToAPI } from "../../../../../../utilities/callToAPI";
import { editProfileSelector } from "../../../../../../redux/editProfileSlice";
import {
  Residence,
  ResponseProfileElementObjectData,
} from "../../../../../../redux/types";

/** Avatar Size for both height and width */
const AVATAR_SIZE: number = 100;

type Props = {
  id?: number;
  title: string;
  fullName: string;
  gender: string;
  src?: string;
};

/** Section to show the avatar and the buttons to trigger edit mode on user profile section */
export const AvatarControlSection: FC<Props> = ({
  id,
  title,
  fullName,
  gender,
  src,
}) => {
  /** I18n initialization */
  const { t } = useTranslation();

  /** Dispatch from redux */
  const dispatch = useDispatch();

  /** Generate the Fallback Icon */
  const FALLBACK_ICON = gender === "female" ? FEMALE_AVATAR : MALE_AVATAR;

  /** Original data taken from Redux > Api Response */
  const personalData = useSelector(userDataSelector);

  /** Edited fields by user */
  const editPersonalData = useSelector(editProfileSelector);

  /** Edited data taken from Redux */
  const isEditMode = useSelector(isEditModeSelector);

  /** Handler for click on edit button */
  const handleEditClick = () => {
    dispatch(setEditMode(true));
  };

  /** Handler for click cancel button */
  const handleSaveCancelClick = () => {
    dispatch(setEditMode(false));
  };

  /** Handler for click on save button */
  const handleSaveClick = () => {
    dispatch(setEditMode(false));
  };

  /** Payload generator for personalData e privatedData fields*/
  const payloadFieldsGenerator = (
    field: keyof ResponseProfileElementObjectData
  ) => {
    const payload = editPersonalData?.[field] ?? personalData?.[field];
    return payload;
  };

  /** Payload generator for residence field*/
  const payloadFieldResidencesGenerator = (field: keyof Residence) => {
    const payload =
      editPersonalData?.residence?.[field] ?? personalData?.residence?.[field];
    return payload;
  };

  /** If not exists src for image use the fallback icon */
  if (!src) {
    src = FALLBACK_ICON;
  }

  /** Generated payload to send to API for all 3 fields */
  const PAYLOAD = {
    personalData: {
      id: id,
      firstName: payloadFieldsGenerator("firstName"),
      lastName: payloadFieldsGenerator("lastName"),
      email: payloadFieldsGenerator("email_login"),
      birthDate: payloadFieldsGenerator("birthDate"),
    },
    privatedData: {
      id: id,
      actualEmploymentDate: payloadFieldsGenerator("actualEmploymentDate"),
      driverLicense: !!payloadFieldsGenerator("driver_license"),
      firstEmploymentDate: payloadFieldsGenerator("firstEmploymentDate"),
      gender: payloadFieldsGenerator("gender"),
      personalPhoneNumber: payloadFieldsGenerator("personalPhoneNumber"),
      workPhoneNumber: payloadFieldsGenerator("workPhoneNumber"),
    },
    residenceData: {
      id: id,
      address: payloadFieldResidencesGenerator("address"),
      address_number: payloadFieldResidencesGenerator("address_number"),
      city: payloadFieldResidencesGenerator("city"),
      nation: payloadFieldResidencesGenerator("nation"),
      province: payloadFieldResidencesGenerator("province"),
      latitude: payloadFieldResidencesGenerator("latitude"),
      longitude: payloadFieldResidencesGenerator("longitude"),
    },
  };
  /** Call to API to update the user data */
  useEffect(() => {
    if (PAYLOAD.residenceData?.id && !isEditMode) {
      callToAPI({
        endpoint: "/api/v1/user/updateUserResidence/",
        payload: PAYLOAD.residenceData,
        method: "PUT",
      });
    }

    if (PAYLOAD.personalData?.id && !isEditMode) {
      callToAPI({
        endpoint: "/api/v1/user/updateUserData/",
        payload: PAYLOAD.personalData,
        method: "PUT",
      });
    }

    if (PAYLOAD.privatedData?.id && !isEditMode) {
      callToAPI({
        endpoint: "/api/v1/user/updateUserPrivateData/",
        payload: PAYLOAD.privatedData,
        method: "PUT",
      });
    }
  }, [
    PAYLOAD.personalData,
    PAYLOAD.privatedData,
    PAYLOAD.residenceData,
    isEditMode,
  ]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={2}
      pb={2}
    >
      <Avatar
        alt="AVATAR_ICON"
        src={src}
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
      <Box textAlign="center">
        <Typography variant="subtitle1">{fullName}</Typography>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        {!isEditMode ? (
          <>
            <Button
              variant="contained"
              onClick={handleEditClick}
              sx={{
                mr: 1,
                height: 30,
                boxShadow: "none",
              }}
            >
              <Typography variant="body2" fontSize={10} color="white" mr={1}>
                {t(`pages.userPage.info.editInfo`)}
              </Typography>
              <Edit fontSize="small" sx={{ width: 14, height: 14 }} />
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: 11, boxShadow: "none" }}
            >
              <Typography variant="body2" fontSize={10} color="white" mr={1}>
                {t(`pages.userPage.info.downloadCV`)}
              </Typography>
              <Download fontSize="small" sx={{ width: 14, height: 14 }} />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              onClick={handleSaveClick}
              sx={{
                mr: 1,
                height: 30,
                boxShadow: "none",
              }}
            >
              <Typography variant="body2" fontSize={10} color="white" mr={1}>
                {t(`pages.userPage.info.saveInfo`)}
              </Typography>
              <Save fontSize="small" sx={{ width: 14, height: 14 }} />
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleSaveCancelClick}
              sx={{ fontSize: 11, boxShadow: "none" }}
            >
              <Typography variant="body2" fontSize={10} color="white" mr={1}>
                {t(`pages.userPage.info.discardInfo`)}
              </Typography>
              <Delete fontSize="small" sx={{ width: 14, height: 14 }} />
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
