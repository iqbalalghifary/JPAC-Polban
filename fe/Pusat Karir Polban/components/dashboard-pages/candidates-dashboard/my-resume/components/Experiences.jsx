import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Experiences = () => {
  const [showModal, setShowModal] = useState(false);
  const [experienceList, setExperienceList] = useState([
    {
      id: 1,
      jobTitle: "Product Designer",
      company: "Spotify Inc.",
      startYear: "2012",
      endYear: "2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 2,
      jobTitle: "Sr UX Engineer",
      company: "Dropbox Inc.",
      startYear: "2012",
      endYear: "2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ]);

  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [editingExperienceId, setEditingExperienceId] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setJobTitle("");
    setCompany("");
    setStartYear("");
    setEndYear("");
    setDescription("");
    setEditingExperienceId(null);
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: experienceList.length + 1,
      jobTitle,
      company,
      startYear,
      endYear,
      description,
    };

    setExperienceList([...experienceList, newExperience]);

    handleCloseModal();
  };

  const handleEditExperience = (id) => {
    const experienceToEdit = experienceList.find((experience) => experience.id === id);
    if (experienceToEdit) {
      setJobTitle(experienceToEdit.jobTitle);
      setCompany(experienceToEdit.company);
      setStartYear(experienceToEdit.startYear);
      setEndYear(experienceToEdit.endYear);
      setDescription(experienceToEdit.description);
      setShowModal(true);
      setEditingExperienceId(id);
    }
  };

  const handleUpdateExperience = () => {
    const updatedExperienceList = experienceList.map((experience) => {
      if (experience.id === editingExperienceId) {
        return {
          ...experience,
          jobTitle,
          company,
          startYear,
          endYear,
          description,
        };
      }
      return experience;
    });

    setExperienceList(updatedExperienceList);
    handleCloseModal();
  };

  const handleDeleteExperience = (id) => {
    const updatedExperienceList = experienceList.filter((experience) => experience.id !== id);
    setExperienceList(updatedExperienceList);
  };

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Work & Experience</h4>
        <button className="add-info-btn" onClick={() => setShowModal(true)}>
          <span className="icon flaticon-plus"></span> Add Work
        </button>
      </div>
      {experienceList.map((experience) => (
        <div className="resume-block" key={experience.id}>
          <div className="inner">
            <span className="name">{experience.jobTitle.charAt(0)}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{experience.jobTitle}</h3>
                <span>{experience.company}</span>
              </div>
              <div className="edit-box">
                <span className="year">{`${experience.startYear} - ${experience.endYear}`}</span>
                <div className="edit-btns">
                  <button onClick={() => handleEditExperience(experience.id)}>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={() => handleDeleteExperience(experience.id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">{experience.description}</div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingExperienceId !== null ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="form-control"
              placeholder="Enter job title"
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-control"
              placeholder="Enter company"
            />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input
              type="text"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="form-control"
              placeholder="Enter start year"
            />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input
              type="text"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="form-control"
              placeholder="Enter end year"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              placeholder="Enter description"
              rows={4}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} style={{ backgroundColor: '#FFFFFF', color: 'black' }}>
            Close
          </Button>
          <Button variant="primary" onClick={editingExperienceId !== null ? handleUpdateExperience : handleAddExperience} style={{ backgroundColor: '#000033', color: 'white' }}>
            {editingExperienceId !== null ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Experiences;
