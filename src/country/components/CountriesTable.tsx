import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Table } from "Common/Table";
import { RootState } from "Store/store";
import { CountryModal } from "./CountryModal";
import { editCellStyle } from "Common/styles";

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
        <span key="Name">Name</span>,
        <span key="Edit" style={editCellStyle}>Edit</span>,
    ]

    const rows = countries.map((country) => [
        <span key={country.name}>{country.name}</span>,
        <span key="edit-icon" style={editCellStyle}>
            <IconButton onClick={() => handleOpen(country)}>
                <EditIcon />
            </IconButton>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} />
            { selectedRecord && <CountryModal record={selectedRecord} open={open} handleClose={handleClose}/> }
        </>
    )
}