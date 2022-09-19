export type Country = {
    id: number;
    name: string;
}

export type CountryPayload = {
    name: { value: string }
}

export type CountryModalProps = {
    record: Country,
    open: boolean,
    handleClose: () => any
}