import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Common from '../components/Common';

const Events: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());
  
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Sample events data
  const events = [
    { date: '2024-03-01', title: 'Event 1' },
    { date: '2024-03-05', title: 'Event 2' },
    { date: '2024-03-10', title: 'Event 3' },
    // Add more events as needed
  ];

  // Function to filter events for the selected date
  const getEventsForDate = (date: Date | Date[] | null): { date: string; title: string }[] => {
    if (!date) return [];
    const formattedDates = Array.isArray(date) ? date.map(d => d.toISOString().split('T')[0]) : [date.toISOString().split('T')[0]];
    return events.filter(event => formattedDates.includes(event.date));
  };
  const formattedTitle = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    return `Events - ${month} ${year}`;
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              {formattedTitle()}
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Calendar
            value={selectedDate as Date | RangeValue<Date>}
            onChange={(date:any) => {
              setSelectedDate(date);
            }}
            tileContent={({ date, view }) => {
              if (view === 'month') {
                const eventsForDate = getEventsForDate(date);
                if (eventsForDate.length > 0) {
                  return <p style={{ textAlign: 'center' }}>{eventsForDate.length} Events</p>;
                }
              }
            }}
          />
        </div>
        
      </Common>
    </IonPage>
  );
};

export default Events;
