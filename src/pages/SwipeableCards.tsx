import React, { useRef, useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { } from 'ionicons/icons';

const SwipeableCards: React.FC = () => {
  const cardRef = useRef<HTMLIonCardElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleSwipe = (direction: string) => {
    if (direction === 'left') {
      // Handle swipe left action
      console.log('Swiped left!');
    } else if (direction === 'right') {
      // Handle swipe right action
      console.log('Swiped right!');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX;

    if (diffX > 0) {
      handleSwipe('right');
    } else if (diffX < 0) {
      handleSwipe('left');
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
              One/Two
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard
          ref={cardRef}
          onTouchStart={handleTouchStart}
          onTouchMove={(e) => e.preventDefault()} // Prevent scrolling while swiping
          style={{ touchAction: 'pan-y' }} // Allow vertical scrolling
        >
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Swipeable Card</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This is a swipeable card. Swipe left or right to trigger actions.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SwipeableCards;
