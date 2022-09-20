export type TableData = {
    columns: string[],
    //TODO: Change to redux data
    data: any[]
}

export type ModalProps = {
    //TODO: Change to redux record type
    record: any,
    open: boolean,
    handleClose: any
}