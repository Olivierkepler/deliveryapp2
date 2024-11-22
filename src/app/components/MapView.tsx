// src/app/components/MapView.tsx
import { useEffect, useRef } from 'react'

const MapView = ({ coordinates }: { coordinates: Array<[number, number]> }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    // Initialize map with your map service (Google Maps, Mapbox, etc.)
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: coordinates[0][0], lng: coordinates[0][1] },
      zoom: 12,
    })
    new google.maps.Polyline({
      path: coordinates.map(([lat, lng]) => ({ lat, lng })),
      map,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    })
  }, [coordinates])

  return <div ref={mapRef} className="h-96"></div>
}

export default MapView
