import React, { useState } from "react";
import {
    IonButton,
    IonChip,
    IonIcon,
    IonItem,
    IonLabel,
    IonThumbnail,
} from "@ionic/react";
import "./ChromeContainer.css";
import {
    closeCircle,
    checkmarkCircle,
    addCircle,
    removeCircle,
} from "ionicons/icons";
import chrome from "../assets/chrome.png";
import player from "../assets/player.png";
import { useAlbum, iInventory } from "../providers/Album";
import _ from "lodash";

interface ContainerProps {
    chrome: iInventory;
    section: string;
    segment: string;
}

const ChromeContainer: React.FC<ContainerProps> = (props) => {
    const {album, updateAlbum} = useAlbum();
    const [sticker] = useState<iInventory>(props.chrome);
    const [count, setCount] = useState<number>(sticker.count);

    const handleAddPress = (key: string) => {
        const iSection = _.findIndex(album.sections, ["key", props.section]);
        if(iSection === -1) return;

        const iChrome = _.findIndex(album.sections[iSection].chromes, ["key", key]);
        if(iChrome === -1) return;

        if(album.sections[iSection].chromes[iChrome].count === 0){
            album.sections[iSection].chromes[iChrome].count = 1;
            album.myStickers++;
            album.missingStickers--;
        }else{
            album.sections[iSection].chromes[iChrome].count++;
            album.repeatedStickers++;
        }
        setCount(album.sections[iSection].chromes[iChrome].count);
        console.log("handleAddPress");
        updateAlbum();
    };

    const handleRemPress = (key: string) => {
        const iSection = _.findIndex(album.sections, ["key", props.section]);
        if(iSection === -1) return;

        const iChrome = _.findIndex(album.sections[iSection].chromes, ["key", key]);
        if(iChrome === -1) return;

        if(album.sections[iSection].chromes[iChrome].count === 1){
            album.sections[iSection].chromes[iChrome].count = 0;
            album.myStickers--;
            album.missingStickers++;
        }else{
            album.sections[iSection].chromes[iChrome].count--;
            album.repeatedStickers--;
        }
        setCount(album.sections[iSection].chromes[iChrome].count);
        console.log("handleAddPress");
        updateAlbum();
    };

    function show(): boolean{
        if(props.segment === "ALL") return true;

        if(props.segment === "REP" && count > 1) return true;

        if(props.segment === "HAV" && count > 0) return true;

        return props.segment === "MIS" && count <= 0;
    }

    return (
        <IonItem hidden={!show()} key={sticker.key} className={count <= 0 ? "missing-sticker" : (count === 1 ? "i-have-sticker" : "repeated-sticker")}>
            <IonThumbnail>
                <img
                    src={
                        count > 0
                            ? sticker.image && sticker.image !== ""
                                ? sticker.image
                                : player
                            : chrome
                    }
                    alt={sticker.key}
                />
            </IonThumbnail>
            <IonLabel>
                <h1>{sticker.key}</h1>
                <IonChip
                    color={
                        count > 0 ? (count > 1 ? "secondary" : "success") : "warning"
                    }
                >
                    <IonIcon
                        icon={
                            count === 0
                                ? closeCircle
                                : count > 1
                                    ? addCircle
                                    : checkmarkCircle
                        }/>
                    <IonLabel>
                        {count === 0
                            ? "Preciso"
                            : count > 1
                                ? (count - 1) + " repetidas"
                                : "Tenho"}
                    </IonLabel>
                </IonChip>
            </IonLabel>
            <IonButton
                hidden={count === 0}
                slot="end"
                size="large"
                color="warning"
                className={"ion-button-padding-zero"}
                onClick={() => handleRemPress(sticker.key)}
            >
                <IonIcon icon={removeCircle} slot="icon-only"/>
            </IonButton>
            <IonButton
                slot="end"
                size="large"
                color="success"
                key={sticker.key}
                className={"ion-button-padding-zero"}
                onClick={() => handleAddPress(sticker.key)}
            >
                <IonIcon icon={addCircle} slot="icon-only"/>
            </IonButton>
        </IonItem>
    );
};

export default ChromeContainer;
