import Map from "../../../Map";
import Select from "react-select";

const PostBoxForm = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Judul Pekerjaan</label>
          <input type="text" name="name" placeholder="Title" />
        </div>

        {/* About Company */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Deskripsi Pekerjaan</label>
          <textarea placeholder="Masukkan deskripsi lowongan pekerjaan anda"></textarea>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Tipe Pekerjaan</label>
          <select className="chosen-single form-select">
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>

        {/* Input */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input type="text" name="name" placeholder="15.06.2023" />
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
