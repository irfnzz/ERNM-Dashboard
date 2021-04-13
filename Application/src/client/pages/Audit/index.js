import React from 'react';
import Layout from 'components/Layout';
import Exportcsv from './exportcsv';
import Exportpdf from './exportpdf';
import Exportexcel from './exportexcel';
import Table from './table';
import PrintDiv from './print';
import ReactToPrint from 'react-to-print';
import './styles.scss';

const Auditlog = ({route: {title}}) => {


    return(
        <Layout title={title} needLogin={false}>
  
          <h1 className='text-center'>Audit Log</h1>

          <div align="left">
          Export: {'\u00A0'}

         <Exportcsv />
         <Exportexcel />
        
         <button onClick={() => Exportpdf()} className="btn btn-info"> PDF </button>
         <PrintDiv />  
        </div> 
           

      </Layout>
  );
  };
  export default Auditlog;