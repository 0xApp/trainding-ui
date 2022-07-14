import React from "react";
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
    key: "sql",
    value: "SQL",
  },
  {
    key: "oops",
    value: "Object Oriented Programming",
  },
  {
    key: "java",
    value: "Java",
  },
  {
    key: "dotnet",
    value: ".NET",
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
      <div className="blk1">
        <div className="interests container pt-3">
          <h3>Popular topics</h3>
          <div className="checkboxs container">
            <div>
              {tags.map((t) => (
                <div key={t.key}>
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={t.key}
                      checked={
                        profile !== null &&
                        profile.tags.some((tag) => tag === t.key)
                      }
                      onChange={(e) => {
                        handleCheckedChange(t.key, e.target.checked);
                      }}
                    />
                    {t.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="goals container pt-3 ">
          <h3>Set your learning goals</h3>
          {goals.map((g) => (
            <div key={g.key}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name={g.key.toString()}
                  checked={
                    profile !== null &&
                    profile.goal === g.key
                  }
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
  );
};

export default SearchPage;
