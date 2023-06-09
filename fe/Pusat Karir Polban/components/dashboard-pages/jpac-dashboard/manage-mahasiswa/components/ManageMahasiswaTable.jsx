import React, { useState } from "react";
import Link from "next/link";
import jobsData from "../../../../../data/list-pending-mahasiswa";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState(jobsData);

  const handleEdit = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi?");
    if (confirmed) {
      const updatedJobs = jobs.map((job) =>
        job.id === item.id ? { ...job, status: toggleStatus(job.status) } : job
      );
      setJobs(updatedJobs);
    }
  };

  const handleReject = (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun mahasiswa?");
    if (confirmed) {
      const updatedJobs = jobs.map((job) =>
        job.id === item.id ? { ...job, status: "rejected" } : job
      );
      setJobs(updatedJobs);
    }
  };

  const toggleStatus = (status) => {
    return status === "verified" ? "not verified" : "verified";
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Daftar Alumni yang belum diverifikasi</h4>
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
                <th>Nama Mahasiswa</th>
                <th>NIM</th>
                <th>Jurusan</th>
                <th>Prodi</th>
                <th>Tanggal Pendaftaran</th>
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
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a>{item.nim}</a>
                  </td>
                  <td>
                    <a>{item.jurusan}</a>
                  </td>
                  <td>
                    <a>{item.prodi}</a>
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
                    {item.status}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
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
