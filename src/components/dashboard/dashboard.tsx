import React from "react";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="container pt-5">
      <h1> Hello User</h1>
      &nbsp;
          &nbsp;
          &nbsp;
      <div className="block row">
        <div className="suggested blocks col container pt-3">
          <h3>Suggested courses</h3>
          &nbsp;
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 1</p>
            <button type="button" className="btn btn-primary">Start</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 2</p>
            <button type="button" className="btn btn-primary">Start</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 3</p>
            <button type="button" className="btn btn-primary">Start</button>
          </div>
          
        </div>
        &nbsp;
        &nbsp;
        <div className="ongoing blocks col container pt-3">
          <h3>Ongoing courses</h3>
          &nbsp;
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 1</p>
            <button type="button" className="btn btn-primary">Continue</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 2</p>
            <button type="button" className="btn btn-primary">Continue</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Sample Course 3</p>
            <button type="button" className="btn btn-primary">Continue</button>
          </div>
        </div>
        &nbsp;
        &nbsp;
        <div className="sameInterest blocks col container pt-3">
          <h3>People with similar Interest</h3>
          &nbsp;
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">Contact</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">Contact</button>
          </div>
          &nbsp;
          &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
