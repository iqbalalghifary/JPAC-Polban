import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const FormContent = () => {

  const [fileMoU, setFileMoU] = useState([]);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('grey');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWx1bW5pIiwiaWF0IjoxNjg3Mjc3ODk5LCJleHAiOjE2ODc1MzcwOTl9.bCNbl8YVht4RTGn10oqanil0DjF2PxtlRg7ZGMZ2uZI`
      }
    }

    let data = {
      token : urlParams.get('t')
    }

  useEffect(() => {
    axios
      .post(`http://localhost:3010/api/token/filters`, data, config)
      .then((response) => {
        console.log(response)
        if(response.data.message != "Token has expired"){
          setStatus(true);
          setColor('');
          setRegistrationNumber(response.data.message[0]._id)
          setCompanyName(response.data.message[0].referenceAttributeId.name)
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileMoU);

    const upload = await axios({
      url:`http://127.0.0.1:3010/api/partner/upload-mou/${registrationNumber}`,
      method:"put",
      headers:{
        "Content-Type": "multipart/form-data",
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWx1bW5pIiwiaWF0IjoxNjg3Mjc3ODk5LCJleHAiOjE2ODc1MzcwOTl9.bCNbl8YVht4RTGn10oqanil0DjF2PxtlRg7ZGMZ2uZI`
      },
      data:formData
    }).then(r => r);

    console.log(upload);

  };

  return (
    <div className="form-inner">
      <h3>Upload Memorandum of Understanding (MoU)</h3>

      {/* Login Form */}
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNo"
            value={registrationNumber}
            placeholder="no registration"
            disabled
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="fullName"
            value={companyName}
            placeholder="company name"
            disabled
          />
        </div>

        <div className="form-group">
          <label>Upload File (PDF)</label>
          <div>
            <label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                required
                onChange={(e) => setFileMoU(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            style={{ background: color }}
            name="submit"
            disabled={!status}
          >
            Submit
          </button>
        </div>
      </form>
      {/* End form */}
    </div>
  );
};

export default FormContent;