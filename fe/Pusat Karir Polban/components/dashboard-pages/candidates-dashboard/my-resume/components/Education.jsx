import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Education = () => {
  const [showModal, setShowModal] = useState(false);
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      degree: "Bachlors in Fine Arts",
      university: "Modern College",
      startYear: "2012",
      endYear: "2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 2,
      degree: "Computer Science",
      university: "Harvard University",
      startYear: "2008",
      endYear: "2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ]);

  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [editingEducationId, setEditingEducationId] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setDegree("");
    setUniversity("");
    setStartYear("");
    setEndYear("");
    setDescription("");
    setEditingEducationId(null);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: educationList.length + 1,
      degree,
      university,
      startYear,
      endYear,
      description,
    };

    setEducationList([...educationList, newEducation]);

    handleCloseModal();
  };

  const handleEditEducation = (id) => {
    const educationToEdit = educationList.find((education) => education.id === id);
    if (educationToEdit) {
      setDegree(educationToEdit.degree);
      setUniversity(educationToEdit.university);
      setStartYear(educationToEdit.startYear);
      setEndYear(educationToEdit.endYear);
      setDescription(educationToEdit.description);
      setShowModal(true);
      setEditingEducationId(id);
    }
  };

  const handleUpdateEducation = () => {
    // Validasi input tahun
    if (isNaN(startYear) || isNaN(endYear)) {
      alert("Start Year and End Year must be numbers");
      return;
    }

    const updatedEducationList = educationList.map((education) => {
      if (education.id === editingEducationId) {
        return {
          ...education,
          degree,
          university,
          startYear,
          endYear,
          description,
        };
      }
      return education;
    });

    setEducationList(updatedEducationList);
    handleCloseModal();
  };

  const handleDeleteEducation = (id) => {
    const updatedEducationList = educationList.filter((education) => education.id !== id);
    setEducationList(updatedEducationList);
  };

  return (
    <div className="resume-outer">
      <div className="upper-title">
        <h4>Education</h4>
        <button className="add-info-btn" onClick={() => setShowModal(true)}>
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>
      {educationList.map((education) => (
        <div className="resume-block" key={education.id}>
          <div className="inner">
            <span className="name">{education.degree.charAt(0)}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{education.degree}</h3>
                <span>{education.university}</span>
              </div>
              <div className="edit-box">
                <span className="year">{`${education.startYear} - ${education.endYear}`}</span>
                <div className="edit-btns">
                  <button onClick={() => handleEditEducation(education.id)}>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={() => handleDeleteEducation(education.id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">{education.description}</div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editingEducationId !== null ? "Edit Education" : "Add Education"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Degree</label>
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="form-control"
              placeholder="Enter degree"
            />
          </div>
          <div className="form-group">
            <label>University</label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="form-control"
              placeholder="Enter university"
            />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input
              type="number"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="form-control"
              placeholder="Enter start year"
            />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input
              type="number"
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
          <Button variant="primary" onClick={editingEducationId !== null ? handleUpdateEducation : handleAddEducation} style={{ backgroundColor: '#000033', color: 'white' }}>
            {editingEducationId !== null ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Education;
