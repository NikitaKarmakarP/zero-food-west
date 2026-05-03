import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import { MapPin } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Tactical, dark map styling
const mapOptions = {
  disableDefaultUI: true, // Hides default map controls like street view, map type
  zoomControl: false,
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#1e293b' }] },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#334155' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1e293b' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#020617' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#1e293b' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#1e293b' }],
    },
  ],
};

function MapComponent({ center, markers = [], zoom = 14, onMarkerClick, apiKey }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey, 
  });

  const defaultCenter = useMemo(() => center || { lat: 22.5726, lng: 88.3639 }, [center]);

  if (loadError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 font-black uppercase tracking-widest text-xs">
        Map failed to load
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={defaultCenter}
      zoom={zoom}
      options={mapOptions}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => onMarkerClick && onMarkerClick(marker)}
          // Custom SVG icon for markers
          icon={{
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: marker.type === 'veg' ? '#10b981' : (marker.type === 'non-veg' ? '#f43f5e' : '#3b82f6'),
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 1.5,
            anchor: new window.google.maps.Point(12, 24),
          }}
        />
      ))}
    </GoogleMap>
  );
}

export default function InteractiveMap(props) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const isKeyValid = apiKey && apiKey !== 'your_google_maps_api_key_here' && apiKey.trim() !== '';

  if (!isKeyValid) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 grayscale contrast-125 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.5726,88.3639&zoom=15&size=1200x1200&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x334155&style=feature:landscape|element:geometry|color:0x0f172a&style=feature:water|element:geometry|color:0x1e293b&sensor=false')] bg-cover bg-center"></div>
        <div className="text-center p-8 bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl relative z-10 max-w-sm mx-4">
           <div className="text-emerald-500 mb-4 flex justify-center"><MapPin className="h-10 w-10 animate-bounce" /></div>
           <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest">Map Offline</h3>
           <p className="text-slate-400 text-sm leading-relaxed font-medium">Please add your <code className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded">VITE_GOOGLE_MAPS_API_KEY</code> in the frontend <code className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded">.env</code> file to enable live telemetry.</p>
        </div>
      </div>
    );
  }

  return <MapComponent {...props} apiKey={apiKey} />;
}
