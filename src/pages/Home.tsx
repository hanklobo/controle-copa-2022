import React, {useEffect} from "react";
import {
    IonCard,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import "./Home.css";
// @ts-ignore
import albumCover from "../assets/albumCover.png";
// @ts-ignore
import repetidas from "../assets/repetidas.png";
// @ts-ignore
import envelope from "../assets/envelope.png";
// @ts-ignore
import chrome from "../assets/chrome.png";
import {useAlbum} from "../providers/Album";

const Home: React.FC = () => {
    const {album} = useAlbum();

    useEffect(() => {
        console.log("album alterado", album);
    },[album])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Álbum Copa 2022</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="background">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Álbum Copa 2022</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard routerLink="/selecoes" className="card-home">
                    <div>
                        <img src={albumCover} alt="Minha coleção" />
                        <IonLabel className={"text"}>
                            <h1>Minha coleção</h1>
                            <h2>
                                {album.myStickers} / {album.totalStickers} figurinhas
                            </h2>
                        </IonLabel>
                    </div>
                </IonCard>
                <IonCard className="card-home">
                    <div>
                        <img src={chrome} alt="Restantes" />
                        <IonLabel className={"text"}>
                            <h1>Não tenho</h1>
                            <h2>{album.missingStickers} figurinhas</h2>
                        </IonLabel>
                    </div>
                </IonCard>
                <IonCard className="card-home">
                    <div>
                        <img src={album.repeatedStickers > 0 ? repetidas : envelope} alt="Minhas repetidas" />
                        <IonLabel className="text">
                            <h1>Repetidas</h1>
                            <h2>{album.repeatedStickers} figurinhas</h2>
                        </IonLabel>
                    </div>
                </IonCard>
                <IonCard className="card-qatar"/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
