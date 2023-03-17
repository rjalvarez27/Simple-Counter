import React from "react";

const time = ({ first, second, thirdt, fourt, fifth, sixth }) => {
    console.log (first);
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="d-flex justify-content-center gap-4 bg-black p-2">
        <div className="p-3 bg-dark text-white rounded fs-3"><i className="fas fa-stopwatch"></i></div>                
        <div className="p-3 bg-dark text-white rounded fs-3">{sixth}</div>
        <div className="p-3 bg-dark text-white rounded fs-2">{fifth}</div>
        <div className="p-3 bg-dark text-white rounded fs-2">{fourt}</div>
        <div className="p-3 bg-dark text-white rounded fs-2">{thirdt}</div>
        <div className="p-3 bg-dark text-white rounded fs-2">{second}</div>
        <div className="p-3 bg-dark text-white rounded fs-2">{first}</div>
        </div>
    </div>
  );
};

export default time;
