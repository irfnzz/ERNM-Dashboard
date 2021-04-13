import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



const UserView = () => {
   

    const [rowData] = useState(
    
        [
        {FirstName: "Andria", LastName: "Reddy", Active: "Product landing page",Past:"Canary", StartTime:"3.3.2020 11:23pm",EndTime:"3.5.2021 3:35pm" },
        { FirstName: "Sharul", LastName: "Sheid", Active: "R&R" ,Past:"Bigfish",StartTime:"3.3.2020 2:30pm",EndTime:"12.11.2020 12:03pm"  },
        
        { FirstName: "Mohana", LastName: "Kumar",LastName: "Kumar", Active: "JS drawing",Past:"Mercury", StartTime:"01:01:2019 18:03am",EndTime:"08.08.2019 8:45pm "  },
        { FirstName: "Adrin", LastName: "Wei", Active: "R&R",Past:"Address book", StartTime:"12.12.2019 2:30pm",EndTime:"04.05.2019 12:20pm "  },
        { FirstName: "Noah", LastName: "Oliver", Active: "Web design",Past:"Note Log", StartTime:"11.01.2020 12:45pm",EndTime:"17.07.2020 11:50pm  " },
        { FirstName: "Liam", LastName: "Lucas", Active: "Web design",Past:"Modal pop-ups", StartTime:"10.10.2018 11:02pm",EndTime:"23.07.2020 2:33pm" },
        { FirstName: "James", LastName: "Bejamin", Active: "JS drawing",Past:"SurveyForm", StartTime:"02.08.2019 10:32pm",EndTime:"25.05.2020 2:33pm " },
        { FirstName: "Muhammad", LastName: "Khairul", Active: "Word Counter",Past:"TO-do-list", StartTime:"08.02.2020 1:12pm",EndTime:"05.06.2020 11:33pm" },
        { FirstName: "Amira", LastName: "Wakaf", Active: "Product landing page",Past:"Exit-plugin", StartTime:"01.01.2017 2:30pm ",EndTime:"25.09.2017 12:22pm"}
    
         ]);

         
    
    return (
          
        <div className="ag-theme-alpine"  style={{ height: 500, width: 1000}}>
              <h1 className='text-center'>Application Views for UsersApplications</h1>

               
    <AgGridReact
        rowData={rowData}>
            <AgGridColumn headerName="User Details">
         <AgGridColumn field="FirstName" sortable={ true } filter ={true}></AgGridColumn>
        <AgGridColumn field="LastName" sortable={ true } filter ={true}></AgGridColumn>
        </AgGridColumn>
        <AgGridColumn headerName="Application Name">
        <AgGridColumn field="Past"sortable={ true } filter ={true} ></AgGridColumn>
        <AgGridColumn field="Active"sortable={ true } filter ={true} ></AgGridColumn>
        </AgGridColumn>
        <AgGridColumn headerName="Engagement Time">
        <AgGridColumn field="StartTime"sortable={ true } filter ={true} ></AgGridColumn>
        <AgGridColumn field="EndTime"sortable={ true } filter ={true} ></AgGridColumn>
        </AgGridColumn>
    </AgGridReact >
    

  
    
 
    
</div>

    );
};

export default UserView;