import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import {
  addCertRowData,
  addEduRowData,
  addSkillRowData,
  checkAll,
  checkItem,
  removeSkillRowData,
  uncheckAll,
  uncheckItem,
  updateCertRowsNumber,
  updateEduRowsNumber,
  updateSkillRowsNumber,
} from "../../../../redux/adderSlice";
import {
  CertRowType,
  EduRowType,
  SkillRowType,
} from "../../../UserAddPanel/types";

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

// TODO: File da cancellare ma assicurarsi che sia inutile.
export const CheckboxList: React.FC<CheckboxListProps> = ({
  showCheckbox,
  data,
  label,
}) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<string[]>([]);
  const rowsStore = useSelector((state: ReduxStore) => state.rowsManager);
  const dispatch = useDispatch();
  const [oldRows, setOldRows] = useState<number>(rowsStore.skillRows);
  const [skillData, setSkillData] = useState<SkillRowType[]>([]);
  const [eduData, setEduData] = useState<EduRowType[]>([]);
  const [certData, setCertData] = useState<CertRowType[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value); //x
    // const currentIndex = rowsStore.checked.indexOf(value);

    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      dispatch(checkItem(value));
    } else {
      newChecked.splice(currentIndex, 1);
      dispatch(uncheckItem(value));
    }
    // dispatchNewCheckedData(rowsStore.checked);
    setChecked(newChecked); //x
    dispatchNewCheckedData(newChecked); //xxxxxxx
    // console.log(newChecked);
    // dispatch(updateSkillRowsData(newChecked));
  };
  // console.log(checked);

  const handleSelectAll = () => {
    if (data) {
      // setChecked(data);
      dispatch(checkAll(data)), dispatchNewCheckedData(data);
    }
  };

  const handleRemoveAll = () => {
    // setChecked([]);
    dispatch(uncheckAll()), dispatchNewCheckedData([]);
  };

  const handleRow = () => {};
  const getMaxSkillId = () => {
    if (rowsStore.skillRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.skillRowsData.map((row) => row.id));
  };
  const getMaxEduId = () => {
    if (rowsStore.eduRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.eduRowsData.map((row) => row.id));
  };
  const getMaxCertId = () => {
    if (rowsStore.certRowsData.length === 0) {
      return 0;
    }
    return Math.max(...rowsStore.certRowsData.map((row) => row.id));
  };
  // const allChecked = rowsStore.checked.length === data?.length;
  const allChecked = checked.length === data?.length;
  const [coseCheckate, setCoseCheckate] = useState<string[]>(rowsStore.checked);
  useEffect(() => {
    setCoseCheckate(rowsStore.checked);
    // if (coseCheckate.length > 0) {
    //   dispatchNewCheckedData(coseCheckate);
    // }
  }, [rowsStore.checked, coseCheckate]);
  // console.log(coseCheckate);
  const dispatchNewCheckedData = (newChecked: string[]) => {
    if (label === "hardSkills") {
      // const oldRows = rowsStore.skillRows;
      const oldRows = getMaxSkillId();
      const newRows = oldRows + 1;
      // console.log(newRows);
      dispatch(updateSkillRowsNumber(rowsStore.skillRowsData.length + 1));

      const identifiers = ["Liv", "exp", "note", "id"];

      // const newSkillData = rowsStore.checked.map((item: string) => {
      const newSkillData = newChecked.map((item: string) => {
        // const newSkillData = coseCheckate.map((item: string) => {
        const parts = item.split(" ");
        let skillRow: SkillRow = {
          nameTxtField: "",
          levelInput: 1,
          expInput: 1,
          noteTxtField: "",
          id: newRows,
        };

        let currentIdentifier = "";
        let currentValue: string[] = [];
        let techNameAssigned = false;

        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];

          if (identifiers.includes(part)) {
            if (currentIdentifier) {
              switch (currentIdentifier) {
                case "Liv":
                  skillRow.levelInput = currentValue.join(" ");
                  break;
                case "exp":
                  skillRow.expInput = currentValue.join(" ");
                  break;
                case "note":
                  skillRow.noteTxtField = currentValue.join(" ");
                  break;
                // case "id":
                //   skillRow.id = parseInt(currentValue[0], 10);
                // break;
                default:
                  break;
              }
            }
            currentIdentifier = part;
            currentValue = [];
            techNameAssigned = true;
          } else {
            if (!techNameAssigned) {
              skillRow.nameTxtField += part + " ";
            } else {
              currentValue.push(part);
            }
          }
        }

        // Rimuove lo spazio finale in eccesso nel nome della tecnologia
        skillRow.nameTxtField = skillRow.nameTxtField.trim();

        if (currentIdentifier) {
          switch (currentIdentifier) {
            case "Liv":
              skillRow.levelInput = currentValue.join(" ");
              break;
            case "exp":
              skillRow.expInput = currentValue.join(" ");
              break;
            case "note":
              skillRow.noteTxtField = currentValue.join(" ");
              break;
            // case "id":
            //   skillRow.id = parseInt(currentValue[0], 10);
            //   break;
            default:
              break;
          }
        }

        return skillRow;
      });

      if (skillData.length < newSkillData.length) {
        const newElement = newSkillData[newSkillData.length - 1];
        console.log(newElement, newSkillData);
        setSkillData(newSkillData);
        dispatch(addSkillRowData(newElement));
      } else {
        setSkillData(newSkillData);
        const removedElement = skillData.filter(
          (item) => !newChecked.includes(item.nameTxtField)
        );
        console.log(removedElement);
        if (removedElement.length > 0) {
          dispatch(removeSkillRowData(removedElement[0].id));
          dispatch(updateSkillRowsNumber(rowsStore.skillRowsData.length - 1));
        }
      }
    } else if (label === "education") {
      const oldRows2 = getMaxEduId();
      // const oldRows2 = rowsStore.eduRows;
      const newRows2 = oldRows2 + 1;

      // dispatch(updateEduRowsNumber(newRows2));
      dispatch(updateEduRowsNumber(rowsStore.eduRowsData.length + 1));

      const identifiers = ["cour", "lev", "inst", "ycity", "isIt", "isUni"];

      // const newEduData = rowsStore.checked.map((item: string) => {
      const newEduData = newChecked.map((item: string) => {
        const parts = item.split(" ");
        let eduRow: EduRow = {
          courseTxtField: "",
          levelMenu: "",
          itChckbx: false,
          instTxtField: "",
          cityTxtField: "",
          id: newRows2,
        };

        let currentIdentifier = "";
        let currentValue: string[] = [];

        parts.forEach((part) => {
          if (identifiers.includes(part)) {
            if (currentIdentifier) {
              switch (currentIdentifier) {
                case "cour":
                  eduRow.courseTxtField = currentValue.join(" ");
                  break;
                case "lev":
                  eduRow.levelMenu = currentValue.join(" ");
                  break;
                case "inst":
                  eduRow.instTxtField = currentValue.join(" ");
                  break;
                case "ycity":
                  eduRow.cityTxtField = currentValue.join(" ");
                  break;
                case "isIt":
                  eduRow.itChckbx = currentValue[0] === "1";
                  break;
                case "isUni":
                  // cosa faccio con isUni?
                  break;
                default:
                  break;
              }
            }
            currentIdentifier = part;
            currentValue = [];
          } else {
            currentValue.push(part);
          }
        });

        if (currentIdentifier) {
          switch (currentIdentifier) {
            case "cour":
              eduRow.courseTxtField = currentValue.join(" ");
              break;
            case "lev":
              eduRow.levelMenu = currentValue.join(" ");
              break;
            case "inst":
              eduRow.instTxtField = currentValue.join(" ");
              break;
            case "ycity":
              eduRow.cityTxtField = currentValue.join(" ");
              break;
            case "isIt":
              eduRow.itChckbx = currentValue[0] === "1";
              break;
            case "isUni":
              // eduRow.isUni = currentValue[0] === "1"; è un booleano?
              break;
            default:
              break;
          }
        }

        return eduRow;
      });

      if (eduData.length < newEduData.length) {
        const newElement = newEduData[newEduData.length - 1];
        setEduData(newEduData);
        dispatch(addEduRowData(newElement));
      } else {
        setEduData(newEduData);
      }
    } else if (label === "certificates") {
      const oldRows3 = getMaxCertId();
      // const oldRows3 = rowsStore.certRows;
      const newRows3 = oldRows3 + 1;

      // dispatch(updateCertRowsNumber(newRows3));
      dispatch(updateCertRowsNumber(rowsStore.certRowsData.length + 1));

      const identifiers = [
        "name",
        "isICT",
        "issuer",
        "init_date",
        "end_date",
        "code",
      ];

      // const newCertData = rowsStore.checked.map((item: string) => {
      const newCertData = newChecked.map((item: string) => {
        const parts = item.split(" ");
        let certRow: CertRow = {
          nameTxtField: "",
          issuerTxtField: "",
          itChckbx: false,
          releaseDate: "",
          expDate: "",
          codeTxtField: "",
          id: newRows3,
        };

        let currentIdentifier = "";
        let currentValue: string[] = [];

        parts.forEach((part) => {
          if (identifiers.includes(part)) {
            if (currentIdentifier) {
              switch (currentIdentifier) {
                case "name":
                  certRow.nameTxtField = currentValue.join(" ");
                  break;
                case "issuer":
                  certRow.issuerTxtField = currentValue.join(" ");
                  break;
                case "init_date":
                  certRow.releaseDate = currentValue.join(" ");
                  break;
                case "end_date":
                  certRow.expDate = currentValue.join(" ");
                  break;
                case "isICT":
                  certRow.itChckbx = currentValue[0] === "1";
                  break;
                case "code":
                  certRow.codeTxtField = currentValue.join(" ");
                  break;
                default:
                  break;
              }
            }
            currentIdentifier = part;
            currentValue = [];
          } else {
            currentValue.push(part);
          }
        });

        if (currentIdentifier) {
          switch (currentIdentifier) {
            case "name":
              certRow.nameTxtField = currentValue.join(" ");
              break;
            case "issuer":
              certRow.issuerTxtField = currentValue.join(" ");
              break;
            case "init_date":
              certRow.releaseDate = currentValue.join(" ");
              break;
            case "end_date":
              certRow.expDate = currentValue.join(" ");
              break;
            case "isICT":
              certRow.itChckbx = currentValue[0] === "1";
              break;
            case "code":
              certRow.codeTxtField = currentValue.join(" ");
              break;
            default:
              break;
          }
        }

        return certRow;
      });

      if (certData.length < newCertData.length) {
        const newElement = newCertData[newCertData.length - 1];
        setCertData(newCertData);
        dispatch(addCertRowData(newElement));
      } else {
        setCertData(newCertData);
      }
    }
  };

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
                    // checked={rowsStore.checked.indexOf(value) !== -1}
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

// } else if (label === "education") {
//   const eduData = newChecked.map((item) => {
//     // Parsing education data here
//   });
//   dispatch(updateEduRowsData(eduData));
// } else if (label === "certificates") {
//   const certData = newChecked.map((item) => {
//     // Parsing certificates data here
//   });
//   dispatch(updateCertRowsData(certData));
