import React from 'react';
import Layout from 'components/Layout';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import {columns, data} from './data';

// search/filter textfield style
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

// Filter text function
const FilterComponent = ({ filterText, onFilter }) => (
    <>
    <i className="fa fa-search"></i> {'\u00A0'}

      <TextField id="search" type="text" placeholder="Search" aria-label="Search Input" value={filterText} onChange={onFilter} />
    </>
  );

const Datatables = ({route: {title}}) => {

    const [filterText, setFilterText] = React.useState('');
  const filteredItems = data.filter(item => (item.name + item.email + item.role + item.pskills + item.sskills) && (item.name + item.email + item.role + item.pskills + item.sskills).toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = React.useMemo(() => {
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />;
  }, [filterText]);

    return(
        <Layout title={title} needLogin={false}>
  
          <h1 className='text-center'>Data table</h1>

          <div align="right">
          Export: {'\u00A0'}
         <button className="btn btn-info">CSV</button>
         <button className="btn btn-info" >PDF</button> 
         <button className="btn btn-info">Excel</button> 

        <button className="btn btn-default" title="Print"><i className="fa fa-print"></i></button>
      </div>      
        
        <DataTable
        fixedHeader
        columns={columns}
        data={filteredItems}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        highlightOnHover
        striped
        responsive
        />

      </Layout>
  );
  };
  export default Datatables;