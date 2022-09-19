import React, { useState } from "react";
import { IconButton, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { GeneralTable } from "Common/GeneralTable";
import { HotelModal } from "./HotelModal";
import { hotelsWithRelations } from "Store/hotel/actions";

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
        <TableCell key="Name">Name</TableCell>,
        <TableCell key="Price">Price</TableCell>,
        <TableCell key="Address">Address</TableCell>,
        <TableCell key="City">City</TableCell>,
        <TableCell key="Country">Country</TableCell>,
        <TableCell key="Edit" align="right">Edit</TableCell>,
        ]

    const rows = hotels.map((hotel) => [
        <TableCell key={hotel.name}>{hotel.name}</TableCell>,
        <TableCell key={hotel.price}>{hotel.price}</TableCell>,
        <TableCell key={hotel.address}>{hotel.address}</TableCell>,
        <TableCell key={hotel.city.name}>{hotel.city.name}</TableCell>,
        <TableCell key={hotel.country.name}>{hotel.country.name}</TableCell>,
        <TableCell key="edit-icon" align="right">
            <IconButton onClick={() => handleOpen(hotel)}>
                <EditIcon />
            </IconButton>
        </TableCell>]
    )

    return (
        <>
            <GeneralTable columns={columns} rows={rows} />
            { selectedRecord && <HotelModal record={selectedRecord} open={open} handleClose={handleClose} /> }
        </>
    )
}