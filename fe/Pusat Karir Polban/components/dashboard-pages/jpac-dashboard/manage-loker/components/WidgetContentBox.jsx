import axios from 'axios';
import { useEffect, useState } from 'react';
import candidatesData from "../../../../../data/candidates";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";

const WidgetContentBox = () => {
  const [vacancyData, setVacancyData] = useState([]);

  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWx1bW5pIiwiaWF0IjoxNjg3Mjc3ODk5LCJleHAiOjE2ODc1MzcwOTl9.bCNbl8YVht4RTGn10oqanil0DjF2PxtlRg7ZGMZ2uZI`
      }
    }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3010/api/vacancy', config)
      .then((response) => {
        // Handle response data
        setVacancyData(response.data.message);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Pusat Karir Polban</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> Total(s): 6</Tab>
              <Tab className="tab-btn approved"> Approved: 2</Tab>
              <Tab className="tab-btn rejected"> Rejected(s): 4</Tab>
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
                        {/* <figure className="image">
                          <img src={candidate.avatar} alt="candidates" />
                        </figure> */}
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
                            <span className="icon flaticon-money"></span> $
                            {candidate.hourlyRate} / hour
                          </li>
                        </ul>
                        {/* End candidate-info */}

                        <ul className="post-tags">
                          {candidate.target.map((val, i) => (
                            <li key={i}>
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
                            <button data-text="Approve Aplication">
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Reject Aplication">
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
