export type Country = {
    id: number | null;
    name: string;
}

export type CountryModalProps = {
    record: Country,
    open: boolean,
    handleClose: () => any
}

export type DetailsPanelProps = {
    country: Country;
}