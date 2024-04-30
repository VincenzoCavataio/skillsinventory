import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { t } from "i18next";
import { commonColors } from "../../common/commonColors";
import { useState } from "react";

export const ButtonGroupAndOr = () => {
  const [value, setValue] = useState("AND");

  return (
    <ToggleButtonGroup
      exclusive
      onChange={(_, value) => value && setValue(value)}
      value={value}
      aria-label={t(`pages.dashboard.slider.buttonContainerl`)}
      sx={{ background: commonColors.accentColor }}
      style={{}}
    >
      <ToggleButton
        key={"AND"}
        value={"AND"}
        sx={{ width: 60, fontWeight: 800 }}
      >
        <Typography variant="caption" color={"white"}>
          {t(`pages.dashboard.buttonGroup.and`)}
        </Typography>
      </ToggleButton>
      <ToggleButton key={"OR"} value={"OR"} sx={{ width: 60, fontWeight: 800 }}>
        <Typography variant="caption" color={"white"}>
          {t(`pages.dashboard.buttonGroup.or`)}
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
