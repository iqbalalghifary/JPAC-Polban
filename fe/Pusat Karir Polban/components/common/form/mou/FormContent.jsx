import React from 'react';

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Upload Memorandum of Understanding (MoU)</h3>

      {/* Login Form */}
      <form method="post">
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            name="registrationNo"
            pattern="[0-9]*"
            placeholder="no registration"
            required
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="company name"
            required
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