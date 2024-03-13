import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonItem, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const Instagram: React.FC = () => {
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
              Instagram
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <div className="ion-padding">
          <span>Login with your <strong>Instagram account.</strong></span><br/>
          <span>The application will pull from <strong>Instagram </strong>and will display your <strong>recent posts.</strong></span>
          <IonButton className="ion-padding" expand="full" color="success">
            <span style={{color:"#fff"}}>Login</span>
          </IonButton>
        </div>
      </Common>
    </IonPage>
  );
};

export default Instagram;
