import { useCallback, useMemo, useState } from "react";
import { Step2 } from "../Steps/Step2";
import { Step3 } from "../Steps/Step3";
import { Step1 } from "../Steps/Step1";
import { commonColors } from "../../../../common/commonColors";
import { ChevronLeft, ChevronRight, Login } from "@mui/icons-material";
import { PAGES } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { HeaderNavbar } from "../../../HeaderNavbar";
import { LastStep } from "../Steps/LastStep";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Background from "../../../../assets/bg_signin.png";
import logo from "../../../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import { Step4 } from "../Steps/Step4";

const LOGO_SIZE = 36;

//TODO: Componente da rivedere per logica

/** Component to render the SigninStepper */
export const SigninStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleReset = useCallback(() => {
    setActiveStep(0);
  }, []);

  const STEPS = useMemo(
    () => [
      { title: t("pages.signinPage.steps.credentials"), component: <Step1 /> },
      { title: t("pages.signinPage.steps.registry"), component: <Step2 /> },
      { title: t("pages.signinPage.steps.residence"), component: <Step3 /> },
      { title: t("pages.signinPage.steps.informations"), component: <Step4 /> },
      {
        title: t("pages.signinPage.steps.finalize"),
        component: <LastStep handleReset={handleReset} />,
      },
    ],
    [t]
  );
  const isLastStep = activeStep === STEPS.length;

  const handleNext = useCallback(() => {
    setActiveStep((prevStep) => prevStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevStep) => prevStep - 1);
  }, []);

  const handleNavigate = useCallback(() => {
    navigate(PAGES.loginPage);
  }, [navigate]);

  return (
    <Box>
      <HeaderNavbar />
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 65px)",
          background: commonColors.backgroundGray,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 600,
                height: 600,
                background: "white",
                p: 5,
              }}
            >
              <Button sx={{ mb: 2, ml: "-5px" }} onClick={handleNavigate}>
                <Login
                  sx={{ transform: "scaleX(-1)", marginRight: 1 }}
                  fontSize="small"
                />
                <Typography variant="caption" color="primary">
                  {t("common.back_login")}
                </Typography>
              </Button>
              <Box mb={9}>
                <img src={logo} height={LOGO_SIZE} />
              </Box>
              <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
                {STEPS.map((label) => {
                  const { title } = label;
                  return (
                    <Step key={title}>
                      <StepLabel>{title}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {isLastStep ? (
                <LastStep handleReset={handleReset} />
              ) : (
                <Box>
                  {STEPS[activeStep].component}
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="primary"
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      <ChevronLeft />
                      {t("common.back")}
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      onClick={handleNext}
                      color="primary"
                      variant="contained"
                      sx={{ mr: 1 }}
                    >
                      {activeStep === STEPS.length - 1
                        ? t("common.end")
                        : t("common.next")}
                      <ChevronRight />
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: 400,
                height: 600,
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                p: 5,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
