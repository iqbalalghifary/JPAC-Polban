import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-mahasiswa"
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = async (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi?");
    if (confirmed) {
      try {
        const updatedStatus = toggleStatus(item.status);
        await axios.put(
          `https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-mahasiswa/${item.id}`,
          { status: updatedStatus }
        );
        const updatedJobs = jobs.map((job) =>
          job.id === item.id ? { ...job, status: updatedStatus } : job
        );
        setJobs(updatedJobs);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  

  const handleReject = async (item) => {
    const confirmed = window.confirm(
      "Apakah Anda yakin untuk menolak aktivasi akun mahasiswa?"
    );
    if (confirmed) {
      try {
        await axios.delete(
          `https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-mahasiswa/${item.id}`
        );
        const updatedJobs = jobs.filter((job) => job.id !== item.id);
        setJobs(updatedJobs);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };
  

  const toggleStatus = (status) => {
    return status === "verified" ? "not verified" : "verified";
  };

  const getStatusText = (status) => {
    return status ? "Actived" : "Not Activated";
  };

  const renderActionButton = (item) => {
    if (item.status !== "not verified" || statusChanges.includes(item.id)) {
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
    } else {
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
    }
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Daftar Mahasiswa yang belum diverifikasi</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>NIM</th>
                <th>Major</th>
                <th>Department</th>
                <th>Year of admission</th>
                <th>Year of graduation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <img src={item.avatar} alt="avatar" />
                          </span>
                          <h4>{item.nama}</h4>
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
                    <a>{item.tahunMasuk}</a>
                  </td>
                  <td>
                    <a>{item.tahunLulus}</a>
                  </td>
                  <td
                    className="status"
                    style={{
                      color: item.status ? "green" : "red",
                    }}
                  >
                    {getStatusText(item.status)}
                  </td>
                  <td>{renderActionButton(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListingsTable;
