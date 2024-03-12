import React, { useEffect, useRef, useState } from 'react';
import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonPage, IonTextarea, IonToolbar } from '@ionic/react';
import { cameraOutline, close, folderOutline } from 'ionicons/icons';
import { Camera } from '@capacitor/camera';
import { CameraResultType } from '@capacitor/camera';


const FeedBack: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  const handleCameraButtonClick = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri // or CameraResultType.Base64
      });
  
      // setSelectedImage(image.webPath);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };
  

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDeselectImage = () => {
    setSelectedImage(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonCol size="8">
            Leave feedback
          </IonCol>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTextarea placeholder="Message" rows={10}/>
        <IonList>
          <IonButton color="" expand="full" className="ion-padding" onClick={handleCameraButtonClick}>
            Add image from Camera
            <IonIcon slot="start" size="large" icon={cameraOutline} />
          </IonButton>
          <IonButton className="ion-padding" color="tertiary" expand="full">
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            Add image from Gallery
            <IonIcon slot="start" size="large" icon={folderOutline} onClick={() => fileInputRef.current?.click()} />
          </IonButton>
        </IonList>
        {selectedImage &&
          <IonItem>
            <IonImg src={selectedImage} />
            <IonButton onClick={handleDeselectImage} color="light" size="small">
              <IonIcon size="large" icon={close} />
            </IonButton>
          </IonItem>
        }
      </IonContent>
    </IonPage>
  );
};

export default FeedBack;
