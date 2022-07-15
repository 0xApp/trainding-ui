import logo from "../../assets/img/logo.png";
import { useStoreState } from "../../store";
import Chat from "../chatwindow/Chat";

interface Props {
  children: React.ReactNode;
}

const SidebarContainer: React.FC<Props> = ({ children }) => {

    const { isOpen } = useStoreState(s => s.chatStore);
  return (
    <div className="wrapper">
      <nav id="sidebar" className="">
        <div className="sidebar-header">
          <span>
            <img src={logo} alt="TrainDing" style={{ width: "65%" }} />
          </span>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#">Help &amp; Support</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <div id="content">{children}</div>
      {isOpen && <Chat />}
    </div>
  );
};

export default SidebarContainer;
