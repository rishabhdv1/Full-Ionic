import React, { useState, useEffect } from 'react';
import { IonInput, IonIcon, IonContent, IonFooter, IonToolbar, IonList, IonItem, IonPage, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonModal, IonHeader, IonButtons, IonButton, IonTitle, IonSearchbar, IonRow, IonCol, IonTextarea } from '@ionic/react';
import { addCircle, archiveOutline, closeCircle, send } from 'ionicons/icons';
import { add } from 'lodash';
import Common from '../components/Common';

const Delete: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [entries, setEntries] = useState<string[]>([]);
  const [archivedEntries, setArchivedEntries] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState();
  const [searchFilter, setSearchFilter] = useState<string>('');
  
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    const storedEntries = localStorage.getItem('offline_entries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const saveEntriesToLocalStorage = (entries: string[]) => {
    localStorage.setItem('offline_entries', JSON.stringify(entries));
  };

  const submit = () => {
    setEntries(prevEntries => {
      const newEntries = [...prevEntries, message];
      saveEntriesToLocalStorage(newEntries);
      return newEntries;
    });
    setMessage('');
  };

  const handleInputChange = (e: CustomEvent) => {
    const input = e.target as HTMLInputElement;
    setMessage(input.value);
  };

  const deleteEntry = (index: number) => {
    setEntries(prevEntries => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      saveEntriesToLocalStorage(newEntries);
      return newEntries;
    });
  };

  const archiveEntry = (entry: string, index: number) => {
    setEntries(prevEntries => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      saveEntriesToLocalStorage(newEntries);
      return newEntries;
    });
  };
  const filteredEntries = entries.filter(entry =>
    entry.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="8">
              Local Storage
            </IonCol>
            <IonCol size="2">
              {entries.length > 0 && (
                <IonIcon size="large" icon={addCircle} onClick={toggleSearch} />
              )}
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <Common>
        <div className="ion-padding">
          <IonList>
            <IonInput value={message} onIonInput={handleInputChange} fill="outline" placeholder="Type your message"></IonInput>
            <IonButton color="success" expand="block" className="ion-margin-top" onClick={submit}>
              <span style={{fontSize:"1.4em",padding:"5px",color:"#fff"}}>Save</span>
            </IonButton>
          </IonList>
          {/* <IonSearchbar value={searchFilter} onIonInput={(e:any) => setSearchFilter(e.detail.value) } /> */}
          <IonList>
          {
                showSearch &&
                <IonModal isOpen={showSearch} onDidDismiss={() => setShowSearch(false)}>
                  <IonHeader>
                  <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
                    <IonCol size="2"></IonCol>
                    <IonCol size="8">Add New Entry</IonCol>
                    <IonCol size="2">
                      <IonIcon size="large" onClick={() => setShowSearch(false)} icon={closeCircle} />
                    </IonCol>
                  </IonRow>
                  </IonHeader>
                  <IonContent className="ion-padding">
                    <IonInput
                      label="Title"
                      fill="outline"
                      value={'title'}
                      // onIonChange={(e) => setTitle(e.detail.value!)}
                    />
                    <IonTextarea
                      label="Teaser"
                      fill="outline"
                      autoGrow={true}
                      value={'teaser'}
                      // onIonChange={(e) => setTeaser(e.detail.value!)}
                    />
                    <IonButton color="success" expand="block" className="ion-margin-top" onClick={handleSave}>
                      <span style={{fontSize:"1.4em",padding:"5px",color:"#fff"}}>Save</span>
                    </IonButton>
                  </IonContent>
                </IonModal>
              }
            {filteredEntries.map((entry, index) => ( /* entries */
              <IonItemSliding key={index}>
                <IonItemOptions side="start">
                  <IonItemOption color="success" onClick={() => archiveEntry(entry, index)}>Archive</IonItemOption>
                </IonItemOptions>

                <IonItem>
                    <span slot="start">{index+1}</span>
                    <IonLabel>
                      <span>{entry}</span><br/>
                      <span>{archivedEntries}</span>
                    </IonLabel>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption onClick={() => deleteEntry(index)} color="danger">Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        </div>
      </Common>
    </IonPage>
  );
};

export default Delete;
