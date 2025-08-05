
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // You can add real authentication here
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'plum',minWidth: '100vw' }}>
      <form onSubmit={handleSubmit} style={{ padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '400px',height: '400px' ,paddingbottom: '20px'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', background: 'purple', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
