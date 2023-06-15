import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const FormInfoBox = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "https://648866cd0e2469c038fda522.mockapi.io/my-profile/1"
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Management", label: "Management" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("https://648866cd0e2469c038fda522.mockapi.io/my-profile/1", profileData)
      .then((response) => {
        console.log("Profile data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating profile data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <form action="#" className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder={profileData.name || "Jerome"}
            value={profileData.name || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder={profileData.jobTitle || "UI Designer"}
            value={profileData.jobTitle || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={profileData.phone || "0 123 456 7890"}
            value={profileData.phone || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="text"
            name="email"
            placeholder={profileData.email || "creativelayers"}
            value={profileData.email || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="website"
            placeholder={profileData.website || "www.jerome.com"}
            value={profileData.website || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Date of Birth</label>
          <div>
            <input
              type="date"
              name="dob"
              placeholder={profileData.dob || ""}
              value={profileData.dob || ""}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select
            className="chosen-single form-select"
            name="gender"
            value={profileData.gender || ""}
            onChange={handleInputChange}
            required
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Year Graduated</label>
          <input
            type="text"
            name="gradYear"
            placeholder={profileData.gradYear || "2022"}
            value={profileData.gradYear || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Status</label>
          <select
            className="chosen-single form-select"
            name="status"
            value={profileData.status || ""}
            onChange={handleInputChange}
            required
          >
            <option>Graduated</option>
            <option>Student</option>
          </select>
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Award</label>
          <input
            type="text"
            name="award"
            placeholder={profileData.award || "Best Employee"}
            value={profileData.award || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Certifications</label>
          <input
            type="text"
            name="certifications"
            placeholder={profileData.certifications || "Certified Developer"}
            value={profileData.certifications || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>University</label>
          <input
            type="text"
            name="university"
            placeholder={profileData.university || "XYZ University"}
            value={profileData.university || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            placeholder={profileData.skills || "HTML, CSS, JavaScript"}
            value={profileData.skills || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Volunteers</label>
          <input
            type="text"
            name="volunteers"
            placeholder={profileData.volunteers || "XYZ Volunteer Organization"}
            value={profileData.volunteers || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* About Company */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea
            name="description"
            placeholder={
              profileData.description ||
              "Spent several years working on sheep on Wall Street..."
            }
            value={profileData.description || ""}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Input */}
        <div className="form-group col-lg-2 col-md-8">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
        <div className="form-group col-lg-2 col-md-8">
          <button type="submit" className="theme-btn btn-style-two">
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
