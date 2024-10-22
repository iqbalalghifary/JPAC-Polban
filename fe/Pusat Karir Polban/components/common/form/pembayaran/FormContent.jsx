import React from 'react';

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Upload Pembayaran</h3>

      {/* Login Form */}
      <form method="post">
        <div className="form-group">
          <label>No Registrasi</label>
          <input
            type="text"
            name="registrationNo"
            pattern="[0-9]*"
            placeholder="No Registrasi"
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Nama Lengkap"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload File (PNG/JPG/JPEG/HEIC)</label>
          <div>
            <label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg .heic"
                name="file"
                required
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