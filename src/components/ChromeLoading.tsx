import React from "react";
import {
    IonChip,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonSkeletonText,
} from "@ionic/react";
import "./ChromeLoading.css";

const ChromeLoading: React.FC = (props) => {
    return (
        <IonItem key={Math.random()*100}>
            <IonThumbnail>
                <IonSkeletonText animated={true} style={{ 'width': '80px' }}/>
            </IonThumbnail>
            <IonLabel>
                <h1><IonSkeletonText animated={true} style={{ 'width': '80px' }}/></h1>
                <IonChip color="medium">
                    <IonSkeletonText animated={true} style={{ 'width': '60px' }}/>
                </IonChip>
            </IonLabel>
        </IonItem>
    );
};

export default ChromeLoading;
