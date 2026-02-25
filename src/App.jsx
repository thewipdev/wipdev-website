import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IdentityPage from './pages/IdentityPage';
import IdentityFAB from './components/IdentityFAB';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/wipdev" element={<IdentityPage />} />
                </Routes>
                <IdentityFAB />
            </div>
        </Router>
    );
}

export default App;
