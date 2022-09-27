import React, { useState } from "react";
import {
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

import { TableData } from "./types";
import { EditModal } from "./EditModal";

export const GeneralTable = (props: TableData) => {

    const [open, setOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState();

    //TODO: Set available Redux states
    const handleOpen = (row: any) => {
        setSelectedRecord(row)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                        <TableRow>
                            { props.columns.map((column) => ( <TableCell>{column}</TableCell> )) }
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row) => (
                                <TableRow key={row.id}>
                                    { Object.values(row).map((value: string) => <TableCell>{value}</TableCell>) }
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleOpen(row)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            { selectedRecord && <EditModal record={selectedRecord} open={open} handleClose={handleClose}/> }
        </>
    )
}