import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavigationButton } from "../../components/NavigationButton";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={600}
        justifyContent="center"
        alignItems="center"
      >
        <ErrorOutlineIcon
          fontSize="large"
          sx={{ transform: "scale(1.8)", mb: 3 }}
        />
        <Box
          display="flex"
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h4" width="100%" textAlign="center">
            {t("pages.notFound.title")}
          </Typography>
        </Box>

        <Typography
          variant="subtitle2"
          fontSize={20}
          width="100%"
          textAlign="center"
          mb={6}
        >
          {t("pages.notFound.description")}
        </Typography>
        <NavigationButton />
      </Box>
    </Box>
  );
};
