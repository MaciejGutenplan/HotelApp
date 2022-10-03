import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Table } from "Common/Table";
import { HotelModal } from "./HotelModal";
import { hotelsWithRelations } from "Store/hotel/actions";
import { editCellStyle } from "Common/styles";

export const HotelsTable = () => {
    const hotels = hotelsWithRelations();
    const [selectedRecord, setSelectedRecord] = useState<any>();
    const [open, setOpen] = useState(false);

    const handleOpen = (row: any) => {
        setSelectedRecord(row)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <span key="Name">Name</span>,
        <span key="Price">Price</span>,
        <span key="Address">Address</span>,
        <span key="City">City</span>,
        <span key="Country">Country</span>,
        <span key="Edit" style={editCellStyle}>Edit</span>,
        ]

    const rows = hotels.map((hotel) => [
        <span key={hotel.name}>{hotel.name}</span>,
        <span key={hotel.price}>{hotel.price}</span>,
        <span key={hotel.address}>{hotel.address}</span>,
        <span key={hotel.city.name}>{hotel.city.name}</span>,
        <span key={hotel.country.name}>{hotel.country.name}</span>,
        <span key="edit-icon" style={editCellStyle}>
            <IconButton onClick={() => handleOpen(hotel)}>
                <EditIcon />
            </IconButton>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} />
            { selectedRecord && <HotelModal record={selectedRecord} open={open} handleClose={handleClose} /> }
        </>
    )
}