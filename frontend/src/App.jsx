import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

export default class App extends Component {

  state = { showLogin: true };

  toggleForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };

  render() {
    return (
      <div style={styles.page}>

        {/* ===== HEADER ===== */}
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>HRMS Portal</h1>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main style={styles.main}>
          {this.state.showLogin ? (
            <Login switchToRegister={this.toggleForm} />
          ) : (
            <Register switchToLogin={this.toggleForm} />
          )}
        </main>

        {/* ===== FOOTER ===== */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            © 2025 HRMS | All Rights Reserved
          </p>
        </footer>

      </div>
    );
  }
}

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #667eea, #764ba2)'
  },

  header: {
    height: '70px',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  },

  headerTitle: {
    margin: 0,
    color: '#333'
  },

  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    height: '50px',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.15)'
  },

  footerText: {
    margin: 0,
    fontSize: '14px',
    color: '#555'
  }
};
