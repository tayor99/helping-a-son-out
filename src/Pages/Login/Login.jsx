import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import { BsPerson } from 'react-icons/bs';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login__top font-family-1">
        <h3 className="font-600 text-dark font-family-1">Welcome to swapive</h3>
        <Title
          color="text-light-purple"
          title="Sign in to your Swapive Dashboard"
        />
        <p className="mt-15 text-dark font-600 font-family-1">
          Input your email and password.
        </p>
      </div>
      <form className="login__form ">
        <Input
          label="Email"
          type="email"
          placeholder="email"
          icon={<BsPerson />}
          styleClass={'w-100 font-600 '}
        />
        <Input
          label="password"
          type="password"
          placeholder="xxxxxxxx"
          icon={<BsPerson />}
          styleClass={'login-style font-600 '}
        />
        <div className="check-box d-flex jusify-between mt-20">
          <div className="check-input">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember for 30 days</label>
          </div>
          <Link
            to="/forgot-password"
            className="underline text-light-purple pointer"
          >
            Forgot Password?
          </Link>
        </div>

        <Button text="proceed" />
      </form>
      <div className="login__bottom">
        <p className="text-center mt-25">
          Not a Swapive User yet? {'  '}
          <Link to="/" className="text-light-purple pointer">
            Signup{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
