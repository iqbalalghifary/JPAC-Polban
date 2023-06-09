import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const FormContent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kirim permintaan GET ke API
    try {
      const response = await axios.get(`https://6482fef0f2e76ae1b95bcbd3.mockapi.io/pusatkarirpolban/login?username=${username}&password=${password}`);

      if (response.status === 200) {
        const data = response.data;
        // Lakukan aksi sesuai keberhasilan login
        console.log('Login berhasil:', data);
      } else {
        console.log('Login gagal');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
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
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
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
