import React from "react";
import { GeneralTable } from "../../common/GeneralTable";

export const CitiesTable = () => {

    return ( <GeneralTable columns={['City', 'Country name']} data={[{name: '', country: ''}]} /> )

}