import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const Drupal: React.FC = () => {
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
              Drupal
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        Drupal
      </Common>
    </IonPage>
  );
};

export default Drupal;
