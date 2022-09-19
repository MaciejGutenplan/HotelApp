import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IconButton, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { GeneralTable } from "Common/GeneralTable";
import { RootState } from "Store/store";
import { CountryModal } from "./CountryModal";

export const CountriesTable = () => {
    const countries = useSelector((state: RootState) => state.countries)

    const [selectedRecord, setSelectedRecord] = useState<any>();
    const [open, setOpen] = useState(false);

    const handleOpen = (row: any) => {
        setSelectedRecord(row)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <TableCell key="Name">Name</TableCell>,
        <TableCell key="Edit" align="right">Edit</TableCell>,
    ]

    const rows = countries.map((country) => [
        <TableCell key={country.name}>{country.name}</TableCell>,
        <TableCell key="edit-icon" align="right">
            <IconButton onClick={() => handleOpen(country)}>
                <EditIcon />
            </IconButton>
        </TableCell>]
    )

    return (
        <>
            <GeneralTable columns={columns} rows={rows} />
            { selectedRecord && <CountryModal record={selectedRecord} open={open} handleClose={handleClose}/> }
        </>
    )
}