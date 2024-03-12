import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { cart } from 'ionicons/icons';

const Products: React.FC = () => {
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
            <IonCol size="8">
              Products
            </IonCol>
            <IonCol size="2">
              <IonIcon size="large" onClick={toggleSearch} icon={cart} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
      <IonFooter>
        {
          showSearch &&
            <IonList lines="none">
              <IonItem>
                <span>Cart is empty</span>
                <IonButton slot="end">
                  <span style={{fontSize:"1.2em",padding:"10px"}}>Checkout</span>
                </IonButton>
              </IonItem>
            </IonList>
        }
      </IonFooter>
    </IonPage>
  );
};

export default Products;
