import React, { useState } from 'react';
import Userdetails from './userdetails';
import Usertable from './table';
import Exportcsv from './exportcsv';
import Exportpdf from './exportpdf';
import Exportexcel from './exportexcel';
import { Card } from 'react-bootstrap';

const Users = ({ route: { title } }) => {

  const [currentClickedRow, setCurrentClickedRow] = useState({}); //state to manage the selected row

  return (
    <Card>
      <Card.Body>

        <div className="row userform">
          <div className="col col-md-8">
            <button onClick={() => Exportpdf()} className="btn btn-info"> PDF</button>
            <Exportcsv />
            <Exportexcel />
            <Usertable setCurrentClickedRow={setCurrentClickedRow} />
          </div>

          <div className="col col-md-4">
            <Userdetails currentClickedRow={currentClickedRow} />
          </div>
        </div>
      </Card.Body>
    </Card>

  );
};
export default Users;