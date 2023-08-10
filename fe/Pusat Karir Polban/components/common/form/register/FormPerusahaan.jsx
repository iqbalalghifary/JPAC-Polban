import { useState } from "react";
import sectors from "../../../../components/Sector"; // Ubah jalur file ini sesuai dengan kebutuhan Anda
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContent = () => {
  const [formData, setFormData] = useState({
    namaVal: "",
    sectorVal: "",
    addressVal: "",
    phoneVal: "",
    emailVal: "",
    websiteVal: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "logo") {
      setFormData({ ...formData, logo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: formData.namaVal,
      email: formData.emailVal,
      phone: formData.phoneVal,
      address: formData.addressVal,
      sector: formData.sectorVal,
      website: formData.websiteVal,
    }

    await axios.post('https://api.agrapana.tech/api/partner/register', data)
      .then((res) => {
        setFormData({
          namaVal: "",
          sectorVal: "",
          addressVal: "",
          phoneVal: "",
          emailVal: "",
          websiteVal: "",
        })
        toast.success('Registration success'); // Tampilkan toaster sukses
        console.log(res);
      })
      .catch((err) => {
        toast.error('Registration failed'); // Tampilkan toaster gagal
        console.log(err);
      });
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="namaVal"
          placeholder="company name"
          value={formData.namaVal}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Sector</label>
        <select
          name="sectorVal"
          value={formData.sectorVal}
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
          name="addressVal"
          placeholder="company address"
          value={formData.addressVal}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="number"
          name="phoneVal"
          placeholder="phone number"
          pattern="[0-9]+"
          title="Please enter numbers only"
          required
          value={formData.phoneVal}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="emailVal"
          placeholder="company email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          required
          value={formData.emailVal}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="text"
          name="websiteVal"
          placeholder="company website link"
          title="Please enter a valid website URL"
          value={formData.websiteVal}
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
