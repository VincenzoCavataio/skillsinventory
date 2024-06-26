import { useEffect, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { FEMALE_AVATAR, MALE_AVATAR } from "../../../../../../constants";
import { useDispatch } from "react-redux";
import { setEditMode } from "../../../../../../redux/editProfileSlice";

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

  if (!src) {
    src = FALLBACK_ICON;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveCancelClick = () => {
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
              sx={{ mr: 1, fontSize: 12 }}
            >
              Modifica Anagrafica
            </Button>
            <Button variant="contained" sx={{ fontSize: 12 }}>
              Download CV
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              onClick={handleSaveCancelClick}
              sx={{ mr: 1, fontSize: 12 }}
            >
              Salva Modifiche
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveCancelClick}
              sx={{ fontSize: 12 }}
            >
              Annulla Modifiche
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
