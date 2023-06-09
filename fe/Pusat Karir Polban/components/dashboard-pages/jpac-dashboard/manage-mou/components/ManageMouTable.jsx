import React, { useState } from "react";
import Link from "next/link";
import jobsData from "../../../../../data/list-pending-activation-companies";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [statusChanges, setStatusChanges] = useState([]);

  const handleEdit = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi akun perusahaan?");
    if (confirmed) {
      const updatedJobs = jobs.map((job) =>
        job.id === item.id ? { ...job, status: toggleStatus(job.status) } : job
      );
      setJobs(updatedJobs);
      setStatusChanges([...statusChanges, item.id]);
    }
  };

  const handleReject = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun perusahaan?");
    if (confirmed) {
      const updatedJobs = jobs.map((job) =>
        job.id === item.id ? { ...job, status: "rejected" } : job
      );
      setJobs(updatedJobs);
      setStatusChanges([...statusChanges, item.id]);
    }
  };

  const toggleStatus = (status) => {
    return status === "activated" ? "not-activated" : "activated";
  };

  function getFileNameFromURL(url) {
    if (typeof url === "string") {
      const parts = url.split("/");
      return parts.pop();
    }
    return "";
  }

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
                <th>Nama Perusahaan</th>
                <th>MoU</th>
                <th>Created</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.slice(0, 4).map((item) => (
                <tr key={item.id}>
                  <td>
                    {/* <!-- Job Block --> */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img src={item.logo} alt="logo" />
                          </span>
                          <h4>
                            {/* <Link href={`/job-single-v3/${item.id}`}> */}
                            {item.nama}
                            {/* </Link> */}
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              {item.jenis}
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {item.alamat}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="document">
                    <a href={item.document} download={getFileNameFromURL(item.document)}>
                      {getFileNameFromURL(item.document)}
                    </a>
                  </td>
                  <td>
                    <a>{item.created}</a>
                  </td>
                  <td
                    className="status"
                    style={{
                      color: item.status === "activated" ? "green" : "red",
                    }}
                  >
                    {item.status}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        {!statusChanges.includes(item.id) && ( // Hanya tampilkan tombol jika perubahan status belum dilakukan
                          <>
                            <li>
                              <button
                                data-text="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <span className="la la-pencil"></span>
                              </button>
                            </li>
                            <li>
                              <button
                                data-text="Reject"
                                onClick={() => handleReject(item)}
                              >
                                <span className="la la-trash"></span>
                              </button>
                            </li>
                          </>
                        )}
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

