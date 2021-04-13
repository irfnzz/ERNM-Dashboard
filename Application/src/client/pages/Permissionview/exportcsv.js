import React from 'react';
import {CSVLink} from 'react-csv';
import {data} from './data';

const Exportcsv = () => {
    return(

        <CSVLink
        data={data}
        separator={";"}
        filename={"test CSV file.csv"}
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