import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './app/dashboard/page';
import LoginPage from './app/authentication/loginPage';
import SignupPage from './app/authentication/signupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/files" element={<Page />} />
        <Route path="/favourites" element={<Page />} />
        <Route path="/trash" element={<Page />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;