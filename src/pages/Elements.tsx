import React, { useState } from 'react';
import { IonCol, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import Common from '../components/Common';

const Element: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const stateCities: { [key: string]: string[] } = {
    "Andhra Pradesh": ["City1", "City2", "City3"],
    "Madhya Pradesh": ["City4", "City5", "City6"],
    // Add more states and their cities here...
    "Arunachal Pradesh": ["Arunachal Pradesh"],
    "assam": ["Assam"],
    "bihar": ["Bihar"],
    "chattisgarh": ["Chattisgarh"],
    "goa": ["Goa"],
    "gujarat": ["Gujarat"],
    "haryana": ["Haryana"],
    "himachalpradesh": ["Himachalpradesh"],
    "jharkhand": ["Jharkhand"],
    "karnataka": ["Karnataka"],
    "kerala": ["Kerala"],
    "madhyapradesh": ["AGAR-MALWA","ALIRAJPUR","ANUPPUR","ASHOKNAGAR","BALAGHAT","BARWANI","BETUL",'BHIND','BHOPAL','BURHANPUR','CHHATARPUR','CHHINDWARA','DAMOH','DATIA','DEWAS','DHAR','DINDORI','GUNA','GWALIOR','HARDA','INDORE','JABALPUR','JHABUA','KATNI','KHANDWA','KHARGONE','MANDLA','MANDSAUR','MAUGANJ','MORENA','NARMADAPURAM','NARSINGHPUR','NEEMUCH','NIWARI','PANNA','RAISEN','RAJGARH','RATLAM','REWA','SAGAR','SATNA','SEHORE','SEONI','SHAHDOL','SHAJAPUR','SHEOPUR','SHIVPURI','SIDHI','SINGROULI','TIKAMGARH','UJJAIN','UMARIA','VIDISHA'],
    "maharastra": ["Maharastra"],
    "manipur": ["Manipur"],
    "meghalaya": ["Meghalaya"],
    "mizoram": ["Mizoram"],
    "nagaland": ["Nagaland"],
    "odisha": ["Odisha"],
    "punjab": ["Punjab"],
    "rajasthan": ["Rajasthan"],
    "sikkim": ["Sikkim"],
    "tamilnadu": ["Tamilnadu"],
    "telangana": ["Telangana"],
    "tripura": ["Tripura"],
    "uttarpradesh": ["Uttarpradesh"],
    "uttarakhand": ["Uttarakhand"],
    "wbengal": ["West Bengal"],
  };

  const handleStateChange = (e: CustomEvent) => {
    setSelectedState(e.detail.value);
    setSelectedCity('All'); // Reset selected city when state changes
  };

  const handleCityChange = (e: CustomEvent) => {
    setSelectedCity(e.detail.value);
  };

  const handleSearchTextChange = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  // Filter cities based on search text
  const filteredCities = selectedState !== 'All' ? stateCities[selectedState].filter(city =>
    city.toLowerCase().includes(searchText.toLowerCase())
  ) : Object.values(stateCities).flat().filter(city =>
    city.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center ion-text-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
              <IonMenuButton style={{fontSize:"1.6em"}}/>
            </IonCol>
            <IonCol>
            </IonCol>
            <IonCol size="2">
              <IonIcon id="click-trigger" size="large" icon={personCircle} />
            </IonCol>
          </IonRow>
        </IonToolbar>
        <IonSearchbar value={searchText} onIonInput={handleSearchTextChange} />
      </IonHeader>
      <Common>
        <IonRow>
          <IonCol>
            <IonSelect fill="outline" value={selectedState} onIonChange={handleStateChange} interface="popover" placeholder="Select State">
              <IonSelectOption value="All">All</IonSelectOption>
                {Object.keys(stateCities).map((state, index) => (
                  <IonSelectOption key={index} value={state}>{state}</IonSelectOption>
                ))}
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect fill="outline" value={selectedCity} onIonChange={handleCityChange} interface="popover" placeholder="Select City">
              <IonSelectOption value="All">All</IonSelectOption>
                {selectedState !== 'All' && stateCities[selectedState].map((city, index) => (
                  <IonSelectOption key={index} value={city}>{city}</IonSelectOption>
                ))}
                {selectedState === 'All' && filteredCities.map((city, index) => (
                  <IonSelectOption key={index} value={city}>{city}</IonSelectOption>
                ))}
            </IonSelect>
          </IonCol>
        </IonRow>

      </Common>
    </IonPage>
  );
};

export default Element;
