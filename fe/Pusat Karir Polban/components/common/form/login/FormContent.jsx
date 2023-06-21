import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const destroySession = () => {
    Cookies.remove('sessionToken');
  };

  const handleLogout = () => {
    destroySession();
  };    

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      username: username,
      password: password
    }

    await axios.post('http://127.0.0.1:3010/api/user/login', data)
      .then((res) => {
        Cookies.set('token', res.data.message.access_token);
        Cookies.set('username', res.data.message.user.username);
        Cookies.set('role', res.data.message.user.role);
        console.log('Login success'); // Log success
      })
      .catch((err) => {
        console.log(err);
        toast.error('Login failed'); // Toast login failure
      });
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
          <label>Username / Email</label>
          <input
            type="text"
            name="username"
            placeholder="Username or email address"
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
