import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import HomeIcon from "@mui/icons-material/Home";
import commonStyle from "../../common/commonStyle";

type Props = { to?: string };

const NavigationButton = ({ to }: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path ?? ""}`);
  };

  return (
    <Button
      sx={commonStyle.colorWhite}
      color={"primary"}
      variant="contained"
      onClick={() => handleClick(to ?? "")}
    >
      <HomeIcon sx={[commonStyle.margin2, commonStyle.padding1]} />
      {t("common.back_home")}
    </Button>
  );
};

export default NavigationButton;
