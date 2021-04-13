import React from 'react';
import ReactExport from 'react-data-export';
import {data} from './mockdata';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Exportexcel = () => {
    return(
        <ExcelFile filename="List of Users" element={<button className="btn btn-info">Excel</button>}>
        <ExcelSheet data={data} name="List User">
            <ExcelColumn label="ID" value="id"/>
            <ExcelColumn label="First Name" value="fname"/>
            <ExcelColumn label="Last Name" value="lname"/>
            <ExcelColumn label="Role" value="role"/>
            <ExcelColumn label="Employment" value="employment"/>
            <ExcelColumn label="Primary Skills" value="pskills"/>
            <ExcelColumn label="Secondary Skills" value="sskills"/>
            <ExcelColumn label="Allocation" value="allocation"/>
            <ExcelColumn label="Start Date" value="startdate"/>
            <ExcelColumn label="End Date" value="enddate"/>
            <ExcelColumn label="Rate" value="rate"/>
        </ExcelSheet>
        </ExcelFile>
    );
};

export default Exportexcel;