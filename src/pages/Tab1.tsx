import React from "react";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
} from "@ionic/react";
import "./Tab1.css";
import SectionContainer from "../components/SectionContainer";
import {useAlbum} from "../providers/Album";

const Tab1: React.FC = () => {
    const {album} = useAlbum();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Seleções</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={"background"}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Seleções</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList lines="full" className={"under-the-veil"}>
                    {album.sections.map((e, index) => {
                        return <SectionContainer key={index} section={e}/>;
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
