import React, { useState } from 'react';
import { IonActionSheet, IonAlert, IonButton, IonCard, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTabBar, IonTabButton, IonToast, IonToolbar } from '@ionic/react';
import { call, cart, imagesOutline, logoFacebook, mail, mapOutline, megaphone, star, starOutline } from 'ionicons/icons';
import Common from '../components/Common';

const Home: React.FC = ({ onChange }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [rating, setRating] = useState(0);

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

  const handleStarClick = (value:any)=>{
    setRating(value);
    onChange(value);
  }
  const renderStars =()=>{
    let stars = [];
    for (let i=1; i<=5; i++){
      stars.push(
        <>
          <span> </span>
          <IonIcon key={i} icon={i <= rating ? star : starOutline}
          onClick={() =>
          handleStarClick(i)}
              style={{color:i <= rating ? "gold":"gray"}}
          />
        </>
      );
    }
    return stars;
  }

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
      <Common>
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
            </IonList>
            <IonItem id="open-alert">
              <IonIcon slot="start" icon={star} />
              <span>Rate this App</span>
            </IonItem>
            <IonRow className="ion-text-center">
              <IonCol size="12">
                <div style={{fontSize:"3em"}}>{renderStars()}</div>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </Common>
      <IonFooter>
        <IonTabBar>
          <IonTabButton style={{fontSize:"1.2em"}} tab="tab1" href="/localstorage">
            <IonLabel>
              <span>LocalStorage</span>
            </IonLabel>
          </IonTabButton>
          <IonTabButton style={{fontSize:"1.2em"}} tab="tab2" href="/swipeablecards">
            <IonLabel>
              <span>Swipeable Cards</span>
            </IonLabel>
          </IonTabButton>
          <IonTabButton style={{fontSize:"1.2em"}} tab="tab3" href="/tinder">
            <IonLabel>
              <span>Tinder Cards</span>
            </IonLabel>
          </IonTabButton>
          <IonTabButton style={{fontSize:"1.2em"}} tab="tab4" href="/charts">
            <IonLabel>
              <span>Charts</span>
            </IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
