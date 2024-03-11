import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';

const Events: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              Events - March 2024
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>A</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Angola</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Argentina</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Armenia</IonLabel>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>B</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Bangladesh</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Belarus</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Belgium</IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Events;
