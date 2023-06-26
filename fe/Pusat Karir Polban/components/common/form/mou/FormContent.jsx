import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      }
    }

    let data = {
      token : urlParams.get('t')
    }

    const handleFileChange = (e) => {
      if(this.files[0].size > 2097152){
        toast.success('File is too big');
        return;
      };  
      setFile(e.target.files[0]);
    };

  useEffect(() => {
    axios
      .post(`http://localhost:3010/api/token/filters`, data, config)
      .then((response) => {
        console.log(response)
        if(response.data.message != "Token has expired"){
          setStatus(true);
          setColor('');
          setRegistrationNumber(response.data.message[0].referenceAttributeId._id)
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
        'Access-Control-Allow-Origin': '*'
      },
      data:formData
    }).then(r => r);

    console.log(upload);

    toast.success('MoU has uploaded'); // Toast login failure

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
          <label>Upload File (PDF) *Max 2mb</label>
          <div>
            <label>
              <input
                type="file"
                name="file"
                accept=".pdf"
                required
                onChange={handleFileChange}
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