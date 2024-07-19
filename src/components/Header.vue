<template>
    <header>
      <img alt="SST logo" src="@/assets/LOGO-SHALOM.png">
      <h1>Contact Manager</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/add-contact">Add Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style scoped>
  header {
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  nav {
    margin-top: 10px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 10px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  nav ul li a:hover {
    background: #575757;
  }
  </style>
  