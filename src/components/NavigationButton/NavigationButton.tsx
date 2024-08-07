import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import commonStyle from "../../common/commonStyle";

type Props = { to?: string };

export const NavigationButton = ({ to }: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path ?? ""}`);
  };
  const { t } = useTranslation();
  return (
    <Button
      sx={{ ...commonStyle.colorWhite, width: 300 }}
      color={"primary"}
      variant="contained"
      onClick={() => handleClick(to ?? "")}
    >
      <HomeIcon sx={[commonStyle.margin2, commonStyle.padding1]} />
      {t("common.back_home")}
    </Button>
  );
};
