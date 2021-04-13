import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {data} from './data';

const Exportpdf = () => {
    const unit = "pt"; // can use pt, mm, cm, or in
    const size = "A4"; // can use A1, A2, A3 or A4
    const orientation = "portrait"; // can set to portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size); //jspdf document initiation

    const title = "Data table export pdf example";
    const headers = [["ID", "Name", "Email", "Role", "Primary Skills", "Secondary Skills"]];
    const datapdf = data.map(item => [item.id, item.name, item.email, item.role, item.pskills, item.sskills]);

    let content = {
        startY: 50,
        head: headers,
        body: datapdf
    };

    doc.text(title, marginLeft, 40); //title text
    doc.autoTable(content); //datatable
    doc.save("testpdf.pdf") //filename

    return(
        <Exportpdf />
    );
};

export default Exportpdf;