import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const StripePayments: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
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
                Stripe integration
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <IonList>
            <IonItem>
              <IonSelect label="Fixed label" labelPlacement="fixed" placeholder="Card Type">
                <IonSelectOption value="apple">Visa</IonSelectOption>
                <IonSelectOption value="banana">Visa 2</IonSelectOption>
                <IonSelectOption value="orange">Visa 3</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Holder</IonLabel>
              <IonInput placeholder="John Smith" />
            </IonItem>
            <IonItem>
              <IonLabel>Charge Amount</IonLabel>
              <IonInput placeholder="eg: 10" />
            </IonItem>
            <IonItem>
              <IonLabel>Card Number</IonLabel>
              <IonInput placeholder="4111111111111111" />
            </IonItem>
            <IonItem>
              <IonLabel>Card CVC</IonLabel>
              <IonInput placeholder="123" />
            </IonItem>
            <IonItem>
              <IonLabel>Expiration (MM/YY)</IonLabel>
              <IonInput placeholder="123" />
            </IonItem>
            <IonButton expand="block">
              <span style={{fontSize:"2em"}}>MAKE PAYMENT</span>
            </IonButton>
        </IonList>
      </Common>
    </IonPage>
  );
};

export default StripePayments;
