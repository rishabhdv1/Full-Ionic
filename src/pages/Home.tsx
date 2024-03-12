import React, { useState } from 'react';
import { IonCard, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { call, cart, chatbox, image, imagesOutline, logoFacebook, mail, map, mapOutline, megaphone, star } from 'ionicons/icons';

const Home: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const openGoogleMaps = () => {
    // Replace latitude and longitude with the desired location
    const latitude = 'latitude_value';
    const longitude = 'longitude_value';
    
    // Construct the Google Maps URL with the latitude and longitude
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
    // Open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
  };
  const openFacebook = () => {
    
    // Construct the Google Maps URL with the latitude and longitude
    const googleMapsUrl = `https://www.facebook.com`;
  
    // Open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              Home
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="ion-text-center ion-align-items-center">
          <IonCol size="6">
            <IonCard className="ion-padding" routerLink="/news">
              <IonIcon size="large" icon={megaphone} /><br/>
              <IonLabel>News</IonLabel>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="ion-padding" routerLink="/products">
              <IonIcon size="large" icon={cart} /><br/>
              <IonLabel>Products</IonLabel>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="ion-padding" routerLink="/galleries">
              <IonIcon size="large" icon={imagesOutline} /><br/>
              <IonLabel>Galleries</IonLabel>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="ion-padding" routerLink="/map">
              <IonIcon size="large" icon={mapOutline} /><br/>
              <IonLabel>Map</IonLabel>
            </IonCard>
          </IonCol>
          <IonCol size="12">
            <IonList>
              <IonItem href="tel:9876543210">
                <IonIcon slot="start" icon={call} />
                <span>Call us</span>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={mail} />
                <span>Send us and Email</span>
              </IonItem>
              <IonItem onClick={openGoogleMaps}>
                <IonIcon slot="start" icon={call} />
                <span>Find us / Get directions</span>
              </IonItem>
              <IonItem onClick={openFacebook}>
                <IonIcon slot="start" icon={logoFacebook} />
                <span>Visit us on Facebook</span>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" icon={star} />
                <span>Rate this App</span>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
