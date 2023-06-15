import React from "react";
import jsPDF from "jspdf";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import { autoTable } from "jspdf-autotable";

import candidatesData from "../../../../../data/candidates";

const WidgetContentBox = () => {
  const convertToPDF = () => {
    const pdf = new jsPDF();

    const columns = ["Name", "Designation", "Location"];
    const data = candidatesData.map((candidate) => [
      candidate.name,
      candidate.designation,
      candidate.location,
    ]);

    pdf.autoTable({
      head: [columns],
      body: data,
      startY: 20,
    });

    pdf.save("candidates.pdf");
  };

  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Senior Product Designer</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> Total(s): 6</Tab>
              <Tab className="tab-btn approved"> Approved: 2</Tab>
              <Tab className="tab-btn rejected"> Rejected(s): 4</Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
                {candidatesData.slice(17, 23).map((candidate) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate.id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <img src={candidate.avatar} alt="candidates" />
                        </figure>
                        <h4 className="name">
                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                            {candidate.name}
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

                        <ul className="post-tags">
                          {candidate.tags.map((val, i) => (
                            <li key={i}>
                              <a href="#">{val}</a>
                            </li>
                          ))}
                        </ul>
                      </div>

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
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row">
                {candidatesData.slice(17, 19).map((candidate) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate.id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <img src={candidate.avatar} alt="candidates" />
                        </figure>
                        <h4 className="name">
                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                            {candidate.name}
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

                        <ul className="post-tags">
                          {candidate.tags.map((val, i) => (
                            <li key={i}>
                              <a href="#">{val}</a>
                            </li>
                          ))}
                        </ul>
                      </div>

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
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row">
                {candidatesData.slice(17, 21).map((candidate) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate.id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <img src={candidate.avatar} alt="candidates" />
                        </figure>
                        <h4 className="name">
                          <Link href={`/candidates-single-v1/${candidate.id}`}>
                            {candidate.name}
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

                        <ul className="post-tags">
                          {candidate.tags.map((val, i) => (
                            <li key={i}>
                              <a href="#">{val}</a>
                            </li>
                          ))}
                        </ul>
                      </div>

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
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      <button onClick={convertToPDF}>Convert to PDF</button>
    </div>
  );
};

export default WidgetContentBox;
