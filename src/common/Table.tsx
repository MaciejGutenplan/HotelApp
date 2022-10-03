import React from "react";
import {
    Paper,
    Table as MUITable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import { TableData } from "./types";
import { tableContainerStyle, tableStyle } from "Common/styles";

export const Table = (props: TableData) => {

    const { columns, rows } = props

    return (
        <TableContainer component={Paper} sx={tableContainerStyle}>
            <MUITable sx={tableStyle} aria-label="table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((columnCell) => <TableCell>{columnCell}</TableCell> )
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        rows.map((row, index) => (
                            <TableRow key={"table-row-" + index}>
                                {
                                    row.map((rowCell) => <TableCell>{rowCell}</TableCell>)
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </MUITable>
        </TableContainer>
    )
}