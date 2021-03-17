import { useEffect, useMemo, useState } from "react";
import ReactMapGL from "react-map-gl";
import styles from "./map.module.css";

interface MapProps {
  latitude: number;
  longitude: number;
}

export const Map = ({ latitude, longitude }: MapProps) => {
  // useMemo for referential equality
  const mapOptions = useMemo(
    () => ({
      latitude,
      longitude,
      width: "40rem",
      height: 400,
      zoom: 5,
    }),
    [latitude, longitude]
  );

  const [viewport, setViewport] = useState(mapOptions);

  // Update the map every time the coordinates change
  useEffect(() => {
    setViewport({ ...mapOptions, latitude, longitude });
  }, [latitude, longitude, mapOptions]);

  return (
    <section className={styles.map}>
      <ReactMapGL
        {...viewport}
        // @ts-ignore
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      />
    </section>
  );
};
