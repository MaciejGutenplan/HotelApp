import React from "react";

export type TableData = {
    columns: React.ReactNode[];
    rows: React.ReactNode[][];
}

export type TextFieldProps = {
    disabled?: boolean;
    required?: boolean;
    id: string;
    name: string;
    label: string;
    value: any;
    type?: string;
    inputProps?: {}
}

export type SelectProps = {
    required: boolean;
    id: string;
    name: string;
    label: string;
    defaultValue: number | string;
    options: SelectOptionType[];
    helperText: string;
    onChangeEvent?: (value: any) => void
}

type SelectOptionType = {
    id: number;
    name: string;
}

export type ModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export type FormProps = {
    handleSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
    closeButton?: never;
}

export type CloseFormProps = {
    handleSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
    closeButton: React.ReactNode;
}