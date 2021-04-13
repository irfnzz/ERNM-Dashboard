import React from 'react';
import { CSVLink } from 'react-csv';
import { data } from './mockdata';

const Exportcsv = () => {
    return (

        <CSVLink
            data={data}
            filename={"List of Users.csv"}
            className="btn btn-info"
            variant="contained"
            size="sm"
            target="_blank"
        >
            CSV
        </CSVLink>
    );
};

export default Exportcsv;