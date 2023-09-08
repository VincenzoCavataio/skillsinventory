import {
  Autocomplete,
  Box,
  Container,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import HeaderNavbar from "../../components/HeaderNavbar";
import { t } from "i18next";
import { useState } from "react";

const DashboardPage = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  return (
    <>
      <HeaderNavbar />
      <Container
        maxWidth="lg"
        sx={{
          background: "white",
          mt: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"}>
          <TextField
            id="outlined-basic"
            label={t("pages.dashboard.search.name")}
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["esempio1", "esempio2", "esempio3"]}
            noOptionsText={t("pages.dashboard.search.noOptions")}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("pages.dashboard.search.selectSkills")}
              />
            )}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Button variant="contained" sx={{ color: commonColors.white }}>
            GO
          </Button> */}
          <FormControlLabel
            onChange={() => setAdvancedSearch(!advancedSearch)}
            value={advancedSearch}
            control={<Switch color="primary" />}
            label={t("pages.dashboard.search.advancedSearch")}
            labelPlacement="start"
          />
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          background: "white",
          mt: 0,
          p: advancedSearch ? 2 : 0,
          display: "flex",
          justifyContent: "space-between",
          transition: "all .2s",
          height: advancedSearch ? "100px" : 0,
        }}
      ></Container>
    </>
  );
};

export default DashboardPage;
