import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";
import { ResponseProfileElementObjectData } from "../../../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { EditTextField } from "../../style";
import { updateEditPayload } from "../../../../redux/editProfileSlice";
import { useState } from "react";
import { validateEmail } from "../../../../utilities/validEmailChecker";
import { isEditModeSelector } from "../../../../redux/isEditMode";

export const Infos3 = ({
  title,
  data,
}: {
  title: string;
  data:
    | ResponseProfileElementObjectData[keyof ResponseProfileElementObjectData]
    | string[];
}) => {
  const { t } = useTranslation();

  const isActive = useSelector(isEditModeSelector);

  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);
  const handleTextChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailField) {
      if (validateEmail(e.target.value)) {
        setIsValid(true);
        dispatch(updateEditPayload({ [title]: e.target.value }));
      } else {
        setIsValid(false);
      }
    } else {
      dispatch(updateEditPayload({ [title]: e.target.value }));
    }
  };

  const emailField = "email_login".includes(title);

  const onlyNumberField = ["workPhoneNumber", "personalPhoneNumber"].includes(
    title
  );

  return (
    <Box
      textAlign="left"
      display="flex"
      p={2}
      borderBottom={`1px solid ${commonColors.lightGray}`}
    >
      <Box flex={1} alignContent="center">
        <Typography variant="body1">
          {t(`pages.userPage.informationDetails.${title}`)}
        </Typography>
      </Box>
      <Box flex={2} alignContent="center">
        {isActive ? (
          onlyNumberField ? (
            <EditTextField
              variant="outlined"
              id="outlined-number"
              type="number"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
              InputProps={{
                inputMode: "none",
              }}
            />
          ) : emailField ? (
            <EditTextField
              variant="outlined"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
              error={!isValid}
              helperText={!isValid ? "Email non valida" : ""}
            />
          ) : (
            <EditTextField
              variant="outlined"
              fullWidth
              onChange={handleTextChange2}
              defaultValue={Array.isArray(data) ? data.join(", ") : data}
            />
          )
        ) : (
          <Typography variant="body2">{(data as string[]) ?? "-"}</Typography>
        )}
      </Box>
    </Box>
  );
};
