import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Jerome" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="UI Designer" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="name"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="text"
            name="name"
            placeholder="creativelayers"
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="name"
            placeholder="www.jerome.com"
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Date of Birth</label>
          <div>
            <input type="date" name="dob" required />
          </div>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select className="chosen-single form-select" required>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Year Graduated</label>
          <input type="text" name="gradYear" placeholder="2022" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Receipt</label>
          <input type="text" name="receipt" placeholder="1234567890" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Validity Period</label>
          <input type="text" name="validityPeriod" placeholder="2023-2025" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Status</label>
          <select className="chosen-single form-select" required>
            <option>Graduated</option>
            <option>Student</option>
          </select>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Award</label>
          <input type="text" name="award" placeholder="Best Employee" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Certifications</label>
          <input type="text" name="certifications" placeholder="Certified Developer" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Organizations</label>
          <input type="text" name="organizations" placeholder="ABC Organization" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Projects</label>
          <input type="text" name="projects" placeholder="Project XYZ" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Skills</label>
          <input type="text" name="skills" placeholder="HTML, CSS, JavaScript" required />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Volunteers</label>
          <input type="text" name="volunteers" placeholder="XYZ Volunteer Organization" required />
        </div>

        {/* Search Select */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories</label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* About Company */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
        
      </div>
    </form>
  );
};

export default FormInfoBox;
