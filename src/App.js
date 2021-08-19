import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import React, { Component } from 'react';

function App() {
    return (
    <React.Fragment>
      <ProfilePhoto></ProfilePhoto>
      <FullName fullname="Hannachi Mouadh"></FullName>
      <Address address="Metouia"></Address>
    </React.Fragment>
  );
}

export default App;
