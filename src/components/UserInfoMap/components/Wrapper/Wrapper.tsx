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
import { HIDDEN } from "../../../../constants";

export const Wrapper = () => {
  const { t } = useTranslation();
  const userData =
    useSelector((state: ReduxStore) => state.user?.user) ?? undefined;

  const center: GeoCenter = {
    latitude: userData?.residence?.latitude,
    longitude: userData?.residence?.longitude,
  };

  const isEnabled: boolean = !!(
    center.latitude &&
    center.latitude !== HIDDEN &&
    center.longitude &&
    center.longitude !== HIDDEN
  );

  // const LAT_LNG: number[] = [
  //   Number(
  //     userData?.residence?.latitude && userData?.residence?.latitude !== HIDDEN
  //   ) ?? 0,
  //   Number(
  //     userData?.residence?.longitude &&
  //       userData?.residence?.longitude !== HIDDEN
  //   ) ?? 0,
  // ];
  let latitudeNumber: number = 1;
  let longitudeNumber: number = 1;
  if (center.latitude !== "HIDDEN" && center.latitude) {
    latitudeNumber = center.latitude;
  }
  if (center.longitude !== "HIDDEN" && center.longitude) {
    longitudeNumber = center.longitude;
  }

  const centerDue: number[] = [latitudeNumber, longitudeNumber];
  // console.log(centerDue as LatLngExpression);
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
              // center={LAT_LNG as LatLngExpression}
              center={centerDue as LatLngExpression}
              zoom={ZOOM_LEVEL}
              scrollWheelZoom={false}
            >
              <TileLayer url={MAP_URL} />
              {/* <Marker position={LAT_LNG as LatLngExpression} /> */}
              <Marker position={centerDue as LatLngExpression} />
              {/* <RecenterAutomatically
                lat={LAT_LNG[0] ?? 0}
                lng={LAT_LNG[1] ?? 0}
              /> */}
              <RecenterAutomatically
                lat={centerDue[0] ?? 0}
                lng={centerDue[1] ?? 0}
              />
            </MapContainer>
          ) : (
            <Typography padding={15}>
              {t(`pages.notFound.addressNotFound`)}
            </Typography>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
