import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { data } from './mockdata';

const Exportpdf = () => {
    const unit = "pt"; // can use pt, mm, cm, or in
    const size = "A4"; // can use A1, A2, A3 or A4
    const orientation = "portrait"; // can set to portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size); //jspdf document initiation

    const title = "List of Users";
    const headers = [["ID", "First Name", "Last Name", "Role", "Employment Type", "Primary Skills", "Secondary Skills", "Allocation", "Start Date", "End Date"]];
    const datapdf = data.map(item => [item.id, item.fname, item.lname, item.role, item.employment, item.pskills, item.sskills, item.allocation, item.startdate, item.enddate]);

    let content = {
        startY: 50,
        head: headers,
        body: datapdf
    };

    doc.text(title, marginLeft, 40); //title text
    doc.autoTable(content); //datatable
    doc.save("List of Users.pdf") //filename

    return (
        <Exportpdf />
    );
};

export default Exportpdf;