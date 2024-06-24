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
import { NEXTRE_ENG } from "../../../../common/commonColors";
import { useTranslation } from "react-i18next";
import { LatLngExpression } from "leaflet";
import { MAP_URL, ZOOM_LEVEL } from "../../constants";
import { RecenterAutomatically } from "../RecenterAutomatically";

export const Wrapper = () => {
  const { t } = useTranslation();
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;
  const center: GeoCenter = {
    latitude: userData?.residence?.latitude,
    longitude: userData?.residence?.longitude,
  };

  const isEnabled: boolean = !!(center.latitude && center.longitude);
  const LAT_LNG: LatLngExpression | undefined = [
    userData?.residence?.latitude ?? 0,
    userData?.residence?.longitude ?? 0,
  ];

  return (
    <Accordion sx={{ boxShadow: "none" }} disabled={!isEnabled}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{ color: NEXTRE_ENG }} />}
      >
        <Typography>{t(`pages.userPage.informationDetails.map`)}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Box sx={{ height: "100%", width: "100%" }}>
          {isEnabled ? (
            <MapContainer
              center={LAT_LNG}
              zoom={ZOOM_LEVEL}
              scrollWheelZoom={false}
            >
              <TileLayer url={MAP_URL} />
              <Marker position={LAT_LNG} />
              <RecenterAutomatically
                lat={LAT_LNG[0] ?? 0}
                lng={LAT_LNG[1] ?? 0}
              />
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
