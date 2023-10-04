
import React from 'react';
import InputField from '../../components/inputfeild/InputFeild';
import Button from '../../components/button/Button';
import './SignInPage.css';
import logoImage from '../../assets/images/Loading.png';
import { useNavigate } from 'react-router-dom';

interface SignInPageProps {
  signInButtonColor?: string;
  signUpButtonColor?: string;
  label?: string;
}

const SignInPage: React.FC<SignInPageProps> = ({
  signInButtonColor,
  signUpButtonColor,
}) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
    console.log("Clicked");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };



  return (
    <div className="signin-container">
      <h1 className="Movie-container">Movie OTT</h1>
      <div className="flex-container">
        <div className="left-container">
          <p className="left-p">
            Sign <span className="sign-color">in</span>
          </p>

          <form className='form-group'>
            <InputField label="Email" type="email" placeholder="Email" />
            <InputField label="Password" type="password" placeholder="Password" />
            <Button label="Sign In" onClick={handleSignIn} className="signin-button" style={{ backgroundColor: signInButtonColor }} />
          </form>
        </div>
        <div className="right-container">
          <p className="right-p">
            Welcome to <span className="streaming-ott">Movie OTT</span>
          </p>
          <img src={logoImage} alt="logo" className='loading-iamge' />

          <p className="right-p2">
            <a href="\SignUp">New here?</a> Create an account here
          </p>
          <Button label="Sign Up" onClick={handleSignUp} className="signup-button" style={{ backgroundColor: signUpButtonColor }}></Button>
        </div>
      </div>
    </div>
  );
};




export default SignInPage;
