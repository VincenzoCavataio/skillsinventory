import { Avatar, Box } from "@mui/material";
import { BoxSkillEduCert } from "../BoxSkillEduCert";

type CustomAvatarProps = {
  src?: string; // L'immagine può essere opzionale
  alt: string;
};
type Identity = {
  title: string;
  nameSurname: string;
};
const CustomAvatar: React.FC<CustomAvatarProps> = ({ src, alt }) => {
  if (src) {
    return (
      <Avatar
        alt={alt}
        src={src}
        sx={{ width: 150, height: 150, marginTop: 2, marginBottom: 2 }}
      />
    );
  } else {
    return (
      <Avatar
        alt={alt}
        src="/broken-image.jpg"
        sx={{ width: 150, height: 150, marginTop: 2, marginBottom: 2 }}
      />
    );
  }
};
const TitleAndName: React.FC<Identity> = ({ title, nameSurname }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <h2>{nameSurname}</h2>
      <p style={{ color: "grey" }}>{title}</p>
    </Box>
  );
};
export const Wrapper = () => {
  return (
    <>
      <CustomAvatar alt="User Name" src="" />
      <TitleAndName title="Frontend Developer" nameSurname="Joseph Colombo" />
      <BoxSkillEduCert />
      {/* <OperationsButtons
        data={mappedData}
        setMappedData={setMappedData}
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      />
      <WindowSelectedSkills
        data={mappedData}
        setMappedData={setMappedData}
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      /> */}
    </>
  );
};
