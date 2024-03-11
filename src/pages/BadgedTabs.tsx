import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import { home, mapOutline } from 'ionicons/icons';

const BadgedTabs: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState('Online');
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    const handleSegmentChange = (segment: string) => {
        setSelectedSegment(segment);
    };

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              One/Two
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonSegment value={selectedSegment} style={{backgroundColor:"#fff"}}>
        <IonSegmentButton style={{ borderRight: "1px solid #333" }} onClick={() => handleSegmentChange('Online')} value="Online">
            <IonIcon icon={home} />
          <span>Mail</span>
        </IonSegmentButton>
        <IonSegmentButton style={{ borderRight: "1px solid #333" }} onClick={() => handleSegmentChange('Offline')} value="Offline">
            <IonIcon icon={mapOutline} />
          <span>Map</span>
        </IonSegmentButton>
      </IonSegment>
      <IonContent>
        {selectedSegment === 'Online' && (
          <>
            <span style={{fontSize:"2em"}}>Tab 1</span>
          </>
        )}
        
        {selectedSegment === 'Offline' && (
          <>
            <span style={{fontSize:"2em"}}>Tab 2</span>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default BadgedTabs;
