
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
const Datatable = () => {
  
  return(
    <>
    <div className='container'>
      <h5>Default Table</h5>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">RollNo</th>
            <th scope="col">Department</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>5767</td>
            <td>CSE</td>
            <td>mark@gmail.com</td>
            <td>9745283647</td>
            <td>
              <span>
                  <div className="mx-2">
                  <BsFillTrashFill/>
                  <BsFillPencilFill/>
                  </div >
              </span>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>7853</td>
            <td>EEE</td>
            <td>Jacob25@gmail.com</td>
            <td>8947254826</td>
            <td>
              <span>
                  <div className="mx-2">
                  <BsFillTrashFill/>
                  <BsFillPencilFill/>
                  </div >
              </span>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>2473</td>
            <td>IT</td>
            <td>Larry98@gmail.com</td>
            <td>9173519364</td>
            <td>
              <span>
                  <div className="mx-2">
                  <BsFillTrashFill/>
                  <BsFillPencilFill/>
                  </div >
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}



export default Datatable;