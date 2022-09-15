export type Hotel = {
    name?: string,
    address?: string,
    price?: number
}

export type HotelModalProps = {
    hotel: Hotel,
    open: boolean,
    handleClose: any
}