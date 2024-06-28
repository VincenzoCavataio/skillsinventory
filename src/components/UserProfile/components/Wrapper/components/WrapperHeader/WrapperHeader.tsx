import { useEffect, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { FEMALE_AVATAR, MALE_AVATAR } from "../../../../../../constants";
import { useDispatch } from "react-redux";
import {
  saveChanges,
  discardChanges,
  setEditMode,
  updateEditPayload,
} from "../../../../../../redux/editProfileSlice";
import { useTranslation } from "react-i18next";
import { Delete, Download, Edit, Save } from "@mui/icons-material";

type Props = {
  title: string;
  fullName: string;
  src?: string;
  alt?: string;
  gender?: string;
  id?: number;
};

export const WrapperHeader = ({
  id,
  title,
  fullName,
  src,
  alt,
  gender,
}: Props) => {
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
    dispatch(updateEditPayload({ id: id })); // Assicurati di passare l'ID qui
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
