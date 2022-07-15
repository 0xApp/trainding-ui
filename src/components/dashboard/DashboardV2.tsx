import React from "react";
import useUserCourses from "../../hooks/useUserCourses";
import { useStoreState } from "../../store";
import CourseInfo from "./CourseInfo";

const DashboardV2 = () => {
  const { profile } = useStoreState((s) => s.profileStore);
  const { suggested, ongoing, upcoming } = useUserCourses(profile!.id);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-bordered card-bordering">
            <div className="card-body">
              <div>
                <i className="material-icons lg">list_alt</i>
              </div>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-bordered card-bordering">
            <div className="card-body">
              <div>
                <i className="material-icons lg">list_alt</i>
              </div>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-bordered card-bordering">
            <div className="card-body">
              <div>
                <i className="material-icons lg">list_alt</i>
              </div>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-bordered card-bordering">
            <div className="card-body">
              <div>
                <i className="material-icons lg">list_alt</i>
              </div>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h4>Courses that matches your interests</h4>
            </div>
            <div>
              {suggested.map((c) => (
                <CourseInfo
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  }
                  status={c.state}
                  title={c.name}
                  duration={c.duration}
                />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Upcoming Lessons</h4>
              {upcoming.map((c) => (
                <div>{c.name}</div>
              ))}
            </div>
            <div className="mt-3">
              <h4>Progress</h4>
              {ongoing.map((c) => (
                <div>{c.name}</div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Training Buddies</h4>
            </div>
            <div className="p-3" style={{ background: "white" }}>buddies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardV2;
