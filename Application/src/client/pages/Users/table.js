import React from 'react';
import DataTable from 'react-data-table-component';
import './styles.scss';
import { data } from './mockdata';


//search function
const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <i className="fa fa-search"></i>  {'\u00A0'}
    <input id="search" type="text" className="textfield hover" placeholder="Search" aria-label="Search Input" value={filterText} onChange={onFilter} />
  </>
);


const Usertable = (props) => {

  const { setCurrentClickedRow } = props;

  //table columns
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      width: "50px",
    },
    {
      name: "Name",
      sortable: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => (
        <button data-tag="allowRowEvents" className="iconbutton">
          {row.fname} {row.lname}
        </button>
      )
    },
    {
      name: 'Roles',
      selector: 'role',
      sortable: true,
    },
    {
      name: 'Employment Type',
      selector: 'employment',
      sortable: true,
    },
    {
      name: 'Primary Skills',
      selector: 'pskills',
      sortable: true,
    },
    {
      name: 'Secondary Skills',
      selector: 'sskills',
      sortable: true,
    },
    {
      name: 'Allocation',
      selector: 'allocation',
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: 'startdate',
      sortable: true,
    },
    {
      name: 'End Date',
      selector: 'enddate',
      sortable: true,
    },
    {
      name: 'Daily Rate',
      selector: 'rate',
      sortable: true,
    },
  ];

  // Create state to manage the search function
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = data.filter(item =>
    (item.fname + item.lname + item.role + item.employment + item.pskills + item.sskills + item.allocation + item.startdate + item.enddate) &&
    (item.fname + item.lname + item.role + item.employment + item.pskills + item.sskills + item.allocation + item.startdate + item.enddate).toLowerCase().includes(filterText.toLowerCase()));

  // Update the state when input changes
  const subHeaderComponentMemo = React.useMemo(() => {
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />;
  }, [filterText]);

  //onclick row function 
  const onRowClicked = (row) => {
    console.log(row);
    setCurrentClickedRow(row);
  }


  return (

    <DataTable
      title="List of Users"
      fixedHeader
      columns={columns}
      data={filteredItems}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      highlightOnHover
      striped
      onRowClicked={onRowClicked}
    />

  );
};

export default Usertable;

