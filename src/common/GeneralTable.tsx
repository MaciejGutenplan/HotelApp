import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

import { TableData } from "./types";
import { tableContainerStyle, tableStyle } from "Common/styles";

export const GeneralTable = (props: TableData) => {

    const { columns, rows } = props

    return (
        <TableContainer component={Paper} sx={tableContainerStyle}>
            <Table sx={tableStyle} aria-label="table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map((columnCell) => columnCell )
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        rows.map((row, index) => (
                            <TableRow key={"table-row-" + index}>
                                {
                                    row.map((rowCell) => rowCell)
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}