import CSS from 'csstype';

export const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const tableStyle = {
    minWidth: 650
}

export const tableContainerStyle = {
    paddingBottom: '15px'
}

export const formStyle = {
    '& .MuiTextField-root': { m: 1, width: '25ch' }
}

export const actionCellStyle: CSS.Properties = {
    float: 'right'
}

export const detailsPanelContainer = {
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    fontSize: '15px'
}

export const detailsPanelCloseButton = {
    padding: 0,
    float: 'right'
}