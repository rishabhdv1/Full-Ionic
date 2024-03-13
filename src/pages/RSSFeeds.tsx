import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonItem, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';
import Common from '../components/Common';

const RSSFeeds: React.FC = () => {
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
              RSS Feeds
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <IonList>
          <IonItem button>
            Top Stories
          </IonItem>
          <IonItem button>
            Business
          </IonItem>
          <IonItem button>
            Design
          </IonItem>
          <IonItem button>
            Entertainment
          </IonItem>
          <IonItem button>
            Tech
          </IonItem>
          <IonItem button>
            Product Reviews
          </IonItem>
          <IonItem button>
            Science
          </IonItem>
        </IonList>
      </Common>
    </IonPage>
  );
};

export default RSSFeeds;
