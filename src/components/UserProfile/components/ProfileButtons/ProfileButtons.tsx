// import { Box, Container } from "@mui/material";
// import { style } from "./style";
// import { CustomButton } from "../CustomButton";
// import { t } from "i18next";
// import SearchIcon from "@mui/icons-material/Search";
// import CancelButton from "@mui/icons-material/Cancel";
// import { useDispatch } from "react-redux";
// import { resetFilters } from "../../redux/filtersSlice";
// import { Dispatch, SetStateAction } from "react";
// import { CompiledFields } from "../../pages/DashboardPage/types";
// import { ButtonGroupAndOr } from "../ButtonGroupAndOr";
// import { Box } from "@mui/material";

// export const ProfileButtons = ({
//   setSelectedInput,
//   submit,
// }: {
//   setSelectedInput: Dispatch<SetStateAction<CompiledFields>>;
//   submit: (value: boolean) => void;
// }) => {
//   const dispatch = useDispatch();

//   const init = {
//     fullName: "",
//     skill: "",
//     certification: "",
//     city: "",
//     educationalLevel: "",
//     institute: "",
//     course: "",
//   };

//   return (
//     <>
//       <Box display={"flex"} flexDirection={"column"}>
//         <CustomButton
//           label="Edit"
//           color={"primary"}
//           variant="outlined"
//           callback={() => {
//             dispatch(resetFilters());
//             setSelectedInput(init);
//             submit(false);
//           }}
//           icon={<CancelButton />}
//         />
//       </Box>
//       <Box display={"flex"} flexDirection={"column"}>
//         <CustomButton
//           label="Delete"
//           color={"primary"}
//           variant="outlined"
//           callback={() => {
//             submit(true);
//           }}
//           icon={<SearchIcon />}
//         />
//       </Box>
//     </>
//   );
// };