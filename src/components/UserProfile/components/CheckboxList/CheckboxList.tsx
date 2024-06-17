import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { t } from "i18next";

// const MOCK_DATA = [
//   "placeholder_1",
//   "placeholder_2",
//   "placeholder_3",
//   "placeholder_4",
//   "placeholder_5",
// ];
type CheckboxListProps = {
  showCheckbox: boolean;
  data?: string[]; // Aggiungi questa riga
};
const CustomListItemButton = styled(ListItemButton)(() => ({
  "&.Mui-disabled": {
    opacity: 1,
    color: "black",
  },
}));

// export const CheckboxList = ({ showCheckbox }: { showCheckbox: boolean }) => {
export const CheckboxList: React.FC<CheckboxListProps> = ({
  showCheckbox,
  data,
}) => {
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
    if (data) {
      setChecked(data);
    }
  };

  const handleRemoveAll = () => {
    setChecked([]);
  };

  const allChecked = checked.length === data?.length;

  return (
    <List>
      {showCheckbox && (
        <ListItem disablePadding>
          <ListItemButton
            onClick={allChecked ? handleRemoveAll : handleSelectAll}
            dense
          >
            <ListItemText
              primary={
                allChecked
                  ? t(`pages.userPage.info.removeAll`)
                  : t(`pages.userPage.info.selectAll`)
              }
            />
          </ListItemButton>
        </ListItem>
      )}
      {data?.map((value) => {
        return (
          <ListItem key={value} disablePadding>
            <CustomListItemButton
              onClick={handleToggle(value)}
              dense
              disabled={!showCheckbox}
            >
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
            </CustomListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
