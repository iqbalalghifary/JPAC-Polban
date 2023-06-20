import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [statusChanges, setStatusChanges] = useState([]);

  const postStatus = (id, status) => {
    axios
      .put(`https://6485f9b3a795d24810b78ad2.mockapi.io/pusatkarirpolban/applied-jobs/${id}`, { status })
      .then((response) => {
        const updatedJobs = jobs.map((job) =>
          job.id === id ? { ...job, status: response.data.status } : job
        );
        setJobs(updatedJobs);
        setStatusChanges([...statusChanges, id]);
        console.log(`Status berhasil diubah menjadi ${status}`);
      })
      .catch((error) => console.log(error));
  };
  

  useEffect(() => {
    axios
      .get("https://6485f9b3a795d24810b78ad2.mockapi.io/pusatkarirpolban/applied-jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi akun perusahaan?");
    if (confirmed) {
      postStatus(item.id, "verified");
      const updatedJobs = jobs.filter((job) => job.id !== item.id);
      setJobs(updatedJobs);
    }
  };

  const handleReject = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun perusahaan?");
    if (confirmed) {
      postStatus(item.id, "Lamaran Kerja Di Batalkan");
    }
  };
  

  const deleteJob = (id) => {
    axios
      .delete(`https://6485f9b3a795d24810b78ad2.mockapi.io/pusatkarirpolban/applied-jobs/${id}`)
      .then(() => {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        setJobs(updatedJobs);
        setStatusChanges([...statusChanges, id]);
        console.log("MoU berhasil ditolak");
      })
      .catch((error) => console.log(error));
  };

  function getFileNameFromURL(url) {
    if (typeof url === "string") {
      const parts = url.split("/");
      return parts.pop();
    }
    return "";
  }

  const renderActionButton = (item) => {
    if (item.status !== "not verified" || statusChanges.includes(item.id)) {
      return (
        <div className="option-box">
          <ul className="option-list">
            <li>
              <button data-text="Batalkan Pengajuan Kerja" onClick={() => handleReject(item)}>
                <span className="la la-remove"></span>
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="option-box">
          <ul className="option-list">
            <li>
              <button data-text="Batalkan" onClick={() => handleReject(item)}>
                <span className="la la-remove"></span>
              </button>
            </li>
          </ul>
        </div>
      );
    }
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
                <th>Job Name</th>
                <th>Apply Date</th>
                <th>Status</th>
                <th>Cancle the Job</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item.id}>
                  <td>
                    {/* <!-- Job Block --> */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img src={item.logo} alt="logo" />
                          </span>
                          <h4>{item.jobTitle}</h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {item.alamat}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a>{item.created}</a>
                  </td>
                  <td
                    className="status"
                    style={{
                      color: item.status === "verified" ? "green" : "red",
                    }}
                  >
                    {item.status || "Pengajuan Kerja Sudah Diajukan"}
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
