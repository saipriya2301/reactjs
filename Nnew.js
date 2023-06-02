import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nnew = () => {
  const storedData = localStorage.getItem("tab2Data");
  const [data, setData] = useState(JSON.parse(storedData) || []);
  const [editIndex, setEditIndex] = useState(null);
  const [inputdata, setInputData] = useState({
    name: "",
    rollno: "",
    department: "",
    countryCode: "+91",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("tab2Data", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteRow = (i) => {
    const newData = [...data];
    newData.splice(i, 1);
    setData(newData);
    toast.success("Deleted successfully.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleEditRow = (index) => {
    const rowToEdit = data[index];
    setInputData(rowToEdit);
    setEditIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(inputdata).every(
      (res) => res === ""
    );

    if (checkEmptyInput) {
      if (!/^[a-zA-Z ]+$/.test(inputdata.name)) {
        toast.warning(
          "Invalid Name. Name should contain only alphabets and spaces, no special characters.",
          { position: toast.POSITION.TOP_CENTER }
        );
        return;
      }
      if (!/^\d+$/.test(inputdata.rollno)) {
        toast.warning("Invalid RollNo. RollNo should contain only numbers.", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      if (!/^[a-zA-Z]+$/.test(inputdata.department)) {
        toast.warning(
          "Invalid Department. Department should contain only alphabets.",
          { position: toast.POSITION.TOP_CENTER }
        );
        return;
      }
      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
          inputdata.email
        )
      ) {
        toast.warning("Invalid email. Enter correct email.", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      if (
        !/^\+\d{1,3}\s\d{9,15}$/.test(
          `${inputdata.countryCode} ${inputdata.mobile}`
        )
      ) {
        toast.warning(
          "Invalid mobile number. Enter a valid mobile number with country code.",
          { position: toast.POSITION.TOP_CENTER }
        );
        return;
      }

      const newData = {
        name: inputdata.name,
        rollno: inputdata.rollno,
        department: inputdata.department,
        countryCode: inputdata.countryCode,
        mobile: inputdata.mobile,
        email: inputdata.email,
      };

      if (editIndex !== null) {
        // Edit existing row
        const updatedData = [...data];
        updatedData[editIndex] = newData;
        setData(updatedData);
        setEditIndex(null);
        toast.success("Entry updated successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Add new row
        const updatedData = [...data, newData];
        setData(updatedData);
        toast.success("Entry added successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setInputData({
        name: "",
        rollno: "",
        department: "",
        countryCode: "+91",
        mobile: "",
        email: "",
      });
    }
  };

  return (
    <div className="container">
        <table className="table">
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
            {data?.map((data, i) => (
                <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.rollno}</td>
                <td>{data.department}</td>
                <td>{data.email}</td>
                <td>{`${data.countryCode} ${data.mobile}`}</td>
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
            ))}
            </tbody>
        </table>
        <h4>Add Entry</h4>
        <form onSubmit={handleSubmit}>
        <div className="row g-1">
          <div className="col-md-2">
            <input
              type="text"
              name="name"
              value={inputdata.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              name="rollno"
              value={inputdata.rollno}
              onChange={handleChange}
              className="form-control"
              placeholder="RollNo"
            />
          </div>
          <div className="col-md-1">
            <input
              type="text"
              name="department"
              value={inputdata.department}
              onChange={handleChange}
              className="form-control"
              placeholder="Dept"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="email"
              value={inputdata.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-md-1">
            <select
              name="countryCode"
              value={inputdata.countryCode}
              onChange={handleChange}
              className="form-select"
            >
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              {/* Add more country codes as needed */}
            </select>
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="mobile"
              value={inputdata.mobile}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter MobileNo"
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
        <ToastContainer />
    </div>
  );
};

export default Nnew;
