import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './store'; // Adjust the path as necessary
import Header from './components/header';
import Welcome from './pages/welcome';
import Login from './pages/login';
import Signup from './pages/signup';
import Schedule from './pages/schedule';
import Calender from './pages/calender';
import Employee from './pages/employee';
import Profile from './pages/profile';

function App() {
  return (
    <div style={styles.app}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
              <Header />
              <div style={styles.container}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              </div>
            </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    overflowY: 'auto',
    // paddingTop: '100px',
  },
}