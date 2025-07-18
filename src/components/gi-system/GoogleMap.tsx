
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';
interface GoogleMapProps {
  className?: string;
}
export default function GoogleMap({
  className = ''
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState('');
  const [isApiKeySet, setIsApiKeySet] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Endereço do patrimônio
  const address = "Q 402 Núcleo Rural Monjolo Conj. 10 - Recanto das Emas, Brasília - DF, 72630-260";
  const coordinates = {
    lat: -15.909569,
    lng: -48.0539041
  }; // Coordenadas exatas do Google Maps

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      localStorage.setItem('google_maps_api_key', apiKey);
      setIsApiKeySet(true);
      loadMap(apiKey);
    }
  };
  const loadMap = async (key: string) => {
    if (!mapRef.current) return;
    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['places', 'geometry']
      });
      const google = await loader.load();
      const map = new google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }]
      });

      // Adicionar marcador do patrimônio
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Gi System LTDA - Combate a Incêndio',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" fill="#FF6B35" stroke="#FFFFFF" stroke-width="2"/>
              <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 40)
        }
      });

      // InfoWindow com informações do patrimônio
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 300px;">
            <h3 style="margin: 0 0 8px 0; color: #FF6B35; font-weight: bold;">Gi System LTDA</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px;">Sistemas de Combate a Incêndio</p>
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">
              ${address}
            </p>
            <p style="margin: 0; font-size: 12px;">
              <strong>Telefone:</strong> +55 (61) 99253-2859<br>
              <strong>E-mail:</strong> gcsistemas5@gmail.com
            </p>
          </div>
        `
      });

      // Abrir InfoWindow ao clicar no marcador
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Abrir InfoWindow por padrão
      infoWindow.open(map, marker);
      setMapLoaded(true);
    } catch (error) {
      console.error('Erro ao carregar o mapa:', error);
    }
  };
  useEffect(() => {
    // Verificar se já existe uma API key salva
    const savedApiKey = localStorage.getItem('google_maps_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsApiKeySet(true);
      loadMap(savedApiKey);
    }
  }, []);
  if (!isApiKeySet) {
    return (
      <div className={`h-96 border border-primary/20 rounded-lg overflow-hidden ${className}`}>
        <div className="h-full bg-muted/50 flex flex-col items-center justify-center p-6 text-center">
          <MapPin className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Mapa Interativo
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md">
            Para visualizar o mapa interativo, é necessário configurar uma chave da API do Google Maps.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <Input
              type="text"
              placeholder="Cole sua chave da API do Google Maps"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleApiKeySubmit}
              disabled={!apiKey.trim()}
              className="whitespace-nowrap"
            >
              Carregar Mapa
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            <strong>Endereço:</strong> {address}
          </p>
        </div>
      </div>
    );
  }
  return <div className={`h-96 border border-primary/20 rounded-lg overflow-hidden ${className}`}>
      <div ref={mapRef} className="w-full h-full" />
      {!mapLoaded && <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Carregando mapa...</p>
          </div>
        </div>}
    </div>;
}
