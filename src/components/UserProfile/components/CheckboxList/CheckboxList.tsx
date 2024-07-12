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
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  updateCertRowsNumber,
  updateEduRowsNumber,
  updateSkillRowsNumber,
} from "../../../../redux/adderSlice";

type CheckboxListProps = {
  showCheckbox: boolean;
  data?: string[];
  label: string;
};
const CustomListItemButton = styled(ListItemButton)(() => ({
  "&.Mui-disabled": {
    opacity: 1,
    color: "black",
  },
}));

export const CheckboxList: React.FC<CheckboxListProps> = ({
  showCheckbox,
  data,
  label,
}) => {
  const { t } = useTranslation();
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
    console.log(newChecked);
  };

  const handleSelectAll = () => {
    if (data) {
      setChecked(data);
    }
  };

  const handleRemoveAll = () => {
    setChecked([]);
  };
  const rowsStore = useSelector((state: ReduxStore) => state.rowsManager);
  const dispatch = useDispatch();
  const [oldRows, setOldRows] = useState<number>(rowsStore.skillRows);
  // const oldRows = rowsStore.skillRows;
  const handleRow = () => {
    if (label === "hardSkills") {
      const newRows = oldRows + 1;
      setOldRows(newRows);
      dispatch(updateSkillRowsNumber(newRows));
      console.log(rowsStore.skillRows);
    } else if (label === "education") {
      const oldRows2 = rowsStore.eduRows;
      const newRows2 = oldRows2 + 1;
      dispatch(updateEduRowsNumber(newRows2));
    } else if (label === "certificates") {
      const oldRows3 = rowsStore.certRows;
      const newRows3 = oldRows3 + 1;
      dispatch(updateCertRowsNumber(newRows3));
    }
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
                    onClick={handleRow}
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
