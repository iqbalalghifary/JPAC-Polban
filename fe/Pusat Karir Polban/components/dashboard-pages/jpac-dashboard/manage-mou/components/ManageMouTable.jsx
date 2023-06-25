import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);

  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Cookies.get("token")}`
      }
    }

  let data = {
    "filters" : {
      "status": "diverifikasi"
    }
  }

  useEffect(() => {
    axios
      .post("http://localhost:3010/api/partner/get", data, config)
      .then((response) => {
        const updatedJobs = response.data.message.map((job) => ({
          ...job,
        }));
        setJobs(updatedJobs);
      })
      .catch((error) => console.log(error));
  }, []);

  const postStatus = (id) => {
    axios
      .put(`http://localhost:3010/api/partner/activate/${id}`, {}, config)
      .then(() => {
        axios
        .post("http://localhost:3010/api/partner/get", data, config)
        .then((response) => {
          setJobs([]);
          const updatedJobs = response.data.message.map((job) => ({
            ...job,
          }));
          setJobs(updatedJobs);
        })
        .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const deleteJob = (id) => {
    axios
      .put(`http://localhost:3010/api/partner/reject/${id}`, {}, config)
      .then(() => {
        axios
        .post("http://localhost:3010/api/partner/get", data, config)
        .then((response) => {
          setJobs([]);
          const updatedJobs = response.data.message.map((job) => ({
            ...job,
          }));
          setJobs(updatedJobs);
        })
        .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi akun perusahaan?");
    if (confirmed) {
      postStatus(item._id);
      const updatedJobs = jobs.filter((job) => job.id !== item.id);
      setJobs(updatedJobs);
    }
  };  

  const handleReject = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun perusahaan?");
    if (confirmed) {
      deleteJob(item._id);
    }
  };

  function getFileNameFromURL(url) {
    if (typeof url === "string") {
      const parts = url.split("/");
      return parts.pop();
    }
    return "";
  }

  const renderActionButton = (item) => {
    return (
      <div className="option-box">
        <ul className="option-list">
          <li>
            <button data-text="Terima" onClick={() => handleEdit(item)}>
              <span className="la la-check"></span>
            </button>
          </li>
          <li>
            <button data-text="Tolak" onClick={() => handleReject(item)}>
              <span className="la la-remove"></span>
            </button>
          </li>
        </ul>
      </div>
    );
};


  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Daftar Perusahaan yang belum diaktivasi</h4>
        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}
      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>MoU</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item._id}>
                  <td>
                    {/* <!-- Job Block --> */}
                    <div className="job-block">
                      <div className="inner-box">
                      <h4>{item.name}</h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {item.address}
                            </li>
                          </ul>
                      </div>
                    </div>
                  </td>
                  <td className="document">
                    <a href={'http://localhost:3010/mou/' + getFileNameFromURL(item.mou)} target="_blank">
                      { (getFileNameFromURL(item.mou) == null ) ? "Belum mengunggah dokumen" : getFileNameFromURL(item.mou)}
                    </a>
                  </td>
                  <td>
                    <a>{new Date(item.createdAt).toDateString()}</a>
                  </td>
                  <td>{renderActionButton(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
