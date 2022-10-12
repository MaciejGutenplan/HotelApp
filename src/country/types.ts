import React, { SetStateAction } from "react";

export type Country = {
    id: number | null;
    name: string;
}

export type CountryModalProps = {
    record: Country,
    open: boolean,
    handleClose: () => any
}

export type CountryTableProps = {
    setDetailsPanel: React.Dispatch<SetStateAction<React.ReactNode>>;
}

export type DetailsPanelProps = {
    country: Country;
    setDetailsPanel: React.Dispatch<SetStateAction<React.ReactNode | null>>
}