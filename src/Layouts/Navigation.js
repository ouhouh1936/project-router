import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="box">
        <NavLink className="eunha" to="/oeh">
          오은하 화면
        </NavLink>

        <NavLink className="min" to="/min">
          오민형 화면
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
