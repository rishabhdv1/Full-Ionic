import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { add, close } from 'ionicons/icons';

const LocalStorage: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState('');
  const [teaser, setTeaser] = useState('');
  const [entries, setEntries] = useState<{ title: string; teaser: string }[]>([]);

  const handleSave = () => {
    if (title.trim() !== '' && teaser.trim() !== '') {
      const entry = { title: title, teaser: teaser };
      localStorage.setItem('entry', JSON.stringify(entry));
      setEntries([...entries, entry]);
      setTitle('');
      setTeaser('');
    } else {
      alert('Please fill in both title and teaser fields.');
    }
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
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
                    label="Title"
                    fill="outline"
                    value={title}
                    onIonChange={(e) => setTitle(e.detail.value!)}
                  />
                  <IonTextarea
                    label="Teaser"
                    fill="outline"
                    autoGrow={true}
                    value={teaser}
                    onIonChange={(e) => setTeaser(e.detail.value!)}
                  />
                  <IonButton color="success" expand="block" className="ion-margin-top" onClick={handleSave}>
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
            <IonItem key={index}>
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
              label="Title"
              fill="outline"
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            />
            <IonTextarea
              label="Teaser"
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
