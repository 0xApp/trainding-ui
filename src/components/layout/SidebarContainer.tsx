import logo from "../../assets/img/logo.png";

interface Props {
  children: React.ReactNode;
}

const SidebarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="">
        <div className="sidebar-header">
          <span>
            <img src={logo} alt="TrainDing" style={{ width: "100%" }} />
          </span>
        </div>
        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/tutorial/files/sidebar.zip"
              className="download"
            >
              Download source
            </a>
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              className="article"
            >
              Back to article
            </a>
          </li>
        </ul>
      </nav>
      <div id="content">{children}</div>
    </div>
  );
};

export default SidebarContainer;
