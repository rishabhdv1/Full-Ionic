import React, { useRef, useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { refresh } from 'ionicons/icons';

const SwipeableCards: React.FC = () => {
  const cardRef = useRef<HTMLIonCardElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY === null) return; // Return if startY is not set
    const diffY = e.touches[0].clientY - startY;
    if (Math.abs(diffY) > 2) { // Check if vertical swipe exceeds threshold
      setImageIndex(prevIndex => prevIndex + (diffY > 0 ? -1 : 1)); // Increment or decrement image index based on swipe direction
      setStartY(null); // Reset startY
    }
  };

  // Array of images
  const images = [
    'https://ionicframework.com/docs/img/demos/card-media.png',
    'https://ionicframework.com/docs/img/demos/card-media.png',
    'https://ionicframework.com/docs/img/demos/card-media.png',
  ];
  const titles = [
    'Title 1',
    'Title 2',
    'Title 3',
  ];
  const onRefresh =()=>{
    window.location.reload();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonRow className="ion-align-items-center">
          <IonCol size="2"></IonCol>
          <IonCol size="8">
            <IonTitle>Swipeable Cards</IonTitle>
          </IonCol>
          <IonCol size="2">
            <IonIcon size="large" icon={refresh} onClick={onRefresh} />
          </IonCol>
        </IonRow>
      </IonHeader>
      <IonContent>
        <IonCard
          id="vCenter"
          ref={cardRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <IonCardHeader>
            <IonCardTitle>{titles[imageIndex]}</IonCardTitle>
          </IonCardHeader>
          <img src={images[imageIndex]} alt="Swipeable Card" />
          <IonCardContent>
            Swipe up or down to change images.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SwipeableCards;
