import React, { useState, useEffect } from "react";

export interface iInventory {
    key: string;
    count: number;
    image?: string;
}

export interface iSection {
    key: string;
    name: string;
    group: string;
    image?: string;
    chromes: iInventory[];
}

export interface iAlbum {
    filter?: string;
    playerName: string;
    totalStickers: number;
    myStickers: number;
    repeatedStickers: number;
    missingStickers: number;
    sections: iSection[];
}

export const AlbumContext = React.createContext({
    album: {} as iAlbum,
    updateAlbum: () => {},
});

export const AlbumProvider = (props: { children: React.ReactNode }) => {
    const [album, setAlbum] = useState({
        filter: undefined,
        totalStickers: 670,
        myStickers: 0,
        repeatedStickers: 0,
        missingStickers: 670,
        playerName: "",
        sections: [
            {
                key: "HOM",
                name: "Página Inicial",
                group: "",
                chromes: [
                    { key: "00", count: 0 },
                    { key: "FWC1", count: 0 },
                    { key: "FWC2", count: 0 },
                    { key: "FWC3", count: 0 },
                    { key: "FWC4", count: 0 },
                    { key: "FWC5", count: 0 },
                    { key: "FWC6", count: 0 },
                    { key: "FWC7", count: 0 },
                ],
            },
            {
                key: "STD",
                name: "Estádios",
                group: "",
                chromes: [
                    { key: "FWC8", count: 0 },
                    { key: "FWC9", count: 0 },
                    { key: "FWC10", count: 0 },
                    { key: "FWC11", count: 0 },
                    { key: "FWC12", count: 0 },
                    { key: "FWC13", count: 0 },
                    { key: "FWC14", count: 0 },
                    { key: "FWC15", count: 0 },
                    { key: "FWC16", count: 0 },
                    { key: "FWC17", count: 0 },
                    { key: "FWC18", count: 0 },
                ],
            },
            {
                key: "QAT",
                name: "Qatar",
                group: "A",
                chromes: [
                    { key: "QAT1", count: 0 },
                    { key: "QAT2", count: 0 },
                    { key: "QAT3", count: 0 },
                    { key: "QAT4", count: 0 },
                    { key: "QAT5", count: 0 },
                    { key: "QAT6", count: 0 },
                    { key: "QAT7", count: 0 },
                    { key: "QAT8", count: 0 },
                    { key: "QAT9", count: 0 },
                    { key: "QAT10", count: 0 },
                    { key: "QAT11", count: 0 },
                    { key: "QAT12", count: 0 },
                    { key: "QAT13", count: 0 },
                    { key: "QAT14", count: 0 },
                    { key: "QAT15", count: 0 },
                    { key: "QAT16", count: 0 },
                    { key: "QAT17", count: 0 },
                    { key: "QAT18", count: 0 },
                    { key: "QAT19", count: 0 },
                    { key: "QAT20", count: 0 },
                ],
            },
            {
                key: "ECU",
                name: "Equador",
                group: "A",
                chromes: [
                    { key: "ECU1", count: 0 },
                    { key: "ECU2", count: 0 },
                    { key: "ECU3", count: 0 },
                    { key: "ECU4", count: 0 },
                    { key: "ECU5", count: 0 },
                    { key: "ECU6", count: 0 },
                    { key: "ECU7", count: 0 },
                    { key: "ECU8", count: 0 },
                    { key: "ECU9", count: 0 },
                    { key: "ECU10", count: 0 },
                    { key: "ECU11", count: 0 },
                    { key: "ECU12", count: 0 },
                    { key: "ECU13", count: 0 },
                    { key: "ECU14", count: 0 },
                    { key: "ECU15", count: 0 },
                    { key: "ECU16", count: 0 },
                    { key: "ECU17", count: 0 },
                    { key: "ECU18", count: 0 },
                    { key: "ECU19", count: 0 },
                    { key: "ECU20", count: 0 },
                ],
            },
            {
                key: "SEN",
                name: "Senegal",
                group: "A",
                chromes: [
                    { key: "SEN1", count: 0 },
                    { key: "SEN2", count: 0 },
                    { key: "SEN3", count: 0 },
                    { key: "SEN4", count: 0 },
                    { key: "SEN5", count: 0 },
                    { key: "SEN6", count: 0 },
                    { key: "SEN7", count: 0 },
                    { key: "SEN8", count: 0 },
                    { key: "SEN9", count: 0 },
                    { key: "SEN10", count: 0 },
                    { key: "SEN11", count: 0 },
                    { key: "SEN12", count: 0 },
                    { key: "SEN13", count: 0 },
                    { key: "SEN14", count: 0 },
                    { key: "SEN15", count: 0 },
                    { key: "SEN16", count: 0 },
                    { key: "SEN17", count: 0 },
                    { key: "SEN18", count: 0 },
                    { key: "SEN19", count: 0 },
                    { key: "SEN20", count: 0 },
                ],
            },
            {
                key: "NED",
                name: "Holanda",
                group: "A",
                chromes: [
                    { key: "NED1", count: 0 },
                    { key: "NED2", count: 0 },
                    { key: "NED3", count: 0 },
                    { key: "NED4", count: 0 },
                    { key: "NED5", count: 0 },
                    { key: "NED6", count: 0 },
                    { key: "NED7", count: 0 },
                    { key: "NED8", count: 0 },
                    { key: "NED9", count: 0 },
                    { key: "NED10", count: 0 },
                    { key: "NED11", count: 0 },
                    { key: "NED12", count: 0 },
                    { key: "NED13", count: 0 },
                    { key: "NED14", count: 0 },
                    { key: "NED15", count: 0 },
                    { key: "NED16", count: 0 },
                    { key: "NED17", count: 0 },
                    { key: "NED18", count: 0 },
                    { key: "NED19", count: 0 },
                    { key: "NED20", count: 0 },
                ],
            },
            {
                key: "ENG",
                name: "Inglaterra",
                group: "B",
                chromes: [
                    { key: "ENG1", count: 0 },
                    { key: "ENG2", count: 0 },
                    { key: "ENG3", count: 0 },
                    { key: "ENG4", count: 0 },
                    { key: "ENG5", count: 0 },
                    { key: "ENG6", count: 0 },
                    { key: "ENG7", count: 0 },
                    { key: "ENG8", count: 0 },
                    { key: "ENG9", count: 0 },
                    { key: "ENG10", count: 0 },
                    { key: "ENG11", count: 0 },
                    { key: "ENG12", count: 0 },
                    { key: "ENG13", count: 0 },
                    { key: "ENG14", count: 0 },
                    { key: "ENG15", count: 0 },
                    { key: "ENG16", count: 0 },
                    { key: "ENG17", count: 0 },
                    { key: "ENG18", count: 0 },
                    { key: "ENG19", count: 0 },
                    { key: "ENG20", count: 0 },
                ],
            },
            {
                key: "IRN",
                name: "Irã",
                group: "B",
                chromes: [
                    { key: "IRN1", count: 0 },
                    { key: "IRN2", count: 0 },
                    { key: "IRN3", count: 0 },
                    { key: "IRN4", count: 0 },
                    { key: "IRN5", count: 0 },
                    { key: "IRN6", count: 0 },
                    { key: "IRN7", count: 0 },
                    { key: "IRN8", count: 0 },
                    { key: "IRN9", count: 0 },
                    { key: "IRN10", count: 0 },
                    { key: "IRN11", count: 0 },
                    { key: "IRN12", count: 0 },
                    { key: "IRN13", count: 0 },
                    { key: "IRN14", count: 0 },
                    { key: "IRN15", count: 0 },
                    { key: "IRN16", count: 0 },
                    { key: "IRN17", count: 0 },
                    { key: "IRN18", count: 0 },
                    { key: "IRN19", count: 0 },
                    { key: "IRN20", count: 0 },
                ],
            },
            {
                key: "USA",
                name: "EUA",
                group: "B",
                chromes: [
                    { key: "USA1", count: 0 },
                    { key: "USA2", count: 0 },
                    { key: "USA3", count: 0 },
                    { key: "USA4", count: 0 },
                    { key: "USA5", count: 0 },
                    { key: "USA6", count: 0 },
                    { key: "USA7", count: 0 },
                    { key: "USA8", count: 0 },
                    { key: "USA9", count: 0 },
                    { key: "USA10", count: 0 },
                    { key: "USA11", count: 0 },
                    { key: "USA12", count: 0 },
                    { key: "USA13", count: 0 },
                    { key: "USA14", count: 0 },
                    { key: "USA15", count: 0 },
                    { key: "USA16", count: 0 },
                    { key: "USA17", count: 0 },
                    { key: "USA18", count: 0 },
                    { key: "USA19", count: 0 },
                    { key: "USA20", count: 0 },
                ],
            },
            {
                key: "WAL",
                name: "País de Gales",
                group: "B",
                chromes: [
                    { key: "WAL1", count: 0 },
                    { key: "WAL2", count: 0 },
                    { key: "WAL3", count: 0 },
                    { key: "WAL4", count: 0 },
                    { key: "WAL5", count: 0 },
                    { key: "WAL6", count: 0 },
                    { key: "WAL7", count: 0 },
                    { key: "WAL8", count: 0 },
                    { key: "WAL9", count: 0 },
                    { key: "WAL10", count: 0 },
                    { key: "WAL11", count: 0 },
                    { key: "WAL12", count: 0 },
                    { key: "WAL13", count: 0 },
                    { key: "WAL14", count: 0 },
                    { key: "WAL15", count: 0 },
                    { key: "WAL16", count: 0 },
                    { key: "WAL17", count: 0 },
                    { key: "WAL18", count: 0 },
                    { key: "WAL19", count: 0 },
                    { key: "WAL20", count: 0 },
                ],
            },
            {
                key: "ARG",
                name: "Argentina",
                group: "C",
                chromes: [
                    { key: "ARG1", count: 0 },
                    { key: "ARG2", count: 0 },
                    { key: "ARG3", count: 0 },
                    { key: "ARG4", count: 0 },
                    { key: "ARG5", count: 0 },
                    { key: "ARG6", count: 0 },
                    { key: "ARG7", count: 0 },
                    { key: "ARG8", count: 0 },
                    { key: "ARG9", count: 0 },
                    { key: "ARG10", count: 0 },
                    { key: "ARG11", count: 0 },
                    { key: "ARG12", count: 0 },
                    { key: "ARG13", count: 0 },
                    { key: "ARG14", count: 0 },
                    { key: "ARG15", count: 0 },
                    { key: "ARG16", count: 0 },
                    { key: "ARG17", count: 0 },
                    { key: "ARG18", count: 0 },
                    { key: "ARG19", count: 0 },
                    { key: "ARG20", count: 0 },
                ],
            },
            {
                key: "KSA",
                name: "Arábia Saudita",
                group: "C",
                chromes: [
                    { key: "KSA1", count: 0 },
                    { key: "KSA2", count: 0 },
                    { key: "KSA3", count: 0 },
                    { key: "KSA4", count: 0 },
                    { key: "KSA5", count: 0 },
                    { key: "KSA6", count: 0 },
                    { key: "KSA7", count: 0 },
                    { key: "KSA8", count: 0 },
                    { key: "KSA9", count: 0 },
                    { key: "KSA10", count: 0 },
                    { key: "KSA11", count: 0 },
                    { key: "KSA12", count: 0 },
                    { key: "KSA13", count: 0 },
                    { key: "KSA14", count: 0 },
                    { key: "KSA15", count: 0 },
                    { key: "KSA16", count: 0 },
                    { key: "KSA17", count: 0 },
                    { key: "KSA18", count: 0 },
                    { key: "KSA19", count: 0 },
                    { key: "KSA20", count: 0 },
                ],
            },
            {
                key: "MEX",
                name: "México",
                group: "C",
                chromes: [
                    { key: "MEX1", count: 0 },
                    { key: "MEX2", count: 0 },
                    { key: "MEX3", count: 0 },
                    { key: "MEX4", count: 0 },
                    { key: "MEX5", count: 0 },
                    { key: "MEX6", count: 0 },
                    { key: "MEX7", count: 0 },
                    { key: "MEX8", count: 0 },
                    { key: "MEX9", count: 0 },
                    { key: "MEX10", count: 0 },
                    { key: "MEX11", count: 0 },
                    { key: "MEX12", count: 0 },
                    { key: "MEX13", count: 0 },
                    { key: "MEX14", count: 0 },
                    { key: "MEX15", count: 0 },
                    { key: "MEX16", count: 0 },
                    { key: "MEX17", count: 0 },
                    { key: "MEX18", count: 0 },
                    { key: "MEX19", count: 0 },
                    { key: "MEX20", count: 0 },
                ],
            },
            {
                key: "POL",
                name: "Polônia",
                group: "C",
                chromes: [
                    { key: "POL1", count: 0 },
                    { key: "POL2", count: 0 },
                    { key: "POL3", count: 0 },
                    { key: "POL4", count: 0 },
                    { key: "POL5", count: 0 },
                    { key: "POL6", count: 0 },
                    { key: "POL7", count: 0 },
                    { key: "POL8", count: 0 },
                    { key: "POL9", count: 0 },
                    { key: "POL10", count: 0 },
                    { key: "POL11", count: 0 },
                    { key: "POL12", count: 0 },
                    { key: "POL13", count: 0 },
                    { key: "POL14", count: 0 },
                    { key: "POL15", count: 0 },
                    { key: "POL16", count: 0 },
                    { key: "POL17", count: 0 },
                    { key: "POL18", count: 0 },
                    { key: "POL19", count: 0 },
                    { key: "POL20", count: 0 },
                ],
            },
            {
                key: "FRA",
                name: "França",
                group: "D",
                chromes: [
                    { key: "FRA1", count: 0 },
                    { key: "FRA2", count: 0 },
                    { key: "FRA3", count: 0 },
                    { key: "FRA4", count: 0 },
                    { key: "FRA5", count: 0 },
                    { key: "FRA6", count: 0 },
                    { key: "FRA7", count: 0 },
                    { key: "FRA8", count: 0 },
                    { key: "FRA9", count: 0 },
                    { key: "FRA10", count: 0 },
                    { key: "FRA11", count: 0 },
                    { key: "FRA12", count: 0 },
                    { key: "FRA13", count: 0 },
                    { key: "FRA14", count: 0 },
                    { key: "FRA15", count: 0 },
                    { key: "FRA16", count: 0 },
                    { key: "FRA17", count: 0 },
                    { key: "FRA18", count: 0 },
                    { key: "FRA19", count: 0 },
                    { key: "FRA20", count: 0 },
                ],
            },
            {
                key: "AUS",
                name: "Austrália",
                group: "D",
                chromes: [
                    { key: "AUS1", count: 0 },
                    { key: "AUS2", count: 0 },
                    { key: "AUS3", count: 0 },
                    { key: "AUS4", count: 0 },
                    { key: "AUS5", count: 0 },
                    { key: "AUS6", count: 0 },
                    { key: "AUS7", count: 0 },
                    { key: "AUS8", count: 0 },
                    { key: "AUS9", count: 0 },
                    { key: "AUS10", count: 0 },
                    { key: "AUS11", count: 0 },
                    { key: "AUS12", count: 0 },
                    { key: "AUS13", count: 0 },
                    { key: "AUS14", count: 0 },
                    { key: "AUS15", count: 0 },
                    { key: "AUS16", count: 0 },
                    { key: "AUS17", count: 0 },
                    { key: "AUS18", count: 0 },
                    { key: "AUS19", count: 0 },
                    { key: "AUS20", count: 0 },
                ],
            },
            {
                key: "DEN",
                name: "Dinamarca",
                group: "D",
                chromes: [
                    { key: "DEN1", count: 0 },
                    { key: "DEN2", count: 0 },
                    { key: "DEN3", count: 0 },
                    { key: "DEN4", count: 0 },
                    { key: "DEN5", count: 0 },
                    { key: "DEN6", count: 0 },
                    { key: "DEN7", count: 0 },
                    { key: "DEN8", count: 0 },
                    { key: "DEN9", count: 0 },
                    { key: "DEN10", count: 0 },
                    { key: "DEN11", count: 0 },
                    { key: "DEN12", count: 0 },
                    { key: "DEN13", count: 0 },
                    { key: "DEN14", count: 0 },
                    { key: "DEN15", count: 0 },
                    { key: "DEN16", count: 0 },
                    { key: "DEN17", count: 0 },
                    { key: "DEN18", count: 0 },
                    { key: "DEN19", count: 0 },
                    { key: "DEN20", count: 0 },
                ],
            },
            {
                key: "TUN",
                name: "Tunísia",
                group: "D",
                chromes: [
                    { key: "TUN1", count: 0 },
                    { key: "TUN2", count: 0 },
                    { key: "TUN3", count: 0 },
                    { key: "TUN4", count: 0 },
                    { key: "TUN5", count: 0 },
                    { key: "TUN6", count: 0 },
                    { key: "TUN7", count: 0 },
                    { key: "TUN8", count: 0 },
                    { key: "TUN9", count: 0 },
                    { key: "TUN10", count: 0 },
                    { key: "TUN11", count: 0 },
                    { key: "TUN12", count: 0 },
                    { key: "TUN13", count: 0 },
                    { key: "TUN14", count: 0 },
                    { key: "TUN15", count: 0 },
                    { key: "TUN16", count: 0 },
                    { key: "TUN17", count: 0 },
                    { key: "TUN18", count: 0 },
                    { key: "TUN19", count: 0 },
                    { key: "TUN20", count: 0 },
                ],
            },
            {
                key: "ESP",
                name: "Espanha",
                group: "E",
                chromes: [
                    { key: "ESP1", count: 0 },
                    { key: "ESP2", count: 0 },
                    { key: "ESP3", count: 0 },
                    { key: "ESP4", count: 0 },
                    { key: "ESP5", count: 0 },
                    { key: "ESP6", count: 0 },
                    { key: "ESP7", count: 0 },
                    { key: "ESP8", count: 0 },
                    { key: "ESP9", count: 0 },
                    { key: "ESP10", count: 0 },
                    { key: "ESP11", count: 0 },
                    { key: "ESP12", count: 0 },
                    { key: "ESP13", count: 0 },
                    { key: "ESP14", count: 0 },
                    { key: "ESP15", count: 0 },
                    { key: "ESP16", count: 0 },
                    { key: "ESP17", count: 0 },
                    { key: "ESP18", count: 0 },
                    { key: "ESP19", count: 0 },
                    { key: "ESP20", count: 0 },
                ],
            },
            {
                key: "CRC",
                name: "Costa Rica",
                group: "E",
                chromes: [
                    { key: "CRC1", count: 0 },
                    { key: "CRC2", count: 0 },
                    { key: "CRC3", count: 0 },
                    { key: "CRC4", count: 0 },
                    { key: "CRC5", count: 0 },
                    { key: "CRC6", count: 0 },
                    { key: "CRC7", count: 0 },
                    { key: "CRC8", count: 0 },
                    { key: "CRC9", count: 0 },
                    { key: "CRC10", count: 0 },
                    { key: "CRC11", count: 0 },
                    { key: "CRC12", count: 0 },
                    { key: "CRC13", count: 0 },
                    { key: "CRC14", count: 0 },
                    { key: "CRC15", count: 0 },
                    { key: "CRC16", count: 0 },
                    { key: "CRC17", count: 0 },
                    { key: "CRC18", count: 0 },
                    { key: "CRC19", count: 0 },
                    { key: "CRC20", count: 0 },
                ],
            },
            {
                key: "GER",
                name: "Alemanha",
                group: "E",
                chromes: [
                    { key: "GER1", count: 0 },
                    { key: "GER2", count: 0 },
                    { key: "GER3", count: 0 },
                    { key: "GER4", count: 0 },
                    { key: "GER5", count: 0 },
                    { key: "GER6", count: 0 },
                    { key: "GER7", count: 0 },
                    { key: "GER8", count: 0 },
                    { key: "GER9", count: 0 },
                    { key: "GER10", count: 0 },
                    { key: "GER11", count: 0 },
                    { key: "GER12", count: 0 },
                    { key: "GER13", count: 0 },
                    { key: "GER14", count: 0 },
                    { key: "GER15", count: 0 },
                    { key: "GER16", count: 0 },
                    { key: "GER17", count: 0 },
                    { key: "GER18", count: 0 },
                    { key: "GER19", count: 0 },
                    { key: "GER20", count: 0 },
                ],
            },
            {
                key: "JPN",
                name: "Japão",
                group: "E",
                chromes: [
                    { key: "JPN1", count: 0 },
                    { key: "JPN2", count: 0 },
                    { key: "JPN3", count: 0 },
                    { key: "JPN4", count: 0 },
                    { key: "JPN5", count: 0 },
                    { key: "JPN6", count: 0 },
                    { key: "JPN7", count: 0 },
                    { key: "JPN8", count: 0 },
                    { key: "JPN9", count: 0 },
                    { key: "JPN10", count: 0 },
                    { key: "JPN11", count: 0 },
                    { key: "JPN12", count: 0 },
                    { key: "JPN13", count: 0 },
                    { key: "JPN14", count: 0 },
                    { key: "JPN15", count: 0 },
                    { key: "JPN16", count: 0 },
                    { key: "JPN17", count: 0 },
                    { key: "JPN18", count: 0 },
                    { key: "JPN19", count: 0 },
                    { key: "JPN20", count: 0 },
                ],
            },
            {
                key: "BEL",
                name: "Bélgica",
                group: "F",
                chromes: [
                    { key: "BEL1", count: 0 },
                    { key: "BEL2", count: 0 },
                    { key: "BEL3", count: 0 },
                    { key: "BEL4", count: 0 },
                    { key: "BEL5", count: 0 },
                    { key: "BEL6", count: 0 },
                    { key: "BEL7", count: 0 },
                    { key: "BEL8", count: 0 },
                    { key: "BEL9", count: 0 },
                    { key: "BEL10", count: 0 },
                    { key: "BEL11", count: 0 },
                    { key: "BEL12", count: 0 },
                    { key: "BEL13", count: 0 },
                    { key: "BEL14", count: 0 },
                    { key: "BEL15", count: 0 },
                    { key: "BEL16", count: 0 },
                    { key: "BEL17", count: 0 },
                    { key: "BEL18", count: 0 },
                    { key: "BEL19", count: 0 },
                    { key: "BEL20", count: 0 },
                ],
            },
            {
                key: "CAN",
                name: "Canadá",
                group: "F",
                chromes: [
                    { key: "CAN1", count: 0 },
                    { key: "CAN2", count: 0 },
                    { key: "CAN3", count: 0 },
                    { key: "CAN4", count: 0 },
                    { key: "CAN5", count: 0 },
                    { key: "CAN6", count: 0 },
                    { key: "CAN7", count: 0 },
                    { key: "CAN8", count: 0 },
                    { key: "CAN9", count: 0 },
                    { key: "CAN10", count: 0 },
                    { key: "CAN11", count: 0 },
                    { key: "CAN12", count: 0 },
                    { key: "CAN13", count: 0 },
                    { key: "CAN14", count: 0 },
                    { key: "CAN15", count: 0 },
                    { key: "CAN16", count: 0 },
                    { key: "CAN17", count: 0 },
                    { key: "CAN18", count: 0 },
                    { key: "CAN19", count: 0 },
                    { key: "CAN20", count: 0 },
                ],
            },
            {
                key: "MAR",
                name: "Marrocos",
                group: "F",
                chromes: [
                    { key: "MAR1", count: 0 },
                    { key: "MAR2", count: 0 },
                    { key: "MAR3", count: 0 },
                    { key: "MAR4", count: 0 },
                    { key: "MAR5", count: 0 },
                    { key: "MAR6", count: 0 },
                    { key: "MAR7", count: 0 },
                    { key: "MAR8", count: 0 },
                    { key: "MAR9", count: 0 },
                    { key: "MAR10", count: 0 },
                    { key: "MAR11", count: 0 },
                    { key: "MAR12", count: 0 },
                    { key: "MAR13", count: 0 },
                    { key: "MAR14", count: 0 },
                    { key: "MAR15", count: 0 },
                    { key: "MAR16", count: 0 },
                    { key: "MAR17", count: 0 },
                    { key: "MAR18", count: 0 },
                    { key: "MAR19", count: 0 },
                    { key: "MAR20", count: 0 },
                ],
            },
            {
                key: "CRO",
                name: "Croácia",
                group: "F",
                chromes: [
                    { key: "CRO1", count: 0 },
                    { key: "CRO2", count: 0 },
                    { key: "CRO3", count: 0 },
                    { key: "CRO4", count: 0 },
                    { key: "CRO5", count: 0 },
                    { key: "CRO6", count: 0 },
                    { key: "CRO7", count: 0 },
                    { key: "CRO8", count: 0 },
                    { key: "CRO9", count: 0 },
                    { key: "CRO10", count: 0 },
                    { key: "CRO11", count: 0 },
                    { key: "CRO12", count: 0 },
                    { key: "CRO13", count: 0 },
                    { key: "CRO14", count: 0 },
                    { key: "CRO15", count: 0 },
                    { key: "CRO16", count: 0 },
                    { key: "CRO17", count: 0 },
                    { key: "CRO18", count: 0 },
                    { key: "CRO19", count: 0 },
                    { key: "CRO20", count: 0 },
                ],
            },
            {
                key: "BRA",
                name: "Brasil",
                group: "G",
                chromes: [
                    { key: "BRA1", count: 0 },
                    { key: "BRA2", count: 0 },
                    { key: "BRA3", count: 0 },
                    { key: "BRA4", count: 0 },
                    { key: "BRA5", count: 0 },
                    { key: "BRA6", count: 0 },
                    { key: "BRA7", count: 0 },
                    { key: "BRA8", count: 0 },
                    { key: "BRA9", count: 0 },
                    { key: "BRA10", count: 0 },
                    { key: "BRA11", count: 0 },
                    { key: "BRA12", count: 0 },
                    { key: "BRA13", count: 0 },
                    { key: "BRA14", count: 0 },
                    { key: "BRA15", count: 0 },
                    { key: "BRA16", count: 0 },
                    { key: "BRA17", count: 0 },
                    { key: "BRA18", count: 0 },
                    { key: "BRA19", count: 0 },
                    { key: "BRA20", count: 0 },
                ],
                image: "./assets/brasil.png",
            },
            {
                key: "SRB",
                name: "Sérvia",
                group: "G",
                chromes: [
                    { key: "SRB1", count: 0 },
                    { key: "SRB2", count: 0 },
                    { key: "SRB3", count: 0 },
                    { key: "SRB4", count: 0 },
                    { key: "SRB5", count: 0 },
                    { key: "SRB6", count: 0 },
                    { key: "SRB7", count: 0 },
                    { key: "SRB8", count: 0 },
                    { key: "SRB9", count: 0 },
                    { key: "SRB10", count: 0 },
                    { key: "SRB11", count: 0 },
                    { key: "SRB12", count: 0 },
                    { key: "SRB13", count: 0 },
                    { key: "SRB14", count: 0 },
                    { key: "SRB15", count: 0 },
                    { key: "SRB16", count: 0 },
                    { key: "SRB17", count: 0 },
                    { key: "SRB18", count: 0 },
                    { key: "SRB19", count: 0 },
                    { key: "SRB20", count: 0 },
                ],
            },
            {
                key: "SUI",
                name: "Suíça",
                group: "G",
                chromes: [
                    { key: "SUI1", count: 0 },
                    { key: "SUI2", count: 0 },
                    { key: "SUI3", count: 0 },
                    { key: "SUI4", count: 0 },
                    { key: "SUI5", count: 0 },
                    { key: "SUI6", count: 0 },
                    { key: "SUI7", count: 0 },
                    { key: "SUI8", count: 0 },
                    { key: "SUI9", count: 0 },
                    { key: "SUI10", count: 0 },
                    { key: "SUI11", count: 0 },
                    { key: "SUI12", count: 0 },
                    { key: "SUI13", count: 0 },
                    { key: "SUI14", count: 0 },
                    { key: "SUI15", count: 0 },
                    { key: "SUI16", count: 0 },
                    { key: "SUI17", count: 0 },
                    { key: "SUI18", count: 0 },
                    { key: "SUI19", count: 0 },
                    { key: "SUI20", count: 0 },
                ],
            },
            {
                key: "CMR",
                name: "Camarões",
                group: "G",
                chromes: [
                    { key: "CMR1", count: 0 },
                    { key: "CMR2", count: 0 },
                    { key: "CMR3", count: 0 },
                    { key: "CMR4", count: 0 },
                    { key: "CMR5", count: 0 },
                    { key: "CMR6", count: 0 },
                    { key: "CMR7", count: 0 },
                    { key: "CMR8", count: 0 },
                    { key: "CMR9", count: 0 },
                    { key: "CMR10", count: 0 },
                    { key: "CMR11", count: 0 },
                    { key: "CMR12", count: 0 },
                    { key: "CMR13", count: 0 },
                    { key: "CMR14", count: 0 },
                    { key: "CMR15", count: 0 },
                    { key: "CMR16", count: 0 },
                    { key: "CMR17", count: 0 },
                    { key: "CMR18", count: 0 },
                    { key: "CMR19", count: 0 },
                    { key: "CMR20", count: 0 },
                ],
            },
            {
                key: "POR",
                name: "Portugal",
                group: "H",
                chromes: [
                    { key: "POR1", count: 0 },
                    { key: "POR2", count: 0 },
                    { key: "POR3", count: 0 },
                    { key: "POR4", count: 0 },
                    { key: "POR5", count: 0 },
                    { key: "POR6", count: 0 },
                    { key: "POR7", count: 0 },
                    { key: "POR8", count: 0 },
                    { key: "POR9", count: 0 },
                    { key: "POR10", count: 0 },
                    { key: "POR11", count: 0 },
                    { key: "POR12", count: 0 },
                    { key: "POR13", count: 0 },
                    { key: "POR14", count: 0 },
                    { key: "POR15", count: 0 },
                    { key: "POR16", count: 0 },
                    { key: "POR17", count: 0 },
                    { key: "POR18", count: 0 },
                    { key: "POR19", count: 0 },
                    { key: "POR20", count: 0 },
                ],
            },
            {
                key: "GHA",
                name: "Gana",
                group: "H",
                chromes: [
                    { key: "GHA1", count: 0 },
                    { key: "GHA2", count: 0 },
                    { key: "GHA3", count: 0 },
                    { key: "GHA4", count: 0 },
                    { key: "GHA5", count: 0 },
                    { key: "GHA6", count: 0 },
                    { key: "GHA7", count: 0 },
                    { key: "GHA8", count: 0 },
                    { key: "GHA9", count: 0 },
                    { key: "GHA10", count: 0 },
                    { key: "GHA11", count: 0 },
                    { key: "GHA12", count: 0 },
                    { key: "GHA13", count: 0 },
                    { key: "GHA14", count: 0 },
                    { key: "GHA15", count: 0 },
                    { key: "GHA16", count: 0 },
                    { key: "GHA17", count: 0 },
                    { key: "GHA18", count: 0 },
                    { key: "GHA19", count: 0 },
                    { key: "GHA20", count: 0 },
                ],
            },
            {
                key: "URU",
                name: "Uruguai",
                group: "H",
                chromes: [
                    { key: "URU1", count: 0 },
                    { key: "URU2", count: 0 },
                    { key: "URU3", count: 0 },
                    { key: "URU4", count: 0 },
                    { key: "URU5", count: 0 },
                    { key: "URU6", count: 0 },
                    { key: "URU7", count: 0 },
                    { key: "URU8", count: 0 },
                    { key: "URU9", count: 0 },
                    { key: "URU10", count: 0 },
                    { key: "URU11", count: 0 },
                    { key: "URU12", count: 0 },
                    { key: "URU13", count: 0 },
                    { key: "URU14", count: 0 },
                    { key: "URU15", count: 0 },
                    { key: "URU16", count: 0 },
                    { key: "URU17", count: 0 },
                    { key: "URU18", count: 0 },
                    { key: "URU19", count: 0 },
                    { key: "URU20", count: 0 },
                ],
            },
            {
                key: "KOR",
                name: "Coréia do Sul",
                group: "H",
                chromes: [
                    { key: "KOR1", count: 0 },
                    { key: "KOR2", count: 0 },
                    { key: "KOR3", count: 0 },
                    { key: "KOR4", count: 0 },
                    { key: "KOR5", count: 0 },
                    { key: "KOR6", count: 0 },
                    { key: "KOR7", count: 0 },
                    { key: "KOR8", count: 0 },
                    { key: "KOR9", count: 0 },
                    { key: "KOR10", count: 0 },
                    { key: "KOR11", count: 0 },
                    { key: "KOR12", count: 0 },
                    { key: "KOR13", count: 0 },
                    { key: "KOR14", count: 0 },
                    { key: "KOR15", count: 0 },
                    { key: "KOR16", count: 0 },
                    { key: "KOR17", count: 0 },
                    { key: "KOR18", count: 0 },
                    { key: "KOR19", count: 0 },
                    { key: "KOR20", count: 0 },
                ],
            },
            {
                key: "FIF",
                name: "Museu da FIFA (Campeãs)",
                group: "-",
                chromes: [
                    { key: "FWC19", count: 0 },
                    { key: "FWC20", count: 0 },
                    { key: "FWC21", count: 0 },
                    { key: "FWC22", count: 0 },
                    { key: "FWC23", count: 0 },
                    { key: "FWC24", count: 0 },
                    { key: "FWC25", count: 0 },
                    { key: "FWC26", count: 0 },
                    { key: "FWC27", count: 0 },
                    { key: "FWC28", count: 0 },
                    { key: "FWC29", count: 0 },
                ],
            },
            {
                key: "COC",
                name: "Coca-Cola",
                group: "",
                chromes: [
                    { key: "C1", count: 0 },
                    { key: "C2", count: 0 },
                    { key: "C3", count: 0 },
                    { key: "C4", count: 0 },
                    { key: "C5", count: 0 },
                    { key: "C6", count: 0 },
                    { key: "C7", count: 0 },
                    { key: "C8", count: 0 },
                ],
            },
        ],
    });

    useEffect(() => {
        let storage = localStorage.getItem('meu-album');
        if(storage !== null){
            const items = JSON.parse(localStorage.getItem('meu-album') ?? "{}");
            if (items) setAlbum(items);
        }
    },[]);

    const updateProvider = () => {
        console.log("updateProvider", album);
        localStorage.setItem('meu-album', JSON.stringify(album));
    }

    return (
        <AlbumContext.Provider value={{album: album, updateAlbum: updateProvider}}>
            {props.children}
        </AlbumContext.Provider>
    );
};

export const useAlbum = () => React.useContext(AlbumContext);