import React from 'react';
import FullFooter from './components/FullFooter';
import BodyInicialPage from './pages/BodyInicialPage';
import InicialPage from './pages/inicialPage';
import './styles/app.css';

function App() {
  return (
    <div>
      <div className="main">
        <InicialPage />
      </div>
      <BodyInicialPage />
      <div>
        a
      </div>
      <FullFooter />
    </div>
  );
}

export default App;
