import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const ApplyJobModalContent = () => {
  const [cvFile, setCvFile] = useState(null);
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("cv", cvFile);
    formData.append("message", message);
    formData.append("acceptedTerms", acceptedTerms);
  
    axios
      .post(
        "https://6485f9b3a795d24810b78ad2.mockapi.io/pusatkarirpolban/apply-jobs",
        formData
      )
      .then((response) => {
        console.log("Job application submitted successfully:", response.data);
        // Add any further actions you want to perform after successful submission
        console.log("Application ID:", response.data.id);
      })
      .catch((error) => {
        console.error("Error submitting job application:", error);
      });
  };

  return (
    <form className="default-form job-apply-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="uploading-outer apply-cv-outer">
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="cv"
                accept="image/*, application/pdf"
                id="upload"
                onChange={handleFileChange}
                required
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                Upload CV (doc, docx, pdf)
              </label>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input
              type="checkbox"
              name="remember-me"
              id="rememberMe"
              checked={acceptedTerms}
              onChange={handleTermsChange}
            />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span> You accept our{" "}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  Terms and Conditions and Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
            disabled={!cvFile || !message || !acceptedTerms}
          >
            Apply Job
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
