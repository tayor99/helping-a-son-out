import './Button.css';

const Button = ({ text }) => {
  return (
    <>
      <button className="btn bg-lighter-purple w-100 d-flex mt-20 justify-center align-center  border-radius-10 text-white pointer  ">
        {text}
      </button>
    </>
  );
};

export default Button;
