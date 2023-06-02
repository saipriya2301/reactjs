import './Navbar.css'
import React, {useState, useEffect} from 'react';
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Tab2 = () => {
    const storedData = localStorage.getItem('tab2Data');
    const [data, setData] = useState((JSON.parse(storedData)) || [])
    //console.log(data)
    const [editIndex, setEditIndex] = useState(null);
    const [inputdata, setInputData] = useState({
        name:'',
        rollno:'',
        department:'',
        email:'',
        countryCode:'+91',
        mobile:''
    });
    
    useEffect(() => {
        localStorage.setItem('tab2Data', JSON.stringify(data));
        const storedData = localStorage.getItem('tab2Data');
        // if (storedData) {
        //   setData(JSON.parse(storedData));
        // }
    }, [data]);
    
    const handleChange = (e) =>{
        const newInput = (data)=>({...data, [e.target.name]:e.target.value})
        setInputData(newInput)
    };
    const handleDeleteRow = (i) =>{
        const newData = [...data];
        newData.splice(i, 1);
        setData(newData);
        toast.success('Deleted successfully.', {position: toast.POSITION.TOP_CENTER})
    };
    const handleEditRow = (index) => {
        const rowToEdit = data[index];
        setInputData(rowToEdit);
        setEditIndex(index);
    };
    const handleSubmit= (e) =>{
        //debugger;
        e.preventDefault();
        const checkEmptyInput = !Object.values(inputdata).every(res=>res==="")
        if(checkEmptyInput)
        {
            if (!/^[a-zA-Z ]+$/.test(inputdata.name)) {
                toast.warning('Invalid Name. \n Name should contain only alphabets and spaces, no speacial characters.', {position: toast.POSITION.TOP_CENTER});
                return;
            }
            if (!/^\d+$/.test(inputdata.rollno)) {
                toast.warning('Invalid RollNo. \n RollNo should contain only numbers.', {position: toast.POSITION.TOP_CENTER});

                return;
            }
            if (!/^[a-zA-Z]+$/.test(inputdata.department)) {
                toast.warning('Invalid Department. \n Department should contain only alphabets.', {position: toast.POSITION.TOP_CENTER});
                return;
            }
            if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(inputdata.email)) {
                toast.warning('Invalid email.\n Enter correct email.', {position: toast.POSITION.TOP_CENTER});
                return;
            }
            if (!/^\+\d{1,3}\s\d{9,15}$/.test(inputdata.mobile)) {
            // if (!/^\d{10}$/.test(inputdata.mobile)) {
                toast.warning('Invalid mobile number. \n Enter 10 digits mobile number.', {position: toast.POSITION.TOP_CENTER});
                return;
            }
            if (editIndex !== null) {
                // Edit existing row
                const newData = [...data];
                newData[editIndex] = inputdata;
                setData(newData);
                setEditIndex(null);
                toast.success('Entry added succesfully', {position: toast.POSITION.TOP_CENTER});
            } else {
                const newData = (data)=>([...data, inputdata])
                setData(newData);
                toast.success('Entry added succesfully', {position: toast.POSITION.TOP_CENTER});

            }
            const emptyInput= {name:'',
            rollno:'',
            department:'',
            email:'',
            countryCode:'+91',
            mobile:''}
            setInputData(emptyInput)
        }
    }
    return <>
        <div className='container'>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">RollNo</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((data, i) => {
                    return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.rollno}</td>
                        <td>{data.department}</td>
                        <td>{data.email}</td>
                        <td>{data.countryCode} {data.mobile}</td>
                        <td>
                            
                                <BsFillTrashFill
                                className="action-icon"
                                onClick={() => handleDeleteRow(i)}
                                />
                                <BsFillPencilFill
                                className="action-icon"
                                onClick={() => handleEditRow(i)}
                                />
                            
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td><input type='text' onChange={handleChange} value = {inputdata.name} name = 'name' placeholder='Enter Name'/></td>
                    <td><input type='text' onChange={handleChange} value = {inputdata.rollno} name = 'rollno' placeholder='Enter RollNo'/></td>
                    <td><input type='text' onChange ={handleChange} value = {inputdata.department} name = 'department' placeholder='Enter Department'/></td>
                    <td><input type='text' onChange={handleChange} value = {inputdata.email} name = 'email' placeholder='Enter Email'/></td>
                    {/* <td><input type='text' onChange={handleChange} value = {inputdata.mobile} name = 'mobile' placeholder='Enter MobileNo'/></td> */}
                    <td>
                    <div className="input-group">
                        <select onChange={handleChange} value={inputdata.countryCode} name="countryCode">
                            <option value="+1">+1</option>
                            <option value="+91">+91</option>
                            <option value="+44">+44</option>
                        </select>
                        <input type="text" onChange={handleChange} value={inputdata.mobile} name="mobile" placeholder="Enter MobileNo"/>
                    </div>
                    </td>
                    <td><input type="submit" onClick={handleSubmit} className="btn btn-primary" /></td> 
                    <ToastContainer/>
                </tr>
            </tbody>
        </table>
        
        </div>
      

    </>;
}

export default Tab2;