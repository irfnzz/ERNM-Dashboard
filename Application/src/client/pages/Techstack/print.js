import React, {useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import Table from './table';


const PrintDiv = () => {
//for print ref
const componentRef = useRef();
console.log(componentRef);

const handlePrint = useReactToPrint({
  content: () => componentRef.current.lastChild
});

return(
    <div>
      
      
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint} 
        >
        {" "}
        Print {" "}
      </button>
      <Table ref={componentRef} />
    </div>


);
};

export default PrintDiv;
