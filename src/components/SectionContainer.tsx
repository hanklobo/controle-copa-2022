import React from "react";
import {IonAvatar, IonItem, IonLabel} from "@ionic/react";
import "./SectionContainer.css";
import {iInventory, useAlbum} from "../providers/Album";
import _ from "lodash";

interface ContainerProps {
    section: {
        key: string;
        name: string;
        group: string;
        chromes: iInventory[];
        image?: string;
    };
}

const SectionContainer: React.FC<ContainerProps> = (props) => {
    const {album} = useAlbum();
    const setFilter = (team: string) => {
        album.filter = team;
    }
    const totalIHave = _.filter(props.section.chromes, (c: iInventory) => c.count > 0).length;
    // const percIHave = totalIHave/props.section.chromes.length;
    return (
        <IonItem
            routerLink={"/figurinhas"}
            onClick={() => setFilter(props.section.key)}
            key={props.section.key}
            detail={true}
            className="section"
        >
            <IonAvatar slot={"start"}>
                <img src={"/assets/flags/" + props.section.key.toLowerCase() + ".png"} alt={props.section.name}/>
            </IonAvatar>
            {/*<IonThumbnail className={percIHave === 1 ? "full" : (percIHave > 0.7 ? "half" : "empty")}>*/}
            {/*  <img src={(totalIHave === props.section.chromes.length) && props.section.image !== undefined ? props.section.image : albumCover} alt={props.section.name} />*/}
            {/*</IonThumbnail>*/}
            <IonLabel>
                <h1 className={"text-white"}>{props.section.name}</h1>
                <h2>
                    {totalIHave} / {props.section.chromes.length}
                </h2>
                <h3 hidden={props.section.group === "" || props.section.group === "-"}>
                    Grupo: {props.section.group}
                </h3>
            </IonLabel>
        </IonItem>
    );
};

export default SectionContainer;
