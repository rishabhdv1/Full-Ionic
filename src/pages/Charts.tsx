import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import Chart from 'react-google-charts';

const PieChart: React.FC<{ data: Array<[string, number]> }> = ({ data }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          Pie Chart
        </IonCardTitle>
      </IonCardHeader>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: 'My Daily Activities',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </IonCard>
  );
};

const Charts: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ];
  const columnChartData = [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
  ];

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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Pie Chart
            </IonCardTitle>
          </IonCardHeader>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Column Chart
            </IonCardTitle>
          </IonCardHeader>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={columnChartData}
            options={{
              title: 'Population of Largest U.S. Cities',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Charts;
