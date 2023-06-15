import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const JobListingsTable = () => {
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manage-alumni"
      );
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (item) => {
    const confirmed = window.confirm("Apakah Anda yakin untuk memverifikasi?");
    if (confirmed) {
      try {
        const updatedJobs = jobs.map((job) =>
          job.id === item.id ? { ...job, status: toggleStatus(job.status) } : job
        );
        setJobs(updatedJobs);
        console.log("Alumni di verifikasi");
        await axios.put(
          `https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manage-alumni/${item.id}`,
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
          `https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manage-alumni/${item.id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const postAlumni = async () => {
    try {
      const newAlumni = {
        nama: "John Doe",
        tanggalLahir: "1990-01-01",
        institusi: "Politeknik Negeri Bandung",
        tahunLulus: "2010",
        email: "john.doe@example.com",
        phone: "123456789",
        created: "2023-06-11",
        status: "not verified",
      };
      const response = await axios.post(
        "https://6485a137a795d24810b72358.mockapi.io/pusatkarirpolban/manage-alumni",
        newAlumni
      );
      setJobs([...jobs, response.data]);
    } catch (error) {
      console.log(error);
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
                <th>Nama Alumni</th>
                <th>Tanggal Lahir</th>
                <th>Asal Institusi</th>
                <th>Tahun Lulus</th>
                <th>Contact Person</th>
                <th>Tanggal Pendaftaran</th>
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
                          <h4>
                            {/* <Link href={`/job-single-v3/${item.id}`}> */}
                            {item.nama}
                            {/* </Link> */}
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              {item.institusi}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a>{item.tanggalLahir}</a>
                  </td>
                  <td>
                    <a>{item.institusi}</a>
                  </td>
                  <td>
                    <a>{item.tahunLulus}</a>
                  </td>
                  <td className="cp">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                    <br />
                    <a>{item.phone}</a>
                  </td>
                  <td>
                    <a>{item.tanggalpendaftaran}</a>
                  </td>
                  <td
                    className="status"
                    style={{
                      color: item.status === "verified" ? "green" : "red",
                    }}
                  >
                    {item.status || "Belum di verifikasi"}
                  </td>
                  <td>
                    {item.status !== "verified" && (
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button
                              data-text="Terima"
                              onClick={() => handleEdit(item)}
                            >
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-text="Tolak"
                              onClick={() => handleReject(item)}
                            >
                              <span className="la la-remove"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}
      {/* <button onClick={postAlumni}>Add Alumni</button> */}
    </div>
  );
};

export default JobListingsTable;
