import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Employee from './pages/employee';
import Header from './components/header';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <Header  />

      <Router>
        <div styles={styles.container}>
          <NavBar />
          <div styles={styles.mainContent}>
            <Employee />
            {/* <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/employee" element={<Employee />} />
            </Routes> */}
          </div>
        </div>
      </Router>


      {/* <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router> */}

      {/* <Welcome /> */}
      <Employee />
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', // Change to row to place items side by side
    alignItems: 'flex-start', // Align items to the top
  },
  mainContent: {
    flex: 1, // Allow main content to take up remaining space
    alignItems: 'flex-start',
  },
};