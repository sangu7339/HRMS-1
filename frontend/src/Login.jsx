import React, { Component } from 'react';

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: '',
    error: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Invalid username or password");
        return res.text();
      })
      .then(msg => this.setState({ message: msg, error: '' }))
      .catch(err => this.setState({ error: err.message, message: '' }));
  };

  render() {
    return (
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={this.handleLogin}>
          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
          />

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>

        {this.state.message && (
          <div style={styles.success}>{this.state.message}</div>
        )}

        {this.state.error && (
          <div style={styles.error}>{this.state.error}</div>
        )}

        <p style={styles.text}>
          New user?{" "}
          <button style={styles.linkBtn} onClick={this.props.switchToRegister}>
            Register
          </button>
        </p>
      </div>
    );
  }
}

const styles = {
  card: {
    background: '#fff',
    padding: '35px',
    width: '340px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.25)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  text: {
    textAlign: 'center',
    marginTop: '20px'
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: '#667eea',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginTop: '12px'
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '12px'
  }
};
