import { Container } from "@mui/material";
import style from "./style";
import CustomButton from "../CustomButton";
import { t } from "i18next";
import SearchIcon from "@mui/icons-material/Search";
import CancelButton from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filtersSlice";

const ButtonsContainer = () => {
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl" sx={style.container}>
      <CustomButton
        label={t("common.clear")}
        color={"info"}
        callback={() => dispatch(resetFilters())}
        icon={<CancelButton />}
      />
      <CustomButton
        label={t("common.search")}
        color={"primary"}
        callback={() => console.log("SUBMIT")}
        icon={<SearchIcon />}
      />
    </Container>
  );
};

export default ButtonsContainer;
