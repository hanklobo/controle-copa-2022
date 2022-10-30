import React, {useState, useEffect} from "react";
import {
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar, IonBackButton, IonSegment, IonSegmentButton,
} from "@ionic/react";
import "./Tab2.css";
import ChromeContainer from "../components/ChromeContainer";
import ChromeLoading from "../components/ChromeLoading";
import {iSection, useAlbum} from "../providers/Album";
import _ from "lodash";
import { removeCircleOutline, funnel, funnelOutline } from "ionicons/icons";

const Tab2: React.FC = () => {
    const {album, updateAlbum} = useAlbum();
    const [loaded, setLoaded] = useState(false);
    const [showSegment, setShowSegment] = useState(false);
    const [segment, setSegment] = useState("ALL");
    const [sections, setSections] = useState([] as iSection[]);

    // eslint-disable-next-line
    const applyFilter = (filter?: string) => {
        setLoaded(false);
        setSegment("ALL");
        album.filter = filter;
    }

    const clearFilter = () => {
        setLoaded(false);
        setSegment("ALL");
        album.filter = undefined;
    }

    const updateSegment = (value: string) => {
        setSegment(value);
    }

    useEffect(() => {
        setLoaded(true);
    },[sections]);

    useEffect(() => {
        applyFilter(album.filter);
        setSections(album.filter ? _.filter(album.sections,["key",album.filter]) : album.sections);
        updateAlbum();
        // eslint-disable-next-line
    },[album.filter]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" hidden={album.filter === undefined}>
                        <IonBackButton defaultHref="/album" />
                    </IonButtons>
                    <IonTitle>{album.filter === undefined || sections.length === 0 ? "Figurinhas" : sections[0].name}</IonTitle>
                    <IonButtons  slot="end" onClick={() => setShowSegment(!showSegment)}>
                        <IonIcon icon={showSegment ? funnel : funnelOutline} slot="icon-only" size="large"/>
                    </IonButtons>
                    <IonButtons hidden={album.filter === undefined}  slot="end" onClick={() => clearFilter()}>
                        <IonIcon icon={removeCircleOutline} slot="icon-only" size="large"/>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar hidden={!showSegment}>
                    <IonSegment value={segment}>
                        <IonSegmentButton value="ALL" onClick={() => updateSegment("ALL")}>
                            Todas
                        </IonSegmentButton>
                        <IonSegmentButton value="MIS" onClick={() => updateSegment("MIS")}>
                            Preciso
                        </IonSegmentButton>
                        <IonSegmentButton value="REP" onClick={() => updateSegment("REP")}>
                            Repetida
                        </IonSegmentButton>
                        <IonSegmentButton value="HAV" onClick={() => updateSegment("HAV")}>
                            Tenho
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{album.filter === undefined || sections.length === 0 ? "Figurinhas" : sections[0].name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList lines="full">
                    {!loaded ? <ChromeLoading/> : sections.map((sec, is) => {
                        return (<div key={is}>
                            {sec.chromes.map((c, i) => {
                                return <ChromeContainer key={i} chrome={c} section={sec.key} segment={segment} />;
                            })}
                        </div>);
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
