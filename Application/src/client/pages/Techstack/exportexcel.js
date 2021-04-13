import React from 'react';
import ReactExport from 'react-data-export';
import {data} from './data';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Exportexcel = () => {
    return(
        <ExcelFile filename="Test Excel" element={<button className="btn btn-info">Excel</button>}>
        <ExcelSheet data={data} name="List User">
            <ExcelColumn label="ID" value="id"/>
            <ExcelColumn label="Name" value="name"/>
            <ExcelColumn label="Category" value="category"/>
            <ExcelColumn label="Date created" value="date"/>
        </ExcelSheet>
        </ExcelFile>
    );
};

export default Exportexcel;