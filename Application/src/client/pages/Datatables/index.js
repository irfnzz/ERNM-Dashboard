import React from 'react';
import Layout from 'components/Layout';
import Exportcsv from './exportcsv';
import Exportpdf from './exportpdf';
import Exportexcel from './exportexcel';
import Table from './table';
import PrintDiv from './print';
import ReactToPrint from 'react-to-print';
import './styles.scss';
import { Col } from 'react-bootstrap'

const Datatables = ({ route: { title } }) => {


  return (
    <div>
      <Col>

        <h1 className='text-center'>Data table</h1>

        <div align="left">
          Export: {'\u00A0'}

          <Exportcsv />
          <Exportexcel />

          <button onClick={() => Exportpdf()} className="btn btn-info"> PDF </button>
          <PrintDiv />
        </div>

      </Col>
    </div>
  );
};
export default Datatables;