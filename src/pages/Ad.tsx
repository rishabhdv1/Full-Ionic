import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';

const Ad: React.FC = () => {
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
              Ad
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Ad sample</h1>
        <strong>Plugin is not loaded</strong><br/>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias vel, perspiciatis perferendis minima sit, veritatis optio maxime aspernatur sint laborum eum illum ipsam expedita tempora unde deserunt iusto iste?</span>
      </IonContent>
    </IonPage>
  );
};

export default Ad;
