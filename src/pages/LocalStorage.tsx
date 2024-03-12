import React, { useState, useEffect } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonTextarea, IonToolbar } from '@ionic/react';
import { add, close, trash } from 'ionicons/icons';

const LocalStorage: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState('');
  const [teaser, setTeaser] = useState('');
  const [entries, setEntries] = useState<{ title: string; teaser: string }[]>([]);
  const [selectedEntries, setSelectedEntries] = useState<number[]>([]); // Array of indexes of selected entries
  const [pressTimer, setPressTimer] = useState<any>(null); // Timer for long press
  const [longPressing, setLongPressing] = useState(false); // Flag to indicate long pressing

  useEffect(() => {
    const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleSave = () => {
    if (title.trim() === '' || teaser.trim() === '') {
      alert('Please fill in both title and teaser fields.');
    } else {
      const entry = { title: title, teaser: teaser };
      const newEntries = [...entries, entry];
      localStorage.setItem('entries', JSON.stringify(newEntries));
      setEntries(newEntries);
      setTitle('');
      setTeaser('');
    }
  };

  const handleSaveAndCloseModal = () => {
    if (title.trim() === '' || teaser.trim() === '') {
      alert('Please fill in both title and teaser fields.');
    } else {
      const entry = { title: title, teaser: teaser };
      const newEntries = [...entries, entry];
      localStorage.setItem('entries', JSON.stringify(newEntries));
      setEntries(newEntries);
      setTitle('');
      setTeaser('');
      setShowSearch(false); // Close the modal
    }
  };
  
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleMouseDown = (index: number) => {
    const timer = setTimeout(() => {
      setSelectedEntries([...selectedEntries, index]);
      setLongPressing(true);
    }, 1000); // Change 1000 to the desired duration for long press
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer);
    if (longPressing) {
      setLongPressing(false);
    } else {
      setSelectedEntries([]);
    }
  };

  const handleDeleteSelected = () => {
    // Implement delete functionality for selected entries
    console.log('Deleting selected entries:', selectedEntries);
    setSelectedEntries([]); // Clear selected entries after deletion
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2"></IonCol>
            <IonCol size="8">Local Storage</IonCol>
            <IonCol size="2">
              {selectedEntries.length > 0 && (
                <IonIcon size="large" icon={trash} onClick={handleDeleteSelected} />
              )}
              {entries.length > 0 && (
                <IonIcon size="large" icon={add} onClick={() => setShowSearch(true)} />
              )}
            </IonCol>
            {
              showSearch &&
              <IonModal isOpen={showSearch} onDidDismiss={() => setShowSearch(false)}>
                <IonHeader>
                <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
                  <IonCol size="2"></IonCol>
                  <IonCol size="8">Add New Entry</IonCol>
                  <IonCol size="2">
                    <IonIcon size="large" onClick={() => setShowSearch(false)} icon={close} />
                  </IonCol>
                </IonRow>
                </IonHeader>
                <IonContent className="ion-padding">
                  <IonInput
                    placeholder="Title"
                    fill="outline"
                    value={title}
                    onIonChange={(e) => setTitle(e.detail.value!)}
                  />
                  <IonTextarea
                    placeholder="Teaser"
                    fill="outline"
                    autoGrow={true}
                    value={teaser}
                    onIonChange={(e) => setTeaser(e.detail.value!)}
                  />
                  <IonButton color="success" expand="block" className="ion-margin-top" onClick={handleSaveAndCloseModal}>
                    <span style={{fontSize:"1.4em",padding:"5px",color:"#fff"}}>Save</span>
                  </IonButton>
                </IonContent>
              </IonModal>
            }
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {entries.map((entry, index) => (
            <IonItem key={index} onMouseDown={() => handleMouseDown(index)} onMouseUp={handleMouseUp} className={selectedEntries.includes(index) ? 'selected' : ''}>
              <span slot="start">{index+1}</span>
              <IonLabel>
                <h1>{entry.title}</h1>
                <p>{entry.teaser}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        {entries.length === 0 && (
          <div>
            <IonInput
              placeholder="Title"
              fill="outline"
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            />
            <IonTextarea
              placeholder="Teaser"
              fill="outline"
              autoGrow={true}
              value={teaser}
              onIonChange={(e) => setTeaser(e.detail.value!)}
            />
            <IonButton color="success" expand="block" className="ion-margin-top" onClick={handleSave}>
              <span style={{fontSize:"1.4em",padding:"5px",color:"#fff"}}>Save</span>
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LocalStorage;
