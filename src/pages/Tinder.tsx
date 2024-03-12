import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle } from '@ionic/react';
import './TinderCards.css';
import { refresh } from 'ionicons/icons';

const Tinder: React.FC = () => {
  const [cards, setCards] = useState<string[]>([
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
    'Card 6',
    'Card 7',
    'Card 8',
    'Card 9',
    'Card 10',
    'Card 11',
    'Card 12',
    'Card 13',
    'Card 14',
    'Card 15',
    'Card 16',
    'Card 17',
    'Card 18',
    'Card 19',
    'Card 20',
  ]);

  const handleSwipe = (direction: 'left' | 'right') => {
    // Handle swipe action
    console.log(`Swiped ${direction}`);
    // Remove the top card from the stack
    setCards((prevCards) => prevCards.slice(1));
  };
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
      <IonContent fullscreen>
        <div className="tinder-cards">
          {cards.map((card, index) => (
            <div
            id="vCenter"
            key={index}
            className="tinder-card"
            onTouchStart={(e: React.TouchEvent) => {
              const startX = e.touches[0].clientX;
              const startY = e.touches[0].clientY;
              e.currentTarget.addEventListener('touchmove', (moveEvent) => {
                // Assert the event as TouchEvent
                const touchMoveEvent = moveEvent as TouchEvent;
                const deltaX = touchMoveEvent.touches[0].clientX - startX;
                const deltaY = touchMoveEvent.touches[0].clientY - startY;
                if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 50) {
                  // Swipe horizontally
                  handleSwipe(deltaX > 0 ? 'right' : 'left');
                  // Remove touchmove event listener to prevent multiple calls
                  e.currentTarget.removeEventListener('touchmove', () => {});
                }
              });
            }}
          >
            {card}
          </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tinder;
