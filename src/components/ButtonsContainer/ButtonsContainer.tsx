import { CustomButton } from "../CustomButton";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import CancelButton from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/searchSlice";
import { Dispatch, SetStateAction } from "react";
import { CompiledFields } from "../../pages/DashboardPage/types";
import { ButtonGroupAndOr } from "../ButtonGroupAndOr";
import { Box } from "@mui/material";
import { resetSkills } from "../../redux/skillsSlice";

/** Wrapper for 'reset', and/or and search buttons*/
export const ButtonsContainer = ({
  setSelectedInput,
}: {
  setSelectedInput: Dispatch<SetStateAction<CompiledFields>>;
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const init: CompiledFields = {
    fullName: "",
    skill: "",
    certification: [],
    city: [],
    educationalLevel: "",
    institute: "",
    course: "",
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <CustomButton
          label={t("common.clear")}
          color="error"
          variant="outlined"
          callback={() => {
            dispatch(resetFilters());
            dispatch(resetSkills());
            setSelectedInput(init);
          }}
          icon={<CancelButton />}
        />
      </Box>
      <Box
        display={"flex"}
        position="absolute"
        left="39%"
        flexDirection={"column"}
      >
        <ButtonGroupAndOr />
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <CustomButton
          label={t("common.search")}
          color={"primary"}
          variant="outlined"
          callback={() => {}}
          icon={<SearchIcon />}
        />
      </Box>
    </>
  );
};
