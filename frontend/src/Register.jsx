import React, { Component } from 'react';

export default class Register extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          message: `Welcome ${data.username}!`,
          username: '',
          password: ''
        });
      });
  };

  render() {
    return (
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>

        <form onSubmit={this.handleRegister}>
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
            Register
          </button>
        </form>

        {this.state.message && (
          <div style={styles.success}>{this.state.message}</div>
        )}

        <p style={styles.text}>
          Already have an account?{" "}
          <button style={styles.linkBtn} onClick={this.props.switchToLogin}>
            Login
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
  }
};
