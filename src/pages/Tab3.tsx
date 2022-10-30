import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
// import type { OverlayEventDetail } from '@ionic/core';

const Tab3: React.FC = () => {
    // const [present] = useIonActionSheet();
    // const [result, setResult] = useState<OverlayEventDetail>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Compartilhar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Compartilhar</IonTitle>
                    </IonToolbar>
                </IonHeader>
                ?
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
