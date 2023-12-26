// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this path is correct for your store
import Rockets from './components/Rockets'; // Adjust the path as necessary
import Missions from './components/Missions'; // Adjust the path as necessary
import MyProfile from './components/MyProfile'; // Adjust the path as necessary

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Rockets</Link>
            </li>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
