import React from "react";

export type TableData = {
    columns: React.ReactNode[];
    rows: React.ReactNode[][];
}

export type TextFieldProps = {
    required: boolean;
    id: string;
    name: string;
    label: string;
    defaultValue: string | number;
    inputProps: {}
}

export type DisabledFieldProps = {
    id: string;
    name: string;
    label: string;
    value: string | number;
    inputProps?: {}
}


export type NumberFieldProps = {
    required: boolean;
    id: string;
    name: string;
    label: string;
    defaultValue: string | number;
    inputProps: {}
}

export type SelectProps = {
    required: boolean;
    id: string;
    name: string;
    label: string;
    defaultValue: number | string;
    options: { id: number, name: string }[];
    helperText: string;
    onChangeEvent?: (value: any) => void
}

export type ModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export type FormProps = {
    handleSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
    withCloseButton?: never;
    handleClose?: never;
}

export type CloseFormProps = {
    handleSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
    withCloseButton: boolean;
    handleClose: () => void;
}