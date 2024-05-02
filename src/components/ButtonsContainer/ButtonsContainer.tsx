import { Box, Container } from "@mui/material";
import { style } from "./style";
import { CustomButton } from "../CustomButton";
import { t } from "i18next";
import SearchIcon from "@mui/icons-material/Search";
import CancelButton from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filtersSlice";
import { Dispatch, SetStateAction } from "react";
import { CompiledFields } from "../../pages/DashboardPage/types";
import { ButtonGroupAndOr } from "../ButtonGroupAndOr";

export const ButtonsContainer = ({
  setSelectedInput,
  submit,
}: {
  setSelectedInput: Dispatch<SetStateAction<CompiledFields>>;
  submit: (value: boolean) => void;
}) => {
  const dispatch = useDispatch();

  const init = {
    fullName: "",
    skill: "",
    certification: "",
    city: "",
    educationalLevel: "",
    institute: "",
    course: "",
  };

  return (
    <Container maxWidth="xl" sx={style.container}>
      <Box display={"flex"} flexDirection={"column"} sx={{ mr: 2 }}>
        <ButtonGroupAndOr />
      </Box>
      <Box>
        <CustomButton
          label={t("common.clear")}
          color={"primary"}
          // variant="outlined"
          callback={() => {
            dispatch(resetFilters());
            setSelectedInput(init);
            submit(false);
          }}
          icon={<CancelButton />}
        />
        <CustomButton
          label={t("common.search")}
          color={"primary"}
          callback={() => {
            submit(true);
          }}
          icon={<SearchIcon />}
        />
      </Box>
    </Container>
  );
};
