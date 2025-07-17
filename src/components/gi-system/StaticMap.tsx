
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

interface StaticMapProps {
  className?: string;
}

export default function StaticMap({ className = '' }: StaticMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Endereço do patrimônio
  const address = "Q 402 Núcleo Rural Monjolo Conj. 10 - Recanto das Emas, Brasília - DF, 72630-260";
  const coordinates: [number, number] = [-15.910315513611, -48.053844451904];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Configurar ícones do Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    // Criar o mapa
    const map = L.map(mapRef.current).setView(coordinates, 15);

    // Adicionar tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Criar ícone customizado
    const customIcon = L.divIcon({
      html: `
        <div style="background-color: #FF6B35; border: 2px solid #FFFFFF; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">
          <div style="transform: rotate(45deg); color: white; font-size: 14px;">📍</div>
        </div>
      `,
      className: 'custom-div-icon',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    // Adicionar marcador do patrimônio
    const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);

    // Adicionar popup com informações do patrimônio
    marker.bindPopup(`
      <div style="padding: 10px; max-width: 300px; font-family: system-ui, -apple-system, sans-serif;">
        <h3 style="margin: 0 0 8px 0; color: #FF6B35; font-weight: bold; font-size: 16px;">Gi System LTDA</h3>
        <p style="margin: 0 0 8px 0; font-size: 14px; color: #333;">Sistemas de Combate a Incêndio</p>
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">
          ${address}
        </p>
        <div style="margin: 0; font-size: 12px; color: #333;">
          <strong>Telefone:</strong> +55 (61) 99253-2859<br>
          <strong>E-mail:</strong> gcsistemas5@gmail.com
        </div>
      </div>
    `).openPopup();

    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`h-96 border border-primary/20 rounded-lg overflow-hidden ${className}`}>
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
