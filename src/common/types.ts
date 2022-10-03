import React, { ChangeEvent, FormEvent } from "react";

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
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export type SelectProps = {
    required: boolean;
    id: string;
    name: string;
    label: string;
    options: SelectOptionType[];
    value: number | null;
    helperText: string;
    onChangeEvent: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type SelectOptionType = {
    id: number | null;
    name: string;
}

export type ModalProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export type FormProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    closeButton?: never;
}

export type CloseFormProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    closeButton: React.ReactNode;
}