import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import JavaPage from './pages/JavaPage/JavaPage';

function App() {
  return (
    <BrowserRouter>
      {/* Accessibility: Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Atmospheric grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/java" element={<JavaPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
