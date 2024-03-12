import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonPopover, IonRow, IonToolbar } from '@ionic/react';
import { caretDown, chevronDown } from 'ionicons/icons';

const PopOverMenu: React.FC = () => {
  const red = () => {
    alert("You have selected option 'red' ")
  }
  const green = () => {
    alert("You have selected option 'green' ")
  }
  const blue = () => {
    alert("You have selected option 'blue' ")
  }
  const white = () => {
    alert("You have selected option 'white' ")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="8">
              PopOver menu
            </IonCol>
            <IonCol size="2">
              <IonIcon id="click-trigger" size="large" icon={chevronDown} />
            </IonCol>
            <IonPopover trigger="click-trigger" triggerAction="click">
              <IonContent>
                <IonList>
                  <IonItem>Select an option</IonItem>
                  <IonItem button onClick={red}>Red</IonItem>
                  <IonItem button onClick={green}>Green</IonItem>
                  <IonItem button onClick={blue}>Blue</IonItem>
                  <IonItem button onClick={white}>White</IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, obcaecati. Tempore cupiditate maxime beatae repellat, id ullam ratione at iste veritatis accusamus impedit architecto, obcaecati, quos natus doloribus dolorum explicabo.</span>
      </IonContent>
    </IonPage>
  );
};

export default PopOverMenu;
