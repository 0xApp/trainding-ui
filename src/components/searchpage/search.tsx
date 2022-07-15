import React from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../store";

import "./search.css";

interface Tag {
  key: string;
  value: string;
}

interface Goal {
  key: number;
  value: string;
}

const tags: Tag[] = [
  {
    key: "dotnet",
    value: ".NET",
  },
  {
    key: "dba",
    value: "Database Administrator",
  },
  {
    key: "docker",
    value: "Docker",
  },
  {
    key: "devops",
    value: "DevOps",
  },
  {
    key: "full-stack",
    value: "Full Stack Development",
  },
  {
    key: "java",
    value: "Java",
  },
  {
    key: "microservice",
    value: "Microservice Architecture",
  },
  {
    key: "oops",
    value: "Object Oriented Programming",
  },

  {
    key: "springboot",
    value: "Sprint Boot",
  },
  {
    key: "sql",
    value: "SQL",
  },
  {
    key: "unit-test",
    value: "Unit Testing",
  },
];

var goals: Goal[] = [
  {
    key: 1,
    value: "0-2 hours / week",
  },
  {
    key: 2,
    value: "2-5 hours / week",
  },
  {
    key: 3,
    value: "5-10 hours / week",
  },
  {
    key: 4,
    value: "More than 10 hours / week",
  },
];

const SearchPage = () => {
  const { profile } = useStoreState((s) => s.profileStore);
  const { setGoal, setTag } = useStoreActions((s) => s.profileStore);

  const navigate = useNavigate();

  const handleCheckedChange = (tag: string, checked: boolean) => {
    setTag({ tag, checked });
  };
  const handleGoalChange = (goal: number) => {
    setGoal(goal);
  };

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
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Popular Topics</h4>
              <div>
                {tags.map((t) => (
                  <label
                    key={t.key}
                    className={`btn btn-toggle-primary ${
                      profile !== null &&
                      profile.tags.some((tag) => tag === t.key)
                        ? "active"
                        : ""
                    }`}
                    style={{ margin: "10px 5px" }}
                  >
                    <input
                      type="checkbox"
                      name={t.key}
                      checked={
                        profile !== null &&
                        profile.tags.some((tag) => tag === t.key)
                      }
                      style={{ width: "30px" }}
                      onChange={(e) => {
                        handleCheckedChange(t.key, e.target.checked);
                      }}
                    />
                    {t.value}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Set your learning goals</h4>
              <div>
                {goals.map((g) => (
                  <div key={g.key}>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={g.key.toString()}
                        checked={profile !== null && profile.goal === g.key}
                        onChange={(e) => {
                          handleGoalChange(g.key);
                        }}
                      />
                      {g.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col">
          <div>
            <h3>Popular topics</h3>
          </div>
        </div>
        <div className="col">
          <div className="goals pt-3 ">
            <h3>Set your learning goals</h3>
            {goals.map((g) => (
              <div key={g.key}>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={g.key.toString()}
                    checked={profile !== null && profile.goal === g.key}
                    onChange={(e) => {
                      handleGoalChange(g.key);
                    }}
                  />
                  {g.value}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="text-right">
        <button
          className="btn btn-socgen"
          onClick={() => navigate("/dashboard-v2")}
        >
          Goto Dashboard
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
