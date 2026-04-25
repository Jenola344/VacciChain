import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import PatientDashboard from './pages/PatientDashboard';
import IssuerDashboard from './pages/IssuerDashboard';
import VerifyPage from './pages/VerifyPage';
import { AuthProvider } from './hooks/useFreighter';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <AuthProvider>
      <nav style={{ padding: '1rem 2rem', background: 'var(--bg-nav)', display: 'flex', gap: '1.5rem', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <strong style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>💉 VacciChain</strong>
        <Link to="/">Home</Link>
        <Link to="/patient">My Records</Link>
        <Link to="/issuer">Issue</Link>
        <Link to="/verify">Verify</Link>
        <DarkModeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/issuer" element={<IssuerDashboard />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </AuthProvider>
  );
}
