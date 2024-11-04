import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './store'; // Adjust the path as necessary
import Header from './components/header';
import Welcome from './pages/welcome';
import Employee from './pages/employee';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;