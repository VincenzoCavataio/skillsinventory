import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export function BoxSkillEduCert() {
  const [accordionStates, setAccordionStates] = React.useState({
    hardSkills: false,
    education: false,
    certificates: false,
  });

  const toggleEdit = (accordion) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [accordion]: !prevState[accordion],
    }));
  };
  return (
    <>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Hard Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            onClick={() => toggleEdit("hardSkills")}
            variant="outlined"
            color={accordionStates.hardSkills ? "info" : "primary"}
          >
            Edit
          </Button>
          <CheckboxList showCheckbox={accordionStates.hardSkills} />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            onClick={() => toggleEdit("education")}
            variant="outlined"
            color={accordionStates.education ? "info" : "primary"}
          >
            Edit
          </Button>
          <CheckboxList showCheckbox={accordionStates.education} />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Certificates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            onClick={() => toggleEdit("certificates")}
            variant="outlined"
            color={accordionStates.certificates ? "info" : "primary"}
          >
            Edit
          </Button>
          <CheckboxList showCheckbox={accordionStates.certificates} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export function CheckboxList({ showCheckbox }: { showCheckbox: boolean }) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSelectAll = () => {
    setChecked([0, 1, 2, 3]);
  };

  const handleRemoveAll = () => {
    setChecked([]);
  };

  const allChecked = checked.length === 4;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {showCheckbox && (
        <ListItem disablePadding>
          <ListItemButton
            onClick={allChecked ? handleRemoveAll : handleSelectAll}
            dense
            sx={{
              color: "#006fb9",
              "&:hover": {
                textDecoration: "underline",
                color: "#8cbe2d",
              },
            }}
          >
            <ListItemText primary={allChecked ? "Remove All" : "Select All"} />
          </ListItemButton>
        </ListItem>
      )}
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              {showCheckbox && (
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
              )}
              <ListItemText id={labelId} primary={`presoDaBackend`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

// export function CustomAccordion() {  //TODO DRY ACCORDION

//     return(
//         <>
//         <Accordion>
//         <AccordionSummary
//           expandIcon={<ArrowDropDownIcon />}
//           aria-controls="panel-content"
//           id="panel1-header"
//         >
//           <Typography>Hard Skills</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <CheckboxList />
//         </AccordionDetails>
//       </Accordion>
//         </>
//     );
// }
