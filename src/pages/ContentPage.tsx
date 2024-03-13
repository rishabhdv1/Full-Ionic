import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import React, { } from 'react';
import Common from '../components/Common';

const ContentPage: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center ion-text-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="8">
              <span style={{fontSize:"1.6em"}}>BOOKS</span>
            </IonCol>
            <IonCol size="2">
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <div className="ion-padding">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cumque a. Eius asperiores praesentium, vero aliquam iure facere odit placeat nihil laborum similique animi saepe quis nisi quaerat nam? Est!</span>
        </div>
      </Common>
    </IonPage>
  );
};

export default ContentPage;
