import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';


const FormContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const destroySession = () => {
    // Remove the session cookie
    Cookies.remove('sessionToken');
  
    // Add any additional logic to clear or reset other session-related data if necessary
  
    // Redirect or perform any other actions after destroying the session
  };
  const handleLogout = () => {
    // Call the destroySession function
    destroySession();
  
    // Perform any additional actions, such as redirecting to the login page
  };
    

  const handleSubmit = async (event) => {
    event.preventDefault();

  // Kirim permintaan GET ke API
  try {
    const response = await axios.get(
      `https://6482fef0f2e76ae1b95bcbd3.mockapi.io/pusatkarirpolban/login?username=${username}&password=${password}`
    );

    if (response.status === 200) {
      const data = response.data;
      // Lakukan aksi sesuai keberhasilan login
      console.log('Login berhasil:', data);

      // Store the session token in a cookie
      Cookies.set('sessionToken', data.token);

      // Redirect or perform any other actions after successful login
    } else {
      console.log('Login gagal');
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-inner">
      <h3>Login</h3>

      {/* Login Form */}
      <form method="get" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <i
              className={`la ${showPassword ? 'la-eye-slash' : 'la-eye'}`}
              onClick={toggleShowPassword}
              style={{ position: 'absolute', right: '20px', top: '68%', transform: 'translateY(-50%)' }}
            />
          </div>
        </div>

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit" name="log-in">
            Log In
          </button>
        </div>
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don't have an account?{' '}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
