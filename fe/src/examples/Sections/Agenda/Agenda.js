import React from "react";

function Agenda() {
  const containerStyle = {
    // position: "absolute",
    width: "1055px",
    height: "68px",
    left: "220px",
    top: "408px",
    background: "#FF6600",
    display: "flex",
    justifyContent: "center",
  };

  const textContainerStyle = {
    position: "static",
    width: "69px",
    height: "23px",
    left: "606px",
    top: "430px",
  };

  const textStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "50px",
    color: "#FFFFFF",
  };

  const GambarAgenda1 = {
    // position: "absolute",
    width: "329px",
    height: "329px",
    left: "114px",
    top: "512px",
    background: `url("/assets/images/agenda1.jpg")`,
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <span style={textStyle}>Agenda</span>
        <div style={GambarAgenda1} />
      </div>
    </div>
  );
}

export default Agenda;
