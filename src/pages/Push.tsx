import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';

const Push: React.FC = () => {
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
              Push
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList lines="none">
          <IonItem button color="success">
            <span style={{color:"#fff"}}>Register for Push</span>
          </IonItem>
          <IonItem>
            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonInput placeholder="Message" fill="solid" />
              </IonCol>
              <IonCol size="2">
                <IonButton color="tertiary">Send</IonButton>
              </IonCol>
            </IonRow>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Push;
