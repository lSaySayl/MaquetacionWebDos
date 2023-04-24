import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";
import "./Layout.css";

const Layout = () => {
  return (
    <section className="container">
      <Sidebar />
      <section className="container__content">
        <section className="container__button">
          <Button />
        </section>
        <section className="container__card animate__animated animate__backInRight">
          <Outlet />
        </section>
      </section>
    </section>
  );
};

export default Layout;
