import { useEffect, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { FEMALE_AVATAR, MALE_AVATAR } from "../../../../../../constants";
import { useDispatch } from "react-redux";
import {
  saveChanges,
  discardChanges,
  setEditMode,
} from "../../../../../../redux/editProfileSlice";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  fullName: string;
  src?: string;
  alt?: string;
  gender?: string;
};

export const WrapperHeader = ({ title, fullName, src, alt, gender }: Props) => {
  const AVATAR_SIZE: number = 100;
  const FALLBACK_ICON = gender === "female" ? FEMALE_AVATAR : MALE_AVATAR;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();

  if (!src) {
    src = FALLBACK_ICON;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveCancelClick = () => {
    dispatch(discardChanges());
    setIsEditing(false);
  };
  const handleSaveClick = () => {
    dispatch(saveChanges());
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(setEditMode(isEditing));
  }, [isEditing, dispatch]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={2}
      pb={2}
    >
      <Avatar
        alt={alt}
        src={src}
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
      <Box textAlign="center">
        <Typography variant="subtitle1">{fullName}</Typography>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        {!isEditing ? (
          <>
            <Button
              variant="contained"
              onClick={handleEditClick}
              sx={{ mr: 1, fontSize: 11, boxShadow: "none" }}
            >
              {t(`pages.userPage.info.editInfo`)}
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: 11, boxShadow: "none" }}
            >
              {t(`pages.userPage.info.downloadCV`)}
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              onClick={handleSaveClick}
              sx={{ mr: 1, fontSize: 11, boxShadow: "none" }}
            >
              {t(`pages.userPage.info.saveInfo`)}
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveCancelClick}
              sx={{ fontSize: 11, boxShadow: "none" }}
            >
              {t(`pages.userPage.info.discardInfo`)}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
