import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { pause, play } from 'ionicons/icons';
import Common from '../components/Common';

const LiveRadio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      console.log("Play");
    } else {
      console.log("Pause");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              Radio
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <div id="vCenter">
          <IonIcon onClick={togglePlayPause} style={{ fontSize: "10em",color:"#ccc" }} icon={isPlaying ? pause : play} />
        </div>
      </Common>
    </IonPage>
  );
};

export default LiveRadio;
