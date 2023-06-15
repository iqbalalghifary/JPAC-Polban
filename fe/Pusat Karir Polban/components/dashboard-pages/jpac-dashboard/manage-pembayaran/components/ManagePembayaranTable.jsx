import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-pembayaran"
      );
      const updatedJobs = response.data.map((job) => ({
        ...job,
        status: "Belum di verifikasi",
      }));
      setJobs(updatedJobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk mengaktivasi akun alumni?");
    if (confirmed) {
      try {
        const updatedJobs = jobs.map((job) =>
          job.id === item.id ? { ...job, status: toggleStatus(job.status) } : job
        );
        setJobs(updatedJobs);
        console.log("Alumni di verifikasi");
        await axios.put(
          `https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-pembayaran/${item.id}`,
          item
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleReject = async (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun alumni?");
    if (confirmed) {
      try {
        const updatedJobs = jobs.filter((job) => job.id !== item.id);
        setJobs(updatedJobs);
        console.log("Alumni rejected");
        await axios.delete(
          `https://6485cb9ca795d24810b75269.mockapi.io/pusatkarirpolban/manage-pembayaran/${item.id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleStatus = (status) => {
    return status === "activated" ? "not-activated" : "activated";
  };

  const getFileNameFromURL = (url) => {
    if (typeof url === "string") {
      const parts = url.split("/");
      return parts.pop();
    }
    return "";
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Daftar Pembayaran yang belum diaktivasi</h4>
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
                <th>No Registrasi</th>
                <th>Nama </th>
                <th>Bukti Pembayaran</th>
                <th>Created</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h4>{item.noReg}</h4>
                  </td>
                  <td>
                    <a>{item.nama}</a>
                  </td>
                  <td className="document">
                    <a
                      href={item.buktipembayaran}
                      download={getFileNameFromURL(item.buktipembayaran)}
                    >
                      {getFileNameFromURL(item.buktipembayaran)}
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
                        <li>
                          <button
                            data-text="Terima"
                            onClick={() => handleEdit(item)}
                            disabled={item.status === "activated"}
                          >
                            <span className="la la-check"></span>
                          </button>
                        </li>
                        <li>
                          <button
                            data-text="Tolak"
                            onClick={() => handleReject(item)}
                            disabled={item.status === "activated"}
                          >
                            <span className="la la-remove "></span>
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
    </div>
  );
};

export default JobListingsTable;
