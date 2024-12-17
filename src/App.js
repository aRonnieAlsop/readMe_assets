import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home_Page/HomePage';
import ProjectDetail from './components/Project_Split-Screens/ProjectSplitScreens';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project/:id" component={ProjectDetail} />
      </Routes>
    </Router>
  );
}

export default App;
