import './Input.css';

const Input = ({ label, type, placeholder, icon, styleClass }) => {
  return (
    <div className={`form_input mt-20 `}>
      <label className="font-family-1 font-500" htmlFor={label}>
        {label}
      </label>
      <div className="form__inputFields d-flex align-center bg-grey border-radius-10">
        {icon && (
          <span className="w-10 d-flex align-center justify-center text-black font-600 ">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          // maxlength={max}
          className={`${styleClass}rm-input-styles bg-grey text-black font-500`}
          // style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Input;
