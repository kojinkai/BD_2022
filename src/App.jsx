import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/layout';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Profile from './components/profile/profile';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="skills" element={<Skills />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;