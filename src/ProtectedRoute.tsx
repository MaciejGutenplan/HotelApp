import React from "react"

type Props = {
    isAllowed: true | false,
    children: React.ReactNode
}

const ProtectedRoute = ({ isAllowed, children }: Props) => {
    if (!isAllowed) {
        return <span>You don't have permissions to access this page</span>
    }

    return <div>{children}</div>;
};

export default ProtectedRoute