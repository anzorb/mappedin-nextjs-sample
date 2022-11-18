import {
  getVenue,
  MapView as MapViewController,
  showVenue,
  // @ts-ignore
} from "@mappedin/mappedin-js";
import React, { useCallback, useRef } from "react";

export function MapView() {
  const mapViewController = useRef<MapViewController>();

  const mount = useCallback<(el: HTMLDivElement | null) => Promise<unknown>>(
    async (el) => {
      if (el != null) {
        const venue = await getVenue({
          clientId: "",
          clientSecret: "",
          venue: "mappedin-demo-mall",
          perspective: "Website",
        });

        const mapView = await showVenue(el, venue);
        mapViewController.current = mapView;
      } else {
        if (mapViewController.current != null) {
          mapViewController.current.destroy();
        }
      }
    },
    []
  );

  return (
    <div>
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        ref={mount}
      ></div>
    </div>
  );
}
