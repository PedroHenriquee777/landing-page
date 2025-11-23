import { useEffect, useRef } from "react";
import { loadGoogleMaps } from "../utils/loadGoogleMaps";

export function MapaGoogle() {
  const mapaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadGoogleMaps("AIzaSyADSe7xzrq0u8ygsQsDd2FDkzDJbdufTT0").then(() => {
      if (!mapaRef.current) return;

      const mapa = new google.maps.Map(mapaRef.current, {
        center: { lat: -4.704408 , lng: -40.568117 },
        zoom: 16,
        disableDefaultUI: true,
      });

      new google.maps.Marker({
        position: { lat: -4.704408, lng: -40.568117  },
        map: mapa,
        title: "Educandário João de La Salle",
      });
    });
  }, []);

  return (
    <div
      ref={mapaRef}
      className="w-full h-[330px] rounded-3xl shadow-xl border border-gray-300"
    />
  );
}

