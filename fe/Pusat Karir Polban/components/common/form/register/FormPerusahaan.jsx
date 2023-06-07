import { useState } from "react";

const FormContent = () => {
  const [formData, setFormData] = useState({
    nama: "",
    sector: "",
    address: "",
    phone: "",
    email: "",
    logo: null,
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
        <label>Nama</label>
        <input
          type="text"
          name="nama"
          placeholder="Nama Perusahaan"
          value={formData.nama}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Sector</label>
        <input
          type="text"
          name="sector"
          placeholder="Jenis Perusahaan"
          value={formData.sector}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Alamat Perusahaan"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="No. Telpon Perusahaan"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Email Perusahaan"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Logo</label>
        <div>
            <input
            type="file"
            accept="image/*"
            name="logo"
            onChange={handleChange}
            />
        </div>
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="text"
          name="website"
          placeholder="Link Website Perusahaan"
          value={formData.website}
          onChange={handleChange}
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
