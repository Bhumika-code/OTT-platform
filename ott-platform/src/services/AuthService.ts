
interface SignInData {
  email: string;
  password: string;
}

export const signIn = async (user: SignInData): Promise<boolean> => {
  try {
    const response = await fetch('https://maiora-backend-dev.onrender.com/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const token = await response.text();
      localStorage.setItem('jwtToken', token);
      return true;
    } else {
      console.error('Sign-in failed. Response status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error signing in:', error);
    return false;
  }
};



interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (user: RegistrationData): Promise<boolean> => {
  try {
    const response = await fetch('https://maiora-backend-dev.onrender.com/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Registration failed. Response status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error registering:', error);
    return false;
  }
};

