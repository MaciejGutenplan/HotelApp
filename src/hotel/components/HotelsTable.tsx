import React from "react";
import { GeneralTable } from "../../common/GeneralTable";

export const HotelsTable = () => {

    return ( <GeneralTable columns={['Hotel', 'Price', 'Address']} data={[{name: '', price: '', address: ''}]} /> )
}