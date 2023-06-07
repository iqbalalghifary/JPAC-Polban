const Pagination = () => {
  return (
    <>
      <div className="prev-post">
        <span className="icon flaticon-back"></span>
        <a href="#">
          <span className="title">Previous Agenda</span>
        </a>
      </div>
      <div className="next-post">
        <span className="icon flaticon-next"></span>
        <a href="#">
          <span className="title">Next Agenda</span>
        </a>
      </div>
    </>
  );
};

export default Pagination;
