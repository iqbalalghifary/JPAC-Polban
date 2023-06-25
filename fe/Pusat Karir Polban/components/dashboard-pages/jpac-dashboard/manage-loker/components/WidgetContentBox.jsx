import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Cookies from 'js-cookie';

const WidgetContentBox = () => {
  const [vacancyData, setVacancyData] = useState([]);

  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }

    const data = {
      status: "diusulkan"
    }

    const postStatus = (id) => {
      axios
        .put(`http://localhost:3010/api/vacancy/activate/${id}`, {}, config)
        .then(() => {
          axios
          .post("http://localhost:3010/api/vacancy/get", data, config)
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
        .put(`http://localhost:3010/api/partner/reject/${id}`)
        .then(() => {
          axios
          .post("http://localhost:3010/api/partner/get", data, config)
          .then((response) => {
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
        const updatedJobs = vacancyData.filter((job) => job.id !== item.id);
        setVacancyData(updatedJobs);
      }
    };  
  
    const handleReject = (item) => {
      const confirmed = window.confirm("Apakah Anda yakin untuk menolak aktivasi akun perusahaan?");
      if (confirmed) {
        setVacancyData(item._id);
      }
    };

  useEffect(() => {
    axios
      .post("http://localhost:3010/api/vacancy/get", data, config)
      .then((response) => {
        console.log(response)
        setVacancyData(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Pusat Karir Polban</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> Total(s): { vacancyData.length }</Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
                {vacancyData.map((candidate) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate._id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <img src={"/images/resource/company-logo/3-41.png"} alt="candidates" />
                        </figure>
                        <h4 className="name">
                          <Link href={`/candidates-single-v1/${candidate._id}`}>
                            {candidate.title}
                          </Link>
                        </h4>

                        <ul className="candidate-info">
                          <li className="designation">
                            {candidate.designation}
                          </li>
                          <li>
                            <span className="icon flaticon-map-locator"></span>{" "}
                            {candidate.location}
                          </li>
                          <li>
                            <span className="icon flaticon-money"></span> Rp.
                            {candidate.pay}
                          </li>
                        </ul>
                        {/* End candidate-info */}

                        <ul className="post-tags">
                          {candidate.target.map((val, i) => (
                            <li style={{ marginBottom: "10px" }} key={i}>
                              <a href="#">{val}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* End content */}

                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Approve Aplication" onClick={() => handleEdit(candidate)}>
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Reject Aplication" onClick={() => handleReject(candidate)}>
                              <span className="la la-times-circle"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* End admin options box */}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            {/* End total applicants */}

            <TabPanel>
              <div className="row">
                {/* Render approved applicants */}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row">
                {/* Render rejected applicants */}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WidgetContentBox;
