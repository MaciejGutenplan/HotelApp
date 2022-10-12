import React from "react";
import ProductionErrorImg from "../public/image/error_message_img.png";

type Props = {
    error: Error,
    resetErrorBoundary: any
}

export const ErrorBoundary = (props: Props ) => {
    const { error } = props

    if(process.env.NODE_ENV == 'development') {
        return (
            <div>
                <span>During render uncaught error occurred !!</span>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    <span>{error.stack}</span>
                </details>
            </div>
            )
        }else {
            return (
                <div className="error-boundary-container">
                    <img src={ ProductionErrorImg } alt="Something went wrong"/>
                    <span>Something went wrong! Try again later or contact support</span>
                </div>)
        }
}