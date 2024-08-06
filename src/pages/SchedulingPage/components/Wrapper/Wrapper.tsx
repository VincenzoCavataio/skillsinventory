import { Box, Container, Typography } from "@mui/material";
import { HeaderNavbar } from "../../../../components/HeaderNavbar";
import { GenericScheduler } from "../GenericScheduler";

export const Wrapper = () => {
  const organizations: string[] = [
    "NEXTRE",
    "ALMALAUREA",
    "BE",
    "YOUCO",
    "ILLIMITY",
  ];
  return (
    <Box>
      <HeaderNavbar />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="xl"
          gap={2}
          className="userPageWrapper"
          pb={3}
        >
          <Typography
            sx={{ fontSize: "50px", fontWeight: 700, textAlign: "center" }}
          >
            Gestione Schedulazione
          </Typography>
          {/* <Box width="100%" display="flex" flexDirection="row" gap={2}>
            <GenericScheduler />
            <GenericScheduler />
            <GenericScheduler />
          </Box>
          <Box width="100%" display="flex" flexDirection="row" gap={2}>
            <GenericScheduler />
            <GenericScheduler />
          </Box> */}
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            gap={2}
            flexWrap="wrap"
            justifyContent="center"
          >
            {organizations.map((org, index) => (
              <GenericScheduler key={index} org={org} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
