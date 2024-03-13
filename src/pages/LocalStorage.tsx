import React, { useState, useEffect } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRow, IonTextarea, IonToolbar } from '@ionic/react';
import { add, close, trash } from 'ionicons/icons';
import Common from '../components/Common';

const LocalStorage: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState('');
  const [teaser, setTeaser] = useState('');
  const [entries, setEntries] = useState<{ title: string; teaser: string }[]>([]);

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
  const handleDeleteEntry = (index: number) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
    localStorage.setItem('entries', JSON.stringify(newEntries));
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2"></IonCol>
            <IonCol size="8">Local Storage</IonCol>
            <IonCol size="2">
            {entries.length > 0 && (
              <IonIcon size="large" icon={add} onClick={toggleSearch} />
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
      <Common>
        <div className="ion-padding">
          <IonList>
            {entries.map((entry, index) => (
              <IonItemSliding key={index}>
                <IonItem>
                  <div slot="start">{index+1}</div>
                  <IonLabel>
                    <h1>{entry.title}</h1>
                    <p>{entry.teaser}</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => handleDeleteEntry(index)}>
                    <IonIcon size="large" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
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
        </div>
      </Common>
    </IonPage>
  );
};

export default LocalStorage;
