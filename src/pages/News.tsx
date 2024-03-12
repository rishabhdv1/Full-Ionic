import React, { useState } from 'react';
import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';

const News: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Sample news articles
  const newsArticles = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Sed do eiusmod tempor incididunt', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Ut enim ad minim veniam', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'At go ad tempor veniam', content: 'At go ad minim tempor veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ];

  // Filter news articles based on search text
  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="10">
              News
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonSearchbar
            value={searchText}
            onIonInput={e => setSearchText(e.detail.value!)}
            placeholder="Search news"
            onIonCancel={() => setSearchText('')}
          />
        <IonList>
          {filteredArticles.map(article => (
            <IonItem key={article.id}>
              <IonLabel>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default News;
