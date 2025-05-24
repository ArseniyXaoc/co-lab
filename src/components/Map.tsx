'use client';

import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || map.current || !mapContainer.current) {
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "YOUR_MAPTILER_API_KEY";
    if (apiKey === "YOUR_MAPTILER_API_KEY") {
      console.warn("MapTiler API key is not set. Please set NEXT_PUBLIC_MAPTILER_API_KEY environment variable.");
    }


    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [0, 0], // Default center
      zoom: 2,       // Default zoom
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '600px' }} />;
};

export default Map;
