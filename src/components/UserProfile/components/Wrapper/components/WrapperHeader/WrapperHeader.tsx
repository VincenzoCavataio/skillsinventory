import { Avatar, Box, Typography } from "@mui/material";
import { FEMALE_AVATAR, MALE_AVATAR } from "../../../../../../constants";

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

  if (!src) {
    src = FALLBACK_ICON;
  }

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
    </Box>
  );
};
