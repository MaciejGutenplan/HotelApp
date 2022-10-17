import React from 'react'
import ReactDOM from "react-dom";

type Props = {
    children: React.ReactNode;
}

export const HomePortal = ({ children }: Props) => {
    return ReactDOM.createPortal(
        children,
        document.body
    )
}