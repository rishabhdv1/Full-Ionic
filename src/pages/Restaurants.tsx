import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { cart } from 'ionicons/icons';

const Restaurants: React.FC = () => {
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
            <IonCol size="8">
              Restaurant catalogue
            </IonCol>
            <IonCol size="2">
              <IonIcon size="large" icon={cart} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Restaurants;
