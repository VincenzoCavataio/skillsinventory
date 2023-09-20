import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SliderComponent from "../SliderComponent";
const SkillBadge = ({ name }: { name: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: 4,
        width: "100%",
        justifyContent: "center",
        border: "solid 1px rgba(0,0,0,0.2)",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mr: 2 }}>{name?.toUpperCase()}</Typography>

        <Button variant="outlined" sx={{ ml: 1 }}>
          <DeleteIcon />
        </Button>
      </Box>
      <SliderComponent />
    </Box>
  );
};

export default SkillBadge;
