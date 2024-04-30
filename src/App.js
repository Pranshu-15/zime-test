import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsTable from './Components/PostsTable';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PostsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;