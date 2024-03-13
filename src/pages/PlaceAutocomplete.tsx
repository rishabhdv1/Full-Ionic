import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const PlaceAutocomplete: React.FC = () => {
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
                Google place
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <IonList>
            <IonItem>
                <IonInput placeholder="Change address" />
            </IonItem>
            <IonItem>Coords:</IonItem>
        </IonList>
      </Common>
    </IonPage>
  );
};

export default PlaceAutocomplete;
