import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Awards = () => {
  const [showModal, setShowModal] = useState(false);
  const [awardList, setAwardList] = useState([
    {
      id: 1,
      title: "Perfect Attendance Programs",
      year: "2012 - 2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 2,
      title: "Top Performer Recognition",
      year: "2012 - 2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [awardYear, setAwardYear] = useState("");
  const [awardDescription, setAwardDescription] = useState("");
  const [editingAwardId, setEditingAwardId] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setTitle("");
    setAwardYear("");
    setAwardDescription("");
    setEditingAwardId(null);
  };

  const handleAddAward = () => {
    const newAward = {
      id: awardList.length + 1,
      title,
      year: awardYear,
      description: awardDescription,
    };

    setAwardList([...awardList, newAward]);

    handleCloseModal();
  };

  const handleEditAward = (id) => {
    const awardToEdit = awardList.find((award) => award.id === id);
    if (awardToEdit) {
      setTitle(awardToEdit.title);
      setAwardYear(awardToEdit.year);
      setAwardDescription(awardToEdit.description);
      setShowModal(true);
      setEditingAwardId(id);
    }
  };

  const handleUpdateAward = () => {
    const updatedAwardList = awardList.map((award) => {
      if (award.id === editingAwardId) {
        return {
          ...award,
          title,
          year: awardYear,
          description: awardDescription,
        };
      }
      return award;
    });

    setAwardList(updatedAwardList);
    handleCloseModal();
  };

  const handleDeleteAward = (id) => {
    const updatedAwardList = awardList.filter((award) => award.id !== id);
    setAwardList(updatedAwardList);
  };

  return (
    <div className="resume-outer theme-yellow">
      <div className="upper-title">
        <h4>Awards</h4>
        <button className="add-info-btn" onClick={() => setShowModal(true)}>
          <span className="icon flaticon-plus"></span> Awards
        </button>
      </div>
      {awardList.map((award) => (
        <div className="resume-block" key={award.id}>
          <div className="inner">
            <span className="name">{award.title.charAt(0)}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{award.title}</h3>
                <span></span>
              </div>
              <div className="edit-box">
                <span className="year">{award.year}</span>
                <div className="edit-btns">
                  <button onClick={() => handleEditAward(award.id)}>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={() => handleDeleteAward(award.id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">{award.description}</div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingAwardId !== null ? "Edit Award" : "Add Award"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              value={awardYear}
              onChange={(e) => setAwardYear(e.target.value)}
              className="form-control"
              placeholder="Enter year"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={awardDescription}
              onChange={(e) => setAwardDescription(e.target.value)}
              className="form-control"
              placeholder="Enter description"
              rows={4}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{ backgroundColor: "#FFFFFF", color: "black" }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={
              editingAwardId !== null ? handleUpdateAward : handleAddAward
            }
            style={{ backgroundColor: "#000033", color: "white" }}
          >
            {editingAwardId !== null ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Awards;
