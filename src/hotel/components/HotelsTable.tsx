import React, { useState } from "react";
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';

import { Hotel } from "../types";
import { EditModal } from "./EditModal";

export const HotelsTable = () => {

    // TODO: Implement Redux
    const hotelData: Hotel[] = []

    const [open, setOpen] = useState(false);

    const handleOpen = (row: Hotel) => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="hotels table">
                <TableHead>
                    <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="right">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hotelData.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => handleOpen(row)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </TableContainer>
        <EditModal hotel={{}} open={open} handleClose={handleClose}/>
        </>
    )
}