import React from 'react';
import DataTable from 'react-data-table-component';
import {columns, data} from './data';
import './styles.scss';




// Search component
const FilterComponent = ({ filterText, onFilter }) => (
    <>
    <i className="fa fa-search"></i> {'\u00A0'}
      <input id="searchbutton" type="text" className="textfield hover" placeholder="Search" aria-label="Search Input" value={filterText} onChange={onFilter} />
    </>
  );

const Table = React.forwardRef((props, ref) => {

  // Create a state
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = data.filter(item => (item.name + item.category + item.date) && (item.name + item.category + item.date).toLowerCase().includes(filterText.toLowerCase()));

  // Update the state when input changes
  const subHeaderComponentMemo = React.useMemo(() => {
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />;
  }, [filterText]);

    return(

      
       <div ref={ref}>
          
        <DataTable
        noHeader
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
    
      </div>
     
     

      
      

  );

  
  });

  export default Table;