import React, { useState } from 'react';
import { IonCol, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import Common from '../components/Common';

const Element: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const stateCities: { [key: string]: string[] } = {
    "Andhra Pradesh": ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Rajahmundry","Tirupati","Kadapa","Kakinada","Anantapur","Vizianagaram","Eluru","Ongole","Nandyal","Machilipatnam","Adoni","Tenali","Proddatur","Chittoor","Hindupur",],
    "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Namsai","Ziro","Tawang","Bomdila","Roing","Tezu","Daporijo","Anini","Along","Aalo","Changlang","Khonsa","Seppa","Yingkiong",],
    "Assam": ["Guwahati","Dibrugarh","Silchar","Jorhat","Nagaon","Tinsukia","Tezpur","Bongaigaon","Dhubri","Sibsagar","Goalpara","Barpeta","Nalbari","Hailakandi","Karimganj","Mangaldoi","Diphu","North Lakhimpur","Dhemaji","Kokrajhar",],
    "Bihar": ["Patna","Gaya","Bhagalpur","Muzaffarpur","Purnia","Darbhanga","Arrah","Bihar Sharif","Begusarai","Katihar","Munger","Chhapra","Danapur","Saharsa","Sasaram","Hajipur","Dehri","Siwan","Motihari","Nawada",],
    "Chattisgarh": ["Raipur","Bhilai","Bilaspur","Korba","Raigarh","Durg","Rajnandgaon","Jagdalpur","Ambikapur","Mahasamund","Dhamtari","Chirmiri","Kanker","Janjgir","Raigarh","Dhamtari","Bhatapara","Tilda","Dongargarh","Bemetara",],
    "Goa": ["Panaji","Margao","Vasco da Gama","Mapusa","Ponda","Bicholim","Curchorem","Canacona","Sanguem","Valpoi",],
    "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Junagadh","Gandhinagar","Gandhidham","Anand","Surendranagar","Navsari","Morbi","Bharuch","Porbandar","Ankleshwar","Godhra","Valsad","Vapi","Bhuj",],
    "Haryana": [ "Faridabad","Gurgaon","Panipat","Ambala","Yamunanagar","Rohtak","Hisar","Karnal","Sonipat","Panchkula","Bhiwani","Sirsa","Bahadurgarh","Jind","Thanesar","Kaithal","Rewari","Palwal","Hansi","Narnaul",],
    "Himachalpradesh": ["Shimla","Solan","Dharamshala","Mandi","Kullu","Manali","Chamba","Hamirpur","Nahan","Bilaspur","Una","Palampur","Kangra","Dalhousie","Sirmaur","Kinnaur","Lahaul and Spiti",],
    "Jharkhand": ["Ranchi","Jamshedpur","Dhanbad","Bokaro Steel City","Hazaribagh","Deoghar","Giridih","Ramgarh","Medininagar (Daltonganj)","Chirkunda","Phusro","Jhumri Tilaiya","Saunda","Chaibasa","Gumia","Gomoh","Bokaro","Chakradharpur","Chatra","Jharia",],
    "Karnataka": [ "Bangalore","Mysore","Hubli-Dharwad","Mangalore","Belgaum","Gulbarga","Davanagere","Bellary","Bijapur","Shimoga","Tumkur","Raichur","Bidar","Hospet","Hassan","Gadag-Betageri","Udupi","Robertson Pet","Mandya","Chikkamagaluru",],
    "Kerala": ["Thiruvananthapuram","Kochi","Kozhikode","Thrissur","Kollam","Palakkad","Alappuzha","Kannur","Kottayam","Manjeri","Punalur","Pathanamthitta","Kasaragod","Malappuram","Mattannur","Irinjalakuda","Chalakudy","Thalassery","Kodungallur","Cherthala",],
    "Madhyapradesh": ["AGAR-MALWA","ALIRAJPUR","ANUPPUR","ASHOKNAGAR","BALAGHAT","BARWANI","BETUL","BHIND","BHOPAL","BURHANPUR","CHHATARPUR","CHHINDWARA","DAMOH","DATIA","DEWAS","DHAR","DINDORI","GUNA","GWALIOR","HARDA","INDORE","JABALPUR","JHABUA","KATNI","KHANDWA","KHARGONE","MANDLA","MANDSAUR","MAUGANJ","MORENA","NARMADAPURAM","NARSINGHPUR","NEEMUCH","NIWARI","PANNA","RAISEN","RAJGARH","RATLAM","REWA","SAGAR","SATNA","SEHORE","SEONI","SHAHDOL","SHAJAPUR","SHEOPUR","SHIVPURI","SIDHI","SINGROULI","TIKAMGARH","UJJAIN","UMARIA","VIDISHA"],
    "Maharastra": ["Mumbai","Pune","Nagpur","Thane","Nashik","Kalyan-Dombivali","Vasai-Virar","Aurangabad","Solapur","Bhiwandi","Amravati","Nanded","Kolhapur","Sangli-Miraj & Kupwad","Malegaon","Jalgaon","Akola","Latur","Dhule","Ahmednagar",],
    "Manipur": ["Imphal","Thoubal","Bishnupur","Churachandpur","Senapati","Ukhrul","Chandel","Tamenglong",],
    "Meghalaya": ["Shillong","Tura","Nongpoh","Jowai","Baghmara","Williamnagar","Nongstoin",],
    "Mizoram": ["Aizawl","Lunglei","Saiha","Champhai","Serchhip","Kolasib","Lawngtlai","Khawzawl","Hnahthial",],
    "Nagaland": ["Kohima","Dimapur","Mokokchung","Tuensang","Wokha","Zunheboto","Phek","Mon","Longleng",],
    "Odisha": ["Bhubaneswar","Cuttack","Rourkela","Berhampur","Sambalpur","Puri","Balasore","Brahmapur","Baripada","Bhadrak","Balangir","Jharsuguda","Jeypore","Bargarh","Rayagada","Koraput","Kendujhar","Paradip","Jajpur","Bolangir",],
    "Punjab": ["Amritsar","Ludhiana","Jalandhar","Patiala","Bathinda","Hoshiarpur","Mohali","Batala","Pathankot","Moga","Firozpur","Kapurthala","Abohar","Malerkotla","Khanna","Phagwara","Muktsar","Barnala","Rajpura","Gurdaspur",],
    "Rajasthan": ["Jaipur","Jodhpur","Udaipur","Kota","Bikaner","Ajmer","Sikar","Alwar","Bhilwara","Bharatpur","Pali","Sri Ganganagar","Hanumangarh","Jhunjhunu","Kishangarh","Barmer","Churu","Sawai Madhopur","Chittorgarh","Tonk",],
    "Sikkim": ["Gangtok","Namchi","Mangan","Gyalshing","Rangpo","Singtam","Soreng","Ravangla","Nayabazar",],
    "Tamilnadu": ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Tiruppur","Vellore","Thoothukudi","Thanjavur","Nagercoil","Dindigul","Cuddalore","Kanchipuram","Erode","Tiruvannamalai","Pollachi","Rajapalayam","Sivakasi","Karur",],
    "Telangana": ["Hyderabad","Warangal","Nizamabad","Karimnagar","Ramagundam","Khammam","Mahbubnagar","Nalgonda","Adilabad","Suryapet","Miryalaguda","Jagtial","Nirmal","Kothagudem","Siddipet","Mancherial","Wanaparthy","Narayanpet","Kamareddy","Bhongir",],
    "Tripura": ["Agartala","Udaipur","Dharmanagar","Belonia","Kailasahar","Ambassa","Sabroom","Khowai","Sonamura","Bishalgarh","Teliamura","Kamalpur","Santirbazar","Jogendranagar",],
    "Uttarpradesh": ["Lucknow","Kanpur","Varanasi","Prayagraj","Agra","Ghaziabad","Meerut","Vadodara","Moradabad","Aligarh","Saharanpur","Gorakhpur","Noida","Jhansi","Rampur","Mathura","Muzaffarnagar","Shahjahanpur","Ayodhya","Firozabad",],
    "Uttarakhand": ["Dehradun","Haridwar","Rishikesh","Haldwani","Nainital","Roorkee","Kashipur","Rudrapur","Srinagar","Pauri","Tehri","Mussoorie","Almora","Pithoragarh","Chamoli","Bageshwar","Champawat","Udham Singh Nagar","Chakrata","Bhimtal",],
    "Wbengal": ["Kolkata","Howrah","Durgapur","Asansol","Siliguri","Malda","Darjeeling","Kharagpur","Haldia","Bardhaman","Baharampur","Ranaghat","Raiganj","Krishnanagar","Nabadwip","Medinipur","Purulia","Balurghat","Jalpaiguri","Cooch Behar",],
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
