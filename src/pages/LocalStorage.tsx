import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonPage, IonRow, IonTextarea, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';

const LocalStorage: React.FC = () => {
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
              Local Storage
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput label="Title" fill="outline" />
        <IonTextarea label="Teaser" fill="outline" autoGrow={true} />
        <IonButton color="success" expand="block" className="ion-margin-top">
          <span style={{fontSize:"1.4em",padding:"5px",color:"#fff"}}>Save</span>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LocalStorage;
