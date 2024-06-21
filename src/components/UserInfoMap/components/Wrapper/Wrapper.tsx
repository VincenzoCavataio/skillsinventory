import { useSelector } from "react-redux";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ReduxStore } from "../../../../redux/types";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { GeoCenter } from "../../types";
import "leaflet/dist/leaflet.css";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import { commonColors } from "../../../../common/commonColors";
import { useTranslation } from "react-i18next";
export const Wrapper = () => {
  const { t } = useTranslation();
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;

  const center: GeoCenter = {
    // latitude: userData?.residence?.latitude,
    // longitude: userData?.residence?.longitude,
    latitude: 46,
    longitude: 32,
  };

  const zoomLevel: number = 9;

  return (
    <Accordion sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={
          <ArrowDropDownIcon sx={{ color: commonColors.accentColor }} />
        }
      >
        <Typography>{t(`pages.userPage.informationDetails.map`)}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Box sx={{ height: "100%", width: "100%" }}>
          {center.latitude && center.longitude ? (
            <MapContainer
              center={[center.latitude, center.longitude]}
              zoom={zoomLevel}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[center.latitude, center.longitude]}></Marker>
            </MapContainer>
          ) : (
            <Typography padding="15px">
              {t(`pages.notFound.addressNotFound`)}
            </Typography>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
