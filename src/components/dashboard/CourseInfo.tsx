interface Props {
  title: string;
  description: string;
  status: string;
  duration: number;
}

const CourseInfo: React.FC<Props> = ({
  title,
  description,
  status,
  duration,
}) => {
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
              <button className="btn btn-primary btn-lg">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
