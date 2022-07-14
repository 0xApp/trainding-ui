import React from "react";

import "./search.css";

const SearchPage = () => {
  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              &nbsp; &nbsp;
              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search topics or keywords"
                />
              </div>
              &nbsp; &nbsp;
              <div className="col-auto">
                <button className="btn btn-lg btn-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      &nbsp; &nbsp; &nbsp;
      <div className="blk1">
        <div className="interests container pt-3">
          <h3>Popular topics</h3>
          <div className="checkboxs container">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                name="sql"
                id="sql"
              />
              <label className="form-check-label">SQL</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                name="java"
                id="java"
              />
              <label className="form-check-label">Java</label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                name="dotnet"
                id="dotnet"
              />
              <label className="form-check-label">.NET</label>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="oops"
                  id="oops"
                />
                <label className="form-check-label">OOPS</label>
              </div>
            </div>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="goals container pt-3 ">
          <h3>Set your learning goals</h3>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="optradio"
              value="option1"
              checked
            />
            0-2 hours/ week<label className="form-check-label"></label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="optradio"
              value="option2"
            />
            2-5 hours/ week<label className="form-check-label"></label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio3"
              name="optradio"
              value="option3"
            />
            5-10 hours/ week<label className="form-check-label"></label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio4"
              name="optradio"
              value="option4"
            />
            More then10 hours/ week<label className="form-check-label"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
