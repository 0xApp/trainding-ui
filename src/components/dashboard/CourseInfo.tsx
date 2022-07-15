import useUserCourses from "../../hooks/useUserCourses";

interface Props {
  id: string;
  title: string;
  description: string;
  status: string;
  duration: number;
  onUpdate: (id: string, status: string) => void;
}

const CourseInfo: React.FC<Props> = ({
  id,
  title,
  description,
  status,
  duration,
  onUpdate,
}) => {
  const handleCourseUpdate = (course: string, state: string) => {
    onUpdate(course, state);
  };
  return (
    <div className="card card-bordered card-bordering mb-3">
      <div className="card-body slim">
        <div className="row">
          <div
            className="col-md-4"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            <img src="https://via.placeholder.com/250x160" alt="Image" />
          </div>
          <div className="col-md-8">
            <div>
              <h5>{title}</h5>
            </div>
            <div style={{ display: "table" }} className="text-secondary">
              <span
                className="material-icons text-secondary"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                library_books
              </span>
              <span
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  paddingLeft: "6px",
                }}
              >
                15 Lessons ({duration} mins)
              </span>
            </div>
            <div style={{ display: "table" }} className="text-secondary mt-2">
              <span
                className="material-icons text-secondary"
                style={{ display: "table-cell", verticalAlign: "middle" }}
              >
                people_alt
              </span>
              <span
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  paddingLeft: "6px",
                }}
              >
                3 of your favorite training buddy have joined this program.
              </span>
            </div>
            <div className="text-right mt-3">
              {status === "NOT_STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(id, "JOINED")}
                >
                  Join
                </button>
              )}
              {status === "JOINED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(id, "STARTED")}
                >
                  Start
                </button>
              )}
              {status === "STARTED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(id, "COMPLETED")}
                >
                  Complete
                </button>
              )}
              {status === "COMPLETED" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleCourseUpdate(id, "FEEDBACK")}
                >
                  Feedback
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
