import Map from "../../../Map";
import Select from "react-select";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostBoxForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Contoh penanganan berhasil
    toast.success('Job vacancies have been posted');

    // Contoh penanganan gagal
    // toast.error('Job vacancies failed to post');
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="Title" />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select className="chosen-single form-select">
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>

        {/* Select */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Target</label>
          <Select
            options={options}
            isMulti
            placeholder="Select program studi"
          />
        </div>
        
        {/* About Company */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description Jobs</label>
          <textarea placeholder="Enter your job description"></textarea>
        </div>

        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Deadline Date</label>
          <div>
            <input type="date" name="deadline" placeholder="15.06.2023" />
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
