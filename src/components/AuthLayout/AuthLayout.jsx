import "./Authlayout.css";

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="authlayout w-100  ">
      <div className="authlayout__left w-80 m-auto ">
        <div className="authlayoutLeft__body w-80 align-auto-10">
          {/* <img src={Logo} alt="swapive-logo" /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
