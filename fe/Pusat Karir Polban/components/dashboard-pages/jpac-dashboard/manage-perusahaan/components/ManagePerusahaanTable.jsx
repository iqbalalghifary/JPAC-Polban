import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manageperusahaan")
      .then((response) => {
        const updatedJobs = response.data.map((job) => ({
          ...job,
          status: "not verified" // Set status awal menjadi "not verified"
        }));
        setJobs(updatedJobs);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk memverifikasi?");
    if (confirmed) {
      const updatedStatus = item.status === "verified" ? "not verified" : "verified";
      axios
        .put(`https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manageperusahaan/${item.id}`, {
          status: updatedStatus
        })
        .then(() => {
          const updatedJobs = jobs.map((job) =>
            job.id === item.id ? { ...job, status: updatedStatus } : job
          );
          setJobs(updatedJobs);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleReject = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak?");
    if (confirmed) {
      axios
        .delete(`https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manageperusahaan/${item.id}`)
        .then(() => {
          const updatedJobs = jobs.filter((job) => job.id !== item.id);
          setJobs(updatedJobs);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Daftar Perusahaan yang belum diverifikasi</h4>
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
                <th>Nama Perusahaan</th>
                <th>Contact Person</th>
                <th>Tanggal Pengajuan</th>
                <th>Status</th>
                <th>Action</th>
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
                          <h4>{item.nama}</h4>
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
                  <td className="cp">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                    <br />
                    <a>{item.phone}</a>
                  </td>
                  <td>{item.tanggalpengajuan}</td>
                  <td
                    className="status"
                    style={{
                      color: item.status === "verified" ? "green" : "red"
                    }}
                  >
                    {item.status}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button
                            data-text="Check"
                            onClick={() => handleEdit(item)}
                          >
                            <span className="la la-check"></span>
                          </button>
                        </li>
                        <li>
                          <button
                            data-text="Remove"
                            onClick={() => handleReject(item)}
                          >
                            <span className="la la-remove"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
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