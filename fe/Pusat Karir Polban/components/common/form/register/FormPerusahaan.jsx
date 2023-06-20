import { useState } from "react";
import sectors from "../../../../components/Sector"; // Ubah jalur file ini sesuai dengan kebutuhan Anda

const FormContent = () => {
  const [formData, setFormData] = useState({
    nama: "",
    sector: "",
    address: "",
    phone: "",
    email: "",
    website: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "logo") {
      setFormData({ ...formData, logo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang di-submit
    console.log(formData);
  };

  return (
    <form method="post" action="add-parcel.html" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="company name"
          placeholder="company name"
          value={formData.nama}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Sector</label>
        <select
          name="sector"
          value={formData.sector}
          onChange={handleChange}
        >
          <option value="">select sectors</option>
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="company address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="[0-9]+"
          title="Please enter numbers only"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="company email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="url"
          name="website"
          placeholder="company website link"
          pattern="https?://.+"
          title="Please enter a valid website URL"
          value={formData.website}
          onChange={handleChange}
          required
        />
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
