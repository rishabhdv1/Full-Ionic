import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const Element: React.FC = () => {
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
              Elements
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Forms</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Placeholder Labels</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Inline Labels</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Stacked Labels</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Floating Labels</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Inset Forms</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Inset Inputs</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Input Icons</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Form Buttons</IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Other controls</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Toggle</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Checkbox</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Radio Buttons</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Range</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Select</IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Tabs</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Icon-only</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Top Icon</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Left Icon</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Striped Style</IonLabel>
          </IonItem>
        </IonItemGroup>

      </Common>
    </IonPage>
  );
};

export default Element;
