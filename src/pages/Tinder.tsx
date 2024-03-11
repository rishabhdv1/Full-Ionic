import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './TinderCards.css';

const Tinder: React.FC = () => {
  const [cards, setCards] = useState<string[]>([
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
  ]);

  const handleSwipe = (direction: 'left' | 'right') => {
    // Handle swipe action
    console.log(`Swiped ${direction}`);
    // Remove the top card from the stack
    setCards((prevCards) => prevCards.slice(1));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="tinder-cards">
          {cards.map((card, index) => (
            <div
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
