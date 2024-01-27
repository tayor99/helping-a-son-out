import Title from "../../components/Title/Title";
import { BsPerson } from "react-icons/bs";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Link, useNavigate } from "react-router-dom";

import "./ForgotPassword.css";

const FogotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };
  return (
    <div className="ForgotPassword">
      <div className="forgotPassword__top">
        <Title color="text-light-purple" title="Forgot Password" />
        <p className="mt-25 text-dark ">
          Don’t worry! It happens <br /> Please enter your email address
          associated with your Swapive account
        </p>
      </div>
      <form className="forgotPassword__form" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="email"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <div className="btn w-60 align-auto mt-40 ">
          <Button text="send" />
        </div>
      </form>
      <p className="text-center mt-40">
        Remember your Password?{" "}
        <Link to="/login" className="underline text-light-purple pointer">
          SignIn
        </Link>{" "}
      </p>
    </div>
  );
};

export default FogotPassword;
