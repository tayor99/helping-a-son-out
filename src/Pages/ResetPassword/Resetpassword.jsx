import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const Resetpassword = () => {
  return (
    <div className="resetpassword">
      <div className="resetpassword__header">
        <Title color="text-light-purple" title="Reset Password " />
        <p className="mt-40 text-center w-80">
          We have sent code to{" "}
          <span className="font-700">horlaz229@gmail.com</span> Please enter the
          code below to Continue
        </p>
        <form className=" resetpassword-form  w-70">
          <div className="emailVerify__form d-flex justify-evenly mt-20">
            <Input styleClass="verify__input text-grey " type="text" />
            <Input styleClass="verify__input text-grey " type="text" />
            <Input styleClass="verify__input text-grey " type="text" />
            <Input styleClass="verify__input text-grey " type="text" />
          </div>
          <p className="mt-30 text-center">
            Don’t receive Code?{" "}
            <span className="text-light-purple pointer"> RESEND </span>
          </p>
          <Input
            label="password"
            type="password"
            placeholder="xxxxxxxx"
            styleClass={"w-100 font-600 p-10 "}
          />
          <Input
            label="Confirm password"
            type="password"
            placeholder="xxxxxxxx"
            width="w-90"
            styleClass={"w-100 font-600 p-10 "}
          />
          <Button text="RESET PASSWORD" />
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
