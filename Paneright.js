import React, { useState } from "react";
import Datatable from "./Datatable";
import Button from 'react-bootstrap/Button';
//import Tab2 from "./Tab2";
import Nnew from "./Nnew";


const Paneright = () => {
  const [showTable, setShowTable] = useState(false);
  const ClickHandle = () =>{
    setShowTable(current => !current);
  }
  const handleClearLocalStorage = () => {
    localStorage.removeItem('tab2Data');
  };
  return (
        <>
        <div>
            <Button className="btn btn-primary mx-2" onClick={handleClearLocalStorage}>clear local storage</Button>
            <Button className="btn btn-primary mx-2" onClick={ClickHandle}>default local storage</Button>
            {showTable && <Datatable/>}
        </div>
        <div className="my-5">
        {/* <Tab2/> */}
        <Nnew/>
        </div>   
        </>
      
  );
};

export default Paneright;
