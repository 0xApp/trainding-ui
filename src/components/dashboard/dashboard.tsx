import { updateUserCourse } from "../../api/api";
import useUserCourses from "../../hooks/useUserCourses";
import { useStoreState } from "../../store";
import "./dashboard.css";

const DashBoard = () => {
  const { profile } = useStoreState((s) => s.profileStore);
  const { data: courses, ongoing, suggested , mutate: reloadCourses } = useUserCourses(profile!.id);

  const handleCourseUpdate = (course: string, state: string) => {
    updateUserCourse({
      course: course,
      state: state,
      user: profile!.id,
    }).finally(() => reloadCourses());
  };

  return (
    <div className="container pt-5">
      <h1> Hello User</h1>
      &nbsp; &nbsp; &nbsp;
      <div className="block row">
        <div className="suggested blocks col container pt-3">
          <h3>Suggested courses</h3>
          &nbsp; &nbsp; &nbsp;
          {suggested.map((c) => (
            <div key={c.id} className="sugg-course">
              <p>{c.name}</p>
              {c.state === "NOT_STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "JOINED")}
                >
                  Join
                </button>
              )}
              {c.state === "JOINED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "STARTED")}
                >
                  Start
                </button>
              )}
              {c.state === "STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "COMPLETED")}
                >
                  Complete
                </button>
              )}
              {c.state === "COMPLETED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "FEEDBACK")}
                >
                  Feedback
                </button>
              )}
            </div>
          ))}
        </div>
        &nbsp; &nbsp;
        <div className="ongoing blocks col container pt-3">
          <h3>Ongoing courses</h3>
          &nbsp; &nbsp; &nbsp;
          {ongoing.map((c) => (
            <div key={c.id} className="sugg-course">
              <p>{c.name}</p>
              {c.state === "NOT_STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "JOINED")}
                >
                  Join
                </button>
              )}
              {c.state === "JOINED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "STARTED")}
                >
                  Start
                </button>
              )}
              {c.state === "STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "COMPLETED")}
                >
                  Complete
                </button>
              )}
              {c.state === "COMPLETED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(c.id, "FEEDBACK")}
                >
                  Feedback
                </button>
              )}
            </div>
          ))}
        </div>
        &nbsp; &nbsp;
        <div className="sameInterest blocks col container pt-3">
          <h3>People with similar Interest</h3>
          &nbsp; &nbsp; &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">
              Contact
            </button>
          </div>
          &nbsp; &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">
              Contact
            </button>
          </div>
          &nbsp; &nbsp;
          <div className="sugg-course">
            <p>Person 1</p>
            <button type="button" className="btn btn-primary">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
