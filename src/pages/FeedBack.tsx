import React, { useEffect, useRef, useState } from 'react';
import { IonActionSheet, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonPage, IonPopover, IonRow, IonTextarea, IonToolbar, useIonAlert } from '@ionic/react';
import { cameraOutline, close, folderOutline, paperPlaneOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
// import { Camera } from '@capacitor/camera';

const FeedBack: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [presentAlert] = useIonAlert();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [itemName, setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [salePrice, setSalePrice] = useState<any>(0);
  const [purchasePrice, setPurchasePrice] = useState<any>(0);
  const [stockQty, setStockQty] = useState<any>(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedImage2, setSelectedImage2] = useState<any>(null);
  const [availability, setAvailability] = useState<boolean>(false);
  const [includesTaxes, setIncludesTaxes] = useState<boolean>(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const openActionSheet =()=>{
  }

  useEffect(()=>{
  },[]) 
  const handleFolderButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file(s)
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      setSelectedImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage2(imageUrl);
      // setSelectedImage(imageUrl);
      // You can perform additional actions with the selected file
    }
  };
  const handleDeselectImage = () => {
    setSelectedImage(null);
  };
  const handleCameraButtonClick = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
      });

      setSelectedImage2(image.webPath);
      setSelectedImage(image);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };
  const addItem = async () => {
    try{
        if (salePrice <= purchasePrice) {
          presentAlert({
            header: 'Invalid Prices',
            message: 'Sale price must be greater than the purchase price.',
            buttons: ['OK'],
          });
          return;
        }
    }catch(error){
        alert((error as Error).message)
    }       
  }
  const convertImageToBase64 = (image: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        resolve(null);
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-align-items-center" style={{ fontSize: "1.4em" }}>
            <IonCol size="2">
            </IonCol>
            <IonCol size="8">
              Leave feedBack
            </IonCol>
            <IonCol size="2">
              <IonIcon size="large" icon={paperPlaneOutline} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTextarea placeholder="Your message:" autoGrow rows={10} fill="solid" />
        <IonList>
          <IonButton color="" expand="full" className="ion-padding" id="click-trigger">Add image
            <IonIcon slot="start" size="large" icon={cameraOutline} />
          </IonButton>
          <IonButton className="ion-padding" color="tertiary" expand="full">Add video</IonButton>
        </IonList>
        <IonActionSheet
          trigger="open-action-sheet"
          header="Choose image source"
          buttons={[
            {
              text: 'Camera',
            },
            {
              text: 'Library',
            },
          ]}
        />
          <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonPopover isOpen={!"selectedImage"} // Hide the popover when an image is selected
            onDidDismiss={() => {}} trigger="click-trigger" triggerAction="click">
              <IonContent style={{height:"25%",}} class="ion-padding">
                <IonRow>
                    <IonCol size="12">
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          ref={'fileInputRef'}
                          onChange={handleFileInputChange}
                        />
                      <IonButton fill="outline" expand="block" onClick={handleFolderButtonClick}>
                        <IonIcon slot="start" size="large" icon={folderOutline} />
                        <span>File Manager</span>
                      </IonButton>
                    </IonCol>
                    <IonCol size="12">
                      <IonButton fill="outline" id="click-trigger" onClick={handleCameraButtonClick} expand="block">
                        <IonIcon slot="start" size="large" icon={cameraOutline} />
                        <span>Camera</span>
                      </IonButton>
                    </IonCol>
                    {selectedImage &&
                      <IonCol size="6">
                        <IonImg src={selectedImage2}  style={{marginTop:"20px",height:"150px",width:"300px",position:"relative"}} />
                        <IonButton onClick={handleDeselectImage} color="light" size="small" style={{position:"absolute",top:"0",right:"-20px",backgroundColor:"#fff"}}>
                          <IonIcon size="large" icon={close} />
                        </IonButton>
                      </IonCol>
                    }
                </IonRow>
              </IonContent>
            </IonPopover>
          </IonCol>
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default FeedBack;
