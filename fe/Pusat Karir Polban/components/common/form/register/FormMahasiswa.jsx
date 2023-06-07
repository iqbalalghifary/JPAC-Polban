import { useState, useEffect } from "react";

const FormContent = () => {
  const [nim, setNim] = useState("");

  // Simulasi pengambilan data NIM dari database
  useEffect(() => {
    // Contoh pengambilan data NIM dari database
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api/nim");
        const data = await response.json();
        setNim(data.nim);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang di-submit
    console.log(nim);
  };

  return (
    <form method="post" action="add-parcel.html" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>NIM</label>
        <input
          type="text"
          name="nim"
          placeholder="NIM"
          value={nim}
          readOnly
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
