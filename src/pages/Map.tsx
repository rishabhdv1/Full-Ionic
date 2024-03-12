import React, { useState, useEffect } from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';

const Map: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    // Load Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      // Clean up - remove the script
      document.body.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    };

    const map = new google.maps.Map(mapElement, mapOptions);
    setMap(map);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              Map
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="map" style={{ height: '80vh' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Map;
