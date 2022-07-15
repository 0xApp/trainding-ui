import React from "react";
import { updateUserCourse } from "../../api/api";
import useBuddies from "../../hooks/useBuddies";
import useUserCourses from "../../hooks/useUserCourses";
import { useStoreActions, useStoreState } from "../../store";
import CourseInfo from "./CourseInfo";

const DashboardV2 = () => {
  const { profile } = useStoreState((s) => s.profileStore);
  const { data: buddies } = useBuddies();
  const { suggested, ongoing, upcoming, mutate } = useUserCourses(profile!.id);
  const {} = useStoreState((s) => s.chatStore);
  const { openChat } = useStoreActions((s) => s.chatStore);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-bordered card-bordering">
            <div className="card-body">
              <div>
                <i className="material-icons lg">view_list</i>
                <a>12</a>
              </div>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                Courses completed
              </p>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "55%" }}
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
                <i className="material-icons lg">workspace_premium</i>
                <a>5</a>
              </div>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                Certificate earned
              </p>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "15%" }}
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
                <i className="material-icons lg">show_chart</i>
                <a>7</a>
              </div>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                Courses in progress
              </p>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "65%" }}
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
                <i className="material-icons lg">outlined_flag</i>
                <a>85%</a>
              </div>
              <p className="text-primary" style={{ fontWeight: "bold" }}>
                Learning goal
              </p>
              <div className="pt-2">
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
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
                  key={c.id}
                  id={c.id}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  }
                  status={c.state}
                  title={c.name}
                  duration={c.duration}
                  onUpdate={(course, state) => {
                    updateUserCourse({
                      course,
                      state,
                      user: profile!.id,
                    }).finally(() => mutate());
                  }}
                />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <ul className="list-group">
                <h4>Upcoming Lessons</h4>
                {upcoming.map((c) => (
                  <div
                    key={c.id}
                    className="card card-bordered card-bordering mt-3"
                  >
                    <div className="card-body slim">
                      <p
                        className="text-primary text-bold"
                        style={{ fontWeight: "bold" }}
                      >
                        {c.name}
                      </p>
                      <p>Tue 8:00 AM to 10:00 AM</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <h4>Progress</h4>
              {ongoing.map((c) => (
                <div
                  key={c.id}
                  className="card card-bordered card-bordering mt-3"
                >
                  <div className="card-body slim">
                    <p
                      className="text-primary text-bold"
                      style={{ fontWeight: "bold" }}
                    >
                      {c.name}
                    </p>
                    <div className="pt-2">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Training Buddies</h4>
            </div>
            <div className="p-3" style={{ background: "white" }}>
              {buddies.map((b) => (
                <div key={b} className="card card-bordered card-bordering mt-3">
                  <div className="card-body slim">
                    <div className="row">
                      <div className="col" style={{ fontWeight: "bold" }}>
                        {b}
                      </div>
                      <div className="col text-right">
                        <button
                          className="btn btn-flat btn-sm"
                          onClick={() => {
                            openChat(b);
                          }}
                        >
                          <i className="material-icons lg">chat</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardV2;
