import {
  Box,
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  checkboxCertsSelector,
  resetCheckedCerts,
  updateCheckedCerts,
} from "../../../../redux/checkboxCertsSelection";
import { CustomListItemButton } from "./CustomCheckbox";
import { currentCheckedCertRow } from "./utils/currentCheckedRow";
import { CheckedCert } from "../../../../redux/types";
import { Close, Delete, Edit, WorkspacePremium } from "@mui/icons-material";
import { AccordionLabel } from "../GenericAccordion/Types";
import { SelectDeselectLabelCert } from "./utils/SelectDeselectLabelCert";
import {
  resetCheckedCertificationToBeSent,
  updateCheckedCertificationsToBeSent,
} from "../../../../redux/addCertificationToBeSentSlice";
import { ConfirmModal } from "./utils/ConfirmModal";
import { useState } from "react";
import { userDataSelector } from "../../../../redux/userDataSlice";
import { callToAPI } from "../../../../utilities/callToAPI";

type CheckboxListProps = {
  data?: string[];
  label: AccordionLabel;
  isEdit: boolean;
  toggleEdit?: (accordion: AccordionLabel) => void;
};

/** Component to render Certifications Checkboxes */
export const CheckboxListFixedCert: React.FC<CheckboxListProps> = ({
  data,
  label,
  isEdit,
  toggleEdit,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const checkedCertStore = useSelector(checkboxCertsSelector);
  const userIdStore = useSelector(userDataSelector);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCertificationId, setSelectedCertificationId] = useState<
    string | null
  >(null);
  const userId = userIdStore.id;
  const allChecked = checkedCertStore.length > 0;

  const handleSelectAll = () => {
    data?.forEach((cert) => {
      dispatch(updateCheckedCerts(currentCheckedCertRow(cert)));
      dispatch(
        updateCheckedCertificationsToBeSent(currentCheckedCertRow(cert))
      );
    });
  };

  const handleRemoveAll = () => {
    dispatch(resetCheckedCerts());
    dispatch(resetCheckedCertificationToBeSent());
  };

  const handleCertRowChange = (cert: CheckedCert) => {
    dispatch(updateCheckedCerts(cert));
    dispatch(updateCheckedCertificationsToBeSent(cert));
  };

  const parsedData = data?.map((cert) => currentCheckedCertRow(cert));
  const handleDelete = (rowId: string) => {
    setSelectedCertificationId(rowId);
    setOpenModal(true);
  };

  const confirmDelete = (confirmed: boolean) => {
    if (confirmed && selectedCertificationId) {
      callToAPI({
        endpoint: `/api/v1/certificate/deleteCertificates?id=${selectedCertificationId}&userId=${userId}`,
        payload: { id: selectedCertificationId, userId },
        method: "DELETE",
        reload: true,
      });
    }
    setOpenModal(false);
  };
  return (
    <Box>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: !isEdit ? "flex-end" : "space-between",
          position: "sticky",
          top: 0,
          bgcolor: "white",
          zIndex: 20,
          py: "2px",
          width: "100%",
        }}
      >
        {isEdit && (
          <Button
            onClick={allChecked ? handleRemoveAll : handleSelectAll}
            sx={{ pl: 2 }}
          >
            <SelectDeselectLabelCert
              allChecked={allChecked}
              checkedCertsStore={checkedCertStore}
            />
          </Button>
        )}
        <Tooltip
          title={
            isEdit
              ? t("pages.userPage.info.exitFromEditMode")
              : t("pages.userPage.info.goToEditMode")
          }
          placement="top"
          arrow
        >
          <Box>
            {!isEdit ? (
              <Edit
                onClick={() => toggleEdit && toggleEdit(label)}
                sx={{ cursor: "pointer" }}
              />
            ) : (
              <Close
                onClick={() => toggleEdit && toggleEdit(label)}
                sx={{ cursor: "pointer" }}
              />
            )}
          </Box>
        </Tooltip>
      </Box>

      {parsedData?.map((cert) => {
        const IDs = [...checkedCertStore.map((cert) => cert.id)];
        const isChecked = IDs.includes(cert.id);
        const { name, releaseDate, expDate } = cert;
        const ROW_TO_BE_SHOWN = (
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Typography ml={1}>{name}</Typography>
              <Box display="flex" justifyContent="flex-start" ml={1}>
                <Typography variant="caption">
                  {releaseDate} - {expDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        );

        return (
          <ListItem key={cert.id} disablePadding>
            <CustomListItemButton
              dense
              disabled={!isEdit}
              onClick={() => handleCertRowChange(cert)}
            >
              {isEdit && (
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <WorkspacePremium sx={{ opacity: 0.8, mr: 1 }} />
              <ListItemText primary={ROW_TO_BE_SHOWN} />
            </CustomListItemButton>
            {isEdit && (
              <Delete
                color="error"
                sx={{ opacity: 0.8, cursor: "pointer", zIndex: 19, pl: 2 }}
                onClick={() => handleDelete(cert.id)}
              />
            )}
          </ListItem>
        );
      })}
      <ConfirmModal open={openModal} handleClose={confirmDelete} />
    </Box>
  );
};
