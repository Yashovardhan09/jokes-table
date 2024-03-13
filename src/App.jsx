import React from 'react';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div>
        <Homepage />
      </div>
    </div>
  );
};

export default App;
