import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const MOCK_DATA = [
  "placeholder_1",
  "placeholder_2",
  "placeholder_3",
  "placeholder_4",
  "placeholder_5",
];

export const CheckboxList = ({ showCheckbox }: { showCheckbox: boolean }) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
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
    setChecked(MOCK_DATA);
  };

  const handleRemoveAll = () => {
    setChecked([]);
  };

  const allChecked = checked.length === MOCK_DATA.length;

  return (
    <List>
      {showCheckbox && (
        <ListItem disablePadding>
          <ListItemButton
            onClick={allChecked ? handleRemoveAll : handleSelectAll}
            dense
          >
            <ListItemText primary={allChecked ? "Remove All" : "Select All"} />
          </ListItemButton>
        </ListItem>
      )}
      {MOCK_DATA.map((value) => {
        return (
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={handleToggle(value)} dense>
              {showCheckbox && (
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemText primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
