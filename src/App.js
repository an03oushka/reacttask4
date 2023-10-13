import React from 'react';
import './App.css';

// Sample user data
const users = [
  {
    sno: 1,
    profilePic: 'https://robohash.org/hicveldicta.png',
    firstName: 'Terry',
    lastName: 'Medhurst',
    gender: 'Male',
    email: 'atuny0@sohu.com',
    username: 'atuny0',
    domain: 'slashdot.org',
    ip: '117.29.86.254',
    university: 'Capitol University',
  },
  {
    sno: 2,
    profilePic: 'https://robohash.org/doloremquesintcorrupti.png',
    firstName: 'Sheldon',
    lastName: 'Quigley',
    gender: 'Male',
    email: 'hbingley1@plala.or.jp',
    username: 'hbingley1',
    domain: '51.la',
    ip: '253.240.20.181',
    university: 'Stavropol State Technical University',
  },
  {
    sno: 3,
    profilePic: 'https://robohash.org/consequunturautconsequatur.png',
    firstName: 'Terrill',
    lastName: 'Hills',
    gender: 'Male',
    email: 'rshawe2@51.la',
    username: 'rshawe2',
    domain: 'earthlink.net',
    ip: '205.226.160.3',
    university: 'University of Cagayan Valley',
  },
  {
    sno: 4,
    profilePic: 'https://robohash.org/facilisdignissimosdolore.png',
    firstName: 'Miles',
    lastName: 'Cummerata',
    gender: 'Male',
    email: 'yraigatt3@nature.com',
    username: 'yraigatt3',
    domain: 'homestead.com',
    ip: '243.20.78.113',
    university: 'Shenyang Pharmaceutical University',
  },
  {
    sno: 5,
    profilePic: 'https://robohash.org/adverovelit.png',
    firstName: 'Mavis',
    lastName: 'Schultz',
    gender: 'Male',
    email: 'kmeus4@upenn.edu',
    username: 'kmeus4',
    domain: 'columbia.edu',
    ip: '103.72.86.183',
    university: 'Estonian University of Life Sciences',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.sno}>
              <td>{user.sno}</td>
              <td>
                <img
                  src={user.profilePic}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
