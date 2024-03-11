import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons';

const OAuth: React.FC = () => {
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
              OAuth Login
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>Please Login by using one of the following providers</IonLabel>
        <IonList>
          <IonItem button>
            <IonIcon slot="start" icon={logoTwitter} />
            <span>Twitter</span>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={logoFacebook} />
            <span>Facebook</span>
          </IonItem>
          <IonItem button>
            <IonIcon slot="start" icon={logoGoogle} />
            <span>Google</span>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default OAuth;
