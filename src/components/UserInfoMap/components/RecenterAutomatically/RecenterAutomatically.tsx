import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const RecenterAutomatically: ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => null = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};
