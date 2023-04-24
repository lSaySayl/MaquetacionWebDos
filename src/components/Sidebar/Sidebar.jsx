import { Link } from "react-router-dom";
import {
  RiPieChartLine,
  RiLoginCircleLine,
  RiSettings4Line,
  RiHomeHeartFill,
  RiMessage3Fill,
  RiGroupFill,
} from "react-icons/ri";
import "../Sidebar/Sidebar.css";
import logo from "../../assets/Logo.png";

const Sidebar = () => {
  return (
    <section className="sidebar animate__animated animate__fadeInLeft">
      <img className="sidebar__img" src={logo} alt="logo" />
      <nav className="sidebar__nav">
        <ul className="sidebar__ul">
          <li className="sidebar__li">
            <RiHomeHeartFill className="icon" />
            <Link to={"/"}>Home</Link>
          </li>
          <li className="sidebar__li">
            <RiMessage3Fill className="icon" />
            <Link to={"/messages"}>Messages</Link>
          </li>
          <li className="sidebar__li">
            <RiGroupFill className="icon" />
            <Link to={"/group"}>Group</Link>
          </li>
        </ul>
      </nav>
      <section className="sidebar__icons">
        <RiSettings4Line className="icon__footer" />
        <RiPieChartLine className="icon__footer" />
        <RiLoginCircleLine className="icon__footer" />
      </section>
    </section>
  );
};

export default Sidebar;
