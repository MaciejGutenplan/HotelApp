import React, { useState } from "react";
import { IconButton, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { GeneralTable } from "Common/GeneralTable";
import { CityModal } from "./CityModal";
import { citiesWithRelations } from "Store/city/actions";

export const CitiesTable = () => {
    const cities = citiesWithRelations()

    const [selectedRecord, setSelectedRecord] = useState<any>();
    const [open, setOpen] = useState(false);

    const handleOpen = (row: any) => {
        setSelectedRecord(row)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <TableCell key="Name">Name</TableCell>,
        <TableCell key="Country">Country</TableCell>,
        <TableCell key="Edit" align="right">Edit</TableCell>,
    ]

    const rows = cities.map((city) => [
        <TableCell key={city.name}>{city.name}</TableCell>,
        <TableCell key={city.country.name}>{city.country.name}</TableCell>,
        <TableCell key="edit-icon" align="right">
            <IconButton onClick={() => handleOpen(city)}>
                <EditIcon />
            </IconButton>
        </TableCell>]
    )

    return (
        <>
            <GeneralTable columns={columns} rows={rows} />
            { selectedRecord && <CityModal record={selectedRecord} open={open} handleClose={handleClose}/> }
        </>
    )
}