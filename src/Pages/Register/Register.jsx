import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { BsPerson } from "react-icons/bs";
import "./Register.css";

import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/email-verification");
  };
  return (
    <div className="register mt-5">
      <div className="register__header">
        <Title color="text-black" title="SignUp" />
        <p className="mt-15 font-family-1 font-400">
          Create an account to start using Swapive
        </p>
      </div>
      <form className="register__form mt-25 " onSubmit={handleSubmit}>
        <Input
          label="First Name"
          type="text"
          placeholder="first name"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="last name"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <Input
          label="Email"
          type="email"
          placeholder="email"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <Input
          label="Phone number"
          type="text"
          placeholder="8057463831"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <Input
          label="Country"
          type="text"
          placeholder="Nigerian"
          styleClass={"w-100 font-600 "}
        />
        <Input
          label="password"
          type="password"
          placeholder="xxxxxxxx"
          icon={<BsPerson />}
          styleClass={"w-100 font-600 "}
        />
        <p className="text-center w-90 mt-15 align-auto font-family-1 text-black-light">
          By continuing, you acknowledge that you have read and understood, and
          agree to{" "}
          <span className="font-700 text-black pointer">
            Swapive’s Terms of Service and Privacy Policy.
          </span>
        </p>
        <Button text="proceed" />
      </form>
      <div className="register__footer">
        <p className="mt-10 text-center font-family-1 text-black font-600">
          Already a Swapive User?{" "}
          <Link to="/login" className="pointer text-light-purple">
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
