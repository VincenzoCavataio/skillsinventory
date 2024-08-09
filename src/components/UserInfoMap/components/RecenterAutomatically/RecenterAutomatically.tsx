import { useEffect } from "react";
import { useMap } from "react-leaflet";

type Props = {
  lat: number;
  lng: number;
};

/** Utility with useEffect inside to center the map by given lat and lng */
export const RecenterAutomatically: ({ lat, lng }: Props) => null = ({
  lat,
  lng,
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
};
