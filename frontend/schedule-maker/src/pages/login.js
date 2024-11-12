import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import { Colours, FontSizes } from '../components/styles';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate('/employees');
        } else {
          alert('Invalid username or password');
        }
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button text="Login" onClick={() => navigate('/employee')}/>
      </form>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    weight: '100vw',
    flexDirection: 'column',
    backgroundColor: Colours.secondary,
  },
  title: {
    color: Colours.quaternary,
    fontSize: FontSizes.large,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: Colours.primary,
    border: '1px solid black',
    borderRadius: '5px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: FontSizes.medium,
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};