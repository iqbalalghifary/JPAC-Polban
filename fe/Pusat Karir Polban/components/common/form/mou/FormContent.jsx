import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const FormContent = () => {

  const [fileMoU, setFileMoU] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fileMoU);

    // let data = {
    //   name: formData.namaVal,
    //   email: formData.emailVal,
    //   phone: formData.phoneVal,
    //   address: formData.addressVal,
    //   sector: formData.sectorVal,
    //   website: formData.websiteVal,
    // }

    // await axios.post('http://127.0.0.1:3010/api/partner/register', data)
    //   .then((res) => {
    //     toast.success('Registration success'); // Tampilkan toaster sukses
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     toast.error('Registration failed'); // Tampilkan toaster gagal
    //     console.log(err);
    //   });
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
            placeholder="no registration"
            disable
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="company name"
            disabled
          />
        </div>

        <div className="form-group">
          <label>Upload File (PNG/JPG/JPEG)</label>
          <div>
            <label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="file"
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
            name="submit"
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