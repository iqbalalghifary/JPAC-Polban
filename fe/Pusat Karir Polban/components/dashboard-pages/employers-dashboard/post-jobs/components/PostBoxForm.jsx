import { useState } from "react";
import Select from "react-select";
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const PostBoxForm = () => {

  const [selectedValue, setSelectedValue] = useState([]);
  const [formData, setFormData] = useState({
    jobTitleVal: "",
    jobTypeVal: "",
    descriptionVal: "",
    deadlineVal: "",
    locationVal: "",
    payVal: ""    
  });

  const handleChangeArray = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  const handleChange = (e) => {
    if (e.target.name === "logo") {
      setFormData({ ...formData, logo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const options = [
    { value: "D3 Teknik Konstruksi Gedung", label: "D3 Teknik Konstruksi Gedung" },
    { value: "D3 Teknik Konstruksi Sipil", label: "D3 Teknik Konstruksi Sipil" },
    { value: "D4 Teknik Perancangan Jalan dan Jembatan", label: "D4 Teknik Perancangan Jalan dan Jembatan" },
    { value: "D4 Teknik Perawatan dan Perbaikan Gedung", label: "D4 Teknik Perawatan dan Perbaikan Gedung" },
    { value: "D3 Teknik Mesin", label: "D3 Teknik Mesin" },
    { value: "D3 Teknik Aeronautika", label: "D3 Teknik Aeronautika" },
    { value: "D4 Teknik Perancangan dan Konstruksi Mesin", label: "D4 Teknik Perancangan dan Konstruksi Mesin" },
    { value: "D4 Rekayasa Teknologi Manufaktur", label: "D4 Rekayasa Teknologi Manufaktur" },
    { value: "D3 Teknik Konversi Energi", label: "D3 Teknik Konversi Energi" },
    { value: "D4 Teknologi Pembangkit Tenaga Listrik", label: "D4 Teknologi Pembangkit Tenaga Listrik" },
    { value: "D4 Teknik Konservasi Energi", label: "D4 Teknik Konservasi Energi" },
    { value: "D3 Teknik Refrigerasi dan Tata Udara", label: "D3 Teknik Refrigerasi dan Tata Udara" },
    { value: "D4 Teknik Pendingin dan Tata Udara", label: "D4 Teknik Pendingin dan Tata Udara" },
    { value: "D3 Teknik Elektronika", label: "D3 Teknik Elektronika" },
    { value: "D3 Teknik Listrik", label: "D3 Teknik Listrik" },
    { value: "D3 Teknik Telekomunikasi", label: "D3 Teknik Telekomunikasi" },
    { value: "D4 Teknik Telekomunikasi Nirkabel", label: "D4 Teknik Telekomunikasi Nirkabel" },
    { value: "D4 Teknik Elektronika", label: "D4 Teknik Elektronika" },
    { value: "D4 Teknik Otomasi Industri", label: "D4 Teknik Otomasi Industri" },
    { value: "D3 Teknik Kimia", label: "D3 Teknik Kimia" },
    { value: "D3 Analis Kimia", label: "D3 Analis Kimia" },
    { value: "D4 Teknik Kimia Produksi Bersih", label: "D4 Teknik Kimia Produksi Bersih" },
    { value: "D3 Teknik Informatika", label: "D3 Teknik Informatika" },
    { value: "D4 Teknik Informatika", label: "D4 Teknik Informatika" },
    { value: "D3 Akuntansi", label: "D3 Akuntansi" },
    { value: "D3 Keuangan Perbankan", label: "D3 Keuangan Perbankan" },
    { value: "D4 Akuntansi Manajemen Pemerintahan", label: "D4 Akuntansi Manajemen Pemerintahan" },
    { value: "D4 Keuangan Syariah", label: "D4 Keuangan Syariah" },
    { value: "D4 Akuntansi", label: "D4 Akuntansi" },
    { value: "D3 Administrasi Bisnis", label: "D3 Administrasi Bisnis" },
    { value: "D3 Manajemen Pemasaran", label: "D3 Manajemen Pemasaran" },
    { value: "D3 Usaha Perjalanan Wisata", label: "D3 Usaha Perjalanan Wisata" },
    { value: "D4 Administrasi Bisnis", label: "D4 Administrasi Bisnis" },
    { value: "D4 Manajemen Aset", label: "D4 Manajemen Aset" },
    { value: "D4 Manajemen Pemasaran Internasional", label: "D4 Manajemen Pemasaran Internasional" },
    { value: "D3 Bahasa Inggris", label: "D3 Bahasa Inggris" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: formData.jobTitleVal,
      field: formData.jobTypeVal,
      referencePartner: Cookies.get('username'),
      target: selectedValue,
      description: formData.descriptionVal,
      deadline: formData.deadlineVal,
      location: formData.locationVal,
      pay: formData.payVal
    }

    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${Cookies.get('token')}`
        }
      }

    await axios.post('http://127.0.0.1:3010/api/vacancy', data, config)
      .then((res) => {
        setFormData({
          jobTitleVal: "",
          jobTypeVal: "",
          descriptionVal: "",
          deadlineVal: "",
          locationVal: "",
          payVal: ""
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
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="jobTitleVal" placeholder="Title" onChange={handleChange} />
        </div>

        <div className="form-group col-lg-6 col-md-12 w-100">
          <label>Job Type</label>
          <select className="chosen-single form-select" name="jobTypeVal" onChange={handleChange}>
            <option>Choose Job Type</option>
            <option value={"Full-time"}>Full Time</option>
            <option value={"Internship"}>Internship</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Location</label>
          <input type="text" name="locationVal" placeholder="Location" onChange={handleChange} />
        </div>

        {/* Select */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Provision</label>
          <Select
            name="provisionVal"
            options={options}
            isMulti
            placeholder="Select study program"
            onChange={handleChangeArray}
          />
        </div>
        
        <div className="form-group col-lg-12 col-md-12">
          <label>Pay / Month</label>
          <input type="text" name="payVal" placeholder="Pay" onChange={handleChange} />
        </div>

        {/* About Company */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description Jobs</label>
          <textarea placeholder="Enter your job description" name="descriptionVal" onChange={handleChange}></textarea>
        </div>

        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Deadline Date</label>
          <div>
            <input type="date" name="deadlineVal" placeholder="15.06.2023" onChange={handleChange} />
          </div>
        </div>

        {/* Input */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
