import React from "react";
import "./Navbar.css";


import Paneright from "./Paneright";
export default function NavBar() {
  return (
    <div className="row flex-nowrap">
      <div className="navi">
        <nav className="my-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">DataWizard</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <nav className="my-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Datatable">student table</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <nav className="my-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="/createTable">create table</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
      
      <div className="col py-4">
        <Paneright/>
      </div> 
    </div>
  );
}
