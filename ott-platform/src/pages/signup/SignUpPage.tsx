import React from 'react'
import InputField from '../../components/inputfeild/InputFeild'
import Button from '../../components/button/Button';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';
interface SignUpPageProps {
  registerButtonColor?: string;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ registerButtonColor }) => {
  const naviagate = useNavigate()
  const handleRegister = () => {
    naviagate('/signin')
  };
  return (
    <div className='main-container'>
      <h1 className="Movie-container">Movie OTT</h1>
      <div className='input-container'>
        <span className='register-color'>Register</span>
        <form className='form-container'>
          <InputField label="Full Name" type="text" placeholder="Full Name" className='input-style' />
          <InputField label="Email" type="email" placeholder="Email" className='input-style' />
          <InputField label="Password" type="password" placeholder="Password" className='input-style' />
          <InputField label="Confirm Password" type="password" placeholder=" confirm Password" className='input-style' />
          <Button label="Register" onClick={handleRegister} className="register-button" style={{ backgroundColor: registerButtonColor }} />
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
export type { SignUpPageProps };