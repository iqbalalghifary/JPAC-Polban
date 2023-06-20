import { useState } from "react";

const FormContent = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    yearGraduated: "",
    dateOfBirth: "",
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang di-submit
    console.log(formData);
    // Lakukan pengiriman file ke server jika diperlukan
    if (formData.file) {
      const fileData = new FormData();
      fileData.append("file", formData.file);
      // Kirim fileData ke endpoint atau lakukan sesuatu yang diinginkan
    }
  };

  return (
    <form method="post" action="add-parcel.html" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <div>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          pattern="[0-9]+"
          title="Please enter numbers only"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Year Graduated</label>
        <input
          type="text"
          name="yearGraduated"
          placeholder="year graduated"
          pattern="[0-9]+"
          title="Please enter numbers only"
          required
          value={formData.yearGraduated}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Upload graduation certificate</label>
        <div>
          <input type="file" name="file" onChange={handleChange} />
        </div>
      </div>

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default FormContent;
