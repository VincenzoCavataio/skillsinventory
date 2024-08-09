import { Typography, Box, Button, Container } from "@mui/material";
import { useRef } from "react";
import { RegisterAutocomplete } from "./RegisterAutocomplete/RegisterAutocomplete";
import { RegisterGenericTextField } from "./RegisterGenericTextField";
import { RegisterNumberOnlyTextField } from "./RegisterNumberOnlyTextField";
import { RegisterDatePicker } from "./RegisterDatePicker";
import { RegisterData4 } from "./RegisterData4/RegisterData4";
import { RegisterData3 } from "./RegisterData3/RegisterData3";
import { KeyFormType } from "./RegisterData4/RegisterData4";
import { useTranslation } from "react-i18next";

export const RegisterPage = () => {
  const { t } = useTranslation();
  const DATATRY1 = RegisterData4();
  const DATATRY2 = RegisterData3();
  const FORM = useRef(null);
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          maxWidth="xl"
          component="form"
          ref={FORM}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            px: "3rem",
            height: {
              xs: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
              xxl: "100vh",
            },
            background: "white",
            // borderRight: `1px solid ${commonColors.accentColor}`,
            // borderLeft: `1px solid  ${commonColors.accentColor}`,
          }}
        >
          <Typography
            flex={2}
            sx={{
              fontSize: "44px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {t("pages.registerPage.regTitle")}
          </Typography>
          <Box
            flex={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              px: "3rem",
              height: "100%",
              background: "white",
            }}
          >
            <Box
              width={"100%"}
              component="form"
              ref={FORM}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                px: "3rem",
                height: "100%",
                background: "white",
              }}
            >
              {DATATRY1.filter((key) => key.id !== "id").map(
                (key: KeyFormType) => {
                  switch (key.objType) {
                    case "GenericTextField":
                      return (
                        <RegisterGenericTextField
                          id={key.id}
                          autoComplete={key.autoComplete}
                          label={key.label}
                          name={key.name}
                          required={key.required}
                          type={key.type}
                        />
                      );
                    case "AutocompleteField":
                      return (
                        <RegisterAutocomplete
                          id={key.id}
                          label={key.label}
                          weirdBackendOptions={key.weirdBackendOptions}
                          option={key.option}
                          required={key.required}
                        />
                      );
                    case "NumberTextField":
                      return (
                        <RegisterNumberOnlyTextField
                          id={key.id}
                          autoComplete={key.autoComplete}
                          label={key.label}
                          name={key.name}
                          type={key.type}
                        />
                      );
                    default:
                      return null;
                  }
                }
              )}
            </Box>
            <Box
              width={"100%"}
              component="form"
              ref={FORM}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                px: "3rem",
                height: "100%",
                background: "white",
              }}
            >
              {DATATRY2.filter((key) => key.id !== "id").map(
                (key: KeyFormType) => {
                  switch (key.objType) {
                    case "GenericTextField":
                      return (
                        <RegisterGenericTextField
                          id={key.id}
                          autoComplete={key.autoComplete}
                          label={key.label}
                          name={key.name}
                          required={key.required}
                          type={key.type}
                        />
                      );
                    case "AutocompleteField":
                      return (
                        <RegisterAutocomplete
                          id={key.id}
                          label={key.label}
                          weirdBackendOptions={key.weirdBackendOptions}
                          option={key.option}
                          required={key.required}
                        />
                      );
                    case "DatePicker":
                      return <RegisterDatePicker label={key.label} />;
                    case "NumberTextField":
                      return (
                        <RegisterNumberOnlyTextField
                          id={key.id}
                          autoComplete={key.autoComplete}
                          label={key.label}
                          name={key.name}
                          type={key.type}
                        />
                      );
                    default:
                      return null;
                  }
                }
              )}
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            sx={{
              background: "white",
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth: 100, height: 50 }}
            >
              {t("pages.registerPage.regButton")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
