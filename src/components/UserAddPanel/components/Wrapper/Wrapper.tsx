import { Box } from "@mui/material";
import { GenericAdd } from "../GenericAdd";

export const Wrapper = () => {
  const skillAdd: string = "Add Skill";
  const certAdd: string = "Add Certifications";
  const eduAdd: string = "Add Education";

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
      <GenericAdd label={skillAdd} />
      <GenericAdd label={eduAdd} />
      <GenericAdd label={certAdd} />
    </Box>
  );
};
